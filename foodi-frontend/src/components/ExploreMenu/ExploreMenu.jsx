import { menu_list } from '../../assets/assets';
import './ExploreMenu.css';

const ExploreMenu = ({category, setCategory}) => {
    return (
        <div className='explore-menu ' id='explore'>
            <h1 className='text-center text-3xl font-bold text-orange-600'>Explore our menu</h1>
            <p className='text-center px-2'>Chose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise </p>
            <div className='px-2 menu-items flex justify-between items-center my-6 gap-10 overflow-x-scroll scrollbar-hide '>
                {
                    menu_list.map(item =><div onClick={()=>setCategory(prev => prev === item.menu_name? "All": item.menu_name)} className=' flex flex-col justify-center items-center cursor-pointer ' key={item.id}>
                        <div className='w-14 h-14 rounded-full border-2 border-orange-600'>
                        <img src={item?.menu_img} alt= {item.menu_name} className='w-full h-full rounded-full' />
                        </div>
                        
                        <p>{item?.menu_name}</p>
                    </div>)
                }
            </div>
            <hr className='mt-3 border-2'/>
        </div>
    );
};

export default ExploreMenu;