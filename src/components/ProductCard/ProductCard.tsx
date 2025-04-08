import { FC } from 'react';
import { IconHeart, IconMessage, IconStarFilled, IconThumbUp } from '@tabler/icons-react';
import { Badge, Image, Text } from '@mantine/core';
import styles from './productCard.module.scss';
import { ISellCardProps } from './productCard.props';
import { Link } from 'react-router-dom';
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
  <Link className={styles.container} to="/product">
    <div className={styles.imgWrapper}>
      <Image src={imgUrl} h={250} radius="md" />
      <ALink
        className={styles.like}
        href="#"
        leftSection={<IconHeart color="white" />}
        variant="secondary"
      >
      </ALink>
      <div className={styles.badges}>
        {isGoodPrice && <Badge leftSection={<IconThumbUp size={15} />}>Good price</Badge>}
        {isNew && <Badge color="green">new</Badge>}
        <Badge color="pink">-{percent}</Badge>
      </div>
      <div className={styles.price}>
        <Text size="xs" fw={500} td="line-through">
          {prevPrice}
        </Text>
        <Text size="xl" fw={700}>
          {price}
        </Text>
      </div>
        <div className={styles.buttonBuy}>
            <Text size="xl" fw={700}>
                BUY
            </Text>
            <Text size="sm" fw={700}>
                {name}
            </Text>
        </div>
    </div>
    <Text size="sm" fw={500} mt={10} mb={10} className={styles.name}>
      {name}
    </Text>
    <div className={styles.footer}>
      <div className={styles.review}>
        <IconStarFilled fill="gold" size={15} />
        <Text size="xs" fw={500}>
          4.5
        </Text>
        <IconMessage size={15} />
        <Text size="xs" fw={500}>
          {rating}
        </Text>
      </div>
    </div>
  </Link>
);
