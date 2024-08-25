import './Navbar.css'
import { FaBitbucket, FaSearch } from "react-icons/fa";

const Navbar = () => {
    return (
        <div className='flex justify-between items-center'>
            <div>
                <h1>FooDi</h1>
            </div>
            <ul className='flex gap-10'>
                <li>Home</li>
                <li>Menu</li>
                <li>Mobile-app</li>
                <li>Contact us</li>
            </ul>
            <div className='flex justify-center items-center gap-10'>
                <FaSearch></FaSearch>
                <FaBitbucket></FaBitbucket>
                <div>
                    <p>Sign In</p>
                </div>
                
            </div>
        </div>
    );
};

export default Navbar;