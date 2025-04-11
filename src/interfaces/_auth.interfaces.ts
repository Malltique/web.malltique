export interface UserProfile {
    id: string;
    name: string;
    email: string;
    avatar?: string;
}

export type AuthProvider = 'google' | 'facebook';

export interface AuthResponse {
    success: boolean;
    user?: UserProfile;
    error?: string;
    provider?: AuthProvider;
}

export interface SocialAuthConfig {
    providers: Partial<Record<AuthProvider, () => Promise<AuthResponse>>>;
    onSuccess?: (user: UserProfile, provider: AuthProvider) => void;
    onError?: (error: string, provider?: AuthProvider) => void;
    onLoadingChange?: (isLoading: boolean, provider?: AuthProvider) => void;
}
