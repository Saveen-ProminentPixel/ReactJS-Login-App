// import React from 'react'
import Table from 'react-bootstrap/Table';
import { useEffect, useState } from "react";
// import users from '../users';
import Modal from './Modal';
import AddModal from './AddModal';
import { AllStudentType } from '../Types/componentsTypes';
import { userListType } from '../App';

type userType = {
  name: string;
  password: string;
  username: string;
  email: string;
};

const AllStudent = ({setCurrentLinks, currentUser, setUserList, userList}: AllStudentType): JSX.Element => {

    const [showModal, setShowModal] = useState(false);
    const [showAddModal, setShowAddModal] = useState(false);
    const [editUser, setEditUser] = useState(currentUser);

    const handleEditClick = (user: userType): void => {
        setEditUser(user.name);
        setShowModal(true);
    }
    
    const handleClose = (): void => {
        setShowModal(false);
    }

    const handleAddClose = (): void => {
      setShowAddModal(false);
    }

    const handleDeleteClick = (user: userType): void => {
      // setEditUser(user.name);
      // setShowModal(true);
      console.log(userList);
      console.log(user);

      const newUserList: userListType[] = userList.filter(current => current.name !== user.name);
      setUserList(newUserList);
  }

    const handleAddClick = (): void => {
      setShowAddModal(true);
  }

    const actionBar = (
        <div>
            <button className='rounded bg-red-500 px-10 py-2' onClick={handleClose}>Cancel</button>
        </div>
    );
    const actionAddBar = (
      <div>
          <button className='rounded bg-red-500 px-10 py-2' onClick={handleAddClose}>Cancel</button>
      </div>
  );

    const modal = <Modal onClose={handleClose} actionBar={actionBar} name={editUser} userList={userList} ></Modal>
    const addModal = <AddModal onClose={handleAddClose} actionBar={actionAddBar} setUserList={setUserList} userList={userList} ></AddModal>

    const links = [
        {label: "Home", path: "/"},
        {label: "Back", path: `/user/${currentUser}`},
    ];
    
    useEffect(() => {
        setCurrentLinks(links);
    }, []);


    

    const renderedItems = userList.map((user) =>  {

        // function editclickHandle(){
        //     return <Modal />
        // }
        
        return (
            <tr key={user.name} className='bg-pink-100'>
              <td className='px-10 text-center'>{user.name}</td>
              <td className='px-10 text-center'>{user.username}</td>
              <td className='px-10 text-center'>{user.password}</td>
              <td className='px-10 text-center'>{user.email}</td>
              <td className='px-10 text-center'>
                <div className="dropdown">
                  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown button
                  </button>
                  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <button onClick={() => handleEditClick(user)} className='dropdown-item rounded bg-yellow-400 my-2 mx-3 w-32 pl-4'>Edit</button>
                    <button onClick={() => handleDeleteClick(user)} className='dropdown-item rounded bg-red-400 my-2 mx-3 w-32 pl-4'>Delete</button>
                    {/* <button onClick={() => handleClick(user)} className='dropdown-item rounded bg-green-400 my-2 mx-3 w-32 pl-4'>Add</button> */}
                  </div>
                </div>
              </td>
            </tr>
        )
    
    });

    // <button onClick={() => handleClick(user)} className='rounded bg-yellow-400 px-4'>Edit</button>

    // const capitalName: string = name.toUpperCase();


    return (
        <div className='mx-20 flex place-content-center ml-32 bg-green-300 rounded-xl pt-32 py-10'>
          <div>
            <button onClick={handleAddClick} className='rounded bg-blue-400 my-2 mx-3 w-32 py-2 font-bold'>Add</button>
          </div>
          <Table striped bordered hover>
          <thead>
            <tr className='bg-pink-300'>
              <th className='px-10 text-center'>Name</th>
              <th className='px-10 text-center'>UserName</th>
              <th className='px-10 text-center'>Password</th>
              <th className='px-10 text-center'>Email</th>
              <th className='px-10 text-center'>Action</th>
            </tr>
          </thead>
          <tbody className='bg-green-100'>
            {renderedItems}
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
        {showModal && modal}
        {showAddModal && addModal}
        </div>
        
    )
}

export default AllStudent