import React from 'react'
import { useEffect,useState } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import "./home.css"
import { Link } from 'react-router-dom';
import MovieList from './movielist';

const Home = () => {
  const [popular , setPopular] = useState([]);
    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=0113b210fb5cd5128b1e62da3cb10634')
        .then(response => response.json())
        .then(data => setPopular(data.results))
       },[])
  return (
    <div>
      <Carousel 
      showThumbs = {false} 
      autoPlay = {true}
      infiniteLoop={true}
      transitionTime={1}
      showStatus={false}
      
      >
        
      
      {popular.map((movie)=>(
        <Link to={`/movie/${movie.id}`}>
        <>
        <div className='poster w-full block' ><img  className='rounded-xl' src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} alt="" /></div>
       <div className='text-white flex flex-col h-3  absolute bottom-36 items-start justify-end font-bold p-10 '>
        <div  className=' title text-6xl p-2'>{movie.original_title}</div>
        <div className='text-xl p-2'>{movie.release_date}</div>
        <div className='p-2'>{movie.vote_average}</div>
             
        </div>
        <div  className='text-white w-1/2 text-left text-sm p-10 '>{movie.overview}</div>
        </>
       </Link>
      ))}
     
      </Carousel>
      <MovieList/>
    </div>
  )
}

export default Home
