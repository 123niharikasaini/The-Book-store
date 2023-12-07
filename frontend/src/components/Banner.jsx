import React,{useContext} from 'react'
import RightBanner from '../Home/RightBanner'
import LeftBanner from '../Home/LeftBanner'
import { AuthContext } from '../contacts/AuthProvider'

const Banner = () => {
  // getting the user from AuthProvider context
  const {user}=useContext(AuthContext)

  return (
    <>
    <div className='flex-col items-center w-full bg-green-50 px-4 pt-24 pb-8 lg:px-24 md:py-20 justify-between space-y-10'>
        {/* <div className='text-center text-2xl text-green-800'>Welcome Back....    {user?user.email:""}</div> */}
        <LeftBanner/>
        <RightBanner/>
    </div>
    </>
  )
}

export default Banner