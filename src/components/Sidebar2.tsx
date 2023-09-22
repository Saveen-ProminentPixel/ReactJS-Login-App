// import React from 'react'
import { Nav } from "react-bootstrap";
// import { withRouter } from "react-router";
import '../css/Dashboard.css';
import { Link } from "react-router-dom";
import { SideBar2Type } from "../Types/componentsTypes";


const Sidebar2 = ({ links }: SideBar2Type): JSX.Element => {


    const renderedItems = links.map((link) => {
        // return <Link key={link.label} to={link.path} className="mb-3" activeClassName="font-bold border-l-4 border-blue-500 pl-2">{link.label}</Link>;
        // return <div className="font-bold text-cyan-600 py-2 ml-2" key={link.label}><a href={link.path}>{link.label}</a></div>
        // return <div className="font-bold text-cyan-600 py-2 ml-2" key={link.label}><Link to={link.path}>{link.label}</Link></div>
        return (
            <Nav.Item className="pl-4 font-semibold text-purple-800 text-lg py-2" key={link.label}>
                <Link to={link.path}>{link.label}</Link>
                {/* <Nav.Link href={link.path}>{link.label}</Nav.Link> */}
            </Nav.Item>
        )
    });


    return (
        <div>

            <Nav className="col-md-12 d-none d-md-block mt-14 bg-slate-300 sidebar w-40 pr-2"
            // activeKey="/home"
            // onSelect={selectedKey => alert(`selected ${selectedKey}`)}
            >
                <div className="sidebar-sticky"></div>
                {/* <Nav.Item>
                <Nav.Link href="/home">Active</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-1">Link</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-2">Link</Nav.Link>
            </Nav.Item> */}
                {renderedItems}
                {/* <Nav.Item>
                <Nav.Link eventKey="disabled" disabled>
                Disabled
                </Nav.Link>
            </Nav.Item> */}
            </Nav>

        </div>
    )
}

// const Sidebar2 = withRouter(Side);

export default Sidebar2;