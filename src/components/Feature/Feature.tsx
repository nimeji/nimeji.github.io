import { ReactNode } from "react";
import { Col, Row } from "react-bootstrap";
import styles from './Feature.module.scss';

type FeatureProps = {
  children?: ReactNode;
  title?: string;
  img?: string;
  left?: boolean;
}

export default function Feature({children, title, img="500x500.jpg", left=false}: FeatureProps) {
  const imageColumn = (
    <Col md="5" className={styles['img-container']}>
      <img src={img} alt=""  className={styles['img']}/>
    </Col>
  );
  
  return (
    <Row>
      {left ? imageColumn : undefined}
      <Col md="7">
        <h1>
          {title}
        </h1>
        {children}
      </Col>
      {left ? undefined : imageColumn}
    </Row>
  );
}