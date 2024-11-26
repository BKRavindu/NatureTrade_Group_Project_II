import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible, AiOutlineMail, AiOutlineLock } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from "axios";
import { server } from "../../server";
import styles from '../../styles/styles';
import Logo from "../assets/Logo.png";
import loginImage from '../assets/loginImage.jpg';
import { RiUserSharedLine } from "react-icons/ri";
import { CiCircleQuestion } from "react-icons/ci";

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("");
    const [visible, setVisible] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        await axios.post(`${server}/user/login-user`, {
            email,
            password,
            role
        }).then((res) => {
            toast.success("Login success");
            if (role === "collecting center") {
                navigate("/Collector/CollectorDash");
            } else if(role === "buyer") {
                navigate("/Buyer/BuyerDash");
            }else if(role === "supplier"){
                navigate("/supplier/Dashboard");
            }else if(role === "delivery"){
                navigate("/Delivery/Dashboard");
            }else if(role === "admin"){
                navigate("/Admin/Dashboard");
            }else{
                navigate("/");
            }
        }).catch((err) => {
            toast.error(err.response.data.message);
        })
    };

    return (
        <div className='min-h-screen bg-gray-300 flex flex-col justify-center py-12 sm:px-6 lg:px-8'>
            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-4xl flex">
                <div className="bg-white py-8 px-4 shadow  sm:px-10 w-full lg:w-1/2">
                    <form className="space-y-5" onSubmit={handleSubmit}>
                        <div className="flex items-center justify-center mb-4">
                            <img className="h-12 w-auto mr-2" src={Logo} alt="NatureTrade" />
                            <h2 className="text-2xl font-bold">NatureTrade</h2>
                        </div>
                        <div className='sm:mx-auto sm:w-full sm:max-w-md'>
                            <h2 className='mt-4 text-center text-2xl font-bold text-gray-900'>
                                Login to your account
                            </h2>
                        </div>
                        <div className="relative">
                            <AiOutlineMail className="absolute left-3 top-2.5 text-gray-400" size={20} />
                            <input
                                type="email"
                                name="email"
                                autoComplete='email'
                                required value={email} onChange={(e) => setEmail(e.target.value)}
                                className='appearance-none block w-full px-10 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-gray-100'
                                placeholder="Email address"
                            />
                        </div>
                        <div className="relative">
                            <AiOutlineLock className="absolute left-3 top-2.5 text-gray-400" size={20} />
                            <input
                                type={visible ? "text" : "password"}
                                name="password"
                                autoComplete='current-password'
                                required value={password} onChange={(e) => setPassword(e.target.value)}
                                className='appearance-none block w-full px-10 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-gray-100'
                                placeholder="Password"
                            />
                            {visible ? (
                                <AiOutlineEye
                                    className="absolute right-3 top-2.5 cursor-pointer text-gray-400"
                                    size={20}
                                    onClick={() => setVisible(false)}
                                />
                            ) : (
                                <AiOutlineEyeInvisible
                                    className="absolute right-3 top-2.5 cursor-pointer text-gray-400"
                                    size={20}
                                    onClick={() => setVisible(true)}
                                />
                            )}
                        </div>
                        <div className="relative">
                            <label htmlFor="role" className="block text-sm font-medium text-gray-700">
                                Select Role
                            </label>
                            <select
                                id="role"
                                name="role"
                                value={role}
                                onChange={(e) => setRole(e.target.value)}
                                required
                                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md bg-gray-100"
                            >
                                <option value="">Select role</option>
                                <option value="collecting center">Collecting Center</option>
                                <option value="buyer">Buyer</option>
                                <option value="supplier">Supplier</option>
                                <option value="delivery">Delivery Company</option>
                                <option value="admin">Admin</option>
                            </select>
                        </div>
                        <div className={`${styles.Flex} justify-between`}>
                            <div className={`${styles.Flex}`}>
                                <input
                                    type="checkbox"
                                    name='remember-me'
                                    id="remember-me"
                                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                />
                                <label
                                    htmlFor="remember-me"
                                    className="ml-2 block text-sm text-gray-900">
                                    Remember me
                                </label>
                            </div>
                            <div className="text-sm">
                                <a
                                    href="#"
                                    className="font-medium text-yellow-600 hover:text-yellow-600">
                                    Forgot your password?
                                </a>
                            </div>
                        </div>
                        <div className="flex justify-center items-center">
                            <button type="submit"
                                className="group relative w-[200px] h-[40px] flex items-center justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-black bg-yellow-500 hover:bg-yellow-400">
                                    <RiUserSharedLine className="mr-2 text-black" size={30}/>
                                Submit
                            </button>
                        </div>
                        <div className={`${styles.Flex} w-full`}>
                        <CiCircleQuestion className="mr-2 text-black" size={20}/>
                            <h4> Not have any account?</h4>
                            <Link to="/sign-up" className="text-yellow-600 pl-2">
                                Sign Up
                            </Link>
                        </div>
                    </form>
                </div>
                <div className="hidden lg:block lg:w-1/2">
                    <img src={loginImage} alt="Login" className="object-cover w-full h-full" />
                </div>
            </div>
        </div>
    )
}

export default Login;
