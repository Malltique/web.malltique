import {
    ProductGallery,
    ProductTabs,
    RatingStatsCard,
    PriceCard,
    ProductSummary,
    Grid,
    ProductCard,
    PriceCardFixed,
} from "../../components";
import {Card, Group, Image} from "@mantine/core";
import {PRODUCT} from "../../constants.tsx";
import {useSticky} from "../../hooks";


export const ProductDetail = () => {
    const {isSticky} = useSticky(300);
    return (
        <>
            {isSticky && <PriceCardFixed/>}
            <Image src="https://ir.ozone.ru/s3/cms/f5/t04/wc1450/whiskas_4320-96.png" height={50} radius="lg" mb="lg"/>
            <Card style={{width: '100%'}} p={20} radius="lg">
                <Group align="top">
                    <Group justify="space-between" align="top" w="100%" wrap="nowrap">
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
