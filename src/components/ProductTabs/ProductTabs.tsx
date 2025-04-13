import {
    Card,
    Stack,
    Tabs,
    ScrollArea,
} from '@mantine/core';
import { ChatBubble } from '../ChatBubble/ChatBubble';
import {IconHelpCircle, IconInfoCircle, IconMessageCircle } from '@tabler/icons-react';
import {ProductSpecifications} from "../ProductSpecifications/ProductSpecifications.tsx";


export const ProductTabs = () => {
    return (
        <Card radius="lg" padding="lg" style={{ width: '65%' }}>
            <Tabs defaultValue="detail" variant="pills" radius="md" color="blue">
                <Tabs.List grow>
                    <Tabs.Tab value="detail" color="hsl(43, 100%, 68%)" leftSection={<IconInfoCircle size={20} />}>
                        Detail
                    </Tabs.Tab>
                    <Tabs.Tab value="reviews" color="hsl(43, 100%, 68%)" leftSection={<IconMessageCircle size={20} />}>
                        Reviews
                    </Tabs.Tab>
                    <Tabs.Tab value="questions" color="hsl(43, 100%, 68%)" leftSection={<IconHelpCircle size={20} />}>
                        Questions
                    </Tabs.Tab>
                </Tabs.List>

                <Tabs.Panel value="detail" pt="md" h={400}>
                    <ProductSpecifications />
                </Tabs.Panel>

                <Tabs.Panel value="reviews" pt="md" h={400}>
                    <ScrollArea h={400}>
                        <Stack>
                            <ChatBubble
                                avatar="https://i.pravatar.cc/40?img=3"
                                name="Customer"
                                message="Hello! I received the product, but the packaging is damaged. What should I do?"
                                date="April 5, 2:32 PM"
                            >
                                <ChatBubble
                                    avatar="https://i.pravatar.cc/40?img=10"
                                    name="Seller"
                                    message="Hi! Please send us a photo of the damage and we’ll help you with the return."
                                    date="April 5, 3:10 PM"
                                />
                            </ChatBubble>
                        </Stack>
                    </ScrollArea>
                </Tabs.Panel>

                <Tabs.Panel value="questions" pt="md" h={400}>
                    <ScrollArea>
                        <Stack>
                            <ChatBubble
                                avatar="https://i.pravatar.cc/40?img=3"
                                name="Customer"
                                message="Hello! I received the product, but the packaging is damaged. What should I do?"
                                date="April 5, 2:32 PM"
                            >
                                <ChatBubble
                                    avatar="https://i.pravatar.cc/40?img=10"
                                    name="Seller"
                                    message="Hi! Please send us a photo of the damage and we’ll help you with the return."
                                    date="April 5, 3:10 PM"
                                />
                            </ChatBubble>
                        </Stack>
                    </ScrollArea>
                </Tabs.Panel>
            </Tabs>
        </Card>
    );
};
