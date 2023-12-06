import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from './Sidebar'

const DashboardLayout = () => {
  return (
    <div className='bg-green-50 min-h-screen flex gap-1 sm:gap-4 flex-row'>
        <SideBar/>
        <Outlet/>
    </div>
  )
}

export default DashboardLayout