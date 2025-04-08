import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {BrowserRouter} from "react-router-dom";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import '@mantine/core/styles.css';
import './styles/globals.scss'
import App from './App.tsx'
import {MantineProvider} from "@mantine/core";

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <MantineProvider>
            <StrictMode>
                <QueryClientProvider client={queryClient}>
                    <App/>
                </QueryClientProvider>
            </StrictMode>
        </MantineProvider>
    </BrowserRouter>
)
