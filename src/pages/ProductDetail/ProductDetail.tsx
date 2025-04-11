import {PriceCard, ProductTabs, RatingStatsCard} from "../../components";
import {Card, Group, Stack, Title, Text, Divider, Select, ScrollArea, Image} from "@mantine/core";
import {useState} from "react";



const productData = {
    name: 'Кроссовки TimeJump',
    rating: 4.9,
    reviews: 1670,
    questions: 41,
    sizes: ['35 RU / 35', '36 RU / 36', '37 RU / 37'],
    sizeTableUrl: '#',
    characteristics: {
        'Материал': 'Искусственная кожа',
        'Материал стельки': 'Текстиль',
        'Материал подошвы обуви': 'Филон',
        'Спортивное назначение': 'Бег, Фитнес',
        'Полнота': 'G',
    },
    footLength: '22.5 см',
    media: [
        '/img1.jpg',
        '/img2.jpg',
        '/img3.jpg',
        '/img4.jpg',
    ],
};

export const ProductDetail = () => {
    const [selectedSize, setSelectedSize] = useState<string | null>(null);
    return (
        <div style={{width: '100%'}}>
            <PriceCard/>
            <Group align="top">
                <Card shadow="md" padding="lg" radius="md" withBorder w={360}>
                    <Stack gap="sm">
                        <Title order={3}>{productData.name}</Title>
                        <Group gap="xs">
                            <Text size="sm" fw={600}>⭐ {productData.rating}</Text>
                            <Text size="sm" c="dimmed">• {productData.reviews} отзывов</Text>
                            <Text size="sm" c="dimmed">• {productData.questions} вопрос</Text>
                        </Group>

                        <Divider my="sm" />

                        <Text fw={600}>Выберите размер:</Text>
                        <Group gap="xs">
                            <Select
                                placeholder="Размер"
                                data={productData.sizes}
                                value={selectedSize}
                                onChange={setSelectedSize}
                            />
                            <a href={productData.sizeTableUrl} style={{ fontSize: '0.85rem' }}>
                                📏 Таблица размеров
                            </a>
                        </Group>

                        {selectedSize && (
                            <Text size="sm" c="dimmed">
                                Длина стопы {productData.footLength}. Полнота {productData.characteristics['Полнота']}
                            </Text>
                        )}

                        <Divider label="О товаре" labelPosition="left" />

                        <Stack gap={2}>
                            {Object.entries(productData.characteristics).map(([key, value]) => (
                                <Group key={key} justify="space-between">
                                    <Text size="sm" c="dimmed">{key}</Text>
                                    <Text size="sm">{value}</Text>
                                </Group>
                            ))}
                        </Stack>

                        <Divider label="Фото и видео покупателей" labelPosition="left" />

                        <ScrollArea h={80} scrollbarSize={4}>
                            <Group gap="xs">
                                {productData.media.map((src, index) => (
                                    <Image key={index} src={src} w={60} h={60} radius="md" fit="cover" />
                                ))}
                                <Text size="xs" c="blue">+202</Text>
                            </Group>
                        </ScrollArea>
                    </Stack>
                </Card>
                <ProductTabs/>
                <RatingStatsCard/>
            </Group>
        </div>
    );
};
