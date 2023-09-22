// import React from 'react'
import { StudentType } from "../Types/componentsTypes";
import { users } from "../users";
import { useEffect } from "react";

const Student = ({ setCurrentLinks, name }: StudentType): JSX.Element => {

    // const currentUser = users.reduce(user => {
    //     if(user.name === name){
    //         return user;
    //     }
    // });

    const links = [
        { label: "Home", path: "/" },
        { label: "Back", path: `/user/${name}` },
    ];

    useEffect(() => {
        setCurrentLinks(links);
    }, []);


    let currentUser;
    for (const user of users) {
        if (user.name === name) {
            currentUser = user;
        }
    }

    const capitalName: string = name.toUpperCase();


    return (
        <div className="mx-10 bg-orange-300 px-20 rounded pb-56 pt-24 ml-28">
            <div className="text-center font-extrabold text-4xl bg-yellow-300 rounded-full mb-10">
                <div>
                    {capitalName}
                </div>
            </div>
            <div className="bg-pink-300 px-10 mx-10 rounded-xl py-10">
                <div className="text-center font-bold text-blue-500">
                    Email : {currentUser?.email}
                </div>
                <div className="text-center font-bold text-blue-500">
                    Username : {currentUser?.username}
                </div>
                {/* <div>
                {currentUser.password}
            </div> */}
            </div>
        </div>
    );
}

export default Student;