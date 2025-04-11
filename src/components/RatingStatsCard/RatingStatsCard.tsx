import {
    Card,
    Text,
    Group,
    Progress,
    Stack,
    Divider,
} from '@mantine/core';
import { IconStar, IconStarHalf } from '@tabler/icons-react';

const ratingData = [
    { stars: 5, value: 10886 },
    { stars: 4, value: 1572 },
    { stars: 3, value: 709 },
    { stars: 2, value: 333 },
    { stars: 1, value: 647 },
];

const total = ratingData.reduce((sum, item) => sum + item.value, 0);

export const RatingStatsCard = () => {
    return (
        <Card shadow="md" radius="lg" padding="lg" withBorder style={{ width: 360 }} h={350}>
            <Stack>
                <Group align="center" justify="space-between">
                    <Group>
                        {[...Array(4)].map((_, i) => (
                            <IconStar key={i} size={20} color="#FFA500" fill="#FFA500" />
                        ))}
                        <IconStarHalf size={20} color="#FFA500" fill="#FFA500" />
                    </Group>
                    <Text fw={700} fz="lg">4.5 / 5</Text>
                </Group>

                {ratingData.map(({ stars, value }) => (
                    <Group key={stars} align="center">
                        <Text size="sm" w={50}>{stars} star{stars > 1 ? 's' : ''}</Text>
                        <Progress
                            value={(value / total) * 100}
                            size="md"
                            radius="xl"
                            style={{ flexGrow: 1 }}
                            color="orange"
                        />
                        <Text size="sm" w={40} ta="right">{value}</Text>
                    </Group>
                ))}

                <Divider my="xs" />

                <Text size="sm" c="dimmed">
                    Only verified buyers can leave reviews. This helps us maintain a fair and accurate rating.
                </Text>
            </Stack>
        </Card>
    );
}
