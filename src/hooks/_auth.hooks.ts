import { useMutation } from '@tanstack/react-query';
import { apiService } from '../api/api.ts';


export interface ILoginInput {
    email: string;
    password: string;
}

export interface IRegistrationInput {
    email: string;
    name: string;
    password: string;
    roles: number[];
}

export const useAuth = () => {
    const loginMutation = useMutation({
        mutationFn: async (data: ILoginInput) => {
            await apiService.login({
                email: data.email,
                password: data.password,
            });
        },
        onError: (error: unknown) => {
            if (error instanceof Error) {
                console.error('Login failed:', error.message);
            } else {
                console.error('Login failed:', error);
            }
        },
    });

    const registerMutation = useMutation({
        mutationFn: async (data: IRegistrationInput) => {
            await apiService.register({
                email: data.email,
                name: data.name,
                password: data.password,
                roles: [0]
            });
        },
        onError: (error: unknown) => {
            if (error instanceof Error) {
                console.error('Login failed:', error.message);
            } else {
                console.error('Login failed:', error);
            }
        },
    });

    const logout = () => {
        apiService.logout();
    };

    const isAuthenticated = (): boolean => {
        return !!localStorage.getItem('token');
    };

    return {
        login: loginMutation.mutate,
        register: registerMutation.mutate,
        isLoading: loginMutation.isPending,
        isError: loginMutation.isError,
        error: loginMutation.error,
        isAuthenticated: isAuthenticated(),
        logout,
    };
};
