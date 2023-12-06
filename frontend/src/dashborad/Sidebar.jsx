import React from 'react'
import profile from '../assests/profileImages/profile.jpg'
import { Link } from 'react-router-dom'

const SideBar = () => {
  return (
    <>
    <div className='bg-green-200 mx-2 sm:mx-4 my-6 p-2 sm:p-4 flex-col items-center w-[38%] sm:w-[25%] rounded-r-xl h-screen'>
      <div className='text-green-700 h-[10%] sm:mx-[10%] mb-7 flex items-center justify-between border-b-2 border-green-800'>
        <div className='h-[70%] hidden sm:block'><img src={profile} alt="." className='object-contain h-[100%] w-[100%] aspect-auto'/></div>
        <div className='sm:mx-2'>Welcome Admin</div>
      </div>
      <Link to="/"><div className='text-green-700 p-1 px-[10%] text-[0.75rem] sm:text-[1rem] sm:p-2 h-[8%] my-4 sm:mr-10 cursor-pointer hover:text-green-950 hover:bg-green-500 rounded-lg md:px-4 lg:px-6 hover:font-bold duration-500 ease-in'>Home</div></Link>
      <Link to="/admin/dashboard"><div className='text-green-700 p-1 px-[10%] text-[0.75rem] sm:text-[1rem] sm:p-2 h-[8%] my-4 sm:mr-10 cursor-pointer hover:text-green-950 hover:bg-green-500 rounded-lg md:px-4 lg:px-6 hover:font-bold duration-500 ease-in'>Dashboard</div></Link>
      <Link to="/admin/dashboard/upload"><div className='text-green-700 p-1 px-[10%] text-[0.75rem] sm:text-[1rem] sm:p-2 h-[8%] my-4 sm:mr-10 cursor-pointer hover:text-green-950 hover:bg-green-500 rounded-lg md:px-4 lg:px-6 hover:font-bold duration-500 ease-in'>Upload Book</div></Link>
      <Link to="/admin/dashboard/manage-book"><div className='text-green-700 p-1 px-[10%] text-[0.75rem] sm:text-[1rem] sm:p-2 h-[8%] my-4 sm:mr-10 cursor-pointer hover:text-green-950 hover:bg-green-500 rounded-lg md:px-4 lg:px-6 hover:font-bold duration-500 ease-in'>Manage Book</div></Link>
      {/* <Link><div className='text-green-700 p-1 px-[10%] text-[0.75rem] sm:text-[1rem] sm:p-2 h-[8%] my-4 sm:mr-10 cursor-pointer hover:text-green-950 hover:bg-green-500 rounded-lg md:px-4 lg:px-6 hover:font-bold duration-500 ease-in'>Sign In</div></Link> */}
      <Link to="/logout"><div className='text-green-700 p-1 px-[10%] text-[0.75rem] sm:text-[1rem] sm:p-2 h-[8%] my-4 sm:mr-10 cursor-pointer hover:text-green-950 hover:bg-green-500 rounded-lg md:px-4 lg:px-6 hover:font-bold duration-500 ease-in'>Sign Out</div></Link>
    </div>
    </>
  )
}

export default SideBar