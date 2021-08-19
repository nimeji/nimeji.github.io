import { useState } from 'react';
import { Carousel, Modal } from 'react-bootstrap';
import styles from './CarouselGallary.module.scss';

type CarouselGallaryProps = {
  images: string[];
}

export default function CarouselGallary({images}: CarouselGallaryProps) {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <div className={styles.container}>
      <Carousel controls={false} indicators={false} className={styles.carousel} onClick={handleOpenModal}>
        {images.map((image, i) => <Carousel.Item key={i}><img src={image} alt="" className={`${styles.img} card-img-top`}/></Carousel.Item>)}
      </Carousel>
      <Modal show={showModal} onHide={handleCloseModal} size="xl" centered >
        <Modal.Header closeButton />
        <div className={styles.gallaryContainer}>
          <Carousel interval={null} wrap={false} indicators={false}>
            {images.map((image, i) => <Carousel.Item key={`m${i}`}><img src={image} alt="" className={`${styles.img}`}/></Carousel.Item>)}
          </Carousel>
        </div>
      </Modal>
    </div>
  );
}