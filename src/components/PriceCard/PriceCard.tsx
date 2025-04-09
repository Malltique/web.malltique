import { Card, Stack, Text, Group, Box, Button, Divider, ThemeIcon} from "@mantine/core";
import {IconBuildingWarehouse, IconStar, IconThumbUp, IconTruck } from "@tabler/icons-react";


export const PriceCard = () => (
    <Card shadow="md" radius="xl" padding="lg" withBorder style={{ width: 320 }}>
        <Stack >
            <Group>
                <Text fw={700} fz="xl" c="red">6 620₽</Text>
                <Text fw={500} fz="md">6 756₽</Text>
                <Text fz="sm" td="line-through" c="dimmed">18 260₽</Text>
            </Group>

            <Group>
                <ThemeIcon color="green" variant="light" size="sm" radius="xl">
                    <IconThumbUp size={15} />
                </ThemeIcon>
                <Text size="sm" color="green">Good price</Text>
            </Group>

            <Box bg="gray.0" p="xs">
                <Group gap="xs" align="center">
                    <IconBuildingWarehouse size={16} />
                    <Text size="sm">Defender</Text>
                    <IconStar size={16} color="orange" fill="orange" />
                    <Text size="sm" fw={500}>4.8</Text>
                </Group>
            </Box>


            <Group gap="xs" align="center" display="flex">
                <Button fullWidth  radius="md" size="md" color="green" variant="light">
                    Add to cart
                </Button>
            </Group>
            <Button fullWidth radius="md" size="md" color="hsl(353, 100%, 65%)" >
                Buy now
            </Button>

            <Divider my="sm" />

            <Group gap="xs" align="center">
                <IconTruck size={16} />
                <Text size="sm">Tomorrow</Text>
            </Group>
        </Stack>
    </Card>
    );
