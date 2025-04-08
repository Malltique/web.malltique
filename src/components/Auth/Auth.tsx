import {useContext, useState} from 'react';
import {
  IconBrandFacebook,
  IconBrandGoogle,
} from '@tabler/icons-react';
import {Anchor, Button, Divider, Drawer, Group, Paper, PasswordInput, Stack, Tabs, TextInput} from '@mantine/core';
import { useForm, UseFormReturnType } from '@mantine/form';
import {MainContext} from "../../context";
import {ILoginInput, useAuth} from "../../hooks";
import {useNavigate} from "react-router-dom";

type AuthTab = 'login' | 'register';

interface RegisterFormValues {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export const Auth = () => {
    const [activeTab, setActiveTab] = useState<AuthTab>('login');
    const navigate = useNavigate();
    const {openAuth, setOpenAuth} = useContext(MainContext);
    const { login, register } = useAuth();

    const handleCloseAuthDrawer = () => {
        if (setOpenAuth) {
            setOpenAuth(false)
        }
    }

    const loginForm: UseFormReturnType<ILoginInput> = useForm<ILoginInput>({
        initialValues: {
            email: '',
            password: '',
        },
        validate: {
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
            password: (value) =>
                value.length >= 6 ? null : 'Password must be at least 6 characters',
        },
    });

    const registerForm: UseFormReturnType<RegisterFormValues> = useForm<RegisterFormValues>({
        initialValues: {
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
        },
        validate: {
            name: (value) => (value.length > 1 ? null : 'Name is too short'),
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
            password: (value) =>
                value.length >= 6 ? null : 'Password must be at least 6 characters',
            confirmPassword: (value, values) =>
                value === values.password ? null : 'Passwords do not match',
        },
    });

    const handleLogin = async (values: ILoginInput): Promise<void> => {
        login(values, {
            onSuccess: () => {
                setOpenAuth(false)
                navigate("/");
            },
        })
    };

    const handleRegister = async (values: RegisterFormValues): Promise<void> => {
        const data = {
            email: values.email,
            name: values.name,
            password: values.password,
            roles: [0]
        }
        register(data, {
            onSuccess: () => {
                setOpenAuth(false)
                navigate("/");
            },
        })
    };

    return (
        <Drawer  overlayProps={{
            style: {
                backdropFilter: 'blur(8px)',
                backgroundColor: 'rgba(0, 0, 0, 0)',
            },
        }} position="right" offset={8} radius="md" opened={openAuth} onClose={handleCloseAuthDrawer}>
            <Paper p="xl" radius="md">
                <Tabs value={activeTab} onChange={(val) => setActiveTab(val as AuthTab)} mb="lg">
                    <Tabs.List grow>
                        <Tabs.Tab value="login">Sign In</Tabs.Tab>
                        <Tabs.Tab value="register">Register</Tabs.Tab>
                    </Tabs.List>

                    <Tabs.Panel value="login" pt="sm">
                        <form onSubmit={loginForm.onSubmit(handleLogin)}>
                            <Stack>
                                <TextInput
                                  label="Email"
                                  placeholder="you@example.com"
                                  {...loginForm.getInputProps('email')}
                                />

                                <PasswordInput
                                  label="Password"
                                  placeholder="Your password"
                                  {...loginForm.getInputProps('password')}
                                />

                                <Group p="apart" mt="xs">
                                    <Anchor href="/forgot-password" size="sm">
                                        Forgot password?
                                    </Anchor>
                                </Group>

                                <Button
                                  type="submit"
                                  fullWidth
                                  mt="md"
                                  styles={{
                                        root: {
                                            backgroundColor: 'hsl(353, 100%, 65%)',
                                            '&:hover': { backgroundColor: 'hsl(353, 100%, 60%)' },
                                        },
                                    }}
                                >
                                    Sign In
                                </Button>
                            </Stack>
                        </form>
                    </Tabs.Panel>

                    <Tabs.Panel value="register" pt="sm">
                        <form onSubmit={registerForm.onSubmit(handleRegister)}>
                            <Stack>
                                <TextInput
                                  label="Name"
                                  placeholder="Your full name"
                                  {...registerForm.getInputProps('name')}
                                />

                                <TextInput
                                  label="Email"
                                  placeholder="you@example.com"
                                  {...registerForm.getInputProps('email')}
                                />

                                <PasswordInput
                                  label="Password"
                                  placeholder="Create a password"
                                  {...registerForm.getInputProps('password')}
                                />

                                <PasswordInput
                                  label="Confirm Password"
                                  placeholder="Repeat your password"
                                  {...registerForm.getInputProps('confirmPassword')}
                                />

                                <Button
                                  type="submit"
                                  fullWidth
                                  mt="md"
                                  styles={{
                                        root: {
                                            backgroundColor: 'hsl(353, 100%, 65%)',
                                            '&:hover': { backgroundColor: 'hsl(353, 100%, 60%)' },
                                        },
                                    }}
                                >
                                    Register
                                </Button>
                                <Divider label="or continue with" labelPosition="center" my="sm" />

                                <Button
                                  variant="default"
                                  leftSection={<IconBrandGoogle size={18} />}
                                  fullWidth
                                >
                                    Google
                                </Button>

                                <Button
                                  variant="default"
                                  leftSection={<IconBrandFacebook size={18} />}
                                  fullWidth
                                >
                                     Facebook
                                </Button>
                            </Stack>
                        </form>
                    </Tabs.Panel>
                </Tabs>
            </Paper>
        </Drawer>
    );
};
