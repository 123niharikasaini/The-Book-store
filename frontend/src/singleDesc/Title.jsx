import React from 'react'

const Title = (props) => {
  return (
    <>
    <div className='bg-green-300 text-center rounded-t-lg font-bold text-2xl md:text-4xl p-3
     text-green-950 font-new'>
        {props.title}
        </div>
    </>
  )
}

export default Title