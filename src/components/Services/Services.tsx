import { IconCashBanknote, IconPhone, IconShieldLock, IconTruckDelivery } from '@tabler/icons-react';
import { Text } from '@mantine/core';
import styles from './services.module.scss';

export const Services = () => (
    <div className={styles.container}>
        <div className={styles.service}>
            <IconTruckDelivery size={50} />
            <Text size="lg" fw={600}>Free Shipping</Text>
            <Text size="xs" c="dimmed" fw={400} variant="">Order above $200</Text>
        </div>
        <div className={styles.service}>
            <IconCashBanknote size={50} />
            <Text size="lg" fw={600}>Money-back</Text>
            <Text size="xs" c="dimmed" fw={400} variant="">30 days guarantee</Text>
        </div>
        <div className={styles.service}>
            <IconShieldLock size={50} />
            <Text size="lg" fw={600}>Secure</Text>
            <Text size="xs" c="dimmed" fw={400} variant="">Secured by Stripe</Text>
        </div>
        <div className={styles.service}>
            <IconPhone size={50} />
            <Text size="lg" fw={600}>24/7 Support</Text>
            <Text size="xs" c="dimmed" fw={400} variant="">Phone and Email support</Text>
        </div>
    </div>
);
