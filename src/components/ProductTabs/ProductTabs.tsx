import {
    Card,
    Stack,
    Tabs,
    ScrollArea,
} from '@mantine/core';
import { ChatBubble } from '../ChatBubble/ChatBubble';


export const ProductTabs = () => {
    return (
        <Card shadow="md" radius="lg" padding="lg" withBorder style={{ width: '70%' }}>
            <Tabs defaultValue="reviews">
                <Tabs.List grow>
                    <Tabs.Tab value="detail">Detail</Tabs.Tab>
                    <Tabs.Tab value="reviews">Reviews</Tabs.Tab>
                    <Tabs.Tab value="questions">Questions</Tabs.Tab>
                </Tabs.List>

                <Tabs.Panel value="detail" pt="md" h={400}>
                    detail
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
