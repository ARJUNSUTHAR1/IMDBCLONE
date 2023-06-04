import React, { useEffect ,useState } from 'react'
import Skeleton , {SkeletonTheme}from 'react-loading-skeleton'

import { Link } from 'react-router-dom'
const Card = ({movie}) => {
    const [isloading , setIsLoading] = useState(true);
    useEffect(()=>{
        setTimeout(()=>{
            setIsLoading(false);
        }, 1500)
}, [])
  return <>
  {
      isloading ? 
      <div w-60>
         <SkeletonTheme baseColor='#202020' highlightColor='#444'>
      <Skeleton height={300} duration={2}/>
      </SkeletonTheme>
      </div>
      :
     <Link  to={`/movie/${movie.id}`}>
        <div className=' relative hover:scale-110' ><img  className='rounded-xl w-60 m-5  ' src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="" />
         
       <div className='text-white absolute w-60 bottom-0 opacity-0 hover:opacity-100  h-full  p-10'>
        <div className='absolute bottom-10 hover:scale-110 h-3/5'> 
        <div  className=' title text-sm font-bold '>{movie.original_title}</div>
        <div className='text-sm '>{movie.release_date}</div>
        <div className=' text-sm '>{movie.vote_average}</div>
        <div  className='text-white  text-left text-sm '>{(movie.overview.slice(0,118))+"...."}</div>
        </div> 
        </div>
        </div>
     </Link>
  }
  </>
    
  
}

export default Card
