import { useContext } from 'react';
import './FoodDisplay.css'
import { StoreContext } from '../../context/StoreContext';
import FoodItem from '../FoodItem/FoodItem';

const FoodDisplay = ({category}) => {
    const{food_list} = useContext(StoreContext);
    return (
        <div className='f-dis' id="f-d">
            <h2 className='m-5 font-bold text-3xl'>Top dishes near you</h2>
            <div className='f-dis-list grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10'>
                {
                    food_list.map(item =><div key={item._id}>
                        <FoodItem id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}></FoodItem>
                    </div>)
                }
            </div>
        </div>
    );
};

export default FoodDisplay;