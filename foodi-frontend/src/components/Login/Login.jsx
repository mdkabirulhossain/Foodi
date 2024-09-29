import { useContext, useState } from 'react';
import './Login.css';
import { RxCross2 } from "react-icons/rx";
import { StoreContext } from '../../context/StoreContext';
import axios from "axios";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = ({ setLogin }) => {
    const{url, setToken} = useContext(StoreContext)
    const [currentState, setCurrentState] = useState("Log In");
    const[showPassword, setShowPassword] = useState(false);
    const [data, setData] = useState({
        name:"",
        email:"",
        password:"",
    })

    const onChangeHandler = (event)=>{
        const name = event.target.name;
        const value = event.target.value;
        setData(data =>({...data, [name]:value}))

    }

    const onLogin = async(event) =>{
        event.preventDefault();
        let newUrl = url;
        if(currentState === "Log In"){
            newUrl +="/api/user/login"
        }
        else{
            newUrl +="/api/user/register"
        }

        const response = await axios.post(newUrl, data)
        if(response.data.success){
            setToken(response.data.token);
            localStorage.setItem("token", response.data.token);
            setLogin(false);
        }
        else{
            alert(response.data.message)
        }
    }

    return (
        <div className="login hero bg-base-200 min-h-screen">
            <div className="hero-content">

                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={onLogin} className="card-body">
                        <div className='card-title flex justify-between'>
                            <h2 >{currentState}</h2>
                            <RxCross2 onClick={()=>setLogin(false)}></RxCross2>
                        </div>
                        {
                            currentState ==="Sign Up"?
                            <div className="form-control h-14">
                            <label className="">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" onChange={onChangeHandler} placeholder="name" name='name' value={data.name} className="border rounded-md p-1 w-full" required />
                        </div> :<></>
                        }
                        
                        <div className="form-control h-14">
                            <label className="">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' onChange={onChangeHandler} value={data.email} placeholder="email" className="border rounded-md p-1 w-full" required />
                        </div>
                        <div className="form-control h-14">
                            <label className="">
                                <span className="label-text">Password</span>
                            </label>
                            <div className='flex justify-between items-center'>
                            <input type={showPassword? "text": "password"} name='password' onChange={onChangeHandler} value={data.password} placeholder="password" className="border rounded-md p-1 w-full" required />
                            <div className='absolute right-10 cursor-pointer'>
                                {
                                    showPassword?
                                    <FaEyeSlash onClick={()=>setShowPassword(false)}></FaEyeSlash>
                                     :
                                    <FaEye onClick={()=>setShowPassword(true)}></FaEye>
                                    
                                }
                            
                            </div>

                            </div>
                           
                        
                        </div>
                        <div className="form-control ">
                            <button type='submit'  className="bg-orange-600 rounded-md p-1 mt-2 text-white">{currentState === "Sign Up" ? "Crate account" : "Log In"}</button>
                        </div>
                        <div className="flex justify-center items-center">
                            <input type="checkbox" name="" id="" required />
                            <p className='pl-2 text-sm'>I agree all the terms and conditions</p>

                        </div>
                        {currentState ==="Sign Up"?
                        <p className='text-sm'>Already have an account?<span className='cursor-pointer text-orange-600' onClick={()=>setCurrentState("Log In")}> Log In</span></p>
                        :
                        <p className='text-sm'>Crate a new account?<span className='cursor-pointer text-orange-600' onClick={()=>setCurrentState("Sign Up")}> Click here</span></p>
                    }
                        
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;