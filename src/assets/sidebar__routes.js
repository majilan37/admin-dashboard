import { AdjustmentsIcon, ChartBarIcon, CogIcon, GiftIcon, InboxIcon, ShoppingBagIcon, ShoppingCartIcon, UserGroupIcon, ViewGridIcon } from '@heroicons/react/outline'

export default [
    {
        display_name: "Dashboard",
        route: "/",
        icon: <ViewGridIcon className='h-6' />
    },
    {
        "display_name": "Customers",
        route: "/customers",
        icon: <UserGroupIcon className='h-6' />
    },
    {
        "display_name": "Products",
        route: "/products",
        icon: <InboxIcon className='h-6' />
    },
    {
        "display_name": "Orders",
        route: "/orders",
        icon: <ShoppingCartIcon  className='h-6' />
    },
    {
        "display_name": "Analytics",
        route: "/analytics",
        icon: <ChartBarIcon className='h-6' />
    },
    {
        "display_name": "categories",
        route: "/categories",
        icon: <AdjustmentsIcon className='h-6' />
    },
    {
        "display_name": "discount",
        route: "/discount",
        icon: <GiftIcon className='h-6' />
    },
    {
        "display_name": "inventory",
        route: "/inventory",
        icon: <ShoppingBagIcon className='h-6' />
    },
    {
        "display_name": "settings",
        route: "/settings",
        icon: <CogIcon className='h-6' />
    }
]