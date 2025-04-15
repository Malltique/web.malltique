import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface ISellCardProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
    imgUrl: string;
    isNew: boolean;
    isGoodPrice: boolean;
    percent: string;
    price: string;
    prevPrice: string;
    rating: number;
    name: string
}
