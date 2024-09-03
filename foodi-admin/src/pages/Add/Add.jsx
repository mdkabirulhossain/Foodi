import { useState } from 'react';
import './Add.css';
import { IoIosCloudUpload } from "react-icons/io";
import axios from 'axios'
import { toast } from 'react-toastify';
const Add = ({url}) => {
    //Add all the food do yourself
    const [image, setImage] = useState(false);
    
    const [data, setData] = useState({
        name: "",
        description: "",
        price: "",
        category: "Salad"
    })

    const onChangeHandler = (event)=>{
        const name = event.target.name;
        const value = event.target.value;
        setData(data=>({...data,[name]:value}))
    }   
    //Just for Check every input take properly or not
    // useEffect(()=>{
    //     console.log(data);
    // },[data])

    const onSubmitHandler = async (event)=>{
        event.preventDefault();
        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("description", data.description);
        formData.append("price", Number(data.price));
        formData.append("category", data.category);
        formData.append("image", image);
        const response = await axios.post(`${url}/api/food/add`, formData);
        if(response.data.success){
            setData({
                name: "",
                description: "",
                price: "",
                category: "Salad"
            })
            setImage(false)
            toast.success(response.data.message)
        }else{
            toast.error(response.data.message);
        }
    }
    
    return (
        <div className='add mx-2 '>
            <form action="" onSubmit={onSubmitHandler}>
                <div className='flex flex-col'>
                    <label htmlFor="">Upload Image</label>
                    <label htmlFor="image">
                        {
                            image ?
                                <img className='w-20 h-20' src={URL.createObjectURL(image)} alt="" />
                                :
                                <IoIosCloudUpload className='border w-full h-8 cursor-pointer rounded-md'></IoIosCloudUpload>
                        }


                    </label>
                    <input onChange={(event) => setImage(event.target.files[0])} type="file" name="" id="image" className='border p-1 rounded-md my-1' hidden required />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="">Product name</label>
                    <input onChange={onChangeHandler} value={data.name} type="text" name="name" id="" placeholder='name' className='border p-1 rounded-md my-1' required />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="">Product description</label>
                    <textarea onChange={onChangeHandler} value={data.description} name="description" id="" placeholder='write description' className='w-ful border p-1 rounded-md'></textarea>
                </div>
                <div className='flex gap-3 my-2'>
                    <label htmlFor="">Product category</label>
                    <select  onChange={onChangeHandler} name='category' className='border'>
                        <option value="Salad">Salad</option>
                        <option value="Cake">Cake</option>
                        <option value="Coffee">Coffee</option>
                        <option value="Pizza">Pizza</option>
                        <option value="Burger">Burger</option>
                        <option value="Juice">Juice</option>
                        <option value="Sandwich">Sandwich</option>
                        <option value="Noodles">Noodles</option>
                    </select>
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="">Product price</label>
                    <input onChange={onChangeHandler} value={data.price} type="number" name="price" id="" placeholder='$' className='border p-1 rounded-md my-1' />
                </div>
                <button type='submit' className='w-full p-1 bg-orange-600 text-white rounded-md'>Add</button>
            </form>
        </div>
    );
};

export default Add;