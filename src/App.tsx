import {withLayout} from "./layout/Layout.tsx";
import {Ad, Auth, Banner, Grid, ProductCard, Services} from "./components";
import {BANNER_IMG, PRODUCT, AD_IMAGES} from "./constants.tsx";

export const App = () => {
    return (
        <>
            <Auth/>
            <Banner showSponsored isAutoplay images={BANNER_IMG} height={250} />
            <Services />
            <Ad showSponsored banners={AD_IMAGES} />
            <Grid>
                {[...PRODUCT, ...PRODUCT, ...PRODUCT, ...PRODUCT, ...PRODUCT, ...PRODUCT, ...PRODUCT, ...PRODUCT].map((product, index) => (
                    <ProductCard key={index} {...product} />
                ))}
            </Grid>
        </>
    )
}

export default withLayout(App);

