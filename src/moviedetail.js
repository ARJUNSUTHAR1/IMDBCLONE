import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import "./moviedetail.css"
const MovieDetail = () => {
    const [moviedetail, setMovieDetail] = useState([]);
  const { id } = useParams()
  useEffect(() => {
    getData()
  }, [])
  useEffect(() => {
    getData()
  }, [id])
  const getData = () => {

    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=0113b210fb5cd5128b1e62da3cb10634`)
      .then(response => response.json())
      .then(data => setMovieDetail(data))

  }
  return (
    <div className='h-full-screen '>
      <div className=' relative '><img className=' back rounded-xl w-4/5 m-auto  ' src={`https://image.tmdb.org/t/p/original${moviedetail.backdrop_path}`} /> </div>
      <div className=' w-60 absolute bottom-0 right-60 top-90  '> <img className='rounded-xl  ' src={`https://image.tmdb.org/t/p/original${moviedetail.poster_path}`} />  </div>
      
      <div className='absolute bottom-0 w-2/5  text-white mx-20 left-20  h-3/5'> 
        <div  className=' title text-xl font-bold '>{moviedetail.original_title}</div>
        <div className=' text-lg'>{moviedetail.tagline}</div>

        <div className=' text-lg'>rating  : {moviedetail.vote_average}</div>
        <div className=' text-lg'>Total vote : { moviedetail.vote_count}</div>
        <div className=' text-lg'>Runtime : {moviedetail.runtime} minutes</div>
        <div className='text-lg '>Release Date : {moviedetail.release_date}</div>
        {/* <div className=' text-lg'>{moviedetail.genres.map(genre=>(
          <span className='p-2 mx-3 border-2 rounded-3xl'>{genre.name}</span>
        ))}</div> */}
        <h1 className='text-2xl font-bold'>SYNOPSIS</h1>
        <div>{moviedetail.overview}</div>
      </div>
    </div>
    
  )
}

export default MovieDetail
