// import React from 'react'
// import { useState } from "react"; 

const Navbar = ({currentUser}) => {

  return (
    <div className='grid overflow-hidden grid-cols-2 justify-items-end bg-slate-400 mx-10 py-4 border-2 border-black fixed'>
        <div className='float-left justify-items-end text-left ml-10'>Welcome!!!</div>
        <div className='float-right justify-items-end text-right mr-10'>User: {currentUser}</div>
    </div>
  )
}

export default Navbar