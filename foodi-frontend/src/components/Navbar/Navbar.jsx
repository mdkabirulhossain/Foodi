import { useContext, useState } from 'react';
import './Navbar.css'
import { FaBitbucket, FaPlusCircle, FaSearch } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
import { CgProfile } from "react-icons/cg";
import { LuLogOut } from "react-icons/lu";

const Navbar = ({setLogin}) => {
    const [menu, setMenu] = useState("Home");
    const {token, setToken} = useContext(StoreContext);
    const navigate = useNavigate();

    const logOut = ()=>{
        localStorage.removeItem("token");
        setToken("");
        navigate("/");
    }
    return (
        <div className='flex justify-between items-center pt-2 px-2'>
            <div>
               <Link to='/'><h1 className='text-2xl font-semibold text-orange-600'>FooDi</h1></Link> 
            </div>
            <ul className=' menu-list flex gap-x-10 '>
                <Link to='/' onClick={()=>{setMenu("Home")}} className={menu === "Home"? "active" : ""}>Home</Link>
                <a href='#explore' onClick={()=>{setMenu("Menu")}} className={menu === "Menu"? "active" : ""}>Menu</a>
                <a href='#footer' onClick={()=>{setMenu("Contact us")}} className={menu === "Contact us"? "active" : ""}>Contact us</a>
            </ul>
            <div className='flex justify-center items-center gap-x-6 md:gap-x-8 lg:gap-x-10'>
                <div className='icon-container'>
                  <Link to="/post"> <FaPlusCircle className='cursor-pointer'></FaPlusCircle></Link>
                    <p className='tooltip-text bg-white text-black'>sell your food</p>
                    </div>
                <FaSearch></FaSearch>
                <Link to="/cart"><FaBitbucket></FaBitbucket></Link> 
                
                {!token? 
                <div>
                    <button onClick={()=>setLogin(true)} className='border-2 rounded-3xl px-5 py-1 bg-transparent cursor-pointer duration-200 hover:bg-slate-200'>Sign In</button>
                </div> :
                    <div className='nav-profile '>
                        <CgProfile className='w-8 h-5'></CgProfile>
                        <ul className='nav-profile-dropdown'>
                            <li className='cursor-pointer hover:text-orange-500'><Link to="/myorders"><div className='flex gap-2 items-center'><p><FaBitbucket ></FaBitbucket></p><p>Orders</p></div></Link></li>
                            <hr className='border-black'/>
                            <li onClick={logOut} className='cursor-pointer hover:text-orange-500'><div className='flex gap-2 items-center'><p><LuLogOut></LuLogOut> </p><p>LogOut</p></div></li>
                        </ul>
                    </div>
                }
                
            </div>
        </div>
    );
};

export default Navbar;