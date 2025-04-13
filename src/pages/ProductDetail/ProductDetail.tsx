import {
    ProductGallery,
    ProductTabs,
    RatingStatsCard,
    PriceCard,
    ProductSummary,
    Grid,
    ProductCard,
    PriceCardFixed
} from "../../components";
import {Card, Group} from "@mantine/core";
import {PRODUCT} from "../../constants.tsx";
import {useSticky} from "../../hooks";


export const ProductDetail = () => {
    const { isSticky } = useSticky(300);
    return (
        <>
            {isSticky && <PriceCardFixed/>}
            <Card radius="lg" style={{width: '100%'}} p={20}>
                <Group align="top">
                    <Group justify="space-between" align="top" w="100%" wrap="nowrap" pos='relative'>
                        <ProductGallery/>
                        <ProductSummary/>
                        <PriceCard/>
                    </Group>
                    <Group justify="space-between" align="top" w="100%">
                        <ProductTabs/>
                        <RatingStatsCard/>
                    </Group>
                </Group>
                <Grid title="We also recommend" buttonTitle="ALL">
                    {[...PRODUCT, ...PRODUCT, ...PRODUCT, ...PRODUCT, ...PRODUCT, ...PRODUCT, ...PRODUCT, ...PRODUCT].map((product, index) => (
                        <ProductCard key={index} {...product} />
                    ))}
                </Grid>
            </Card>
        </>
    );
};
