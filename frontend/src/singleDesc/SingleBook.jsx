import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Desc from './Desc';

const SingleBook = () => {

  const {name}=useParams();
  const [data,setData]=useState([]);

  useEffect(()=>{
    const fetching=async()=>{
        console.log("started")
      const respond=await axios.get(`http://localhost:5000/books/name?name=${name}`)
      console.log("Fetching data ....")
      setData(respond.data);
      console.log("Fetched")
    //   console.log(data,"h");
      console.log(respond.data);
    }
    fetching();
  },[])

  return (
    <>
    <div className='bg-green-50 min-h-screen py-24 px-6'>
      {data.map((val)=>{
        return (<Desc desc={val}/>)
      })}
    </div>
    </>
  )
}

export default SingleBook