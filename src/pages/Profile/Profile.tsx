import {
    Tabs,
    Card,
    Group,
    TextInput,
    FileButton,
    Textarea,
    PasswordInput, Button, Avatar
} from "@mantine/core";
import {IconSettings, IconBasket, IconTruckDelivery, IconHeart, IconDeviceFloppy, IconLogout, IconUpload} from "@tabler/icons-react";
import {useNavigate, useParams} from "react-router-dom";
import {useAuth} from "../../hooks";
import {FiltersAndInput, Stub} from "../../components";

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
        <Card shadow="sm" padding="lg" radius="lg">
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
                            <Avatar src={avatar} w={120} h={120} radius="md" alt="Store Logo" />
                            <div style={{ flex: 1 }}>
                                <TextInput
                                    label="Name"
                                    required
                                    mb="sm"
                                />
                                <FileButton onChange={(file) => file && console.log(URL.createObjectURL(file))} accept="image/*">
                                    {(props) => <Button radius="lg" color='hsl(240, 17%, 73%)' variant="light"  leftSection={<IconUpload />} {...props}>Upload main photo</Button>}
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
                    <Button
                        leftSection={<IconDeviceFloppy size={18} />}
                        radius="lg"
                        size="sm"
                        variant="transparent"
                        color="white"
                        style={{ backgroundColor: "hsl(353, 100%, 65%)", zIndex: 0 }}
                    >
                        Save Changes
                    </Button>
                    <Button variant="subtle"  color='hsl(240, 17%, 73%)' radius="lg" leftSection={<IconLogout size={18}/>} ml="md" onClick={handleLogout}>Logout</Button>
                </Tabs.Panel>
                <Tabs.Panel value="delivery" pt="md">
                    <FiltersAndInput onCloseFIlters={() => console.log("delivery")}/>
                    <Stub/>
                </Tabs.Panel>

                <Tabs.Panel value="orders" pt="md">
                    <FiltersAndInput onCloseFIlters={() => console.log("delivery")}/>
                    <Stub/>
                </Tabs.Panel>

                <Tabs.Panel value="wishlist" pt="md">
                    <FiltersAndInput onCloseFIlters={() => console.log("delivery")}/>
                    <Stub/>
                </Tabs.Panel>
            </Tabs>
        </Card>
    );
}
