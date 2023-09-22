// import React from 'react'
import { useEffect } from "react";
import Login from "../components/Login";
import { LoginPageType } from "../Types/pagesProps";

const LoginPage = ({ setCurrentLinks, setCurrentUser }: LoginPageType): JSX.Element => {

  useEffect(() => {
    setCurrentUser("guest");
  })

  return (
    <Login setCurrentLinks={setCurrentLinks} />
  )
}

export default LoginPage;