import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Cards from '../Home/Cards';
import Genres from '../Home/Genres' 
import listGenres from '../APIs/Genre';

const Shop = () => {

  const [data,setData]=useState([]);

  useEffect(()=>{
    const fetching=async()=>{
      const response=await axios.get("http://localhost:5000/books/all-books");
      setData(response.data);
      console.log(data);
    }
    fetching();
  },[])

  return (
    <>
    <div className='bg-green-50 p-12'>
      <Genres name="Search by Genres" list={listGenres}/>
      <Cards list={data} name="All books"/>
    </div>
    </>
  )
}

export default Shop