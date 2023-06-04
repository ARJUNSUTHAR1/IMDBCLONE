import React from 'react'
import { useEffect, useState } from 'react'
import Card from './card'
import { useParams } from 'react-router-dom'
const MovieList = () => {
  const [movielist, setMovieList] = useState([]);
  const { type } = useParams()
  useEffect(() => {
    getData()
  }, [])
  useEffect(() => {
    getData()
  }, [type])
  const getData = () => {

    fetch(`https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=0113b210fb5cd5128b1e62da3cb10634`)
      .then(response => response.json())
      .then(data => setMovieList(data.results))

  }

  return (
    <div>
      <h2 className='text-white font-bold mx-9 my-5'>{(type ? type : "POPULAR").toUpperCase()}</h2>

      <div className='flex flex-wrap justify-center'>


        {movielist.map((movie, index) => (
          <Card key={index} movie={movie} />
        ))}
      </div>
    </div>
  )
}

export default MovieList
