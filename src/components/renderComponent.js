import { createElement } from 'react'

export const Icon = ({ className, children }) => {
    return (
        <div className={className}>
            {children}
        </div>
    )
}

const keysToComponentMap = {
    icon: Icon
}

export const renderComponent = (config) => {
    return createElement(
        keysToComponentMap[config.icon],
        {
            icon: config.icon
        },
        config.children
    )
}