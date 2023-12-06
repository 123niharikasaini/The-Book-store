import React, { useEffect } from 'react'
import profile from '../assests/profileImages/profile.jpg'
import { useState } from 'react'
import axios from 'axios'
import listGenres from "../APIs/Genre"


const Dashboard = () => {
  // const [category,setCategory]=useState()
  const [size,setSize]=useState();
  

  useEffect(()=>{
    const fetching=async()=>{
      const response=await axios.get(`${import.meta.env.VITE_BASE_URL}/books/all-books`);
      
      setSize(response.data.length)

    }
    fetching();
  },[])

  return (
    <>
    <div className='m-4'>
    <div className='h-[20%] sm:h-[40%] sm:block'><img src={profile} alt="." className='object-contain h-[100%] w-[100%] aspect-auto'/></div>
    <div className='m-4 text-center text-lg sm:text-2xl text-green-800 font-bold font-new'>
      Welcome Admin</div>

    

      <div className='bg-green-300 flex flex-col p-4 rounded-lg'>
        <span className='text-xl p-2 font-new font-bold text-green-950 text-center'>Total Books</span>
        <span className='text-lg p-2 font-new font-bold text-green-950 text-center'>{size}</span>
      </div>

      <div className='mt-4 text-center text-xl bg-green-300 flex flex-col p-4 rounded-lg font-bold text-green-950'>
        Categories Available 
      </div>

      <div className='grid grid-cols-3 gap-3 w-full mt-5'>

        {listGenres?.map((val)=>{return <>
          <div className='bg-green-200 flex flex-col p-4 rounded-lg basis-[33%]'>{val.title}</div>
          </>})}

      </div>

    </div>
    </>
  )
}

export default Dashboard