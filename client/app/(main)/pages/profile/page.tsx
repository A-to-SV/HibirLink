// pages/profile.js
'use client';
import {useState } from 'react';

const ProfilePage = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    gender: '',
    language: '',
    country: '',
    telno: '',
    role: '',
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
      <div className='bg-gradient-to-r from-light-blue-500 to-white mt-20 h-16'></div>
      <div>
        <div>
          <img src="" alt="" />
        </div>
      </div>
      <form onSubmit={handleSubmit} className=" p-4  flex items-center justify-center">
        <div className="container mx-auto bg-white rounded border-2 p-20 ml-10 mr-10">
          <div className="flex flex-col md:flex-row lg:flex-row  justify-center">
            <div className="md:w-1/2 lg:w-1/2 flex flex-col space-y-4 m-5">
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
              <input
                type="text"
                name="gender"
                placeholder="Gender"
                value={formData.gender}
                onChange={handleChange}
                className="input-field border-2 rounded h-10"
              />
              <label htmlFor="language">Language</label>
              <input
                type="text"
                name="language"
                placeholder="Language"
                value={formData.language}
                onChange={handleChange}
                className="input-field border-2 rounded h-10"
              />
              <div className='flex flex-col'>
                <p>My Email Address</p>
                <div>
                  <input type="radio" name="email" />
                  <span className='m-3'>yonatan.tizazu@a2sv.org</span>
                </div>
                <div>
                  <input type="radio" name="email" />
                  <span className='m-3'>melakeselam.yitbarek@a2sv.org</span>
                </div>
                
                <input 
                  type="email" 
                  name="new-email"
                  placeholder="New Email"
                  className='border-2 rounded h-10 mt-4'
                  />
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-28 m-5 ml-0'>Add Email</button>
              </div>
            </div>
            <div className="md:w-1/2 lg:w-1/2 flex flex-col space-y-4 m-5">
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

                
              {/* </div> */}
              {/* <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-28">
                Submit
              </button> */}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProfilePage;
