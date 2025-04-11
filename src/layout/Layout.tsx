import {FC, FunctionComponent, ReactNode} from "react";

import styles from "./layout.module.scss";
import {Header} from "./Header/Header.tsx";
import {FooterMobile} from "./FooterMobile/FooterMobile.tsx";
import {Footer} from "./Footer/Footer.tsx";
import {MainContextProvider} from "../context";

export const Layout: FC<{ children: ReactNode }> = ({children}) => (
    <div className={styles.wrapper}>
        <header className={styles.header}>
            <Header/>
        </header>
        <main className={styles.main}>{children}</main>
        <Footer className={styles.footer}/>
        <FooterMobile className={styles.footerMobile}/>
    </div>
);

export const withLayout =
    <T extends Record<string, unknown>>(Component: FunctionComponent<T>) =>
        (props: T) =>
            (
                <MainContextProvider openAuth={false} setOpenAuth={() => false}>
                    <Layout>
                        <Component {...props} />
                    </Layout>
                </MainContextProvider>
            );
