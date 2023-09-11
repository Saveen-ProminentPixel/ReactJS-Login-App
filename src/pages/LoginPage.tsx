// import React from 'react'
import { useEffect } from "react";
import Login from "../components/Login"

const LoginPage = ({setCurrentUser}) => {

    useEffect(() => {
        setCurrentUser("guest");
    })

  return (
    <Login />
  )
}

export default LoginPage;