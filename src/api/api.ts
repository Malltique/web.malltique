import axios, {
    AxiosInstance,
    AxiosResponse,
    AxiosError,
    AxiosHeaders,
    AxiosRequestConfig,
} from 'axios';
import {IRegistrationInput} from "../hooks";

interface CustomAxiosRequestConfig extends AxiosRequestConfig {
    __isRetry?: boolean;
    headers: AxiosHeaders;
}

//TODO: вынести в .env
const API_BASE_URL = 'http://localhost:3000';

export class ApiService {
    private axiosInstance: AxiosInstance;

    constructor() {
        this.axiosInstance = axios.create({
            baseURL: API_BASE_URL,
        });

        this.axiosInstance.interceptors.request.use(
            async (config: CustomAxiosRequestConfig) => {
                const token = localStorage.getItem('token');

                config.headers.set('auth', token);

                return config;
            },
            (error: AxiosError) => Promise.reject(error)
        );
    }

    async login(data: { email: string; password: string }): Promise<void> {
        //TODO: добавить тип AuthResponse
        const response = await axios.post(
            `${API_BASE_URL}/auth/login`,
            {
                ...data,
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );
        const {token} = response.data;
        this.storeTokens(token);
    }

    async register(data: IRegistrationInput): Promise<void> {
        //TODO: добавить тип RegisterResponse
        const response = await axios.post(
            `${API_BASE_URL}/auth/register`,
            {
                ...data,
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );
        const {token} = response.data;
        this.storeTokens(token);
    }

    private storeTokens(token:string): void {
        localStorage.setItem('token', token);
    }

    private clearTokens(): void {
        localStorage.removeItem('token');
    }

    logout(): void {
        this.clearTokens();
    }

    // Generic HTTP methods
    public get<T>(
        url: string,
        config?: CustomAxiosRequestConfig
    ): Promise<AxiosResponse<T>> {
        return this.axiosInstance.get<T>(url, config);
    }

    public post<T, D = unknown>(
        url: string,
        data?: D,
        config?: CustomAxiosRequestConfig
    ): Promise<AxiosResponse<T>> {
        return this.axiosInstance.post<T>(url, data, config);
    }

    public put<T, D = unknown>(
        url: string,
        data?: D,
        config?: CustomAxiosRequestConfig
    ): Promise<AxiosResponse<T>> {
        return this.axiosInstance.put<T>(url, data, config);
    }

    public delete<T>(
        url: string,
        config?: CustomAxiosRequestConfig
    ): Promise<AxiosResponse<T>> {
        return this.axiosInstance.delete<T>(url, config);
    }
}

export const apiService = new ApiService();
