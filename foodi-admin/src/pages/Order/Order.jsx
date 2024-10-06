import './Order.css'
import { useState, useEffect } from 'react'
import axios from 'axios';
import { toast } from 'react-toastify'
import { MdProductionQuantityLimits } from "react-icons/md";


const Order = ({ url }) => {
    const [orders, setOrders] = useState([]);

    const getAllOrders = async () => {
        const response = await axios.get(url + "/api/order/list");
        if (response.data.success) {
            setOrders(response.data.data);
            // console.log(response.data.data);
        } else {
            toast.error("Error")
        }
    }
    const handleStatus =async(event, orderId)=>{
        // console.log(event, orderId);
        const response = await axios.post(url+"/api/order/status",{
            orderId,
            status:event.target.value 
        })
        if(response.data.success){
            await getAllOrders();
        }
    }

    useEffect(() => {
        getAllOrders();

    }, [])
    return (
        <div className='border-l-2 border-black h-full'>
            <h2 className='text-3xl  font-extrabold ml-3 pt-4'>Order List</h2>
            <div className='order-list'>
                {
                    orders.map(order => <div key={order._id} className='order-item ml-3'>
                        <MdProductionQuantityLimits className='text-orange-600 w-16 h-20' />
                        <div>
                            <p className='order-item-food font-bold'>
                                {
                                    order.items.map((item, index) => {
                                        if (index === order.items.length - 1) {
                                            return item.name + " x " + item.quantity
                                        }
                                        else {
                                            return item.name + " x " + item.quantity + ","
                                        }
                                    })
                                }
                            </p>
                            <p>User Name: {order.address.firstName + " " + order.address.lastName}</p>
                            <div className=''>
                                <p>City: {order.address.city}</p>
                                <p>Street: {order.address.street}</p>
                            </div>
                            <p>Phone: {order.address.phone}</p>
                            
                        </div>
                        <p>Items: {order.items.length}</p>
                            <p>Amount: ${order.amount}</p>
                            <select onChange={(e)=>handleStatus(e,order._id)} value={order.status}>
                                <option value="Food processing">Food Processing</option>
                                <option value="Out for delivery">Out for delivery</option>
                                <option value="Delivered">Delivered</option>
                            </select>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Order;