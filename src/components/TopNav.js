import { BellIcon, SearchIcon, UsersIcon } from "@heroicons/react/outline"
import Dropdown from "./Dropdown"
import Notification from '../assets/notifications'
import { Link } from "react-router-dom"
import user_menu from "../assets/user_menu"
import ThemeMenu from "./ThemeMenu"

const notificationItem = (item, index) => {
    const {content, icon} = item
    return (
        <div className="flex items-center p-5 hover:bg-gray-200 space-x-2" key={index}>
            {icon} 
            <span>{content}</span>
        </div>
    )
}

const current_user = {
    displayName: 'mohamed majilan',
    image: 'https://bit.ly/3GTFSZ7'
}

const userToggler = (user) => {
    return (
        <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full overflow-hidden">
                <img className="w-full" src={user.image} alt="" />
            </div>
            <div className="font-medium">
                {user.displayName}
            </div>
        </div>
    )
}

const renderUser = (item, index) => {
    return (
        <Link to='/' key={index}>
            <div className="flex space-x-2 p-5 text-gray-600 hover:bg-gray-200">
                {item.icon}
                <span className="">{item.content}</span>
            </div>
        </Link>
    )
}
 
function TopNav() {
    return (
        <div className="ml-[300px] p-8 flex items-center justify-between h-[110px] ">
            <div className="relative h-12 bg-white flex items-center shadow-md rounded-md overflow-hidden p-2">
                <input type="text" className="h-full w-full py-10 pr-16 pl-5 outline-none text-base rounded-md bg-white text-gray-600" placeholder='Search here...' />
                <SearchIcon className="h-6 absolute right-5" />
            </div>
            <div className="flex items-center">
                <div className="ml-8">
                    <Dropdown 
                        customToggle={() => userToggler(current_user)}
                        contentData={user_menu}
                        renderItems={(item, index) => renderUser(item, index)}
                    />
                </div>
                <div className="ml-8">
                    <Dropdown
                        Icon={BellIcon} 
                        badge={12}
                        contentData={Notification}
                        renderItems={(item, index) => notificationItem(item, index)}
                        renderFooter={() => <Link to='/' >View All</Link> }
                    />
                </div>
                <div className="ml-8">
                    <ThemeMenu />
                </div>
            </div>
        </div>
    )
}

export default TopNav
