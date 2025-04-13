import { Card, Text, Grid, Title, Anchor } from '@mantine/core';

const specs = [
    { label: 'SKU', value: '611531225' },
    { label: 'Material', value: 'Faux leather' },
    { label: 'Insole material', value: 'Textile' },
    { label: 'Sole material', value: 'EVA, TPR (Thermoplastic Rubber)' },
    { label: 'Activity', value: 'Running, Hiking' },
    { label: 'Width', value: 'G' },
    { label: 'Season', value: 'Demi-season' },
    { label: 'Brand', value: 'TimeJump' },
    { label: 'Color', value: 'White' },
    { label: 'RU Size', value: '36' },
    { label: 'Manufacturer Size', value: '36' },
    { label: 'Gender', value: 'Women' },
    { label: 'Country of Origin', value: 'China' },
    { label: 'Upper Material', value: 'Faux leather' },
    { label: 'Lining Material', value: 'Fabric' },
    { label: 'Collection', value: 'Autumn-Winter 2024' },
    { label: 'Foot Length (cm)', value: '23' },
    { label: 'Sole Height (cm)', value: '1.8' },
    { label: 'Fastener Type', value: 'Laces' },
    { label: 'Feature', value: 'Anatomical insole' },
    { label: 'Fit', value: 'Regular' },
    { label: 'Orthopedic', value: 'Yes' },
    { label: 'Pronation Type', value: 'Neutral' },
    { label: 'Target Audience', value: 'Adult' },
    { label: 'TRU Code', value: '140000000.03100300200000000000' },
    { label: 'Certificate', value: 'YNAO' }
];

export const ProductSpecifications = () => {
    return (
        <Card>
            <Grid justify="space-between" align="center" mb="md">
                <Grid.Col span="auto">
                    <Title order={3} style={{ color: 'hsl(244, 24%, 26%)' }}>Specifications</Title>
                </Grid.Col>
            </Grid>
            <Grid gutter="xs">
                {specs.map((item, index) => (
                    <Grid.Col span={6} key={index}>
                        <Text size="sm" w={500} style={{ color: 'hsl(244, 24%, 26%)' }}>{item.label}</Text>
                        <Text size="sm">
                            {['TimeJump', 'Faux leather', 'Fabric', 'EVA, TPR (Thermoplastic Rubber)', 'Laces', 'Anatomical insole'].includes(item.value) ? (
                                <Anchor href="#" size="sm" color="hsl(244, 24%, 26%)">
                                    {item.value}
                                </Anchor>
                            ) : (
                                item.value
                            )}
                        </Text>
                    </Grid.Col>
                ))}
            </Grid>
        </Card>
    );
}

