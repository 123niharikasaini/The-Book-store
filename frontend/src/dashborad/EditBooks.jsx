import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { IoMdArrowRoundBack } from "react-icons/io";

const EditBooks = () => {
  // const [book,setBook]=useState([]);
  const {id}=useParams();
  const nav=useNavigate();

  const [title,setTitle]=useState();
  const [author,setAuthor]=useState();
  const [img,setImg]=useState();
  const [pdf,setPdf]=useState();
  const [desc,setDesc]=useState();
  const [category,setCategory]=useState([]);


  useEffect(()=>{
    const fetching=async()=>{
      const res=await axios.get(`${import.meta.env.VITE_BASE_URL}/${id}`);
      // console.log(res.data);
      // setBook(res.data);
      setTitle(res.data.bookTitle)
      setAuthor(res.data.bookAuthor)
      setImg(res.data.imgURL)
      setPdf(res.data.pdfURL)
      setDesc(res.data.bookDesc)
      setCategory([...res.data.category])
    }
    fetching();
  },[])

  const edit=(obj)=>{
    obj.preventDefault();
    const form=obj.target;

    const bookTitle=form.bookTitle.value;
    const bookAuthor=form.bookAuthor.value;
    const imgURL=form.imgURL.value;
    const pdfURL=form.pdfURL.value;
    const bookDesc=form.desc.value;

    const updateObj={
      // these variable name should be same as there in the schema of database
      // otherwise nothing will be updated
      bookTitle,bookAuthor,imgURL,pdfURL,bookDesc,category
    }
    // console.log(updateObj)

    // updating data to the database
    const sending=async()=>{
      const response=await axios.patch(`${import.meta.env.VITE_BASE_URL}/update/${id}`,updateObj,
      {headers:{"Content-Type":"application/json"},}
      )
      .then(response=>{alert('Data updated');
                        form.reset();})
      .catch((error)=>{alert(error)})

    
                        
    }

    sending();
  }


  return (
    <>
    
    <div className='m-2 mt-8 p-2 flex-col w-[62%] sm:w-[73%]'>
    <button className='text-2xl' onClick={()=>{return nav(-1)}}><IoMdArrowRoundBack /></button>
      <div className='text-center text-2xl sm:text-3xl text-green-900 font-extrabold '>Edit Book</div>
      {/* form */}
      <div className='my-8 sm:my-12 p-1 sm:p-4 border-2 border-green-900 rounded-lg'>
        <form onSubmit={edit}>

          <div className='flex flex-col sm:flex-row w-full sm:items-center'>
            {/* inserting Name and Author */}
            <div className='flex flex-row sm:flex-col p-1 sm:p-4 sm:w-1/2 items-center'>
              <label htmlFor="bookTitle" className='text-center py-2 text-sm sm:text-xl text-green-700'>Book Title</label>
              <input type="text" name="bookTitle" id="bookTitle" placeholder='Book Name' className='ml-2 sm:ml-0 p-2 rounded-md text-center w-full'
              defaultValue={title}/>
            </div>
            <div className='flex flex-row sm:flex-col p-1 sm:p-4 sm:w-1/2 items-center'>
              <label htmlFor="bookAuthor" className='text-center py-2 text-sm sm:text-xl text-green-700'>Book Author</label>
              <input type="text" name="bookAuthor" id="bookAuthor" placeholder='Author Name' className='ml-2 sm:ml-0 p-2 rounded-md text-center w-full '
              defaultValue={author}/>
            </div>
          </div>

          <div className='flex flex-col sm:flex-row w-full sm:items-center'>
            {/* inserting Img and Pdf Url */}
            <div className='flex flex-row sm:flex-col p-1 sm:p-4 sm:w-1/2 items-center'>
              <label htmlFor="imgURL" className='text-center py-2 text-sm sm:text-xl text-green-700'>Image Url</label>
              <input type="url" name="imgURL" id="imgURL" placeholder='Image URL' className='ml-2 sm:ml-0 p-2 rounded-md text-center w-full'
              defaultValue={img}/>
            </div>
            <div className='flex flex-row sm:flex-col p-1 sm:p-4 sm:w-1/2 items-center'>
              <label htmlFor="pdfURL" className='text-center py-2 text-sm sm:text-xl text-green-700'>PDF Url</label>
              <input type="url" name="pdfURL" id="pdfURL" placeholder='Pdf URL' className='ml-2 sm:ml-0 p-2 rounded-md text-center w-full '
              defaultValue={pdf}/>
            </div>
          </div>

                    
             <div className='grid grid-cols-3 sm:grid-cols-4 gap-2 sm:gap-5'>
            {category?.map((val)=>{
              return (<div className='bg-green-300 text-center p-2 rounded-lg'>{val}</div>)
            })}
            </div>   


            <div className='flex flex-col mt-4'>
              <label htmlFor="desc" className='text-center py-2 text-sm sm:text-xl text-green-700'>Description</label>
              <textarea name="desc" id="desc" cols="30" rows="10" placeholder='Add description' required className='rounded-lg p-2'
              defaultValue={desc}/>
            </div>
          
          <button type='submit' className='text-center p-2 bg-green-400 mx-[30%] w-[40%] sm:mx-[45%] sm:w-[10%] my-7 rounded-xl hover:bg-green-900  
          hover:text-white transition-all ease-in duration-500 overflow-x-auto'>Update</button>
          
        </form>
      </div>
    </div>

    </>
  )
}

export default EditBooks