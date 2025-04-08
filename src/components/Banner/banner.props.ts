import { CarouselProps } from '@mantine/carousel';

export interface IBannerProps extends CarouselProps {
    isAutoplay?: boolean;
    height?: number | string;
    delay?: number;
    images: string[];
    showSponsored?: boolean;
}
