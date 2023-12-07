import React, { useState } from 'react'
import axios from 'axios'
// import listGenres from '../APIs/Genre'

const Upload = () => {

  const [category,setCategory]=useState([]);
  const [opt,setOpt]=useState('');

  const updateCategory=(event)=>{
    setOpt(event.target.value)
  }

  const addCategory=()=>{
    const updatedCategory=[...category,opt]
    setCategory(updatedCategory)
    console.log(updatedCategory)
    setOpt("")
  }


  const uploading=(event)=>{

    event.preventDefault();
    const form=event.target;
    // console.log(form)
    const bookTitle=form.bookTitle.value;
    const bookAuthor=form.bookAuthor.value;
    const imgURL=form.imgURL.value;
    const pdfURL=form.pdfURL.value;
    const bookDesc=form.desc.value;

    // creating the object
    const bookObj={
      bookTitle,bookAuthor,bookDesc,category,imgURL,pdfURL
    }

    // uploading data to the database
    const sending=async()=>{
      const response=await axios.post(`${import.meta.env.VITE_BASE_URL}/add`,bookObj,
      {headers:{"Content-Type":"application/json"},
      })
      .then((response=>{alert('Data uploaded');
                        form.reset();}))
      .catch((error)=>{alert(error)})
                        
    }

    sending();
    
  }
  

  return (
    <>
    <div className='m-2 mt-8 p-2 flex-col w-[62%] sm:w-[73%]'>
      <div className='text-center text-2xl sm:text-3xl text-green-900 font-extrabold '>Add a New Book</div>
      {/* form */}
      <div className='my-8 sm:my-12 p-1 sm:p-4 border-2 border-green-900 rounded-lg'>
        <form onSubmit={uploading}>

          <div className='flex flex-col sm:flex-row w-full sm:items-center'>
            {/* inserting Name and Author */}
            <div className='flex flex-row sm:flex-col p-1 sm:p-4 sm:w-1/2 items-center'>
              <label htmlFor="bookTitle" className='text-center py-2 text-sm sm:text-xl text-green-700'>Book Title</label>
              <input type="text" name="bookTitle" id="bookTitle" placeholder='Book Name' className='ml-2 sm:ml-0 p-2 rounded-md text-center w-full'/>
            </div>
            <div className='flex flex-row sm:flex-col p-1 sm:p-4 sm:w-1/2 items-center'>
              <label htmlFor="bookAuthor" className='text-center py-2 text-sm sm:text-xl text-green-700'>Book Author</label>
              <input type="text" name="bookAuthor" id="bookAuthor" placeholder='Author Name' className='ml-2 sm:ml-0 p-2 rounded-md text-center w-full '/>
            </div>
          </div>

          <div className='flex flex-col sm:flex-row w-full sm:items-center'>
            {/* inserting Img and Pdf Url */}
            <div className='flex flex-row sm:flex-col p-1 sm:p-4 sm:w-1/2 items-center'>
              <label htmlFor="imgURL" className='text-center py-2 text-sm sm:text-xl text-green-700'>Image Url</label>
              <input type="url" name="imgURL" id="imgURL" placeholder='Image URL' className='ml-2 sm:ml-0 p-2 rounded-md text-center w-full'/>
            </div>
            <div className='flex flex-row sm:flex-col p-1 sm:p-4 sm:w-1/2 items-center'>
              <label htmlFor="pdfURL" className='text-center py-2 text-sm sm:text-xl text-green-700'>PDF Url</label>
              <input type="url" name="pdfURL" id="pdfURL" placeholder='Pdf URL' className='ml-2 sm:ml-0 p-2 rounded-md text-center w-full '/>
            </div>
          </div>

          <div className='text-center w-1/2 mx-[25%] p-2 flex flex-col'>
            {/* for category */}
            <label htmlFor="category" className='text-center py-2 text-sm sm:text-xl text-green-700'>Enter the categories</label>
            <input type='text' name='category' id='category' placeholder='Enter the category' value={opt} onChange={updateCategory} className='rounded-lg text-center p-2'/>
          <button className='text-center p-2 text-sm sm:text-base bg-green-400 mx-[25%] w-[50%] sm:mx-[40%] sm:w-[20%] my-7 rounded-xl hover:bg-green-900  hover:text-white transition-all ease-in duration-500' onClick={addCategory}>ADD</button>

            </div>           
             <div className='grid grid-cols-3 sm:grid-cols-4 gap-2 sm:gap-5'>
            {category?.map((val)=>{
              return (<div className='bg-green-300 text-center p-2 rounded-lg'>{val}</div>)
            })}</div>   


            <div className='flex flex-col mt-4'>
              <label htmlFor="desc" className='text-center py-2 text-sm sm:text-xl text-green-700'>Description</label>
              <textarea name="desc" id="desc" cols="30" rows="10" placeholder='Add description' required className='rounded-lg p-2'/>
            </div>
          
          <button type='submit' className='text-center p-2 bg-green-400 mx-[40%] w-[20%] sm:mx-[45%] sm:w-[10%] my-7 rounded-xl hover:bg-green-900  hover:text-white transition-all ease-in duration-500'>Upload</button>
          
        </form>
      </div>
    </div>
    </>
  )
}

export default Upload




{/* using checkboxes */}
            {/* <div  className='grid grid-cols-3 md:grid-cols-5 gap-3 border-1 m-2'>
            {listGenres.map((val,index)=>{
                  return (<>
                  <div className='flex justify-around items-center'>
                    <label htmlFor={val.title} className='text-center py-2 text-sm sm:text-xl text-green-700'>{val.title}</label>
                    <input type='checkbox' key={index} name={val.title} value={val.category} onChange={addCategory}/>
                    </div>
                    </>
                  )
                })}
                </div> */}