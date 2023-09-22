// import React from 'react'

import StudentTable from "../components/StudentTable";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { TablePageType } from "../Types/pagesProps";

const TablePage = ({ setCurrentLinks, setCurrentUser }: TablePageType): JSX.Element => {

  const { name } = useParams();

  useEffect(() => {
    setCurrentUser(name!);
  }, []);

  return (
    <StudentTable setCurrentLinks={setCurrentLinks} name={name!} />
  )
}

export default TablePage;