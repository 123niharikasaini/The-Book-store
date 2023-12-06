import React, { useContext, useState, } from 'react'
import { AuthContext } from '../contacts/authProvider'
import { useLocation, useNavigate } from 'react-router-dom';
import { IoMdArrowRoundBack } from "react-icons/io";


const Logout = () => {

    const {logout}=useContext(AuthContext)
    const [error,setError]=useState(true);

    const location=useLocation();
    const navigate=useNavigate();

    const from=location.state?.from?.pathname || "/"

    const signout=()=>{
        logout().then(()=>{
            alert("Logout Successfully")
            navigate(from,{replace:true})
        }).catch((error)=>{
            const errorCode = error.code;
            const errorMessage = error.message;
            setError(errorMessage)
        })
    }

  return (<>
    <div className='text-center my-[20%]'>
        <button  onClick={signout} className='bg-green-500 p-4 rounded-lg font-new2 text-xl sm:text-2xl hover:shadow-myCustomShadow2 hover:text-white'>
            Logout</button>
            </div>

            <div className='mx-[45%] '>
                <button className='bg-green-500 p-4 rounded-lg font-new2 text-2xl hover:shadow-myCustomShadow2 hover:text-white flex justify-evenly text-center'
                onClick={()=>{return navigate(-1)}}>
                    <IoMdArrowRoundBack className='text-lg sm:text-xl '/><span className='text-lg sm:text-xl text-center'>Go Back</span></button>
                </div>
                </>

  )
}

export default Logout