import { useContext, useEffect, useState } from 'react';
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';

const PlaceOrder = () => {
    const { getTotalCartAmount, token, food_list, cartItems, url} = useContext(StoreContext);
    const [data, setData] = useState({
        firstName:"",
        lastName:"",
        email:"",
        city:"",
        street:"",
        phone:"",

    })

    const onChangeHandler = (event)=>{
        const name = event.target.name;
        const value = event.target.value;
        setData(data=>({...data, [name]:value}))
    }
    
    // useEffect(()=>{
    //     console.log(data);
    // },[data])

    const handlePlaceOrder = async(event)=>{
        event.preventDefault();
        let orderItems = [];
        food_list.map(item =>{
            if(cartItems[item._id]> 0){
                let itemInfo = item;
                itemInfo["quantity"] = cartItems[item._id];
                orderItems.push(itemInfo)
            }
        })
        // console.log(orderItems);
        let orderData = {
            address:data,
            items:orderItems,
            amount:(getTotalCartAmount() * 0.2).toFixed(2),

        }
        let response = await axios.post(url+"/api/order/place", orderData, {headers:{token}});
        if(response.data.success){
            const {session_url} = response.data;
            window.location.replace(session_url);
        }
        else{
            alert("Error");
        }
    }

    return (
        <form onSubmit={handlePlaceOrder} className='px-2 mt-8'>
            <div className='flex flex-col justify-between gap-10 md:flex-row'>
                <div className='flex flex-col w-full'>
                    <p className='font-semibold'>Delivery Information</p>
                    <div className='flex justify-between'>
                        <input required onChange={onChangeHandler} value={data.firstName} type="text" placeholder='First name' className='border-2 border-gray-200 rounded-md p-1 mb-1  w-full' name="firstName" id="" />
                        <input required onChange={onChangeHandler} value={data.lastName} type="text" placeholder='Last name' className='border-2 border-gray-200 rounded-md p-1 mb-1 ml-1 w-full' name="lastName" id="" />
                    </div>

                    <input required onChange={onChangeHandler} value={data.email} type="email" placeholder='email' className='border-2 border-gray-200 rounded-md p-1 mb-1' name="email" id="" />
                    <div className='flex justify-between'>
                        <input required onChange={onChangeHandler} value={data.city} type="text" placeholder='City' className='border-2 border-gray-200 rounded-md p-1 mb-1 w-full' name="city" id="" />
                        <input required onChange={onChangeHandler} value={data.street} type="text" placeholder='Street' className='border-2 border-gray-200 rounded-md p-1 mb-1 ml-1 w-full' name="street" id="" />

                    </div>

                    <input required onChange={onChangeHandler} value={data.phone} type="text" className='border-2 border-gray-200 rounded-md p-1 mb-1' placeholder='phone' name="phone" id="" />


                </div>
                <div className='w-full mt-6'>
                    <div className='flex justify-between items-center'>
                        <p>Subtotal</p>
                        <p>${parseFloat(getTotalCartAmount()).toFixed(2)}</p>
                    </div>
                    <div className='flex justify-between items-center'>
                        <p>Delivery Fee</p>
                        <p>${parseFloat(getTotalCartAmount() * 0.2).toFixed(2)}</p>
                    </div>
                    <hr className='border-1 border-orange-600' />
                    <div className='flex justify-between items-center'>
                        <p className='font-semibold'>Total</p>
                        <p>${parseFloat(getTotalCartAmount() + getTotalCartAmount() * 0.2).toFixed(2)}</p>
                    </div>
                    <button type='submit' className='border-2 bg-orange-600 text-white p-1 mt-2 rounded-md text-sm w-full'>PROCEED TO PAYMENT</button>
                </div>
            </div>
        </form>
    );
};

export default PlaceOrder;