
import {React,useState} from 'react'
import styles from '../styles/styles';
import {Link} from 'react-router-dom';
import {RxAvatar} from 'react-icons/rx';
import { AiOutlineEye, AiOutlineEyeInvisible, AiOutlineMail, AiOutlineUser, AiOutlineLock } from 'react-icons/ai';
import { server } from "../server";
import axios from "axios";
import { toast } from 'react-toastify';
import Logo from "../assets/Logo.png";
import RegisterImage from '../assets/RegisterImage.jpg'; // Add your register image here
import { FaFileUpload } from "react-icons/fa";
import { TbUserPlus } from "react-icons/tb";
import { CiCircleQuestion } from "react-icons/ci";

const SignUp = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [visible, setVisible] = useState(false);
    const [avatar, setAvatar] = useState(null);
    const [role, setRole] = useState(""); // State for user role
    const [errors, setErrors] = useState({});

    const handleFileInputChange = (e) => {
        const file = e.target.files[0];
        setAvatar(file);
    }

    const validate = () => {
        let errors = {};

        if (password.length < 6) {
            errors.password = "Password should be at least 6 characters.";
        }

        if (password !== confirmPassword) {
            errors.confirmPassword = "Passwords do not match.";
        }

        setErrors(errors);
        return Object.keys(errors).length === 0;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validate()) return;

        const config = { headers: { "Content-Type": "multipart/form-data" } };

        const newForm = new FormData();
        newForm.append("file", avatar);
        newForm.append("name", name);
        newForm.append("email", email);
        newForm.append("password", password);
        newForm.append("role", role); // Append the role to the form data


        axios.post(`${server}/user/create-user`,newForm, config).then((res) => {
            console.log(res)
        }).catch((err) => {
            console.log(err.response.data.message)
            toast.error("User already exist");
        });

        axios.post(`${server}/user/create-user`, newForm, config)
            .then((res) => {
                toast.success(res.data.message);
                setName("");
                setEmail("");
                setPassword("");
                setConfirmPassword("");
                setAvatar(null);
                setRole("");
                setErrors({});
            })
            .catch((error) => {
                toast.error(error.response.data.message);
            });

    };

    return (
        <div className='min-h-screen bg-gray-300 flex flex-col justify-center py-12 sm:px-6 lg:px-8'>
            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-4xl flex">
                <div className="bg-white py-8 px-4 shadow  sm:px-10 w-full lg:w-1/2">
                    <form className="space-y-5" onSubmit={handleSubmit}>
                        <div className="flex items-center justify-center mb-4">
                            <img className="h-12 w-auto mr-2" src={Logo} alt="NatureTrade" />
                            <h2 className="text-2xl font-bold">Nature Trade</h2>
                        </div>
                        <div className='sm:mx-auto sm:w-full sm:max-w-md'>
                            <h2 className='mt-4 text-center text-2xl font-bold text-gray-900'>
                                Register as new user
                            </h2>
                        </div>
                        <div className="relative">
                            <AiOutlineUser className="absolute left-3 top-2.5 text-gray-400" size={20} />
                            <input
                                type="text"
                                name="name"
                                autoComplete='name'
                                required value={name} onChange={(e) => setName(e.target.value)}
                                className='appearance-none block w-full px-10 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-gray-100'
                                placeholder="Full name"
                            />
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
                            {errors.password && (
                                <p className="text-red-500 text-sm mt-1">{errors.password}</p>
                            )}
                        </div>
                        <div className="relative">
                            <AiOutlineLock className="absolute left-3 top-2.5 text-gray-400" size={20} />
                            <input
                                type="password"
                                name="confirmPassword"
                                autoComplete='confirm-password'
                                required value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}
                                className='appearance-none block w-full px-10 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-gray-100'
                                placeholder="Confirm Password"
                            />
                            {errors.confirmPassword && (
                                <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>
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
                                <option value="seller">Collecting Center</option>
                                <option value="buyer">Buyer</option>
                                <option value="supplier">Supplier</option>
                                <option value="delivery">Delivery Company</option>
                                {/* <option value="admin">Admin</option> */}

                            </select>
                        </div>
                        {role === "seller" && (
                            <div>
                                <label htmlFor="avatar" className="block text-sm font-medium text-gray-700">
                                    Business registration certificate 
                                </label>
                                <div className="mt-2 flex items-center">
                                    <span className="inline-block h-8 w-8 overflow-hidden">
                                        {avatar ? (
                                            <img src={URL.createObjectURL(avatar)} alt="avatar" className="h-full w-full object-cover rounded-full" />
                                        ) : (
                                            <FaFileUpload className="h-8 w-8" />
                                        )}
                                    </span>
                                    <label htmlFor="file-input"
                                        className='ml-5 flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-50  bg-gray-100'>
                                        <span>Upload certificate</span>
                                        <input
                                            type="file"
                                            name="avatar"
                                            id="file-input"
                                            accept='.jpg, .jpeg, .png'
                                            onChange={handleFileInputChange}
                                            className='sr-only'
                                        />
                                    </label>
                                </div>
                            </div>
                        )}
                        <div className="flex justify-center items-center">
                            <button type="submit"
                                className="group relative w-[200px] h-[40px] flex items-center justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-black bg-yellow-500 hover:bg-yellow-700">
                                <TbUserPlus className="mr-2 text-black" size={30} />
                                Submit
                            </button>
                        </div>
                        <div className={`${styles.Flex} w-full`}>
                            <CiCircleQuestion className="mr-2 text-black" size={20}/>
                            <h4> Already have an account?</h4>
                            <Link to="/login" className="text-yellow-600 pl-2">
                                Sign In
                            </Link>
                        </div>
                    </form>
                </div>
                <div className="hidden lg:block lg:w-1/2">
                    <img src={RegisterImage} alt="Register" className="object-cover w-full h-full" />
                </div>
            </div>
        </div>
    )
}

export default SignUp;
