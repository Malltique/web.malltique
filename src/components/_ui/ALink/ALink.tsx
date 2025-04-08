import { FC } from 'react';
import cn from 'classnames';
import { IALinkProps } from './aLink.props';
import styles from './aLink.module.scss';
import {Link} from "react-router-dom";

export const ALink: FC<IALinkProps> = ({onClick, leftSection, href, label, variant, className }) => (
    <Link
      onClick={onClick}
      to={href || ''}
      className={cn(styles.linkContainer, className, {
        [styles.secondary]: variant === 'secondary',
        [styles.primary]: variant === 'primary',
    })}>
        {leftSection}
        {label}
    </Link
        >
);
