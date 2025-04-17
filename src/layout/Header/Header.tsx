import { FC } from 'react';
import { IconBrandAppstore, IconBrandGooglePlay } from '@tabler/icons-react';
import styles from './header.module.scss';
import { IHeaderProps } from './header.props';
import { SearchBar } from './SearchBar/SearchBar';
import { ALink, Button} from "../../components";
import {CATALOGS} from "./constants.tsx";
import {useSticky} from "../../hooks";

export const Header: FC<IHeaderProps> = ({ ...props }) => {
  const { isSticky } = useSticky(100);

  return (
    <div className={styles.container} {...props}>
      <div className={styles.mobileLink}>
          Download:
          <ALink
            className={styles.linkAppWrapper}
            variant="secondary"
            label="App Store"
            leftSection={<IconBrandAppstore />}
            href="#"
          />
          <ALink
            className={styles.linkAppWrapper}
            variant="secondary"
            label="Google Play"
            leftSection={<IconBrandGooglePlay />}
            href="#"
          />
      </div>
      <div className={styles.searchBar}>
        <SearchBar />
      </div>
      {!isSticky && (
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
              <div className={styles.catalog}>
                  {CATALOGS.map((category, index) => (
                      <ALink
                          key={index}
                          variant="primary"
                          label={category.label}
                          leftSection={category.icon}
                          href="/vendor/1"
                      />
                  ))}
              </div>
              <Button variant="animate">become a seller</Button>
          </div>
      )}
    </div>
  );
};
