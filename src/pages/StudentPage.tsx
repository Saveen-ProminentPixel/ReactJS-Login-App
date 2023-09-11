// import React from 'react'
// import users from '../users'

import { useParams } from "react-router-dom";
import Student from "../components/Student";
import { useEffect } from "react";



const StudentPage = ({setCurrentLinks, setCurrentUser}) => {

    const { name } = useParams();
    
    useEffect(() => {
        setCurrentUser(name);
    }, []);

  return (
    <Student setCurrentLinks={setCurrentLinks} name={name} />
  )
}

export default StudentPage;