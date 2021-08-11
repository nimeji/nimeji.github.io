import { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import styles from './Feature.module.scss';
import ReactMarkdown from 'react-markdown';

type FeatureProps = {
  summaryPath?: string;
  detailsPath?: string;
  img?: string;
  link?: string;
}

export default function Feature({summaryPath, detailsPath, img="500x500.jpg", link}: FeatureProps) {
  const [summary, setSummary] = useState('');
  const [details, setDetails] = useState('');

  useEffect(() => {
    if(summaryPath) fetch(summaryPath).then(r => r.text()).then(text => setSummary(text));
  }, [summaryPath]);

  useEffect(() => {
    if(detailsPath) fetch(detailsPath).then(r => r.text()).then(text => setDetails(text));
  }, [detailsPath]);

  return (
    <Card className={styles.card}>
      <img src={img} alt=""  className={`${styles.img} card-img-top`} />
      <div className={`${styles.body} card-body`}>
        <div className={styles.content}>
          <ReactMarkdown>{summary}</ReactMarkdown>
        </div>
        <div className={styles.bottom}>
          {
            link  !== undefined &&
            <a 
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >Demo</a>
          }

          {detailsPath !== undefined && <Button>Details</Button>}
        </div>
      </div>
    </Card>
  );
}