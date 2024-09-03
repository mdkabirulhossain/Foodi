import { FaList } from 'react-icons/fa';
import './Sidebar.css'
import { IoMdAddCircleOutline } from "react-icons/io";
import { GoChecklist } from "react-icons/go";
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className='flex'>
        <div className='h-screen w-full  border-r-2 border-black'>
            <div className='sidebar-options flex flex-col justify-center items-center m-2 p-2'>
                <NavLink to='/add' className="sidebar-option flex justify-center items-center gap-1 border-2 border-black mt-4 my-2 p-1 w-full">
                <IoMdAddCircleOutline />
                    <p>Add Items</p>

                </NavLink>
                <NavLink to='/list' className="sidebar-option flex justify-center items-center gap-1 border-2 border-black mt-4 my-2 p-1 w-full">
                    <FaList />
                    <p>List Items</p>

                </NavLink>
                <NavLink to='/order' className="sidebar-option flex justify-center gap-1 items-center border-2 border-black mt-4 my-2 p-1 w-full">
                    <GoChecklist></GoChecklist>
                    <p>Orders Items</p>

                </NavLink>
            </div>
        </div>
        </div>
    );
};

export default Sidebar;