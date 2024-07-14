"use client";
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { MdVisibility } from "react-icons/md";
import { MdVisibilityOff } from "react-icons/md";
import Image from 'next/image';

const SignIn = () => {
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    return (
        <div className="min-h-screen bg-cover flex flex-col md:flex-col lg:flex-row p-8 lg:p-12 lg:items-start justify-evenly items-center bg-[url('/assets/sign_in_page.png')]">
            <div className="flex flex-col items-center w-full mx-0 mb-4 md:mb-8 lg:mb-20 mt-0 p-4 md:p-10 lg:p-20 text-left">
                <div className="w-full py-2 md:py-3 lg:py-4">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl text-[#181435] font-bold flex items-center justify-center md:justify-start lg:justify-start space-x-2">
                        <Image
                            src="/assets/frame.png"
                            alt="Logo Image"
                            width={56}
                            height={56}
                            className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14"
                        />                        <span>
                            <u>HibrLink</u>
                            <p className="text-xs md:text-sm lg:text-sm font-light mt-1 text-gray-500">Connecting You to Everything, Everywhere</p>
                        </span>
                    </h1>
                </div>
                <section className="mt-10 md:mt-15 lg:mt-20 hidden md:block">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-blue-600">
                        Connecting You to Everything, Everywhere
                    </h2>
                    <p className="mt-2 md:mt-3 lg:mt-4 text-sm md:text-md lg:text-md text-gray-700">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </section>
            </div>
            <div style={{ maxWidth: '500px' }} className="bg-white lg:ml-60 mt-16 p-10 rounded-3xl shadow-lg w-full lg:mr-20">
                <div className="text-[#084E9A] text-start">
                    <p className="mb-2 text-sm">Welcome back!</p>
                    <h3 className="text-lg font-bold text-gray-600 mb-4">Sign in</h3>
                </div>
                <form>
                    <TextField type='email' placeholder='johnsondoe@nomail.com' className='w-full mb-4' id="email" label="Email" variant="outlined" />
                    <FormControl className='w-full mb-10' sx={{ width: '25ch' }} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type={showPassword ? 'text' : 'password'}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <MdVisibilityOff /> : <MdVisibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Password"
                        />
                    </FormControl>
                    <div className="mb-4">
                        <button
                            type="submit"
                            className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200"
                        >
                            Sign in
                        </button>
                    </div>
                    <div className='flex justify-center items-center mt-8 mb-4'>
                        <div className='w-full h-px bg-gray-300' />
                        <div className="px-4 text-gray-600  relative">Or</div>
                        <div className='w-full h-px bg-gray-300' />
                    </div>
                    <div className="mb-1">
                        <button
                            type="button"
                            className="w-full p-2 border border-gray-300 rounded flex items-center justify-center relative hover:bg-gray-100 transition duration-200"
                        >
                            <Image src="/assets/google.png" alt="Google Logo" width={16} height={16} className="absolute left-8" />
                            <span className="flex-grow text-center">Sign in with Google</span>
                        </button>
                    </div>
                    <div className="mb-1">
                        <button
                            type="button"
                            className="w-full p-2 border border-gray-300 rounded flex items-center justify-center relative hover:bg-gray-100 transition duration-200"
                        >
                            <Image src="/assets/facebook.png" alt="Facebook Logo" width={16} height={16} className="absolute left-8" />
                            <span className="flex-grow text-center">Sign in with Facebook</span>
                        </button>
                    </div>
                    <div>
                        <button
                            type="button"
                            className="w-full p-2 border border-gray-300 rounded flex items-center justify-center relative hover:bg-gray-100 transition duration-200"
                        >
                            <Image src="/assets/apple.png" alt="Apple Logo" width={16} height={16} className="absolute left-8" />
                            <span className="flex-grow text-center">Sign in with Apple</span>
                        </button>
                    </div>
                </form>
                <div className="text-center mt-4">
                    <a href="#" className="text-blue-500 hover:underline">No account? Sign Up Here</a>
                </div>
            </div>
        </div>
    );
}

export default SignIn;