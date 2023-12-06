import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
// import OneCard from './OneCard';
import Card from '../components/Card';

const Calling = () => {

  const {category}=useParams();
  // using loader
  // const {category}=useLoaderData()
  const [books,setBooks]=useState([]);

  useEffect(()=>{
    
    const fetching=async()=>{
      const response=await axios.get(`http://localhost:5000/books/find?category=${category}`)
      setBooks(response.data);
      // console.log(books);
      console.log(response.data);
    }

    fetching();
    
  },[])

  return (
    <>
    <div className='bg-green-50 pt-12 min-h-screen'>
    <div className='grid grid-cols-2 md:grid-cols-4 p-2 md:p-6 gap-4'>
       {books?.map((val)=>{
        return (<Card title={val.bookTitle} url={val.imgURL} id={val._id}/>)
       })}
    </div>
    </div>
    </>
  )
}

export default Calling