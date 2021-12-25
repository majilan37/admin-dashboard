import Table from "../components/Table"
import customers_list from '../assets/customer_list'

function Customers() {
    const customersTableHead = [
        '',
        'name',
        'email',
        'phone',
        'total orders',
        'total spend',
        'location'
    ]
    const renderHead = (item, index) => <th key={index} className='p-2' >{item}</th>
    const renderBody = (item, index) => {
        return (
            <tr key={index} className='hover:bg-blue-200 cursor-pointer '>
            <td className='p-2'>{item.id}</td>
            <td className='p-2'>{item.name}</td>
            <td className='p-2'>{item.email}</td>
            <td className='p-2'>{item.phone}</td>
            <td className='p-2'>{item.total_orders}</td>
            <td className='p-2'>{item.total_spend}</td>
            <td className='p-2'>{item.location}</td>
        </tr>
        )
    }
    return (
        <div className="px-4 py-2 space-y-4">
            <h2>customers</h2>
            <div className="">
                <div className="">
                    <div className="card">
                        <div className="">
                            <Table 
                                limit='10'
                                headData={customersTableHead}
                                bodyData={customers_list}
                                renderHead={(item, index) => renderHead(item, index)}
                                renderBody={(item, index) => renderBody(item, index)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Customers
