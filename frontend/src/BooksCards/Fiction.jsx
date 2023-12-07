import {React,useState,useEffect} from 'react'
import Cards from '../Home/Cards';
import axios from 'axios'

const FictionCard = (props) => {
    const [books,setBooks]=useState([]);

    useEffect(()=>{
    
      const fetching=async()=>{
        const response=await axios.get(`${import.meta.env.VITE_BASE_URL}/find?category=Fiction`)
        const firstFour=response.data.slice(0,10)
        setBooks(firstFour);
        // setBooks(response.data);
        // console.log(books);
        // console.log(response.data);
      }
  
      fetching();
      
    },[])

  return (
    <>
    <Cards list={books} name={props.name}/>
    </>
  )
}

export default FictionCard