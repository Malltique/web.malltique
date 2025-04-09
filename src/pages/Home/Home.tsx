import {Ad, Banner, Grid, ProductCard, Services} from "../../components";
import {AD_IMAGES, BANNER_IMG, PRODUCT} from "../../constants.tsx";

export const Home = () => {
    return (
        <>
            <Banner showSponsored isAutoplay images={BANNER_IMG} height={250} />
            <Services />
            <Ad showSponsored banners={AD_IMAGES} />
            <Grid>
                {[...PRODUCT, ...PRODUCT, ...PRODUCT, ...PRODUCT, ...PRODUCT, ...PRODUCT, ...PRODUCT, ...PRODUCT].map((product, index) => (
                    <ProductCard key={index} {...product} />
                ))}
            </Grid>
        </>
    );
};
