import {withLayout} from "./layout/Layout.tsx";
import { Auth } from "./components";
import { AnimatedRoutes } from "./routes/routes.tsx";

export const App = () => {
    return (
        <>
            <Auth/>
            <AnimatedRoutes />
        </>
    )
}

export default withLayout(App);

