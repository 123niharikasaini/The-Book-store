import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Desc from './Desc';

const MoreInfo = () => {
    const {id}=useParams();
    const [data,setData]=useState({});

    useEffect(()=>{
        const fetching=async()=>{
            const response=await axios.get(`http://localhost:5000/books/${id}`)
            setData(response.data);
            console.log(data)
            console.log(response.data)
        }
        fetching();
    },[])

  return (
    <>
    <div className='bg-green-50 min-h-screen py-24 px-6'>
    <Desc desc={data}/>
    </div>
    </>
  )
}

export default MoreInfo