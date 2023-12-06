import React, { useEffect, useState } from 'react'
import Card from '../components/Card'

const Cards = (props) => {
  return (
    <>
    <div className='mt-8 p-2'>
        <div className='p-2 text-center text-2xl font-bold text-green-600  border-b-2 border-black bg-green-100'>{props.name}</div>
        <div className='grid s:grid-cols-2 md:grid-cols-4 p-1 md:p-6 gap-4'>
            {props.list?.map((val)=>{
                return (<Card title={val.bookTitle} url={val.imgURL} id={val._id}/>)
            })}
        </div>
    </div>
    </>
  )
}

export default Cards