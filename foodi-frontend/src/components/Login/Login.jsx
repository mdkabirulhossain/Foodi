import { useState } from 'react';
import './Login.css';
import { RxCross2 } from "react-icons/rx";

const Login = ({ setLogin }) => {
    const [currentState, setCurrentState] = useState("Log In")
    return (
        <div className="login hero bg-base-200 min-h-screen">
            <div className="hero-content">

                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form className="card-body">
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
                            <input type="text" placeholder="name" className="input input-bordered p-2" required />
                        </div> :<></>
                        }
                        
                        <div className="form-control h-14">
                            <label className="">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered p-2" required />
                        </div>
                        <div className="form-control h-14">
                            <label className="">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered p-2" required />
                        
                        </div>
                        <div className="form-control ">
                            <button  className="bg-orange-600 rounded-md p-1 mt-2 text-white">{currentState === "Sign Up" ? "Crate account" : "Log In"}</button>
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