import {
  IconBabyCarriage,
  IconBook,
  IconCards,
  IconComet,
  IconDeviceLaptop,
  IconGardenCart,
  IconRosetteDiscount,
} from '@tabler/icons-react';

export const CATALOGS = [
  {
    label: 'sell',
    icon: <IconRosetteDiscount size={18} />,
    href: '/category',
  },
  {
    label: 'gift cards',
    icon: <IconCards size={15} />,
    href: '/category',
  },
  {
    label: 'best sellers',
    icon: <IconComet size={15} />,
    href: '/category',
  },
  {
    label: 'clothes and shoes',
    icon: <IconComet size={15} />,
    href: '/category',
  },
  {
    label: 'books',
    icon: <IconBook size={15} />,
    href: '/category',
  },
  {
    label: 'Electronics',
    icon: <IconDeviceLaptop size={15} />,
    href: '/category',
  },
  {
    label: 'for children',
    icon: <IconBabyCarriage size={15} />,
    href: '/category',
  },
  {
    label: 'house and garden',
    icon: <IconGardenCart size={15} />,
    href: '/category',
  },
];
