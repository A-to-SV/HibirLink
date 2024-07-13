import React from 'react';

const SignIn: React.FC = () => {
  return (
    <div className="max-h-screen flex flex-col md:flex-col lg:flex-row items-center p-4 md:p-8 lg:p-12 justify-evenly bg-[url('/assets/sign_in_page.png')]">
        <div className="flex flex-col items-center w-full mx-0 mb-4 md:mb-8 lg:mb-20 mt-0 p-4 md:p-10 lg:p-20 text-left">
            <div className="w-full py-2 md:py-3 lg:py-4">
                <h1 className="text-3xl md:text-4xl lg:text-5xl text-[#181435] font-bold flex items-center justify-center md:justify-start lg:justify-start space-x-2">
                    <img src='assets/frame.png' alt='logo-image' className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14"/>
                    <span>
                        <u>HibrLink</u>
                        <p className="text-xs md:text-sm lg:text-sm font-light mt-1 text-gray-500">Connecting You to Everything, Everywhere</p>
                    </span>
                </h1>
            </div>
            <section className="mt-10 md:mt-15 lg:mt-20">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-blue-600">
                    Connecting You to Everything, Everywhere
                </h2>
                <p className="mt-2 md:mt-3 lg:mt-4 text-sm md:text-md lg:text-md text-gray-700">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
            </section>
        </div>
        <div className="max-h-screen bg-white ml-60 mt-60 p-4 rounded-3xl shadow-lg max-w-md w-full">
            <div className="text-[#084E9A] text-start">
                <p className=" mt-2 text-sm">Welcome Back!</p>
                <h3 className="text-lg font-bold text-gray-600 mb-4">Sign in</h3>
            </div>
            <form>
                <fieldset className="mb-4">
                    <legend className="text-gray-700 mb-2 text-sm">Email</legend>
                    <input
                        type="email"
                        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                        placeholder="johnsondoe@nomail.com"
                    />
                </fieldset>
                <fieldset className="mb-4">
                    <legend className="text-gray-700 mb-2 text-sm">Password</legend>
                    <input
                        type="password"
                        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                        placeholder="********"
                    />
                </fieldset>
                <div className="mb-4">
                    <button
                    type="submit"
                    className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200"
                    >
                    Sign in
                    </button>
                </div>
                <div className='flex justify-center items-center mt-12 mb-4'>
                    <div className='w-full h-px bg-gray-300'/>
                    <div className="px-4 text-gray-600  relative">Or</div>
                    <div className='w-full h-px bg-gray-300'/>
                </div>
                <div className="mb-1">
                    <button
                    type="button"
                    className="w-full p-2 border border-gray-100 rounded flex items-center justify-evenly hover:bg-gray-100 transition duration-200 gap-x-2"
                    >
                    <img src="assets/google.png" alt="Facebook Logo" className="w-4 h-4 mr-2 text-sm" />
                    Sign in with Google
                    </button>
                </div>
                <div className="mb-1">
                    <button
                    type="button"
                    className="w-full p-2 pl-4 border border-gray-100 rounded flex items-center justify-evenly hover:bg-gray-100 transition duration-200"
                    >
                    <img src="assets/facebook.png" alt="Facebook Logo" className="w-4 h-4 mr-2 text-sm" />
                    Sign in with Facebook
                    </button>
                </div>
                <div className="">
                    <button
                    type="button"
                    className="w-full p-2 pl-0 border border-gray-100 rounded flex items-center justify-evenly hover:bg-gray-100 transition duration-200"
                    >
                    <img src="assets/apple.png" alt="Apple Logo" className="w-4 h-4 mr-2 text-sm" />
                    Sign in with Apple
                    </button>
                </div>
            </form>
            <div className="text-center mt-4">
                <a href="#" className="text-blue-500 hover:underline">No account? Sign Up Here</a>
            </div>
        </div>
    </div>
  );
};

export default SignIn;
