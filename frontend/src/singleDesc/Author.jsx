import React from 'react'

const Author = (props) => {
  return (
    <div className='p-2 text-center bg-green-300 font-new text-xl rounded-t-lg'>{props.author}</div>
  )
}

export default Author