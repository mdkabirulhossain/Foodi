import './Header.css'
import img1 from '../../assets/Header.jpg'

const Header = () => {
    return (
        <div className='header '>
            <img src={img1} alt="" 
            className='h-5/6 w-full'
            />
            
            <div className='header-container text-white absolute flex flex-col gap-y-2'>
                {/* <h2>Choose your favorite foods</h2>
                <h3>Chose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise</h3>

                <button>View Menu</button> */}

                <h2 className='font-bold text-xl md:text-2xl lg:text-5xl'>Choose your favorite foods</h2>
                <p className='header-text text-sm text-gray-200 md:text-xl lg:text-2xl'>Chose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise</p>
                <button className='border-2 px-2 py-1 rounded-3xl cursor-pointer duration-200 bg-slate-200 text-black text-sm w-24 md:py-2'>View Menu</button>
            </div>
        </div>
    );
};

export default Header;