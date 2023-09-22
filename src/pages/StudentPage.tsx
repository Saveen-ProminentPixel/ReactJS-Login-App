// import React from 'react'
// import users from '../users'

import { Params, useParams } from "react-router-dom";
import Student from "../components/Student";
import { useEffect } from "react";
import { StudentPageType } from "../Types/pagesProps";



const StudentPage = ({ setCurrentLinks, setCurrentUser }: StudentPageType): JSX.Element => {

  const { name }: Readonly<Params<string>> = useParams();

  useEffect(() => {
    setCurrentUser(name!);
  }, []);

  return (
    <Student setCurrentLinks={setCurrentLinks} name={name!} />
  )
}

export default StudentPage;