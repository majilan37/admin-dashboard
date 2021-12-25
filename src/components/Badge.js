function Badge({content, type}) {
    console.log(type)
    return (
        <span className={`px-2 py-3 text-white rounded-sm shadow-md 
                    ${type === 'pending' && 'bg-yellow-500'} 
                    ${type === 'shipping' && 'bg-blue-500'}
                    ${type === 'paid' && 'bg-green-500'}
                    ${type === 'refund' && 'bg-red-500'}
                `} 
        >
            {content}
        </span>
    )
}

export default Badge
