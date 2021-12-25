import { XIcon } from '@heroicons/react/outline'
import {CheckIcon, ColorSwatchIcon} from '@heroicons/react/solid'
import { useEffect, useState } from 'react'

const color_settings = [
    {
        id: 'blue',
        name: 'Blue',
        background: 'bg-blue-500 text-white',
        class: 'bg-blue-500'
    },
    {
        id: 'red',
        name: 'Red',
        background: 'bg-red-500 text-white',
        class: 'bg-red-500'
    },
    {
        id: 'green',
        name: 'Green',
        background: 'bg-green-500 text-white',
        class: 'bg-green-500'
    },
    {
        id: 'yellow',
        name: 'Yellow',
        background: 'bg-yellow-500 text-white',
        class: 'bg-yellow-500'
    },
]

const mode_settings = [
    {
        id: 'light',
        name: 'Light',
        background: 'bg-white text-black',
        class: 'theme-mode-light'
    },
    {
        id: 'dark',
        name: 'Dark',
        background: 'bg-gray-900 text-white',
        class: 'theme-mode-dark'
    }
]

function ThemeMenu() {
    const [activeMenu, setActiveMenu] = useState(false)
    const [currMode, setCurrMode] = useState('light')
    const [currColor, setCurrColor] = useState('dark')
    const [check, setCheck] = useState(false)

    const handlerMode = (mode) => {
        setCurrMode(mode.id)
        localStorage.setItem('themeMode', mode.class)
    }
    const handlerColor = (color) => {
        setCurrColor(color.id)
        localStorage.setItem('colorMode', color.class)
    }
    useEffect(() => {
        const themeClass = mode_settings.find(theme => theme.class === localStorage.getItem('themeMode', 'theme-mode-light'))
        const colorClass = color_settings.find(theme => theme.class === localStorage.getItem('colorMode', 'theme-mode-light'))

        if(themeClass !== undefined) setCurrMode(themeClass.id)
        if(colorClass !== undefined) setCurrColor(colorClass.id)
        console.log(colorClass);
    }, [])
    return (
        <div className={``}>
            <button>
                <ColorSwatchIcon onClick={() => setActiveMenu(true)} className='h-6' />
            </button>
            <div className={`fixed right-[-300px] top-0 w-[300px] h-screen bg-white shadow-md z-50 transition-all duration-300 ease-custom p-5 ${activeMenu && "!right-0"}`}>
                <h4>Theme Settings</h4>
                <button onClick={() => setActiveMenu(false)} className=" absolute top-5 right-5 bg-transparent text-lg">
                    <XIcon className='h-6' />
                </button>
                <div className="">
                    <span>Choose a mode</span>
                    <ul className="">
                        {mode_settings.map((item, index) => (
                            <li key={index} onClick={() => handlerMode(item)} className="flex items-center cursor-pointer space-x-2 my-2" >
                                <div className={`p-1 rounded-full flex items-center mr-2 text-lg ${item.background} ${item.id === currMode && 'active'}`}>
                                    <CheckIcon className="h-6 transform scale-" />
                                </div>
                                <span>{item.name}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="mt-10">
                    <span>Choose a color</span>
                    <ul className="mt-5 ">
                        {color_settings.map((item, index) => (
                            <li key={index} onClick={() => handlerColor(item)} className="flex items-center cursor-pointer space-x-2 my-2" >
                                <div className={`p-1 rounded-full flex items-center mr-2 text-lg ${item.background} ${item.id === currColor && 'active'}`}>
                                    <CheckIcon className={`h-6 transform scale-0 transition duration-500 ease-custom `} />
                                </div>
                                <span>{item.name}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ThemeMenu
