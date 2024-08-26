import { menu_list } from '../../assets/assets';
import './ExploreMenu.css';

const ExploreMenu = ({category, setCategory}) => {
    return (
        <div className='explore-menu ' id='explore'>
            <h1>Explore our menu</h1>
            <p>Chose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise </p>
            <div className=' menu-items flex justify-between items-center my-6 gap-10 overflow-x-scroll scrollbar-hide'>
                {
                    menu_list.map(item =><div onClick={()=>setCategory(prev => prev === item.menu_name? "All": item.menu_name)} className=' flex flex-col justify-center items-center cursor-pointer' key={item.id}>
                        <img src={item?.menu_img} alt= {item.menu_name} className='w-12 h-12 rounded-full ' />
                        <p>{item?.menu_name}</p>
                    </div>)
                }
            </div>
            <hr className='mt-3 border-2'/>
        </div>
    );
};

export default ExploreMenu;