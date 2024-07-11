import Link from 'next/link';

const NavBar = () => {
  return (
    <div>
      <div className="bg-primary p-2 flex justify-end">
        <div className='flex justify-between items-center w-full md:w-[70%] right-0 px-10'>
          <div className='flex gap-x-14 items-center text-white text-[13px]'>
            <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
            <Link href='' className='underline'>ShopNow</Link>
          </div>
          <select className='bg-primary text-white outline-none'>
            <option>English</option>
            <option>French</option>
            <option>Spanish</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default NavBar
