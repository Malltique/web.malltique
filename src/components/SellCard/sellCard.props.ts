import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface ISellCardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    imgUrl: string;
    name: string;
}
