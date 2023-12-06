import React from 'react'

const Image = (props) => {
  return (
    <div className='h-[500px] w-full p-2 md:p-5'>
        <img src={props.url} alt='..' className='w-full h-full object-contain aspect-auto'/>
        </div>
  )
}

export default Image