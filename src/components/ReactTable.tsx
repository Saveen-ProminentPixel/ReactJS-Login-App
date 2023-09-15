// import React from 'react'
import React, { PureComponent, useMemo, useState, useCallback, useEffect, Fragment } from 'react';
import DataTable, { Alignment, Direction, createTheme } from "react-data-table-component";
import DeleteModal from './DeleteModal';
// import differenceBy from 'lodash/differenceBy';
// import { useEffect } from "react";
// import usersDb from "../../db.json";
// import usersData from "../userData.json";
// import memoize  from "memoize-one";
// import Modal from './Modal';
// import AddModal from './AddModal';
// import { render } from 'react-dom';
// import Checkbox from '@material-ui/core/Checkbox';

// const ExpandedComponent = ({ data }) => <pre>{JSON.stringify(usersData.users, null, 2)}</pre>;


const ReactTable = ({setCurrentLinks, currentUser, setList, list, actionModal, columns, ExpandedComponent, isSelectable}) => {

    const links = [
        {label: "Home", path: "/"},
        {label: "Back", path: `/user/${currentUser}`},
    ];

    useEffect(() => {
        setCurrentLinks(links);
    }, []);

    // const [showModal, setShowModal] = useState(false);
    // const [showAddModal, setShowAddModal] = useState(false);
    // const [editUser, setEditUser] = useState(currentUser);

//     const handleEditClick = (name) => {
//         setEditUser(name);
//         setShowModal(true);
//     }
    
//     const handleClose = () => {
//         setShowModal(false);
//     }

//     const handleAddClose = () => {
//       setShowAddModal(false);
//     }

//     const handleDeleteClick = (name) => {
//       // setEditUser(user.name);
//       // setShowModal(true);
//       console.log(userList);
//       console.log(name);
//       const newUserList = userList.filter(current => current.name !== name);
//       setUserList(newUserList);
//   }

//     const handleAddClick = () => {
//       setShowAddModal(true);
//     }

//     const actionBar = (
//         <div>
//             <button className='rounded bg-red-500 px-10 py-2' onClick={handleClose}>Cancel</button>
//         </div>
//     );
//     const actionAddBar = (
//       <div>
//           <button className='rounded bg-red-500 px-10 py-2' onClick={handleAddClose}>Cancel</button>
//       </div>
//   );

    // const handleButtonClick = (name) => {
    //     // console.log("Clicked");
    //     // const currentEditUser = userList.find(user => user.name === name);
    //     setEditUser(name);
    //     setShowModal(true);

    // }

    // const handleChange = useCallback(state => {
    //     setSelectedRows(state.selectableRows);
    // }, []);

    // const modal = <Modal onClose={handleClose} actionBar={actionBar} name={editUser} setUserList={setUserList} userList={userList} ></Modal>
    // const addModal = <AddModal onClose={handleAddClose} actionBar={actionAddBar} setUserList={setUserList} userList={userList} ></AddModal>
   

    // const [selectedRows, setSelectedRows] = useState([]); 

    // useEffect(() => {
    //     console.log("state", selectedRows);
    // }, [selectedRows]);


    // const columns = 
    // // useMemo(() =>  
    // [
    //     {
    //         cell: (row) => <div className="dropdown">
    //         <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    //           Dropdown button
    //         </button>
    //         <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
    //           <button onClick={() => handleEditClick(row.name)} className='dropdown-item rounded bg-yellow-400 my-2 mx-3 w-32 pl-4'>Edit</button>
    //           <button onClick={() => handleDeleteClick(row.name)} className='dropdown-item rounded bg-red-400 my-2 mx-3 w-32 pl-4'>Delete</button>
    //           {/* <button onClick={() => handleClick(user)} className='dropdown-item rounded bg-green-400 my-2 mx-3 w-32 pl-4'>Add</button> */}
    //         </div>
    //       </div>,
    //         ignoreRowClick: true,
    //         allowOverflow: true,
    //         button: true,
    //         width: "200px",
    //     },
    //     // {
    //     //     name: "ID",
    //     //     selector: row => row.id,
    //     //     sortable: true,
    //     // },
    //     {
    //         name: "Name",
    //         selector: row => row.name,
    //         sortable: true,
    //     },
    //     {
    //         name: "Password",
    //         selector: row => row.password,
    //         sortable: true,
    //     },
    //     {
    //         name: "UserName",
    //         selector: row => row.username,
    //         sortable: true,
    //     },
    //     {
    //         name: "Email",
    //         selector: row => row.email,
    //         sortable: true,
    //     }
    // ] 
    // []);



    // render(){


    const [selectedRows, setSelectedRows] = useState([]);
	const [toggleCleared, setToggleCleared] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
	// const [data, setData] = React.useState(tableDataItems);

    const handleRowSelected = React.useCallback(state => {
		setSelectedRows(state.selectedRows);
        console.log(selectedRows);
        dummyDeleteModal();
	}, []);

    // const contextActions = React.useMemo(() => {
	// 	const handleDelete = () => {
			
	// 		if (window.confirm(`Are you sure you want to delete:\r ${selectedRows.map(r => r.id)}?`)) {
	// 			setToggleCleared(!toggleCleared);
	// 			setList(differenceBy(list, selectedRows, 'title'));
	// 		}
	// 	};

	// 	return (
	// 		<button key="delete" onClick={handleDelete} style={{ backgroundColor: 'red' }}>
	// 			Delete
	// 		</button>
	// 	);
	// }, [list, selectedRows, toggleCleared]);


    const dummyDeleteModal = () => {
        // if(selectedRows){
            setShowDeleteModal(true);
        // }
        if(!selectedRows){
            setShowDeleteModal(false);
        }
    }

    const deleteModal = <DeleteModal />;



    return (
        <Fragment>
        {showDeleteModal && deleteModal}
        <DataTable className="ml-32 pt-20"
        columns={columns}
        data={list} 
        selectableRows = {isSelectable}
        // contextActions={contextActions}
        onSelectedRowsChange={handleRowSelected}
		clearSelectedRows={toggleCleared}
        expandableRows
        expandableRowsComponent={ExpandedComponent}
        pagination
        fixedHeader
        // conditionalRowStyles={conditionalRowStyles}
        // customStyles={customStyles}
        // theme="dark"
        subHeaderAlign={Alignment.CENTER}
        direction={Direction.LTR}
        />
        {/* {actionModal} */}
        
        {/* {showModal && modal}
        {showAddModal && addModal} */}
        </ Fragment>
      );
    // }
}



createTheme('solarized', {
    text: {
      primary: '#268bd2',
      secondary: '#2aa198',
    },
    background: {
      default: '#002b36',
    },
    context: {
      background: '#cb4b16',
      text: '#FFFFFF',
    },
    divider: {
      default: '#073642',
    },
    action: {
      button: 'rgba(0,0,0,.54)',
      hover: 'rgba(0,0,0,.08)',
      disabled: 'rgba(0,0,0,.12)',
    },
  }, 'dark');


// const customStyles = {
//     rows: {
//         style: {
//             minHeight: '72px', // override the row height
//             backgroundColor: 'pink',
//         },
//     },
//     headCells: {
//         style: {
//             paddingLeft: '8px', // override the cell padding for head cells
//             paddingRight: '8px',
//         },
//     },
//     cells: {
//         style: {
//             paddingLeft: '8px', // override the cell padding for data cells
//             paddingRight: '8px',
//         },
//     },
// };


// const conditionalRowStyles = [
//     {
//       when: row => row.id < 3,
//       style: {
//         backgroundColor: 'green',
//         color: 'white',
//         '&:hover': {
//           cursor: 'pointer',
//         },
//       },
//     },
//     // You can also pass a callback to style for additional customization
//     {
//       when: row => row.id < 5,
//       style: row => ({ backgroundColor: row.isSpecial ? 'pink' : 'inerit' }),
//     },
//   ];

// function clickHandler () {
//     console.log("I am clicked");
// }

// const columns = useMemo(() =>  [
//     {
//     	cell: () => <button onClick={handleButtonClick}>Action</button>,
//     	ignoreRowClick: true,
//     	allowOverflow: true,
//     	button: true,
//     },
//     {
//         name: "ID",
//         selector: row => row.id,
//         sortable: true,
//     },
//     {
//         name: "Name",
//         selector: row => row.name,
//         sortable: true,
//     },
//     {
//         name: "Password",
//         selector: row => row.password,
//         sortable: true,
//     },
//     {
//         name: "UserName",
//         selector: row => row.username,
//         sortable: true,
//     },
//     {
//         name: "Email",
//         selector: row => row.email,
//         sortable: true,
//     }
// ], [],);


// const ReactTable = ({setCurrentLinks, currentUser, setUserList, userList}) => {


    

    // console.log(usersDb);

    // class ClassicComponentStory extends PureComponent {
    //     	state = {
    //     		selectedRows: [],
    //     	};
        
    //     	handleButtonClick = () => {
    //     		console.log('clicked');
    //     	};
        
    //     	handleChange = state => {
    //     		console.log('state', state.selectedRows);
    //     		this.setState({ selectedRows: state.selectedRows });
    //     	};

    // render() {
        // return (
        //     <DataTable className="ml-32 pt-20"
        //     columns={columns(this.handleButtonClick)}
        //     data={usersData.users} 
        //     selectableRows
        //     expandableRows
        //     expandableRowsComponent={ExpandedComponent}
        //     pagination
        //     // conditionalRowStyles={conditionalRowStyles}
        //     // customStyles={customStyles}
        //     theme="solarized"
        //     subHeaderAlign={Alignment.CENTER}
        //     direction={Direction.LTR}
        //     onSelectedRowsChange={this.handleChange}
        //     />
        //   )
    // }
    // return (
    //     <DataTable className="ml-32 pt-20"
    //     columns={columns}
    //     data={usersData.users} 
    //     selectableRows
    //     expandableRows
    //     expandableRowsComponent={ExpandedComponent}
    //     pagination
    //     // conditionalRowStyles={conditionalRowStyles}
    //     // customStyles={customStyles}
    //     theme="solarized"
    //     subHeaderAlign={Alignment.CENTER}
    //     direction={Direction.LTR}
    //     />
    //   )
    // }
  


export default ReactTable;