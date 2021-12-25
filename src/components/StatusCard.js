function StatusCard({icon, count, title}) {
    return (
        <div className="p-7 flex items-center bg-white shadow-md rounded-md relative overflow-hidden z-10 transition duration-200 ease-out cursor-pointer group
            before:content-[''] before:w-full before:pt-[100%] before:rounded-full before:bg-gradient-to-tr from-white to-blue-600 hover:text-white
            before:absolute before:left-[-50%] before:top-0 before:transform before:transition before:duration-500 before:scale-0 hover:before:scale-[2.3]"
        >
            <div className="w-[30%] h-full flex justify-center z-10 items-center">
                {icon}
            </div>
            <div className="flex-grow text-center z-10 capitalize ">
                <h4 className="text-2xl mb-2 font-semibold">{count}</h4>
                <span className>{title}</span>
            </div>
        </div>
    )
}

export default StatusCard