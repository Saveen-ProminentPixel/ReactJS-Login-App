// import React from 'react'

import { useEffect } from "react";

const User = ({setCurrentLinks, name}) => {

    const links = [
        {label: "Home", path: "/"},
        {label: "Student", path: `/user/student/${name}`},
        {label: "StudentTable", path: `/user/studenttable/${name}`},
    ];

    useEffect(() => {
        setCurrentLinks(links);
    }, []);

    const currentUser = name.toUpperCase();

    
  return (
    <div className="bg-purple-600 mx-10 py-20 text-center">
        <div className="font-extrabold text-white text-4xl">
            Hello again {currentUser} !!!!!
        </div>
        
    </div>
  )
}

export default User;