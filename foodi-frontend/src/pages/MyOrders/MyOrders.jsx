import React, { useContext, useEffect, useState } from 'react';
import './MyOrders.css'
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';
import { MdProductionQuantityLimits } from "react-icons/md";

const MyOrders = () => {
    const {url, token} = useContext(StoreContext);
    const [data, setData] = useState([]);
    
    const fetchOrders = async()=>{
        const response = await axios.post(url+"/api/order/userorders",{},{headers:{token}});
        setData(response.data.data);
        // console.log(response.data.data)
    }

    useEffect(()=>{
        if(token){
            fetchOrders();
        }
    },[token])

    return (
        <div className='my-orders'>
            <h2 className='text-3xl font-extrabold mt-10 ml-3'>My Orders</h2>
            <div className="orderContainer">
                {
                    data.map(order =><div className='order-div ml-3 mt-3' key={order._id}>
                        <MdProductionQuantityLimits className='text-orange-600 w-16 h-20'/>
                        <p className='font-bold'>{order.items.map((item, index)=>{
                            if(index === order.items.length - 1){
                                return item.name+" x "+item.quantity;
                            }else{
                                return item.name+" x "+item.quantity + ",";
                            }
                        })}</p>
                        <p>Bill: ${order.amount}</p>
                        <p>Total items: {order.items.length}</p>
                        <p>Order Status: {order.status}</p>
                        <button className='bg-orange-600 text-white p-1 rounded-md'>Track Order</button>

                    </div>)
                }
            </div>
            
        </div>
    );
};

export default MyOrders;