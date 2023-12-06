import React from 'react'

const Box = (props) => {
  return (
    <div className='p-2 bg-green-200 text-center font-new font-black rounded-lg text-xs md:text-lg overflow-auto'>
        {props.value}
    </div>
  )
}

export default Box