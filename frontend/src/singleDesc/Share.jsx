import React from 'react'

const Share = (props) => {
  return (
    <>
    <div className='bg-green-900 ml-[40%] w-[20%] text-center p-2 font-bold text-lg md:text-xl rounded-xl hover:shadow-myCustomShadow2 hover:text-white cursor-pointer overflow-auto'>
    <a href={props.url} target='_blank'><button>Buy</button></a>
    </div>
    </>
  )
}

export default Share