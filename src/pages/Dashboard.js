import { useEffect, useLayoutEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'
import Chart from 'react-apexcharts'
import faker from 'faker'
import status_cards from "../assets/status_cards"
import StatusCard from "../components/StatusCard"
import Table from '../components/Table'
import Badge from '../components/Badge'

const chartOptions = {
    series:[
        {
            name: 'Online Customers',
            data: [40,70,20,90,36,80,91,60]
        },
        {
            name: 'Store Customers',
            data: [40,50,20,70,36,20,75,68, 20, 51, 10]
        }
    ],
    options: {
        color: ['#6ab04c', '#2980b9'],
        chart:{
            background: 'transparent'
        },
        dataLabels: {
            enabled: false,
        },
        stroke:{
            curve: 'smooth',
        },
        xaxis:{
            categories:['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        legend:{
            position: 'top',
        },
        grid: {
            show: true,
        }
    }
}
const orderStatus = ['paid', 'pending', 'shipping', 'refund']

const renderCustomerCard = (item, index) => {
    return (
        <th key={index} className='text-left py-4 px-3'>{item}</th>
        )
    }
    
const renderCustomerBody = (item) => {
    return (
        <tr key={item.id} className='hover:bg-blue-200 cursor-pointer'>
            <td className='capitalize py-4 px-3'>{item.username}</td>
            <td className='capitalize py-4 px-3'>{item.orders}</td>
            <td className='capitalize py-4 px-3'>{item.price}</td>
        </tr>
    )
}

const renderOrdersCard = (item, index) => {
    return (
        <th key={index} className='text-left py-4 px-3'>{item}</th>
    )
}

const renderOrdersBody = (item) => {
    return (
        <tr key={item.id} className='hover:bg-blue-200 cursor-pointer'>
            <td className='capitalize py-4 px-3'>{item.id}</td>
            <td className='capitalize py-4 px-3'>{item.user}</td>
            <td className='capitalize py-4 px-3'>{item.price}</td>
            <td className='capitalize py-4 px-3'>
                {moment(item.date).format('MMMM Do YYYY')}
            </td>
            <td className='capitalize py-4 px-3'>
                <Badge type={orderStatus[item.status]} content={item.orderStatus} />
            </td>
        </tr>
    )
} 

function Dashboard() {
    const [topCustomersBody, setTopCustomersBody] = useState([])
    const [latestOrdersBody, setLatestOrdersBody] = useState([])
    useEffect(() => {
        const users = [...new Array(20)].map((_, i) => ({
            ...faker.helpers.contextualCard(),
            id: i,
            orders: Math.floor(Math.random() * 400),
            price: '$' + Math.floor(Math.random() * 20000)
        }))
        return setTopCustomersBody(users)
    }, [])

    useEffect(() => {
        const orders = [...new Array(15)].map(() => ({
            id: '#'+ Math.random(),
            user: faker.helpers.contextualCard().username,
            date: faker.date.between(faker.date.past(3), new Date()),
            price: '$' + Math.floor(Math.random() * 6000),
            status: Math.abs(Math.floor(Math.random() * orderStatus.length - 1)),
            orderStatus: orderStatus[Math.abs(Math.floor(Math.random() * orderStatus.length - 1))]
        }))
        return setLatestOrdersBody(orders)
    }, [])

    const topCustomersHead = ['users', 'total orders', 'price']
    const latestOrdersHead = ['order id', 'user', 'total price', 'date', 'status']

    return (
        <div className="px-6">
            <h2 className="mb-10 text-3xl font-semibold text-gray-800">Dashboard</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                <div className="">
                    <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                        {status_cards.map((card, index) => (
                            <div className="border rounded-sm" key={index}>
                                <StatusCard 
                                    icon={card.icon}
                                    count={card.count}
                                    title={card.title}
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="w-full">
                    <div className="card h-full max-h-64 ">
                        <Chart 
                            options={chartOptions.options}
                            series={chartOptions.series}
                            type='line'
                            height='100%'
                        />
                    </div>
                </div>
                <div className="">
                    <div className="card">
                        <div className="capitalize">
                            <h3 className="capitalize text-2xl font-semibold">top customers</h3>
                        </div>
                        <div className="mt-7">
                            <Table 
                                headData={topCustomersHead}
                                bodyData={topCustomersBody}
                                renderHead={(item, index) => renderCustomerCard(item, index)}
                                renderBody={(item, index) => renderCustomerBody(item, index)}
                            />
                        </div>
                        <div className="text-center capitalize">
                            <Link to='/' className='hover:underline'>View All</Link>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="card">
                        <div className="mb-7">
                            <h3 className="capitalize text-2xl font-semibold">latest Orders</h3>
                        </div>
                        <div className="">
                            <Table 
                                 headData={latestOrdersHead}
                                 bodyData={latestOrdersBody}
                                 renderHead={(item, index) => renderOrdersCard(item, index)}
                                 renderBody={(item, index) => renderOrdersBody(item, index)}
                           />
                        </div>
                        <div className="text-center capitalize">
                            <Link to='/' className='hover:underline' >View All</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
