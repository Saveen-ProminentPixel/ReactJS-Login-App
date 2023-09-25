// import React from 'react'
// import Container from 'react-bootstrap/Container';
// import Navbar from 'react-bootstrap/Navbar';
import { Nav } from 'react-bootstrap';
import { HeaderType } from '../Types/componentsTypes';
import '../css/Dashboard.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Container } from "react-bootstrap";
// import { Navbar } from "react-bootstrap";

const Header = ({ currentUser }: HeaderType): JSX.Element => {
  return (
    // <Navbar className="bg-body-tertiary grid navbar text-center w-full fixed">
    //   <Container className='grid grid-col-2 bg-slate-300 w-full mr-24'>
    //     <Navbar.Brand href="#home">Welcome!!!!</Navbar.Brand>
    //     <Navbar.Collapse className="justify-content-end">
    //       <Navbar.Text>
    //         <a href="#login">User: {currentUser}</a>
    //       </Navbar.Text>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>
    <Nav className="navbar navbar-light bg-slate-500 justify-content-between w-full fixed">
      <a className="navbar-brand pl-48 font-bold text-white">Welcome!!!!</a>
      <a className='navbar-brand font-bold text-white' href="#login">User: {currentUser}</a>
    </Nav>
  );
}

export default Header;