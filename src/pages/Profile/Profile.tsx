import {
    Tabs,
    Card,
    Text,
    Group,
    TextInput,
    Image,
    FileButton,
    Textarea,
    PasswordInput, Button
} from "@mantine/core";
import {IconSettings, IconBasket, IconTruckDelivery, IconHeart} from "@tabler/icons-react";
import {useNavigate, useParams} from "react-router-dom";
import {useAuth} from "../../hooks";

export const Profile = () => {

    const navigate = useNavigate()
    const {logout} = useAuth()
    const { tab } = useParams()
    const avatar = localStorage.getItem('mainImage')

    const handleSetTab = (value: string |  null) => {
        navigate(`/profile/${value}`)
    }

    const handleLogout = () => {
        navigate('/')
        logout()
    }

    return (
        <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Tabs value={tab} onChange={handleSetTab} variant="outline">
                <Tabs.List>
                    <Tabs.Tab value="orders" rightSection={ <IconBasket size={16} />}>Orders</Tabs.Tab>
                    <Tabs.Tab value="delivery" rightSection={<IconTruckDelivery size={16} />}>Delivery</Tabs.Tab>
                    <Tabs.Tab value="wishlist" rightSection={<IconHeart size={16} />}>Wishlist</Tabs.Tab>
                    <Tabs.Tab value="me" rightSection={<IconSettings size={16} />}>Settings</Tabs.Tab>
                </Tabs.List>

                <Tabs.Panel value="me" pt="md">
                    <Card mb="md">
                        <Group align="flex-start">
                            <Image src={avatar} w={120} h={120} radius="md" alt="Store Logo" />
                            <div style={{ flex: 1 }}>
                                <TextInput
                                    label="Name"
                                    required
                                    mb="sm"
                                />
                                <FileButton onChange={(file) => file && console.log(URL.createObjectURL(file))} accept="image/*">
                                    {(props) => <Button {...props}>Upload main photo</Button>}
                                </FileButton>
                            </div>
                        </Group>
                    </Card>
                    <Card mb="md">
                        <TextInput
                            label="ZIP Code"
                            placeholder="Enter your ZIP code"
                            required
                            mt="sm"
                        />

                        <Textarea
                            label="Legal Address"
                            placeholder="Enter your legal address"
                            required
                            mt="sm"
                        />
                        <TextInput
                            label="Email"
                            placeholder="Enter your email"
                            type="email"
                            required
                            mt="sm"
                        />

                        <PasswordInput
                            label="Password"
                            placeholder="Enter your password"
                            required
                            mt="sm"
                        />
                    </Card>
                    <Button>Save Changes</Button>
                    <Button ml="md" color="hsl(353, 100%, 65%)" onClick={handleLogout}>Logout</Button>
                </Tabs.Panel>

                <Tabs.Panel value="orders" pt="md">
                    <Text>View your past purchases, track current orders, and download invoices.</Text>
                </Tabs.Panel>

                <Tabs.Panel value="wishlist" pt="md">
                    <Text>Items you’ve saved to check out later or share with others.</Text>
                </Tabs.Panel>
            </Tabs>
        </Card>
    );
}
