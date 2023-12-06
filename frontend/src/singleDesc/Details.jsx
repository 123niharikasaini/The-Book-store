import React from 'react'

const Details = (props) => {
  return (
    <div className='m-2 p-2'>
        <div className='font-bold text-2xl font-new underline'>Description</div>
        <div className='mt-2 font-new text-lg md:text-xl'>{props.detail}</div>
        </div>
  )
}

export default Details