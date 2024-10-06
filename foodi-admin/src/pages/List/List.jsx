import { useEffect, useState } from 'react';
import './List.css'
import axios from 'axios'
import { toast } from 'react-toastify';

const List = ({url}) => {
    const [list, setList] = useState([]);
    
    const fetchList = async ()=>{
        const response = await axios.get(`${url}/api/food/list`);
        // console.log(response)
        if(response.data.success){
            setList(response.data.data);

        }else{
            toast.error("Error");
        }
    }

    useEffect(()=>{
        fetchList()
    },[])

    const removeItem = async(itemId) =>{
        const response = await axios.post(`${url}/api/food/remove`,{id:itemId});
        await fetchList();
        if(response.data.success){
            toast.success(response.data.message);
        }else{
            toast.error("Error");
        }
    }
    return (
        <div className='border-l-2 border-black h-full'>
            <p className='text-2xl font-bold p-4'>All Foods List</p>
            <div className='grid grid-cols-3 md:grid-cols-5 justify-items-center'>
                <p className='px-1 mx-1'>Image</p>
                <p className='px-1 '>Name</p>
                <p className='px-1'>Category</p>
                <p className='px-1'>Price</p>
                <p className='px-1'>Action</p>
            </div>
            <hr className='border border-black' />
            {
                list.map(item =><div className=' my-2 grid grid-cols-3 md:grid-cols-5 justify-center items-center justify-items-center mb-3' key={item._id}>
                    <img className='w-12 h-14' src={`${url}/images/`+item.image} alt="" />
                    <p>{item.name}</p>
                    <p>{item.category}</p>
                    <p>${item.price}</p>
                    <p onClick={()=>removeItem(item._id)} className='cursor-pointer text-red-600'>X</p>
                    
                </div>)
                
            }
            
        </div>
    );
};

export default List;