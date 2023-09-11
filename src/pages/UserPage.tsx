// import React from 'react'
import { useEffect } from "react";
import User from "../components/User"
import { useParams } from "react-router-dom";

const UserPage = ({setCurrentLinks, setCurrentUser}) => {

    const { name } = useParams();
    
    useEffect(() => {
        setCurrentUser(name);
    }, []);

  return (
    <User setCurrentLinks={setCurrentLinks} name={name} />
  )
}

export default UserPage