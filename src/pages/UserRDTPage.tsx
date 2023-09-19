// import React from 'react'
import { useState } from "react";
import ReactTable from "../components/ReactTable"
// import AddModal from "../components/AddModal";
import Modal from "../components/Modal";
import { UserRDTPageType } from "../Types/pagesProps";
import axios from "axios";
import ToggleHook from "../hooks/toggleHook";
// import { userListType } from "../App";
// import ToggleHook from "../hooks/toggleHook";

const UserRDTPage = ({setCurrentLinks, currentUser, userList}: UserRDTPageType): JSX.Element => {

  const {toggle, toggleFunction} = ToggleHook();  

  const [showModal, setShowModal] = useState(false);
    // const [showAddModal, setShowAddModal] = useState(false);
    const [editUser, setEditUser] = useState(currentUser);
    // const [deleteUser, setDeleteUser] = useState(false);

    

    const handleEditClick = (name: string) => {
        setEditUser(name);
        setShowModal(true);
    }
    
    const handleClose = () => {
        setShowModal(false);
    }

    // const handleAddClose = () => {
    //   setShowAddModal(false);
    // }

    const handleDeleteClick = (name: string) => {
      // setEditUser(user.name);
      // setShowModal(true);
      console.log(userList);
      console.log(name);
      // const newUserList = userList.filter(current => current.name !== name);
      // setUserList(newUserList);
      
      const user = userList.find(user => user.name === name);
      (async() => {
        await axios.delete(`http://localhost:3002/users/${user!.id}`);
      }) ();

      toggleFunction();
      // setDeleteUser(!deleteUser);
      // toggleFunction();
      // setShowModal(showModal);
      // (async() => {
      //   const data = await axios.get("http://localhost:3002/users");
      //   const response: userListType[] = data.data;
      //   setUserList(response);
      //   // userList = response;
      // }) ();
  }

  // useEffect(() => {
  //   (async() => {
  //     const data = await axios.get("http://localhost:3002/users");
  //     const response: userListType[] = data.data;
  //     setUserList(response);
  //     // userList = response;
  //   }) ();
  // },[toggle])

    // const handleAddClick = () => {
    //   setShowAddModal(true);
    // }

    const actionBar = (
        <div>
            {/* <button className='rounded bg-red-500 px-10 py-2' onClick={handleClose}>Cancel</button> */}
            <button onClick={handleClose}>Cancel</button>
        </div>
    );
  //   const actionAddBar = (
  //     <div>
  //         {/* <button className='rounded bg-red-500 px-10 py-2' onClick={handleAddClose}>Cancel</button> */}
  //         <button onClick={handleAddClose}>Cancel</button>
  //     </div>
  // );


    // const links = [
    //     {label: "Home", path: "/"},
    //     {label: "Back", path: `/user/${currentUser}`},
    // ];

    // const handleButtonClick = (name) => {
    //     // console.log("Clicked");
    //     // const currentEditUser = userList.find(user => user.name === name);
    //     setEditUser(name);
    //     setShowModal(true);

    // }

    // const handleChange = useCallback(state => {
    //     setSelectedRows(state.selectableRows);
    // }, []);

    const modal = <Modal onClose={handleClose} actionBar={actionBar} name={editUser} userList={userList} toggleFunction={toggleFunction} ></Modal>
    // const addModal = <AddModal onClose={handleAddClose} actionBar={actionAddBar} setUserList={setUserList} userList={userList} ></AddModal>

  const columns = 
    // useMemo(() =>  
    [
        {
            cell: (row: { name: string; }) => <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle bg-slate-400" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Dropdown button
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <button onClick={() => handleEditClick(row.name)} className='dropdown-item rounded bg-yellow-400 my-2 mx-3 w-32 pl-4'>Edit</button>
              <button onClick={() => handleDeleteClick(row.name)} className='dropdown-item rounded bg-red-400 my-2 mx-3 w-32 pl-4'>Delete</button>
              {/* <button onClick={() => handleClick(user)} className='dropdown-item rounded bg-green-400 my-2 mx-3 w-32 pl-4'>Add</button> */}
            </div>
          </div>,
            ignoreRowClick: true,
            allowOverflow: true,
            button: true,
            width: "200px",
        },
        // {
        //     name: "ID",
        //     selector: row => row.id,
        //     sortable: true,
        // },
        {
            name: "Name",
            selector: (row: { name: string; }) => row.name,
            sortable: true,
        },
        {
            name: "Password",
            selector: (row: { password: string; }) => row.password,
            sortable: true,
        },
        {
            name: "UserName",
            selector: (row: { username: string; }) => row.username,
            sortable: true,
        },
        {
            name: "Email",
            selector: (row: { email: string; }) => row.email,
            sortable: true,
        }
    ];
    
    
    const actionModal = (
      <div>
        {showModal && modal}
        {/* {showAddModal && addModal} */}
      </div>
    );

      const dataApi: string = "users";

  return (
    <ReactTable setCurrentLinks={setCurrentLinks} currentUser={currentUser} list={userList} actionModal={actionModal} columns={columns} isExpandable={false} isSelectable={true} dataApi={dataApi} toggle={toggle} toggleFunction={toggleFunction} />
  )
}

export default UserRDTPage;