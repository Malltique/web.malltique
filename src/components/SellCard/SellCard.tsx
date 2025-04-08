import { FC } from 'react';
import { Image, Text } from '@mantine/core';
import styles from './sellCard.module.scss';
import { ISellCardProps } from './sellCard.props';

export const SellCard: FC<ISellCardProps> = ({ name, imgUrl, ...props }) => (
  <div className={styles.container} {...props}>
      <Text size="sm" fw={600} className={styles.name}>
          {name}
      </Text>
    <Image alt="" src={imgUrl} h={150} />
  </div>
);
