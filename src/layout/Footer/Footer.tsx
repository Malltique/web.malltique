import { FC } from 'react';
import { Image, List, ListItem } from '@mantine/core';
import styles from './footer.module.scss';
import { IFooterProps } from './footer.props';
import {CATALOGS} from "../Header/constants.tsx";
import {ALink} from "../../components";

export const Footer: FC<IFooterProps> = ({ ...props }) => (
  <footer className={styles.container} {...props}>
    <div className={styles.catalogs}>
      {CATALOGS.map((category, index) => (
        <ALink
          key={index}
          variant="secondary"
          label={category.label}
          leftSection={category.icon}
          href={category.href}
        />
      ))}
    </div>
    <div className={styles.content}>
      <List spacing="xs" size="sm" center>
        <ListItem fw={700}>Get to Know Us</ListItem>
        <ListItem>
          <ALink variant="secondary" label="Careers" href="#" />
        </ListItem>
        <ListItem>
          <ALink variant="secondary" label="Blog" href="#" />
        </ListItem>
        <ListItem>
          <ALink variant="secondary" label="About Malltique" href="#" />
        </ListItem>
      </List>
      <List spacing="xs" size="sm" center>
        <ListItem fw={700}>Make Money with Us</ListItem>
        <ListItem>
          <ALink variant="secondary" label="become a seller" href="#" />
        </ListItem>
        <ListItem>
          <ALink variant="secondary" label="SellCard on Malltique Business" href="#" />
        </ListItem>
        <ListItem>
          <ALink variant="secondary" label="SellCard apps on Malltique" href="#" />
        </ListItem>
      </List>
      <List spacing="xs" size="sm" center>
        <ListItem fw={700}>Payment Products</ListItem>
        <ListItem>
          <ALink variant="secondary" label="Shop with Points" href="#" />
        </ListItem>
        <ListItem>
          <ALink variant="secondary" label="Reload Your Balance" href="#" />
        </ListItem>
      </List>
      <Image
        h={100}
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/800px-QR_code_for_mobile_English_Wikipedia.svg.png"
      />
    </div>
  </footer>
);
