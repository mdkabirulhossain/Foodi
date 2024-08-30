import { useState } from 'react';
import './Navbar.css'
import { FaBitbucket, FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Navbar = ({setLogin}) => {
    const [menu, setMenu] = useState("Home");
    return (
        <div className='flex justify-between items-center pt-2 px-2'>
            <div>
                <h1 className='text-2xl font-semibold text-orange-600'>FooDi</h1>
            </div>
            <ul className=' menu-list flex gap-x-10 '>
                <Link to='/' onClick={()=>{setMenu("Home")}} className={menu === "Home"? "active" : ""}>Home</Link>
                <a href='#explore' onClick={()=>{setMenu("Menu")}} className={menu === "Menu"? "active" : ""}>Menu</a>
                <a href='#footer' onClick={()=>{setMenu("Contact us")}} className={menu === "Contact us"? "active" : ""}>Contact us</a>
            </ul>
            <div className='flex justify-center items-center gap-x-6 md:gap-x-8 lg:gap-x-10'>
                <FaSearch></FaSearch>
                <FaBitbucket></FaBitbucket>
                <div>
                    <button onClick={()=>setLogin(true)} className='border-2 rounded-3xl px-5 py-1 bg-transparent cursor-pointer duration-200 hover:bg-slate-200'>Sign In</button>
                </div>
                
            </div>
        </div>
    );
};

export default Navbar;