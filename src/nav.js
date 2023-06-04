import React from 'react'

const Nav = () => {
  return (
    <div className='flex p-5 ' >
      <img  src='logo.jpg' className='w-14 m-2'/>
      <ul className='flex'>
        <li className='text-white m-2'><a href="">popular</a></li>
        <li className='text-white m-2'><a href=""></a>toprated</li>
        <li className='text-white m-2'><a href=""></a>upcoming</li>
      </ul>
    </div>
  )
}

export default Nav
