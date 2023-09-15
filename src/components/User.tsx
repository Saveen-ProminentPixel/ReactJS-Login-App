// import React from 'react'

import { useEffect } from "react";

const User = ({setCurrentLinks, name}) => {

    const links = [
        {label: "Home", path: "/"},
        {label: "Student", path: `/user/student/${name}`},
        {label: "Student Table", path: `/user/studenttable/${name}`},
        {label: "All Students", path: `/user/allstudent/`},
        {label: "User RDT", path: `/user/reacttable/`},
        {label: "Product RDT", path: `/product/reacttable/`},
        {label: "Employee RDT", path: `/employee/reacttable/`},
    ];

    useEffect(() => {
        setCurrentLinks(links);
    }, []);

    const currentUser = name.toUpperCase();

    
  return (
    <div className="bg-purple-600 mx-10 py-20 ml-28 text-center">
        <div className="font-extrabold text-white text-4xl">
            Hello again {currentUser} !!!!!
        </div>
        
    </div>
  )
}

export default User;