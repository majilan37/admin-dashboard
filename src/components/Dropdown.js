import { useLayoutEffect, useRef, useState } from 'react'

function Dropdown({Icon, badge, customToggle, contentData, renderItems, renderFooter}) {
    const [active, setActive] = useState(false)
    const dropdown_content_el = useRef()
    const dropdown_toggle_el = useRef()

    const clickOutside = (content_ref, toggle_ref) => {
        document.addEventListener('mousedown', (e) => {
            if (toggle_ref.current && toggle_ref.current.contains(e.target)) {
                setActive((e) => !e)
            } else {
                if(content_ref.current && !content_ref.current.contains(e.target)) {
                    setActive(false)
                }
            }
        })
    }
    useLayoutEffect(() => 
        clickOutside(dropdown_content_el, dropdown_toggle_el)
    , [dropdown_content_el, dropdown_toggle_el])
    return (
        <div className="relative z-50">
            <button ref={dropdown_toggle_el} className="relative">
                {Icon && <Icon className='h-7 text-gray-700' /> }
                {badge && <span className='flex items-center justify-center absolute -top-3 -right-2 h-6 w-6 rounded-full text-white text-sm bg-blue-600'>{badge}</span> }
                {customToggle &&  customToggle()}
            </button>
            <div 
                ref={dropdown_content_el} 
                className={`absolute top-[calc(100%+5px)] right-0 w-max max-w-sm bg-white shadow-md overflow-hidden transform origin-top-right transition-all duration-200 ease-out scale-0 border 
                        ${active && 'scale-100 transition-all duration-500 ease-custom '}`}
                >
                {contentData && renderItems && (
                    <>
                        {contentData.map((item, index) => renderItems(item, index))}
                    </>
                )}
                {renderFooter && (
                    <div className="p-5 text-center">
                        {renderFooter()}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Dropdown
