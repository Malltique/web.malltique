import {
    Card,
    Stack,
    Title,
    Text,
    Group,
    Image,
    Button,
    Divider,
    UnstyledButton,
} from '@mantine/core';
import { useState } from 'react';
import { IconStar, IconRefresh, IconEye } from '@tabler/icons-react';

const accentColor = 'hsl(353, 100%, 65%)';

const product = {
    name: 'White Sport Sneakers',
    rating: 4.8,
    reviews: 1217,
    questions: 37,
    images: [
        'https://image-thumbs.shafastatic.net/1656115219_310_430',
        'https://image-thumbs.shafastatic.net/1656115215_310_430',
        'https://images.shafastatic.net/1656115229',
    ],
    sizes: ['36', '37', '38', '39', '40', '41', '42', '43', '44', '45'],
    details: {
        SKU: '300216840',
        Material: 'Eco leather',
        Gender: 'Women',
        Season: 'Demi-season',
        Sole: 'Rubber',
    },
};

export const ProductSummary = () => {
    const [selectedImage, setSelectedImage] = useState(product.images[0]);
    const [selectedSize, setSelectedSize] = useState<string>('');

    return (
        <Card radius="md" p="md" style={{ maxWidth: 600 }} variant="transparent">
            <Stack gap="sm">

                <Title order={3}>{product.name}</Title>

                <Group gap={8}>
                    <IconStar size={16} color="orange" />
                    <Text size="sm" fw={500}>
                        {product.rating}
                    </Text>
                    <Text size="sm" c="dimmed">
                        • {product.reviews.toLocaleString()} reviews
                    </Text>
                </Group>

                <Text size="sm" fw={500}>Color: White</Text>
                <Group gap="xs">
                    {product.images.map((img, i) => (
                        <Image
                            key={i}
                            src={img}
                            w={64}
                            h={64}
                            radius="md"
                            fit="cover"
                            style={{
                                border: selectedImage === img ? `2px solid ${accentColor}` : '2px solid transparent',
                                cursor: 'pointer',
                            }}
                            onClick={() => setSelectedImage(img)}
                        />
                    ))}
                </Group>

                <Group justify="space-between" mt="xs">
                    <Text size="sm" fw={500}>Size chart</Text>
                </Group>
                <Group wrap="wrap" gap="xs">
                    {product.sizes.map((size) => (
                        <UnstyledButton
                            key={size}
                            onClick={() => setSelectedSize(size)}
                            style={{
                                padding: '6px 12px',
                                borderRadius: 8,
                                border: selectedSize === size
                                    ? `2px solid ${accentColor}`
                                    : '1px solid #ccc',
                                backgroundColor: selectedSize === size ? accentColor : '#fff',
                                color: selectedSize === size ? '#fff' : '#000',
                                fontWeight: 500,
                                cursor: 'pointer',
                                fontSize: '14px',
                            }}
                        >
                            {size}
                        </UnstyledButton>
                    ))}
                </Group>

                <Divider my="sm" />
                <Stack gap={4}>
                    {Object.entries(product.details).map(([key, value]) => (
                        <Group key={key} justify="space-between">
                            <Text size="sm" c="dimmed">
                                {key}
                            </Text>
                            <Text size="sm">{value}</Text>
                        </Group>
                    ))}
                </Stack>

                <Group mt="md">
                    <Group gap={4}>
                        <IconRefresh size={16} />
                        <Text size="sm">14-day return</Text>
                    </Group>
                    <Group gap={4}>
                        <IconEye size={16} />
                        <Text size="sm">Try-on available</Text>
                    </Group>
                </Group>

                <Divider my="sm" />

                <Group justify="space-between" gap="xs">
                    <Button variant="subtle" size="xs">Brand catalog</Button>
                    <Button variant="subtle" size="xs">All sneakers</Button>
                </Group>
            </Stack>
        </Card>
    );
}
