import { CogIcon, CreditCardIcon, LogoutIcon, UserIcon } from "@heroicons/react/outline";

export default [
    {
        icon: <UserIcon className="h-6 text-gray-700 text-sm" /> ,
        content: "Profile"
    },
    {
        icon: <CreditCardIcon className="h-6 text-gray-700 text-sm" />,
        content: "My Wallet"
    },
    {
        icon: <CogIcon className="h-6 text-gray-700 text-sm" />,
        content: "Settings"
    },
    {
        icon: <LogoutIcon className="h-6 text-gray-700 text-sm" />,
        content: "Logout"
    }
]