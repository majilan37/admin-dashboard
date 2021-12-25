import { useEffect, useState } from "react"

function Table(props) {
    const {headData, renderHead, bodyData, renderBody, limit} = props
    const initShow = limit ? bodyData.slice(0, Number(limit)) : bodyData
    const [dataShow, setDataShow] = useState()
    const [currPage, setCurrPage] = useState(0)

    let pages = 1
    let ranges = []

    useEffect(() => {
        setDataShow(initShow)
    }, [dataShow, ])

    const selectPage = (page) => {
        const start = Number(limit) * page
        const end = start + Number(limit)

        setDataShow(bodyData.slice(start, end))
        setCurrPage(page)
    }
    
    if(limit !== undefined) {
        let page = Math.floor(bodyData.length / Number(limit))
        pages = bodyData.length % Number(limit) === 0 ? page : page + 1
        ranges = [...new Array(pages).keys()]
    }
    console.log(dataShow);
    return (
        <div>
            <div className="overflow-y-auto">
                <table className="w-full min-w-[400px] ">
                    {headData && renderHead && (
                        <thead className="bg-gray-100 ">
                            <tr className="text-left">
                                {headData.map((item, index) => renderHead(item, index))}
                            </tr>
                        </thead>
                    )}
                    {bodyData && renderBody && (
                        <>
                            {initShow ? (
                                <tbody>
                                    {dataShow?.map((item, index) => renderBody(item, index))}
                                </tbody>
                            ) : (
                                <tbody>
                                    {bodyData?.map((item, index) => renderBody(item, index))}
                                </tbody> 
                            )}
                        </>
                    )}
                </table>
            </div>
            {pages > 1 && (
                <div className="flex w-full justify-end items-center mt-5 space-x-2">
                    {ranges.map((range, index) => (
                        <div 
                        key={index} 
                        className={`w-7 h-7 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-400 
                            ${ currPage === index && 'bg-blue-500 text-white font-semibold'}`}
                            onClick={() => selectPage(index)}
                        >
                            {range + 1}
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Table
