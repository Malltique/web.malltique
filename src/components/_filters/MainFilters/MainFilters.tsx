import {FC, useState} from 'react';
import {
    Box,
    Button,
    Checkbox,
    Drawer,
    Group, MultiSelect,
    RangeSlider,
    Stack,
    Text,
} from '@mantine/core';
import {IconBuildingWarehouse, IconCategory, IconFilter, IconShoppingCart, IconStar} from '@tabler/icons-react';

const primary = 'hsl(353, 100%, 65%)';

const categories = [
    {value: 'electronics', label: 'Electronics'},
    {value: 'clothing', label: 'Clothing'},
    {value: 'beauty', label: 'Beauty'},
    {value: 'home', label: 'Home & Garden'},
];

const brands = [
    {value: 'samsung', label: 'Samsung'},
    {value: 'apple', label: 'Apple'},
    {value: 'nike', label: 'Nike'},
    {value: 'loreal', label: 'L’Oreal'},
];

const stores = [
    {value: 'store-1', label: 'Store One'},
    {value: 'store-2', label: 'Store Two'},
    {value: 'store-3', label: 'Store Three'},
];

const ratingOptions = [
    {label: '4 stars & up', value: '4'},
    {label: '3 stars & up', value: '3'},
    {label: '2 stars & up', value: '2'},
];

export interface IMainFilters {
    opened: boolean;
    onClose: () => void;
}


export const MainFilters:FC<IMainFilters> = ({opened, onClose}) => {

    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
    const [selectedStores, setSelectedStores] = useState<string[]>([]);
    const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
    const [selectedRatings, setSelectedRatings] = useState<string[]>([]);

    const handleApply = () => {
        console.log({
            categorys: selectedCategories,
            brands: selectedBrands,
            stores: selectedStores,
            price: priceRange,
            ratings: selectedRatings,
        });
        onClose();
    };

    return (
        <Drawer
            opened={opened}
            onClose={onClose}
            title="Filters"
            padding="md"
            size="sm"
            position="left"
            offset={8}
            radius="md"
            styles={{
                title: {
                    fontWeight: 600,
                    fontSize: 20,
                },
            }}
            overlayProps={{
                style: {
                    backdropFilter: 'blur(30px)',
                    backgroundColor: 'rgba(0, 0, 0, 0)',
                },
            }}
        >
            <Stack>
                <MultiSelect
                    label={
                        <Group>
                            <IconCategory size={18} />
                            <span>Category</span>
                        </Group>
                    }
                    placeholder="Select categories"
                    data={categories}
                    value={selectedCategories}
                    onChange={setSelectedCategories}
                    searchable
                    clearable
                    radius="md"
                />

                <MultiSelect
                    label={
                        <Group>
                            <IconBuildingWarehouse size={18} />
                            <span>Brand</span>
                        </Group>
                    }
                    placeholder="Select brands"
                    data={brands}
                    value={selectedBrands}
                    onChange={setSelectedBrands}
                    searchable
                    clearable
                    radius="md"
                />

                <MultiSelect
                    label={
                        <Group >
                            <IconShoppingCart size={18} />
                            <span>Store</span>
                        </Group>
                    }
                    placeholder="Select stores"
                    data={stores}
                    value={selectedStores}
                    onChange={setSelectedStores}
                    searchable
                    clearable
                    radius="md"
                />

                <Box>
                    <Group mb={4}>
                        <Group>
                            <IconFilter size={16}/>
                            <Text size="sm" fw={500}>
                                Price range
                            </Text>
                        </Group>
                        <Text size="sm" c="dimmed">
                            ${priceRange[0]} - ${priceRange[1]}
                        </Text>
                    </Group>
                    <RangeSlider
                        min={0}
                        max={5000}
                        step={50}
                        value={priceRange}
                        onChange={setPriceRange}
                        label={(val) => `$${val}`}
                        color={primary}
                        radius="md"
                    />
                </Box>

                <Checkbox.Group
                    label={
                        <Group>
                            <IconStar size={18}/>
                            <span>Rating</span>
                        </Group>
                    }
                    value={selectedRatings}
                    onChange={setSelectedRatings}
                >
                    <Stack mt="xs">
                        {ratingOptions.map((opt) => (
                            <Checkbox
                                key={opt.value}
                                value={opt.value}
                                label={opt.label}
                                radius="md"
                                color={primary}
                            />
                        ))}
                    </Stack>
                </Checkbox.Group>

                <Group mt="md">
                    <Button
                        onClick={handleApply}
                        color={primary}
                        radius="md"
                        style={{backgroundColor: primary}}
                    >
                        Apply Filters
                    </Button>
                </Group>
            </Stack>
        </Drawer>
    );
}
