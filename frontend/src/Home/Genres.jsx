import React from 'react'
import { Link } from 'react-router-dom';

const Genres = (props) => {
  return (
    <>
    <div className='bg-green-50 p-2 mt-8'>
        <div className='p-2 text-center text-2xl font-bold text-green-600  border-b-2 border-black bg-green-100'>{props.name}</div>
        <div className='p-6 grid s:grid-cols-2 md:grid-cols-3 gap-3 border-black'>
          {/* <Options list={props.list}/> */}

          {/* printing all the genres */}
          {props.list?.map((val)=>{
              return (<Link to={`/book/${val.category}`}>
              <div className='bg-green-300 rounded-full p-3 text-center hover:bg-green-100
               hover:text-green-700 hover:shadow-myCustomShadow2 transition-all ease-linear duration-200 font-bold'>
                {val.title}</div></Link>
                );
          })}
          </div>
    </div>
    </>
  )
}

export default Genres