import {useContext, useState} from 'react';
import {
    Anchor,
    Button,
    Checkbox,
    Divider,
    Group,
    Modal,
    Paper,
    PasswordInput,
    Stack,
    Tabs,
    TextInput,
} from '@mantine/core';
import {useForm, UseFormReturnType} from '@mantine/form';
import {Text} from '@mantine/core';
import {MainContext} from "../../context";
import {ILoginInput, useAuth} from "../../hooks";
import { useNavigate } from "react-router-dom";
import {signInWithPopup} from 'firebase/auth';
import {auth, googleProvider} from "../../api/auth.ts";
import {GoogleButton} from "../GoogleButton/GoogleButton.tsx";
import {IconLockSquareRoundedFilled, IconMail} from '@tabler/icons-react';

type AuthTab = 'login' | 'register';

interface RegisterFormValues {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export const Auth = () => {
    const [activeTab, setActiveTab] = useState<AuthTab>('login');
    const [checked, setChecked] = useState(false);
    const navigate = useNavigate();
    const {openAuth, setOpenAuth} = useContext(MainContext);
    const {login, register} = useAuth();

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


    const handleGoogleLogin = async (e: any) => {
        e.preventDefault();
        try {
            const result = await signInWithPopup(auth, googleProvider);
            const value = {
                email: result.user.email || '',
                password: '12345678',
            }
            localStorage.setItem("mainImage", result.user.photoURL || '')

            login(value, {
                onSuccess: () => {
                    setOpenAuth(false)
                    navigate("/");
                },
            })
        } catch (err) {
            console.error('Google login error:', err);
        }
    };

    return (
        <Modal overlayProps={{
            style: {
                backdropFilter: 'blur(30px)',
                backgroundColor: 'rgba(0, 0, 0, 0)',
            },
        }} radius="xl" opened={openAuth} onClose={handleCloseAuthDrawer}>
            <Paper p="0 1rem 1rem" radius="md">
                <Tabs value={activeTab} onChange={(val) => setActiveTab(val as AuthTab)} mb="lg">
                    <Tabs.List grow>
                        <Tabs.Tab value="login">Sign In</Tabs.Tab>
                        <Tabs.Tab value="register">Register</Tabs.Tab>
                    </Tabs.List>

                    <Tabs.Panel value="login" pt="sm">
                        <form onSubmit={loginForm.onSubmit(handleLogin)}>
                            <Stack>
                                <TextInput
                                    label={
                                        <Group>
                                            <IconMail size={18}/>
                                            <span>Email</span>
                                        </Group>
                                    }
                                    radius="lg"
                                    placeholder="you@example.com"
                                    {...loginForm.getInputProps('email')}
                                />

                                <PasswordInput
                                    label={
                                        <Group>
                                            <IconLockSquareRoundedFilled size={18}/>
                                            <span>Password</span>
                                        </Group>
                                    }
                                    radius="lg"
                                    placeholder="Your password"
                                    {...loginForm.getInputProps('password')}
                                />

                                <Group p="apart" mt="xs">
                                    <Anchor href="/forgot-password" size="sm">
                                        Forgot password?
                                    </Anchor>
                                </Group>

                                <Button
                                    radius="lg"
                                    type="submit"
                                    fullWidth
                                    mt="md"
                                    styles={{
                                        root: {
                                            backgroundColor: 'hsl(353, 100%, 65%)',
                                            '&:hover': {backgroundColor: 'hsl(353, 100%, 60%)'},
                                        },
                                    }}
                                >
                                    Sign In
                                </Button>
                                <Divider label="or continue with" labelPosition="center" my="sm"/>

                                <GoogleButton onClick={handleGoogleLogin}/>
                            </Stack>
                        </form>
                    </Tabs.Panel>

                    <Tabs.Panel value="register" pt="sm">
                        <form onSubmit={registerForm.onSubmit(handleRegister)}>
                            <Stack>
                                <TextInput
                                    radius="lg"
                                    label="Name"
                                    placeholder="Your full name"
                                    {...registerForm.getInputProps('name')}
                                />

                                <TextInput
                                    radius="lg"
                                    label="Email"
                                    placeholder="you@example.com"
                                    {...registerForm.getInputProps('email')}
                                />

                                <PasswordInput
                                    radius="lg"
                                    label="Password"
                                    placeholder="Create a password"
                                    {...registerForm.getInputProps('password')}
                                />

                                <PasswordInput
                                    radius="lg"
                                    label="Confirm Password"
                                    placeholder="Repeat your password"
                                    {...registerForm.getInputProps('confirmPassword')}
                                />

                                <Checkbox
                                    checked={checked}
                                    onChange={(event) => setChecked(event.currentTarget.checked)}
                                    styles={{
                                        input: {
                                            '&:checked': {
                                                backgroundColor: 'hsl(353, 100%, 65%)',
                                                borderColor: 'hsl(353, 100%, 65%)',
                                            },
                                        },
                                    }}
                                    label={
                                        <Text size="sm">
                                            I agree with the{' '}
                                            <Anchor target="_blank"
                                                    underline="always"
                                                    style={{ color: 'hsl(43, 100%, 68%)'}}
                                                    href='#'
                                            >
                                                terms and conditions
                                            </Anchor>
                                        </Text>
                                    }
                                />
                                <Button
                                    radius="lg"
                                    type="submit"
                                    fullWidth
                                    mt="md"
                                    styles={{
                                        root: {
                                            backgroundColor: 'hsl(353, 100%, 65%)',
                                            '&:hover': {backgroundColor: 'hsl(353, 100%, 60%)'},
                                        },
                                    }}
                                >
                                    Register
                                </Button>
                            </Stack>
                        </form>
                    </Tabs.Panel>
                </Tabs>
            </Paper>
        </Modal>
    );
};
