import { useState } from 'react';
import { Group, Image, ScrollArea, Box } from '@mantine/core';

const productImages = [
    'https://image-thumbs.shafastatic.net/1656115219_310_430',
    'https://image-thumbs.shafastatic.net/1656115215_310_430',
    'https://images.shafastatic.net/1656115229',
    'https://image-thumbs.shafastatic.net/1656115249_310_430',
    'https://image-thumbs.shafastatic.net/1656115217_310_430',
];

export const ProductGallery = () => {
    const [activeImage, setActiveImage] = useState(productImages[0]);

    return (
        <Box w={500}>
            {/* Main image */}
            <Image
                src={activeImage}
                alt="Main product view"
                radius="lg"
                w="100%"
                h={500}
                fit="cover"
            />

            {/* Thumbnail scroll area */}
            <ScrollArea type="never" offsetScrollbars mt="xs">
                <Group gap="xs" mt="xs" wrap="nowrap">
                    {productImages.map((img, index) => (
                        <Image
                            key={index}
                            src={img}
                            alt={`Thumbnail ${index + 1}`}
                            w={64}
                            h={64}
                            radius="md"
                            fit="cover"
                            style={{
                                cursor: 'pointer',
                                border: activeImage === img ? '2px solid hsl(353, 100%, 65%)' : '2px solid transparent',
                            }}
                            onClick={() => setActiveImage(img)}
                        />
                    ))}
                </Group>
            </ScrollArea>
        </Box>
    );
}
