import {
    Box,
    Button,
    Group,
    Image,
    Rating,
    Text,
} from '@mantine/core';
import {IconBuildingWarehouse, IconMessageCircle, IconScale, IconStar} from '@tabler/icons-react';
import styles from './priceCardFixed.module.scss';

export const PriceCardFixed = () => {
    return (
        <Box
            p="md"
            className={styles.wrapper}
        >
            <Group>
                <Image src="https://image-thumbs.shafastatic.net/1656115219_310_430" alt="Timelump Sneakers" w={40}  />
                <Box>
                    <Text w={500}>Timelump Sneakers</Text>
                    <Group>
                        <Rating value={5} readOnly size="xs" />
                        <Text size="sm"> 504 reviews</Text>
                        <Group>
                            <IconMessageCircle size={14} />
                            <Text size="sm">6 questions</Text>
                        </Group>
                        <Group>
                            <IconScale size={14} />
                            <Text size="sm">Compare</Text>
                        </Group>
                    </Group>
                </Box>
            </Group>

           <Group>
               <Box p="xs">
                   <Group gap="xs" align="center">
                       <IconBuildingWarehouse size={16} />
                       <Text size="sm">Defender</Text>
                       <IconStar size={16} color="orange" fill="orange" />
                       <Text size="sm" fw={500}>4.8</Text>
                   </Group>
               </Box>

               <Button color="hsl(353, 100%, 65%)" radius="md" >
                   Add to cart
               </Button>
           </Group>
        </Box>
    );
};
