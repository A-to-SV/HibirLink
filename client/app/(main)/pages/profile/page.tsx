// pages/profile.js
'use client';
import Link from 'next/link';
import {useState } from 'react';


const ProfilePage = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    gender: '',
    language: '',
    country: '',
    telno: '',
    role: '',
    email: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/submitProfile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        console.log('Form submitted successfully');
      } else {
        console.error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div >
      <form onSubmit={handleSubmit} className=" p-4  flex items-center justify-center">
        <div className="container mx-auto bg-white rounded border-2 px-20 pt-10 mt-8 ml-10 mr-10">
          <div className=" flex bg-gradient-to-r from-green-500 h-16 rounded">
            <Link href="/" className='flex items-center' >
              <button className="border-3 rounded bg-white text-black mx-5  px-4 py-2">
                Back to Home
              </button>
            </Link>
          </div>

          <div className='flex flex-row justify-between items-center'>
            <div className='flex items-center'>
              <img className='w-14 ml-5' src="https://st3.depositphotos.com/15648834/17930/v/450/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" alt="" />
              <div className='ml-2'>
                <h2 className='font-semibold text-base'>User Name</h2>
                <p className='text-gray-500 text-sm'> dummy@gmail.com</p>
              </div>
            </div>
            <div>
              <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-20 ">
                    Save
              </button>
            </div>
          </div>
          <div className="flex flex-col md:flex-row lg:flex-row  justify-center">

            {/*------------------------ left side container ---------------------------*/}
            <div className="md:w-1/2 lg:w-1/2 flex flex-col space-y-2 m-5">
              <label htmlFor="fullname">Full Name</label>
              <input
                type="text"
                name="fullname"
                placeholder="Full Name"
                value={formData.fullname}
                onChange={handleChange}
                className="input-field border-2 rounded h-10"
              />
              <label htmlFor="gender">Gender</label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="input-field border-2 rounded h-10 text-gray-500"
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              <label htmlFor="language">Language</label>
              <select
                name="language"
                value={formData.language}
                onChange={handleChange}
                className="input-field border-2 rounded h-10 text-gray-500"
              >
                <option value="">Select Language</option>
                <option value="amharic">Amharic</option>
                <option value="english">English</option>
              </select>
              <div className='flex flex-col'>
                <label htmlFor="email">Add Email Address</label>
                <input 
                  type="email" 
                  name="email"
                  placeholder="New Email"
                  value={formData.email}
                  onChange={handleChange}
                  className='border-2 rounded h-10 mt-2'
                  />
              </div>
            </div>

            {/*------------------------ right side container ---------------------------*/}

            <div className="md:w-1/2 lg:w-1/2 flex flex-col space-y-2 m-5">
              {/* <div> */}
                <label htmlFor="country">Country</label>
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="select-field border-2 rounded h-10"
                >
                  <option value="">Select Country</option>
                  {/* Add options here */}
                </select>
                <label htmlFor="telno">Tel No</label>
                <input
                  type="text"
                  name="telno"
                  placeholder="Tel No"
                  value={formData.telno}
                  onChange={handleChange}
                  className="input-field border-2 rounded h-10"
                />
                <p>Please Select Role</p>
                <div className='flex flex-row'>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="role"
                      value="user"
                      onChange={handleChange}
                      checked={formData.role === 'user'}
                    />
                    <span className="ml-2 mr-4">User</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="role"
                      value="ServiceProvider"
                      onChange={handleChange}
                      checked={formData.role === 'ServiceProvider'}
                    />
                    <span className="ml-2 mr-4">Service Provider</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="role"
                      value="deliveryPersonnel"
                      onChange={handleChange}
                      checked={formData.role === 'deliveryPersonnel'}
                    />
                    <span className="ml-2 mr-4">Delivery Personnel</span>
                  </label>
                </div>

            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProfilePage;
