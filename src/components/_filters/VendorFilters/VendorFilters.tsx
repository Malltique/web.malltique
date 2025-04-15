import { FC, useState } from 'react';
import {
    Box,
    Button,
    Checkbox,
    Drawer,
    Group,
    MultiSelect,
    RangeSlider,
    Stack,
    Text,
} from '@mantine/core';
import {
    IconShoppingCart,
    IconCategory,
    IconFilter,
    IconStar,
    IconBuildingWarehouse,
} from '@tabler/icons-react';

const primary = 'hsl(353, 100%, 65%)';

const groceryCategories = [
    { value: 'fruits', label: 'Fruits' },
    { value: 'vegetables', label: 'Vegetables' },
    { value: 'dairy', label: 'Dairy' },
    { value: 'meat', label: 'Meat & Poultry' },
    { value: 'bakery', label: 'Bakery' },
];

const groceryBrands = [
    { value: 'heb', label: 'H-E-B' },
    { value: 'organic_valley', label: 'Organic Valley' },
    { value: 'green_giant', label: 'Green Giant' },
    { value: 'kraft', label: 'Kraft' },
];

const groceryStores = [
    { value: 'store_heb', label: 'H-E-B' },
    { value: 'store_wholefoods', label: 'Whole Foods' },
    { value: 'store_costco', label: 'Costco' },
];

const ratingOptions = [
    { label: '4 stars & up', value: '4' },
    { label: '3 stars & up', value: '3' },
    { label: '2 stars & up', value: '2' },
];

export interface IVendorFilters {
    opened: boolean;
    onClose: () => void;
}

export const VendorFilters: FC<IVendorFilters> = ({ opened, onClose }) => {
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
    const [selectedStores, setSelectedStores] = useState<string[]>([]);
    const [priceRange, setPriceRange] = useState<[number, number]>([0, 500]);
    const [selectedRatings, setSelectedRatings] = useState<string[]>([]);

    const handleApply = () => {
        console.log({
            categories: selectedCategories,
            brands: selectedBrands,
            stores: selectedStores,
            priceRange,
            ratings: selectedRatings,
        });
        onClose();
    };

    return (
        <Drawer
            opened={opened}
            onClose={onClose}
            title="Product Filters"
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
                    placeholder="Select grocery categories"
                    data={groceryCategories}
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
                    data={groceryBrands}
                    value={selectedBrands}
                    onChange={setSelectedBrands}
                    searchable
                    clearable
                    radius="md"
                />

                <MultiSelect
                    label={
                        <Group>
                            <IconShoppingCart size={18} />
                            <span>Store</span>
                        </Group>
                    }
                    placeholder="Select stores"
                    data={groceryStores}
                    value={selectedStores}
                    onChange={setSelectedStores}
                    searchable
                    clearable
                    radius="md"
                />

                <Box>
                    <Group mb={4}>
                        <Group>
                            <IconFilter size={16} />
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
                        max={1000}
                        step={10}
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
                            <IconStar size={18} />
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
                        style={{ backgroundColor: primary }}
                    >
                        Apply Filters
                    </Button>
                </Group>
            </Stack>
        </Drawer>
    );
};
