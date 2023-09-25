// import React from 'react'

import { useEffect } from "react";
import { UserType } from "../Types/componentsTypes";

const User = ({ setCurrentLinks, name }: UserType): JSX.Element => {

    const links = [
        { label: "Home", path: "/" },
        { label: "Student", path: `/user/student/${name}` },
        { label: "Student Table", path: `/user/studenttable/${name}` },
        { label: "All Students", path: `/user/allstudent/` },
        { label: "Student RDT", path: `/student/reacttable/` },
        { label: "Product RDT", path: `/product/reacttable/` },
        { label: "Employee RDT", path: `/employee/reacttable/` },
        { label: "Manage Roles", path: `/user/managerole/` },
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