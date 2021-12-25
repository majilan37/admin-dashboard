function SidebarItem({active, title, icon}) {
    return (
        <div className="px-5">
            <div className={` px-6 py-4 flex items-center font-semibold transition-all duration-300 hover:text-blue-900 space-x-2 ${active && 'rounded-md bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:text-white'}`}>
                {icon}
                <span className='capitalize'>
                    {title}
                </span>
            </div>
        </div>
    )
}

export default SidebarItem
