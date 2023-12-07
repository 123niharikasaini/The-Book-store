import axios from 'axios';
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Delete = () => {

    const {id}=useParams();
    const nav=useNavigate();

    const deleting=()=>{
        const process=async()=>{
            const res= await axios.delete(`${import.meta.env.VITE_BASE_URL}/delete/${id}`)
            .then(()=>{
                nav(-1);
                return alert("Deleted")})
            .catch((error)=>{return alert(error)})
            
        }
        process();
    }

  return (
    <>
    <div className='m-2 mt-8 p-2 flex-col w-[62%] sm:w-[73%]'>
      <div className='text-center text-2xl sm:text-3xl text-green-900 font-extrabold '>Delete</div>
      <div className='my-8 sm:my-12 mx-3 sm:mx-8 p-1 sm:p-4 border-2 border-green-900 rounded-lg'>
            <div className='text-xl sm:text-2xl text-center'>Are You Sure, you want to delete it ??</div>
            <div className='flex justify-evenly mt-8'>
                
                <button className='p-3 sm:p-4 bg-green-500 rounded-lg hover:text-white hover:font-bold 
                hover:shadow-myCustomShadow2' onClick={()=>{return nav(-1)}}>
                    Cancel</button>
                
                
                <button className='p-3 sm:p-4 bg-red-500 rounded-lg hover:text-white hover:font-bold 
                hover:shadow-myCustomShadow2' onClick={deleting}>
                    Yes, I am Sure</button>
                
            </div>
      </div>
      </div>
      
    </>
  )
}

export default Delete