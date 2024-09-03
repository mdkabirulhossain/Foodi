import './Navbar.css'
import { FaUserCircle } from "react-icons/fa";
const Navbar = () => {
    return (
        <div className='flex justify-between items-center p-2'>
            <h1 className='text-2xl text-orange-600 font-bold'>FooDi</h1>
            <FaUserCircle className='w-10 h-7'/>
        </div>
    );
};

export default Navbar;