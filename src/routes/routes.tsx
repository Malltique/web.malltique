import {AnimatePresence} from "framer-motion";
import {Route, Routes, useLocation} from "react-router-dom";

import {Home, ProductDetail, Profile, Vendor} from "../pages";

export const AnimatedRoutes = () => {
    const location = useLocation();
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home/>}/>
                <Route path="/profile/:tab" element={<Profile/>}/>
                <Route path="/product/:id" element={<ProductDetail/>}/>
                <Route path="/Vendor/:vendorId" element={<Vendor/>}/>
            </Routes>
        </AnimatePresence>
    );
};
