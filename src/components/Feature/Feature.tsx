import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import styles from './Feature.module.scss';
import ReactMarkdown from 'react-markdown';

type FeatureProps = {
  summaryPath?: string;
  detailsPath?: string;
  img?: string;
  left?: boolean;
}

export default function Feature({summaryPath, detailsPath, img="500x500.jpg", left=false}: FeatureProps) {
  const [summary, setSummary] = useState('');
  const [details, setDetails] = useState('');

  useEffect(() => {
    if(summaryPath) fetch(summaryPath).then(r => r.text()).then(text => setSummary(text));
  }, [summaryPath]);

  useEffect(() => {
    if(detailsPath) fetch(detailsPath).then(r => r.text()).then(text => setDetails(text));
  }, [detailsPath]);

  const imageColumn = (
    <Col md="5" className={styles['img-container']}>
      <img src={img} alt=""  className={styles['img']}/>
    </Col>
  );
  
  return (
    <Row>
      {left ? imageColumn : undefined}
      <Col md="7">
        <ReactMarkdown>{summary}</ReactMarkdown>
      </Col>
      {left ? undefined : imageColumn}
    </Row>
  );
}