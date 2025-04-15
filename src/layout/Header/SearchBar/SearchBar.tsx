import {
    IconBasket,
    IconCategory2,
    IconHeart,
    IconTruckDelivery,
    IconUserCircle,
} from '@tabler/icons-react';
import styles from './searchBar.module.scss';
import {Link, useNavigate } from "react-router-dom";
import { Input } from '../../../components';
import {useContext, useState} from "react";
import {MainContext} from "../../../context";
import { ActionIcon } from "@mantine/core";
import {MainFilters} from "../../../components/_filters";

export const SearchBar = () => {
    const {setOpenAuth} = useContext(MainContext);
    const [openFilter, setOpenFilter] = useState(false)
    const navigate = useNavigate()
    const token = localStorage.getItem("token")

    const handleNavigate = (link: string) => {
        if (!token) {
            setOpenAuth(true)
            return
        }

        navigate(`profile/${link}`)
    }

    return (
        <div className={styles.container}>
            <MainFilters opened={openFilter} onClose={() => setOpenFilter(false)}/>
            <Link className={styles.search_content_catalog} to="/">
                Malltique
            </Link>
            <div className={styles.search}>
                <Input
                    leftSection={
                        <ActionIcon  color="hsl(244, 16%, 43%)" onClick={() => setOpenFilter(true)} variant="transparent">
                            <IconCategory2 />
                        </ActionIcon>
                    }
                    placeholder="find on MALLTIQUE"
                />
            </div>
            <div className={styles.navbar}>
                <ActionIcon
                    color="hsl(244, 16%, 43%)"
                    onClick={() => handleNavigate('delivery')}
                    variant="transparent"
                >
                    <IconTruckDelivery size={30} stroke={1.5} />
                </ActionIcon>
                <ActionIcon
                    fw={700}
                    color="hsl(244, 16%, 43%)"
                    onClick={() => handleNavigate('orders')}
                    variant="transparent"
                >
                    <IconBasket size={30} stroke={1.5}/>
                </ActionIcon>
                <ActionIcon
                    color="hsl(244, 16%, 43%)"
                    onClick={() => handleNavigate('wishlist')}
                    variant="transparent"
                >
                    <IconHeart size={30} stroke={1.5}/>
                </ActionIcon>
                <ActionIcon
                    color="hsl(244, 16%, 43%)"
                    onClick={() => handleNavigate('me')}
                    variant="transparent"
                >
                    <IconUserCircle size={30} stroke={1.5}/>
                </ActionIcon>
            </div>
        </div>
    )
};
