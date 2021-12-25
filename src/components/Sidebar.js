import { Link } from "react-router-dom"
import sidebar__routes from '../assets/sidebar__routes.js'
import SidebarItem from "./SidebarItem"

function Sidebar(props) {
    const activeItem = sidebar__routes.findIndex(item => item.route === props.location.pathname)
    return (
        <div className="min-w-[300px] h-screen fixed top-0 left-0 bg-white shadow-md ">
            <div className="">
                <div className="flex items-center justify-center h-32">
                    <Link className="text-3xl" to='/'>Logo</Link>
                </div>
                {sidebar__routes.map(({display_name, icon, route},index) => (
                    <Link to={route} key={index} >
                        <SidebarItem 
                            icon={icon}
                            title={display_name}
                            active={index === activeItem}
                        />
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Sidebar
