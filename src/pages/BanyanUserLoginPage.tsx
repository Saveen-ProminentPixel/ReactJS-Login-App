// import React from 'react'

import { useEffect } from "react";
import BanyanUserLogin from "../components/BanyanUserLogin";
import { BanyanUserLoginPageType } from "../Types/pagesProps";

const BanyanUserLoginPage = ({ setCurrentLinks, banyanUserList }: BanyanUserLoginPageType) => {


    const links = [
        { label: "Home", path: "/" },
    ];

    useEffect(() => {
        setCurrentLinks(links);
    }, [])



    return (
        <BanyanUserLogin banyanUserList={banyanUserList} />
    )
}

export default BanyanUserLoginPage;