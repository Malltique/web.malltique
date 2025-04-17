import {Button, Group, TextInput} from "@mantine/core";
import {IconFilter, IconSearch } from "@tabler/icons-react";

export const FiltersAndInput = ({onCloseFIlters}: {onCloseFIlters: () => void}) => {
    return (
        <Group mt="md" align="center">
            <Button
                leftSection={<IconFilter size={18} />}
                radius="xl"
                size="sm"
                style={{ backgroundColor: "hsl(353, 100%, 65%)", zIndex: 0 }}
                onClick={onCloseFIlters}
            >
                Filter
            </Button>
            <TextInput
                placeholder="Search products..."
                leftSection={<IconSearch size={18} />}
                radius="xl"
                style={{ flex: 1 }}
                size="sm"
            />
        </Group>
    );
};
