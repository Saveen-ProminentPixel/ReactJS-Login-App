// import React from 'react'

import { useParams } from "react-router-dom";
import BanyanUser from "../components/BanyanUser";
import { BanyanUserPageType } from "../Types/pagesProps";

const BanyanUserPage = ({ setCurrentUser, banyanUserList, setCurrentLinks, setStudentAccess, setProductAccess, setEmployeeAccess }: BanyanUserPageType) => {

    const username = useParams().username;
    console.log(username);

    return (
        <BanyanUser username={username} setCurrentUser={setCurrentUser} banyanUserList={banyanUserList} setCurrentLinks={setCurrentLinks} setStudentAccess={setStudentAccess} setEmployeeAccess={setEmployeeAccess} setProductAccess={setProductAccess} />
    )
}

export default BanyanUserPage;