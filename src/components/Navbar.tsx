// import React from 'react'
import { useState } from "react"; 

const Navbar = ({currentUser}) => {

  return (
    <div className='grid grid-cols-2 bg-slate-400 mx-10 py-4 border-2 border-black'>
        <div className='float-left text-left ml-10'>Welcome!!!</div>
        <div className='float-right text-right mr-10'>User: {currentUser}</div>
    </div>
  )
}

export default Navbar