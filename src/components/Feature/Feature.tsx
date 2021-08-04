import { ReactNode } from "react";
import { Col, Row } from "react-bootstrap";

type FeatureProps = {
  children?: ReactNode;
  title?: string;
  img?: string;
}

export default function Feature({children, title, img}: FeatureProps) {
  return (
    <Row>
      <Col md="7">
        <h1>
          {title}
        </h1>
        {children}
      </Col>
      <Col md="5">
        <img src={img} alt="" />
      </Col>
    </Row>
  );
}