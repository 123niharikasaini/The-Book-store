import {React,useState,useEffect} from 'react'
import Cards from '../Home/Cards';

const SelfHelpCard = (props) => {
    const [books,setBooks]=useState([]);

  useEffect(()=>{
    fetch(`${import.meta.env.VITE_BASE_URL}/books/find?category=Self Help`).then(res=>res.json()).then(data=>setBooks(data));
    setBooks(books.slice(0,4))
  },[]);

  return (
    <>
    <Cards list={books} name={props.name}/>
    </>
  )
}

export default SelfHelpCard