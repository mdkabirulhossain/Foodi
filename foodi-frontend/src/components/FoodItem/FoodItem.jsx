import './FoodItem.css';
import { FaPlus } from "react-icons/fa";
import { MdOutlineStar } from "react-icons/md";
import { IoMdStarOutline } from "react-icons/io";
import { FaMinus } from "react-icons/fa";
import { useState } from 'react';
const FoodItem = ({ id, name, image, description, price }) => {
    const [itemCount, setItemCount] = useState(0)
    return (
        <div className=''>
            <div className='flex flex-col justify-center items-center border-2 bg-slate-200 shadow-md rounded-md mb-2'>
                <div className='image-container border-2 w-full h-40 '>
                    <img src={image} alt=""
                        className='w-full h-40 rounded-md'
                    />
                    
                </div>
                
                <div className='item-container flex flex-col justify-start p-2'>
                <div>
                {
                        !itemCount?
                            <button onClick={()=>setItemCount(prev => prev+1)} className='p-1 w-full text-white bg-orange-600 text-sm rounded-md mt-1 '>Add to Cart</button>
                        
                        : <div className='flex justify-around items-center gap-x-3'>
                            <FaMinus className='add text-orange-600' onClick={()=>setItemCount(prev => prev-1)} />
                            <p className='text-orange-600'>{itemCount}</p>
                            <FaPlus className='add text-orange-600' onClick={()=>setItemCount(prev => prev+1)} />
                        </div>
                    }
                </div>
                    <div className='flex justify-between items-center my-1'>
                        <p className='font-semibold'>{name}</p>
                        {/* <img src={rating_img} alt=""
                            className='w-8 '
                        /> */}
                        <div className='flex gap-1'>
                        <MdOutlineStar className='text-orange-600 w-2'/>
                        <MdOutlineStar className='text-orange-600 w-2'/>
                        <MdOutlineStar className='text-orange-600 w-2'/>
                        <MdOutlineStar className='text-orange-600 w-2'/>
                        
                        <IoMdStarOutline className='w-2' />
                        </div>
                    </div>
                    <p className='text-left text-sm'>{description}</p>
                    <p className='text-left font-semibold text-orange-600'>${price}</p>
                </div>
            </div>

        </div>
    );
};

export default FoodItem;