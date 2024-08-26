import './Header.css'
import img1 from '../../assets/Header.jpg'

const Header = () => {
    return (
        <div className='header '>
            <img src={img1} alt="" 
            className='h-5/6 w-full'
            />
            
            <div className='header-container text-white absolute flex flex-col justify-start items-start gap-5 '>
                {/* <h2>Choose your favorite foods</h2>
                <h3>Chose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise</h3>

                <button>View Menu</button> */}

                <h2 className='text-5xl font-bold '>Choose your favorite foods</h2>
                <p className='text-2xl'>Chose from a diverse menu featuring a delectable array of dishes </p>
                <button className='border-2 px-4 py-2 rounded-3xl cursor-pointer duration-200 bg-slate-200 text-black'>View Menu</button>
            </div>
        </div>
    );
};

export default Header;