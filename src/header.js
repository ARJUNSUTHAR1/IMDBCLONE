import React from 'react'
import { Link } from 'react-router-dom'
// import Nav from './nav'
const header = () => {
  return (
    <div className="flex">
      <Link to = "/"><img src='logo.jpg' className='w-14 m-4 rounded-xl'/></Link>

      <Link to = "/movies/popular" className='text-white m-4 '>popular</Link>
      <Link to = "/movies/top_rated" className='text-white m-4 '>toprated</Link>
      <Link to = "/movies/upcoming" className='text-white m-4 '>upcoming</Link>
    </div>
  )
}

export default header
