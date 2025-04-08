import {
  IconBasket,
  IconCategory2,
  IconHeart,
  IconTruckDelivery,
  IconUserCircle,
} from '@tabler/icons-react';
import styles from './searchBar.module.scss';
import W from './logo.png';
import {Link, useNavigate} from "react-router-dom";
import {ALink, Input } from '../../../components';
import {useContext} from "react";
import {MainContext} from "../../../context";

export const SearchBar = () => {
    const { setOpenAuth} = useContext(MainContext);
    const navigate = useNavigate()
    const token = localStorage.getItem("token")

    const handleNavigate = (link: string) => {
        if (!token) {
            setOpenAuth(true)
            return
        }

        navigate(link)
    }

    return (
  <div className={styles.container}>
    <Link className={styles.search_content_catalog} to="/src/public">
      <img className={styles.logo} src={W} width={200} height={200} alt="logo"/>
    </Link>
    <div className={styles.search}>
      <Input
        leftSection={
          <ALink label="" variant="secondary" leftSection={<IconCategory2 />} href="#" />
        }
        placeholder="find on MALLTIQUE"
      />
    </div>
    <div className={styles.navbar}>
      <ALink
        label=""
        variant="secondary"
        leftSection={<IconTruckDelivery size={30} stroke={1.5} />}
        href="#"
      />
      <ALink
        label=""
        variant="secondary"
        leftSection={<IconBasket size={30} stroke={1.5} />}
        href="#"
      />
      <ALink
        label=""
        variant="secondary"
        leftSection={<IconHeart size={30} stroke={1.5} />}
        href="#"
      />
      <ALink
        onClick={() => handleNavigate('/profile')}
        label=""
        variant="secondary"
        leftSection={<IconUserCircle size={30} stroke={1.5} />}
      />
    </div>
  </div>
)};
