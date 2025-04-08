import { FC } from 'react';
import {
  IconBasket,
  IconHeart,
  IconHome,
  IconTruckDelivery,
  IconUserCircle,
} from '@tabler/icons-react';
import styles from './footerMob.module.scss';
import { IFooterProps } from './footerMob.props';
import { ALink } from '../../components';

export const FooterMobile: FC<IFooterProps> = ({ ...props }) => (
  <footer className={styles.container} {...props}>
    <ALink variant="secondary" leftSection={<IconTruckDelivery />} href="#" />
    <ALink variant="secondary" leftSection={<IconHeart />} href="#" />
    <ALink variant="secondary" leftSection={<IconBasket />} href="#" />
    <ALink variant="secondary" leftSection={<IconUserCircle />} href="#" />
    <ALink variant="secondary" leftSection={<IconHome />} href="#" />
  </footer>
);
