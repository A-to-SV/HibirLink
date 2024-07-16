import React from 'react';
import Cart from '@/components/CartComp/Cart';
import { IoArrowBackCircle } from "react-icons/io5";

const page = () => {
  return (
    <div className='py-10'>
        <div className='w-[80%] mx-auto py-6'>
            <IoArrowBackCircle size={30} className='text-blue-700' />
        </div>
        <Cart/>
    </div>
  )
}

export default page
