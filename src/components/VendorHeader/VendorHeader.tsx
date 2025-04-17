import {FC, useState} from "react";
import {Group, Image, Text, Title, Stack, Card} from "@mantine/core";
import {IconStar, IconBoxSeam} from "@tabler/icons-react";
import {VendorFilters} from "../_filters";

import styles from './vendoreHeader.module.scss';
import { FiltersAndInput } from "../_ui";

interface IVendorHeader {
    logoUrl: string;
    name: string;
    description: string;
    rating: number;
    totalProducts: number;
}

export const VendorHeader:FC<IVendorHeader> = ({ logoUrl, name, description, rating, totalProducts }) => {

    const [openFilters, setOpenFilters]= useState(false)

    return (
        <Stack  gap={0}>
            {/*<Banner showSponsored isAutoplay images={BANNER_IMG} height={150} />*/}
            <Card p="md"  className={styles.vendorHeader} radius="1rem 1rem 0 0">
                <Group align="center" display="flex" mt="lg">
                    <Image src={logoUrl} h={100} alt="Store Logo" radius="md" w={100} />
                    <Stack gap={4} style={{ flex: 1 }}>
                        <Title order={3}>{name}</Title>
                        <Text c="dimmed" size="sm">{description}</Text>

                        <Group gap="md" mt={4}>
                            <Group gap={4}>
                                <IconStar size={18} color="#f59f00" />
                                <Text size="sm" fw={500}>{rating.toFixed(1)} / 5</Text>
                            </Group>

                            <Group gap={4}>
                                <IconBoxSeam size={18} color="#339af0" />
                                <Text size="sm" fw={500}>{totalProducts} Products</Text>
                            </Group>
                        </Group>
                    </Stack>
                </Group>
                <FiltersAndInput onCloseFIlters={() => setOpenFilters(false)}/>
            </Card>
            <VendorFilters opened={openFilters} onClose={() => setOpenFilters(false)}/>
        </Stack>
    );
};
