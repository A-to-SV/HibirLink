// pages/profile.js
'use client';
import {useState } from 'react';

const ProfilePage = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    gender: '',
    language: '',
    country: '',
    tellno: '',
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
        <img src="" alt="" />
      </div>
      <form onSubmit={handleSubmit} className=" p-4  flex items-center justify-center">
        <div className="container mx-auto bg-white rounded border p-20">
          <div className="flex flex-col md:flex-row lg:flex-row items-center justify-center">
            <div className="md:w-1/2 lg:w-1/2 flex flex-col space-y-4 m-5">
              <label htmlFor="fullname">Full Name</label>
              <input
                type="text"
                name="fullname"
                placeholder="Full Name"
                value={formData.fullname}
                onChange={handleChange}
                className="input-field border rounded"
              />
              <label htmlFor="gender">Gender</label>
              <input
                type="text"
                name="gender"
                placeholder="Gender"
                value={formData.gender}
                onChange={handleChange}
                className="input-field border rounded"
              />
              <label htmlFor="language">Language</label>
              <input
                type="text"
                name="language"
                placeholder="Language"
                value={formData.language}
                onChange={handleChange}
                className="input-field"
              />
              <div className='flex flex-col'>
                <p>My email address</p>
                <div>
                  <input type="radio" name="email" />
                  <span>yonatan.tizazu@a2sv.org</span>
                </div>
                <div>
                  <input type="radio" name="email" />
                  <span>melakeselam.yitbarek@a2sv.org</span>
                </div>
                
                <input type="email" name="new-email"/>
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-28'>Add Email</button>
              </div>
            </div>
            <div className="md:w-1/2 lg:w-1/2 flex flex-col space-y-4">
              {/* <div> */}
                <label htmlFor="country">Country</label>
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="select-field"
                >
                  <option value="">Select Country</option>
                  {/* Add options here */}
                </select>
                <label htmlFor="tellno">Tell No</label>
                <input
                  type="text"
                  name="tellno"
                  placeholder="Tell No"
                  value={formData.tellno}
                  onChange={handleChange}
                  className="input-field"
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
                    <span className="ml-2">User</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="role"
                      value="ServiceProvider"
                      onChange={handleChange}
                      checked={formData.role === 'ServiceProvider'}
                    />
                    <span className="ml-2">Service Provider</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="role"
                      value="deliveryPersonnel"
                      onChange={handleChange}
                      checked={formData.role === 'deliveryPersonnel'}
                    />
                    <span className="ml-2">Delivery Personnel</span>
                  </label>
                </div>

                
              {/* </div> */}
              <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-28">
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProfilePage;
