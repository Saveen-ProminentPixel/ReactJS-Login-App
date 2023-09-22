// import React from 'react'
// import Link from "./Link";

// import { useState } from "react";
import { Link } from "react-router-dom";
import { SideBar2Type } from "../Types/componentsTypes";

const Sidebar = ({ links }: SideBar2Type): JSX.Element => {

    // const links = [
    //     {label: "Home", path: "/"},
    //     // {label: "Accordion", path: "/accordion"},
    //     // {label: "Buttons", path: "/buttons"},
    //     // {label: "Modal", path: "/modal"},
    //     // {label: "Table", path: "/table"},
    //     // {label: "Counter", path: "/counter"},
    // ];

    const renderedItems = links.map((link) => {
        // return <Link key={link.label} to={link.path} className="mb-3" activeClassName="font-bold border-l-4 border-blue-500 pl-2">{link.label}</Link>;
        // return <div className="font-bold text-cyan-600 py-2 ml-2" key={link.label}><a href={link.path}>{link.label}</a></div>
        return <div className="font-bold text-cyan-600 py-2 ml-2" key={link.label}><Link to={link.path}>{link.label}</Link></div>
    });

    return (
        <div className="sticky top-0 overflow-y-scroll flex flex-col items-start w-1/12 bg-slate-300 mx-10">
            {renderedItems}
        </div>
    );
}

export default Sidebar;