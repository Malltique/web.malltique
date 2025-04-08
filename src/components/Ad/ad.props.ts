import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface IAdProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    showSponsored?: boolean;
    banners: string[];
}
