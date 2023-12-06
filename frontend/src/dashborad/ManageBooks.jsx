import React, { useState } from 'react'
import { useEffect } from 'react';
import axios from 'axios'
import { MdDelete, MdEdit } from "react-icons/md";
import {Link} from 'react-router-dom'

const ManageBooks = () => {
  const [books,setBooks]=useState([]);

  useEffect(()=>{
    const fetching=async()=>{
        const response=await axios.get("http://localhost:5000/books/all-books");
        setBooks(response.data);
        // console.log(books);
        // console.log(response.data);
    }

    fetching();
  },[])

  

  return (
    <>
      <div className='m-2 mt-8 p-2 flex-col w-[62%] sm:w-[73%] pb-4'>
      <div className='text-center text-2xl sm:text-3xl text-green-900 font-extrabold '>
        Manage Books
        </div>

      <div className='mt-4 mx-0 p-2 border-[2px] border-green-950 w-full'>
        {/* a table */}
       
          <div className='flex text-green-800 w-full'>
          <span className='p-2  border-b-2 border-r-2 border-green-950 text-center w-[20%] overflow-x-auto'>Ids</span>
          <span className='p-2  border-b-2 border-r-2 border-green-950 text-center w-[30%] overflow-x-auto'>Title</span>
          <span className='p-2  border-b-2 border-r-2 border-green-950 text-center w-[20%] overflow-x-auto'>Author</span>
          <span className='p-2  border-b-2 border-green-950 text-center w-[30%] overflow-x-auto'>
            Manage
          </span>
          </div>

          {
            books?.map((val)=>{
              return <>
              <div className='flex  text-green-800 w-full'>
                <span className='p-2  border-b-[1px] border-r-[1px] border-green-950 text-center w-[20%] overflow-x-auto'>{val._id}</span>
                <span className='p-2  border-b-[1px] border-r-[1px] border-green-950 text-center w-[30%] overflow-y-auto'>{val.bookTitle}</span>
                <span className='p-2  border-b-[1px] border-r-[1px] border-green-950  text-center w-[20%] overflow-x-auto'>{val.bookAuthor}</span>
                <span className='p-2  border-b-[1px] border-green-950 text-center w-[30%] overflow-x-auto
                flex justify-evenly
                '>
               
                <Link to={`/admin/dashboard/edit-book/${val._id}`}><span className='hover:text-green-500'><MdEdit /></span></Link>
                <Link to={`/admin/dashboard/delete/${val._id}`}><span className='hover:text-red-500'><MdDelete/></span></Link>
                </span>
              </div>
          </>
              
            })
          }
      

      </div>
      
      </div>
    </>  
    )
}

export default ManageBooks