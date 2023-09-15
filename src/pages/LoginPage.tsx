// import React from 'react'
import { useEffect } from "react";
import Login from "../components/Login"

const LoginPage = ({setCurrentLinks, setCurrentUser}) => {

    useEffect(() => {
        setCurrentUser("guest");
    })

  return (
    <Login setCurrentLinks={setCurrentLinks} />
  )
}

export default LoginPage;