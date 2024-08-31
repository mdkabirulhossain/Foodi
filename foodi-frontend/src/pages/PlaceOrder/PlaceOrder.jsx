import { useContext } from 'react';
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext';

const PlaceOrder = () => {
    const { getTotalCartAmount } = useContext(StoreContext);
    return (
        <form className='px-2 mt-8'>
            <div className='flex flex-col justify-between gap-10 md:flex-row'>
                <div className='flex flex-col w-full'>
                    <p className='font-semibold'>Delivery Information</p>
                    <div className='flex justify-between'>
                        <input type="text" placeholder='First name' className='border-2 border-gray-200 rounded-md p-1 mb-1  w-full' name="" id="" />
                        <input type="text" placeholder='Last name' className='border-2 border-gray-200 rounded-md p-1 mb-1 ml-1 w-full' name="" id="" />
                    </div>

                    <input type="email" placeholder='email' className='border-2 border-gray-200 rounded-md p-1 mb-1' name="" id="" />
                    <div className='flex justify-between'>
                        <input type="text" placeholder='City' className='border-2 border-gray-200 rounded-md p-1 mb-1 w-full' name="" id="" />
                        <input type="text" placeholder='Street' className='border-2 border-gray-200 rounded-md p-1 mb-1 ml-1 w-full' name="" id="" />

                    </div>

                    <input type="text" className='border-2 border-gray-200 rounded-md p-1 mb-1' placeholder='phone' name="" id="" />


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
                    <button className='border-2 bg-orange-600 text-white p-1 mt-2 rounded-md text-sm w-full'>PROCEED TO PAYMENT</button>
                </div>
            </div>
        </form>
    );
};

export default PlaceOrder;