import { useState } from 'react';
import './Navbar.css'
import { FaBitbucket, FaSearch } from "react-icons/fa";

const Navbar = () => {
    const [menu, setMenu] = useState("Home");
    return (
        <div className='flex justify-between items-center'>
            <div>
                <h1 className='text-2xl font-semibold text-orange-600'>FooDi</h1>
            </div>
            <ul className='flex gap-x-10'>
                <li onClick={()=>{setMenu("Home")}} className={menu === "Home"? "active" : ""}>Home</li>
                <li onClick={()=>{setMenu("Menu")}} className={menu === "Menu"? "active" : ""}>Menu</li>
                <li onClick={()=>{setMenu("Mobile-app")}} className={menu === "Mobile-app"? "active" : ""}>Mobile-app</li>
                <li onClick={()=>{setMenu("Contact us")}} className={menu === "Contact us"? "active" : ""}>Contact us</li>
            </ul>
            <div className='flex justify-center items-center gap-x-10'>
                <FaSearch></FaSearch>
                <FaBitbucket></FaBitbucket>
                <div>
                    <button className='border-2 rounded-3xl px-5 py-1 bg-transparent cursor-pointer duration-200 hover:bg-slate-200'>Sign In</button>
                </div>
                
            </div>
        </div>
    );
};

export default Navbar;