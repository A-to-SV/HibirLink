'use client';
import { useState } from 'react';
import { usePostProductMutation } from '@/redux/api/endpoints';
import { useRouter } from 'next/navigation';

const ProductPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    description: '',
    image: '',
    contact_number: '',
    address: '',
    category: '',
  });

  const [postProduct, { isLoading, isSuccess, isError }] = usePostProductMutation();
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    try {
      await postProduct(formData).unwrap();
      setSuccessMessage('Product successfully posted!');
      setFormData({
        name: '',
        price: '',
        description: '',
        image: '',
        contact_number: '',
        address: '',
        category: '',
      });
    } catch (error) {
      console.error('Failed to post product:', error);
      setSuccessMessage('Failed to post product. Please try again.');
    }
  };

  return (
    <div className="p-4 flex items-center justify-center min-h-screen">
      <form onSubmit={handleSubmit} className="bg-white p-6 shadow-lg rounded-lg w-full max-w-5xl mt-10">
        <div className="text-blue-500 text-xl mb-8 border-b-2">Product Information</div>

        <div className="flex flex-col md:flex-row md:space-x-6">
          <div className="flex-1 mb-6 md:mb-0">
            <label htmlFor="name" className="block font-medium text-gray-700 mb-3">Product Name</label>
            <input
              type="text"
              name="name"
              placeholder="Product Name"
              value={formData.name}
              required
              onChange={handleChange}
              className="mt-1 bg-zinc-100 block w-full rounded-md shadow-sm py-2 px-3 sm:text-sm h-12"
            />

            <label htmlFor="price" className="block font-medium text-gray-700 mt-4 mb-3">Price in Birr</label>
            <input
              type="text"
              required
              name="price"
              placeholder="Price"
              value={formData.price}
              onChange={handleChange}
              className="mt-1 bg-zinc-100 block w-full rounded-md shadow-sm py-2 px-3 sm:text-sm h-12"
            />

            <label htmlFor="description" className="block mb-3 font-medium text-gray-700 mt-4">Description</label>
            <textarea
              name="description"
              required
              value={formData.description}
              onChange={handleChange}
              className="mt-1 block w-full bg-zinc-100 rounded-md h-48 shadow-sm py-2 px-3 sm:text-sm"
            />

            <label htmlFor="image" className="block font-medium text-gray-700 mt-4 mb-3">Image Link</label>
            <input
              type="text"
              required
              name="image"
              placeholder="Image Link"
              value={formData.image}
              onChange={handleChange}
              className="mt-1 bg-zinc-100 block w-full rounded-md shadow-sm py-2 px-3 sm:text-sm h-12"
            />
          </div>

          <div className="flex-1">
            <label htmlFor="contact_number" className="block mb-3 font-medium text-gray-700">Contact Number</label>
            <input
              required
              type="text"
              name="contact_number"
              placeholder="Contact Number"
              value={formData.contact_number}
              onChange={handleChange}
              className="mt-1 bg-zinc-100 block w-full rounded-md shadow-sm py-2 px-3 sm:text-sm h-12"
            />

            <label htmlFor="address" className="block mb-3 font-medium text-gray-700 mt-4">Address</label>
            <input
              required  
              type="text"
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
              className="mt-1 bg-zinc-100 block w-full rounded-md shadow-sm py-2 px-3 sm:text-sm h-12"
            />

            <label htmlFor="category" className="block mb-3 font-medium text-gray-700 mt-4">Category</label>
            <select
              required
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="mt-1 bg-zinc-100 block w-full rounded-md shadow-sm py-2 px-3 text-gray-600 h-12 sm:text-sm"
            >
              <option value="">Select Category</option>
              <option value="electronics">Electronics</option>
              <option value="health">Health</option>
              <option value="fashion">Fashion</option>
              <option value="industry">Industry</option>
              <option value="grocery">Grocery</option>
              <option value="maintenance">Maintenance</option>
              <option value="others">Others</option>
            </select>

            <div className="flex justify-start gap-x-3 py-6">
              <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold  rounded w-20 " disabled={isLoading}>
                {isLoading ? 'Saving...' : 'Save'}
              </button>
              <button onClick={() => router.push("/marketplace")} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-20'>Back</button>
            </div>
          </div>
        </div>

        {isSuccess && <p className="text-green-500 mt-4 text-center">{successMessage}</p>}
        {isError && <p className="text-red-500 mt-4 text-center">Failed to post product. Please try again.</p>}
      </form>
    </div>
  );
};

export default ProductPage;
