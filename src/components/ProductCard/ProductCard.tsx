import { FC } from 'react';
import { IconHeart, IconMessage, IconStarFilled, IconThumbUp } from '@tabler/icons-react';
import { Badge, Image, Text } from '@mantine/core';
import styles from './productCard.module.scss';
import { ISellCardProps } from './productCard.props';
import { ALink } from '../_ui';

export const ProductCard: FC<ISellCardProps> = ({
  imgUrl,
  isNew,
  isGoodPrice,
  percent,
  name,
  rating,
  prevPrice,
  price,
}) => (
    <div className={styles.container}>
        <div className={styles.imgWrapper}>
            <Image src={imgUrl} h={300} radius="md"/>
            <ALink
                className={styles.like}
                href="#"
                leftSection={<IconHeart color="white"/>}
                variant="secondary"
            >
            </ALink>
            <div className={styles.badges}>
                {isGoodPrice && <Badge leftSection={<IconThumbUp size={15}/>}>Good price</Badge>}
                {isNew && <Badge color="green">new</Badge>}
            </div>
        </div>
        <div className={styles.price}>
            <Text size="xl" fw={700} color="green">
                {price}
            </Text>
            <Text size="md" fw={500} td="line-through" color="red">
                {prevPrice}
            </Text>
            <Badge color="red">-{percent}</Badge>
        </div>
        <Text size="sm" fw={700}  className={styles.name}>
            {name}
        </Text>
        <div className={styles.footer}>
            <div className={styles.review}>
                <IconStarFilled fill="gold" size={20}/>
                <Text size="md" fw={500}>
                    4.5
                </Text>
                <IconMessage size={20}/>
                <Text size="md" fw={500}>
                    {rating}
                </Text>
            </div>
        </div>
    </div>
);
