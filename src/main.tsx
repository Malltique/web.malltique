import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {BrowserRouter} from "react-router-dom";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import App from './App.tsx'
import {MantineProvider} from "@mantine/core";
import {ParallaxProvider} from 'react-scroll-parallax';

import './styles/globals.scss'

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <ParallaxProvider>
            <MantineProvider>
                <StrictMode>
                    <QueryClientProvider client={queryClient}>
                        <App/>
                    </QueryClientProvider>
                </StrictMode>
            </MantineProvider>
        </ParallaxProvider>
    </BrowserRouter>
)
