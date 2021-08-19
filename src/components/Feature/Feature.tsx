import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import styles from './Feature.module.scss';
import ReactMarkdown from 'react-markdown';
import CarouselGallary from '../CarouselGallary/CarouselGallary';

type FeatureProps = {
  content?: string;
  images?: string[];
  demo?: string;
  github?: string;
}

export default function Feature({content, images=['500x500.jpg'], demo, github}: FeatureProps) {
  const [contentText, setContentText] = useState('');

  useEffect(() => {
    if(content) fetch(content).then(r => r.text()).then(text => setContentText(text));
  }, [content]);

  return (
    <Card className={styles.card}>
      <CarouselGallary images={images} />
      <div className={`${styles.body} card-body`}>
        <div className={styles.content}>
          <ReactMarkdown>{contentText}</ReactMarkdown>
        </div>
        <div className={styles.bottom}>
          {
            demo  !== undefined &&
            <a 
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary ms-2"
            >Demo</a>
          }
          {
            github  !== undefined &&
            <a 
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary ms-2"
            >Github</a>
          }
        </div>
      </div>
    </Card>
  );
}