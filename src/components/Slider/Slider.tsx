import { FC, useState } from 'react';
import { Carousel, CarouselSlide } from '@mantine/carousel';
import { Image } from '@mantine/core';
import styles from './Slider.module.scss';

export const Slider:FC<{ images: string[] }> = ({ images }) => {
    const [currentSlide, setCurrentSlide] = useState(images[0]);

    return (
    <div className={styles.container}>
      <Carousel align="start" dragFree slideGap="md" orientation="vertical" height={400} slideSize="10%" style={{ width: 100 }}>
            {images.map((img) => (
                <CarouselSlide>
                <Image
                  style={{
                    border: `2px solid ${currentSlide === img ? 'red' : ''}`,
                    width: '100%',
                }}
                  className={styles.img}
                  height={100}
                  src={img}
                  onMouseEnter={() => setCurrentSlide(img)}
                  />
                </CarouselSlide>
          ))}
      </Carousel>
        <div className={styles.currentImg}>
            <Image src={currentSlide} h={400} />
        </div>
    </div>
  );
};
