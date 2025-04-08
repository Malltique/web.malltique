import { ReactNode } from 'react';

export interface IALinkProps {
    leftSection?: ReactNode;
    className?: string;
    href?: string;
    onClick?: () => void;
    label?: string;
    variant?: 'secondary' | 'primary';
}
