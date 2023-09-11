// import React from 'react'

import StudentTable from "../components/StudentTable";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const TablePage = ({setCurrentLinks, setCurrentUser}) => {

    const { name } = useParams();
    
    useEffect(() => {
        setCurrentUser(name);
    }, []);

  return (
    <StudentTable setCurrentLinks={setCurrentLinks} name={name} />
  )
}

export default TablePage;