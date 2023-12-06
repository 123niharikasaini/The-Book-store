import {React,useState,useEffect} from 'react'
import Cards from '../Home/Cards';

const HorrorCard = (props) => {
    const [books,setBooks]=useState([]);

  useEffect(()=>{
    fetch(`${import.meta.env.VITE_BASE_URL}/books/find?category=Horror`).then(res=>res.json()).then(data=>setBooks(data));
  },[]);

  return (
    <>
    <Cards list={books} name={props.name}/>
    </>
  )
}

export default HorrorCard