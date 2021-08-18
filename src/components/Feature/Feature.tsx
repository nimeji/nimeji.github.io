import { useEffect, useState } from "react";
import { Button, Card, Modal } from "react-bootstrap";
import styles from './Feature.module.scss';
import ReactMarkdown from 'react-markdown';

type FeatureProps = {
  summaryPath?: string;
  detailsPath?: string;
  img?: string;
  demoLink?: string;
  ghLink?: string;
}

export default function Feature({summaryPath, detailsPath, img="500x500.jpg", demoLink, ghLink}: FeatureProps) {
  const [summary, setSummary] = useState('');
  const [details, setDetails] = useState('');
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    if(summaryPath) fetch(summaryPath).then(r => r.text()).then(text => setSummary(text));
  }, [summaryPath]);

  useEffect(() => {
    if(detailsPath) fetch(detailsPath).then(r => r.text()).then(text => setDetails(text));
  }, [detailsPath]);

  const handleShowModal = () => setShowDetails(true);
  const handleHideModal = () => setShowDetails(false);

  return (
    <Card className={styles.card}>
      <img src={img} alt=""  className={`${styles.img} card-img-top`} />
      <div className={`${styles.body} card-body`}>
        <div className={styles.content}>
          <ReactMarkdown>{summary}</ReactMarkdown>
        </div>
        <div className={styles.bottom}>
          {
            demoLink  !== undefined &&
            <a 
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >Demo</a>
          }
          {
            ghLink  !== undefined &&
            <a 
              href={ghLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >Github</a>
          }
          {detailsPath !== undefined && <Button onClick={handleShowModal}>Details</Button>}
        </div>
      </div>
      <Modal show={showDetails} onHide={handleHideModal} size="xl" centered>
          <Modal.Header closeButton />
          <Modal.Body>
            <ReactMarkdown>{details}</ReactMarkdown>
          </Modal.Body>
      </Modal>
    </Card>
  );
}