import {Ad, Grid, ProductCard, VendorHeader} from "../../components";
import {AD_IMAGES, PRODUCT} from "../../constants.tsx";

const mockVendor = {
    logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD1PKD92zd4CjInbiO0Bx4a883AsL5Mu8GUQ&s",
    name: "HEB",
    description: "Unique handmade items and custom designs from passionate creators.",
    rating: 4.8,
    totalProducts: 128,
};

export const Vendor = () => {
    return (
        <>
            <VendorHeader {...mockVendor}/>
            <Ad banners={AD_IMAGES} />
            <Grid>
                {[...PRODUCT, ...PRODUCT, ...PRODUCT, ...PRODUCT, ...PRODUCT, ...PRODUCT, ...PRODUCT, ...PRODUCT].map((product, index) => (
                    <ProductCard key={index} {...product} />
                ))}
            </Grid>
        </>
    );
};
