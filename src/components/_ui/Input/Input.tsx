import { FC } from 'react';

import styles from './Input.module.scss';
import { IInputProps } from './Input.props';

export const Input: FC<IInputProps> = ({ leftSection, ...props }) => (
    <div className={styles.container}>
        {leftSection}
        <input className={styles.input} {...props} />
    </div>
);
