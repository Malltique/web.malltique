import {Card, Text, Avatar, Group, Box} from '@mantine/core';
import {ReactNode} from "react";

export const ChatBubble = ({
                               avatar,
                               name,
                               message,
                               children,
                               date,
                               isUser = false,
                           }: {
    avatar: string;
    name: string;
    message: string;
    date: string;
    isUser?: boolean;
    children?: ReactNode;
}) => {
    return (
        <Group align="flex-start" mt="sm">
            {!isUser && <Avatar src={avatar} radius="xl" size="md"/>}
            <Box maw="70%">
                <Text size="sm" fw={500}>{name}</Text>
                <Card radius="md" px="md" py="xs">
                    <Text size="sm">{message}</Text>
                    {children}
                </Card>
                <Text size="xs" c="dimmed" mt={2}>{date}</Text>
            </Box>
            {isUser && <Avatar src={avatar} radius="xl" size="md"/>}
        </Group>
    );
};
