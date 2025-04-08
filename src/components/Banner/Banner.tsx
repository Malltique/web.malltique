import { FC, useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { Carousel, CarouselSlide } from '@mantine/carousel';
import { Badge, Image } from '@mantine/core';
import styles from './banner.module.scss';
import { IBannerProps } from './banner.props';

export const Banner: FC<IBannerProps> = ({
  showSponsored = false,
  images,
  delay = 2000,
  height = 400,
  isAutoplay,
  ...props
}) => {
  const autoplay = useRef(Autoplay({ delay }));
  const autoplayConf = isAutoplay
    ? {
        plugins: [autoplay.current],
        onMouseEnter: autoplay.current.stop,
        onMouseLeave: autoplay.current.reset,
      }
    : {};

  return (
    <div className={styles.container}>
      {showSponsored && (
        <Badge className={styles.badge} variant="light" color="white">
          sponsored
        </Badge>
      )}
      <Carousel className={styles.slide} withIndicators {...autoplayConf} {...props}>
        {images.map((url) => (
          <CarouselSlide key={url} h={height}>
            <Image h={height} src={url} />
          </CarouselSlide>
        ))}
      </Carousel>
    </div>
  );
};
