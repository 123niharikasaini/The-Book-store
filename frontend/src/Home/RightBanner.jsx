import React, { useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import { Link } from 'react-router-dom';

const RightBanner = () => {

  const [search,setSearch]=useState("");

  const change=(val)=>{
    setSearch(val.target.value);
    console.log(search);
  }

  // const call=(event)=>{
  //   event.preventDefault();
  //   const 
  // }

  return (
    <div>
        <div className='flex justify-center items-center'>
                <input type="text" name="search" id="search" placeholder='Search For Book'className='w-[300px] md:w-[500px] m-2 outline-none p-2 text-center rounded-lg'onChange={change} value={search}/>
                <Link to={`/name/${search}`}><button className='flex items-center gap-2 bg-transparent px-3 py-2 rounded-md hover:text-green-700 transition-all ease-in duration-100' type='submit'>
                  <BsSearch/> <div className='hidden md:block'> Search</div></button></Link>
        </div>
    </div>
  )
}

export default RightBanner