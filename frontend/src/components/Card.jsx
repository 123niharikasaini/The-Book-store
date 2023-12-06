import React from 'react'
import { Link } from 'react-router-dom'

const Card = (props) => {
  return (
    <>
    
      <div className='flex-col items-center justify-evenly bg-gradient-to-tl from-green-700 to-green-100
      hover:shadow-myCustomShadow rounded-lg '>
        <div className='mx-[10%] my-[5%] md:m-5 text-center h-[70%] w-[80%]'><img src={props.url} alt=".." className='object-contain h-[100%] w-[100%] aspect-auto' /></div>
        <div className='text-center m-2 font-bold h-[15%] overflow-auto'>{props.title}</div>
        <Link to={`/${props.id}`}>
        <div className='relative text-center bg-green-900 rounded-b-lg p-[2px] text-white font-semibold hover:text-green-950 hover:bg-green-200'>
          <button>More info</button>
          </div></Link>
          
        
      </div>
      
    </>
  )
}

export default Card