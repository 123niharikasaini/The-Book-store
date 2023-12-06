import React from 'react'
import Box from './Box'

const Category = (props) => {
  return (
    <div className='grid grid-cols-3 md:grid-cols-5 m-2 p-2 gap-2 '>
        {props.list?.map((val)=>{
            return (
                <Box value={val}/>
            )
            })}
    </div>
  )
}

export default Category