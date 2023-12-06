import React from 'react'
import Banner from '../components/Banner';
import Quotes from './Quotes';
import Genres from './Genres';
import listGenres from '../APIs/Genre';
import SelfHelpCard from '../BooksCards/SelfHelp';
import FictionCard from '../BooksCards/Fiction';
import HorrorCard from '../BooksCards/Horror';

const Home = () => {
  return (<>
    <div className='bg-green-50'>
    <Banner/>
    <Quotes/>
    <Genres name="Genres" list={listGenres}/>
    <SelfHelpCard name="Famous Self Help Books"/>
    <FictionCard name="Famous Fiction Books"/>
    <HorrorCard name="Famous Horror Books"/>
    </div>
    
    </>
  )
}

export default Home;