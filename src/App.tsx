import {withLayout} from "./layout/Layout.tsx";
import {Auth, Grid, ProductCard} from "./components";
import {PRODUCT} from "./constants.tsx";

export const App = () => {
    //  const {data} = useOrders();
    //
    // console.log(data)
     return (
<>
    <Auth/>
    <Grid>
        {[...PRODUCT, ...PRODUCT, ...PRODUCT, ...PRODUCT, ...PRODUCT, ...PRODUCT, ...PRODUCT, ...PRODUCT].map((product, index) => (
            <ProductCard key={index} {...product} />
        ))}
    </Grid>
</>
    )
}

export default withLayout(App);

