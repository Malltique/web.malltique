import { useState } from 'react';
import {
    Card,
    Image,
    Text,
    Badge,
    Group,
    Collapse,
    Button,
    Box,
    Pagination,
    Stack,
} from '@mantine/core';
import { IconChevronDown, IconChevronUp } from '@tabler/icons-react';

const ordersMock = Array.from({ length: 23 }).map((_, i) => ({
    id: i + 1,
    image: 'https://cdn1.ozonusercontent.com/s3/sellerassets/ww2150_q80/d8c33abb-7b27-11ef-a95f-0a513b09dee9.jpeg',
    name: `Order Item ${i + 1}`,
    status: i % 2 === 0 ? 'Delivered' : 'Processing',
    quantity: Math.floor(Math.random() * 5 + 1),
    date: new Date().toLocaleDateString(),
    description: `This is a short description for Order Item ${i + 1}.`,
}));

export const OrdersCardList = () => {
    const [expanded, setExpanded] = useState<number | null>(null);
    const [page, setPage] = useState(1);
    const pageSize = 4;
    const start = (page - 1) * pageSize;
    const currentItems = ordersMock.slice(start, start + pageSize);

    const toggleCard = (id: number) => {
        setExpanded((prev) => (prev === id ? null : id));
    };

    return (
        <Box>
            <Stack>
                {currentItems.map((order) => (
                    <Card key={order.id} shadow="sx" padding="md" radius="lg">
                        <Group align="flex-start" wrap="nowrap">
                            <Image src={order.image} w={100} h={100} radius="sm" alt={order.name} />
                            <Box flex={1}>
                                <Group justify="space-between" align="flex-start">
                                    <Text fw={500}>{order.name}</Text>
                                    <Badge
                                        style={{
                                            backgroundColor:
                                                order.status === 'Delivered'
                                                    ? 'hsl(43, 100%, 68%)'
                                                    : 'hsl(353, 100%, 65%)',
                                            color: '#fff',
                                        }}
                                    >
                                        {order.status}
                                    </Badge>
                                </Group>
                                <Text size="sm" c="dimmed" mt={4}>
                                    Quantity: {order.quantity}
                                </Text>
                                <Text size="sm" c="dimmed">
                                    Date: {order.date}
                                </Text>
                                <Button
                                    variant="light"
                                    color="blue"
                                    mt="md"
                                    radius="md"
                                    onClick={() => toggleCard(order.id)}
                                    rightSection={expanded === order.id ? <IconChevronUp size={16} /> : <IconChevronDown size={16} />}
                                >
                                    {expanded === order.id ? 'Hide details' : 'Show details'}
                                </Button>
                                <Collapse in={expanded === order.id} transitionDuration={200}>
                                    <Text size="sm" mt="sm">
                                        {order.description}
                                    </Text>
                                </Collapse>
                            </Box>
                        </Group>
                    </Card>
                ))}
            </Stack>

            <Group justify="center" mt="xl">
                <Pagination total={Math.ceil(ordersMock.length / pageSize)} onChange={setPage} />
            </Group>
        </Box>
    );
}
