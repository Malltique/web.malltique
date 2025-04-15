import { Card, Text, Group, Button, ScrollArea, Rating, Box } from '@mantine/core';
import { IconArrowRight } from '@tabler/icons-react';
import { useRef } from 'react';

const reviews = [
    {
        name: 'Olesya',
        date: 'April 14',
        rating: 1,
        pros: 'Nothing',
        comment: 'Terrible scent, zero similarity to the original...',
    },
    {
        name: 'Alexey',
        date: 'April 14',
        rating: 5,
        pros: 'Liked everything, great product.',
        comment: '',
    },
    {
        name: 'Lyubov',
        date: 'April 14',
        rating: 5,
        pros: 'Nice scent, just the bubbles are too small.',
        comment: '',
    },
];

export const ReviewCarousel = () => {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
        }
    };

    return (
        <Box>
            <ScrollArea type="never" viewportRef={scrollRef} style={{ overflowX: 'auto', whiteSpace: 'nowrap' }}>
                <Group wrap="nowrap">
                    {reviews.map((review, idx) => (
                        <Card key={idx} shadow="sm" radius="md" p="md" style={{ minWidth: 300, display: 'inline-block', height: 250 }}>
                            <Text fw={500}>{review.name}</Text>
                            <Text size="xs" c="dimmed" mb="xs">
                                {review.date}
                            </Text>
                            <Rating value={review.rating} readOnly />
                            <Text fw={500} mt="sm">Pros:</Text>
                            <Text>{review.pros}</Text>
                            {review.comment && (
                                <>
                                    <Text fw={500} mt="sm">Comment:</Text>
                                    <Text>{review.comment}</Text>
                                </>
                            )}
                        </Card>
                    ))}
                </Group>
            </ScrollArea>

            <Group mt="md">
                <Button variant="subtle" color="hsl(353, 100%, 65%)">
                    View all reviews
                </Button>
                <Button onClick={scrollRight} variant="subtle" color="rgb(214, 213, 213)">
                    <IconArrowRight />
                </Button>
            </Group>
        </Box>
    );
}
