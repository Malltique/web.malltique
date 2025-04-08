import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface IProductGridProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    title?: string;
    buttonTitle?: string;
    onClick?: () => void;
    withHorizontalScroll?: boolean;
    children: ReactNode;
}
