// import React from 'react'
import Table from 'react-bootstrap/Table';
import { useEffect } from "react";
import users from '../users';

const StudentTable = ({setCurrentLinks, name}) => {

  const links = [
    {label: "Home", path: "/"},
    {label: "Back", path: `/user/${name}`},
];

useEffect(() => {
    setCurrentLinks(links);
}, []);


let currentUser;
    for(const user of users){
        if(user.name === name){
            currentUser = user;
        }
    }

    const capitalName: string = name.toUpperCase();

  return (
    <div className='mx-20 flex place-content-center bg-green-300 rounded-xl py-10'>
      <Table striped bordered hover>
      <thead>
        <tr className='bg-pink-300'>
          <th className='px-10 text-center'>Name</th>
          <th className='px-10 text-center'>UserName</th>
          <th className='px-10 text-center'>Password</th>
          <th className='px-10 text-center'>Email</th>
        </tr>
      </thead>
      <tbody>
        <tr className='bg-pink-100'>
          <td className='px-10 text-center'>{capitalName}</td>
          <td className='px-10 text-center'>{currentUser?.username}</td>
          <td className='px-10 text-center'>{currentUser?.password}</td>
          <td className='px-10 text-center'>{currentUser?.email}</td>
        </tr>
        {/* <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr> */}
      </tbody>
    </Table>
    </div>
    
  )
}

export default StudentTable;