import {PriceCard, ProductTabs, RatingStatsCard} from "../../components";
import {Group} from "@mantine/core";


export const ProductDetail = () => {
    return (
        <div style={{width: '100%'}}>
            <PriceCard/>
            <Group align="top">
                <ProductTabs/>
                <RatingStatsCard/>
            </Group>
        </div>
    );
};
