import { Image } from '@mantine/core';
import styles from './ad.module.scss';
import { IAdProps } from './ad.props';
import {FC} from "react";
import { Sponsored } from '../Sponsored/Sponsored';

export const Ad: FC<IAdProps> = ({ showSponsored, banners, ...props }) => (
    <div className={styles.container} {...props}>
        {banners.map((banner) => (
            <div className={styles.content} key={banner}>
                <Sponsored show={showSponsored} />
                <Image className={styles.img} radius="lg" src={banner} />
            </div>
        ))}
    </div>
);
