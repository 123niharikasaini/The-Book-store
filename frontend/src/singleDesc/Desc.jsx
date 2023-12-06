import React from 'react'
import Title from './Title'
import Image from './Image'
import Author from './Author'
import Details from './Details'
import Category from './Category'
import Share from './Share'

const Desc = (props) => {
  return (
    <>
    <div className='flex-col'>
    <Title title={props.desc.bookTitle}/>
    <Image url={props.desc.imgURL}/>
    <Author author={props.desc.bookAuthor}/>
    <Category list={props.desc.category}/>
    <Details detail={props.desc.bookDesc}/>
    <Share url={props.desc.pdfURL}/>
    </div>
    </>
  )
}

export default Desc