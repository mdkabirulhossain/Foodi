import { useContext } from 'react';
import './Cart.css'
import { StoreContext } from '../../context/StoreContext';
import { RxCross2 } from 'react-icons/rx';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const { food_list, cartItems, removeFromCart, getTotalCartAmount } = useContext(StoreContext);
    const navigate = useNavigate();
    return (
        <div className='cart px-2 mt-8'>
            <div className='cart-items'>
                <div className='grid grid-cols-6 justify-between justify-items-center'>
                    <p>Items</p>
                    <p>Title</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Total</p>
                    <p>Remove</p>
                </div>
                {/* <br /> */}
                <hr />
                {
                    food_list.map((item, index) => {
                        if (cartItems[item._id] > 0) {
                            return (
                                <div className='grid grid-cols-6 place-items-center justify-items-center gap-3 p-2' key={index}>
                                    <img src={item?.image} alt=""
                                        className='w-12 h-12 md:w-14 md:h-14'
                                    />
                                    <p className='text-center'>{item?.name}</p>
                                    <p>${item?.price}</p>
                                    <p>{cartItems[item._id]}</p>
                                    <p>${item?.price * cartItems[item._id]}</p>
                                    <RxCross2 className='cursor-pointer text-red-600' onClick={() => removeFromCart(item._id)} />
                                </div>
                            )
                        }
                    })
                }
                <div>
                    <hr className='my-2' />
                    <h1 className='text-xl font-bold mt-5'>Cart Totals</h1>
                    <div className='flex flex-col-reverse justify-between gap-2 md:gap-16 md:flex-row'>
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
                            <button onClick={()=>navigate('/order')} className='border-2 bg-orange-600 text-white p-1 mt-2 rounded-md text-sm w-full'>PROCEED TO CHECKOUT</button>
                        </div>
                        <div className=' w-full'>
                            <p>If you have promo code Enter</p>
                            <input type="text" placeholder='promo code' name="" id="" className='border-2 w-full border-orange-600 p-1 rounded-md' />
                            <button className='p-1 my-2 bg-orange-600 rounded-md text-white w-full text-sm'>Submit</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Cart;