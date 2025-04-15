import {Card, Stack, Text, Group, Box, Button, Divider, Badge} from "@mantine/core";
import {IconBuildingWarehouse, IconStar, IconThumbUp, IconTruck } from "@tabler/icons-react";
import styles from './priceCard.module.scss';
import { Link } from "react-router-dom";



export const PriceCard = () => {
    return (
    <Card shadow="lg" radius="xl" padding="lg" withBorder className={styles.wrapper}>
        <Stack >
            <Group>
                <Text fw={700} fz="xl">6 620₽</Text>
                <Text fz="sm" td="line-through" c="dimmed">18 260₽</Text>
            </Group>

            <Badge  color="whith"  variant="light" leftSection={<IconThumbUp size={20}/>}>Good price</Badge>

            <Link to="/vendor/1">
                <Box p="xs">
                    <Group gap="xs" align="center">
                        <IconBuildingWarehouse size={16} color="white"/>
                        <Text size="sm" color="white">Defender</Text>
                        <IconStar size={16} color="orange" fill="orange"/>
                        <Text size="sm" fw={500} color="white">4.8</Text>
                    </Group>
                </Box>
            </Link>

            <Button color="whith" fullWidth  radius="md" size="md" variant="light" className={styles.addButton} >
                Add to cart
            </Button>
            <Button
                fullWidth
                radius="md"
                size="md"
                className={styles.buyButton}
            >
                Buy now
            </Button>

            <Divider my="sm" />

            <Group gap="xs" align="center">
                <IconTruck size={16} />
                <Text size="sm">Tomorrow</Text>
            </Group>
        </Stack>
    </Card>
    )};
