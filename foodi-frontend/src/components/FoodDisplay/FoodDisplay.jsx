import { useContext } from 'react';
import './FoodDisplay.css'
import { StoreContext } from '../../context/StoreContext';
import FoodItem from '../FoodItem/FoodItem';

const FoodDisplay = ({category}) => {
    const{food_list} = useContext(StoreContext);
    return (
        <div className='f-dis'>
            <h2 className='text-center py-4 font-bold text-3xl text-orange-600'>Top Dishes Near You</h2>
            <div className='px-8 f-dis-list grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 md:px-2'>
                {
                    food_list.map((item, index)=>{
                        if(category === "All" || category === item?.category){
                            return <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}></FoodItem>
                        }
                    })
                }
            </div>
        </div>
    );
};

export default FoodDisplay;