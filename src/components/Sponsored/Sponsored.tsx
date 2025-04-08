import { FC } from 'react';
import cn from 'classnames';
import { Badge } from '@mantine/core';
import styles from './sponsored.module.scss';

export const Sponsored: FC<{ show?: boolean }> = ({ show }) => (
    <Badge
      className={cn(styles.container, {
        [styles.show]: show,
    })}
      variant="light"
      color="white">
        sponsored
    </Badge>
);
