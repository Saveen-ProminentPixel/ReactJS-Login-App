// import React from 'react'
import { useState, useEffect, Fragment } from 'react';
import DataTable, { Alignment, Direction, TableColumn, createTheme } from "react-data-table-component";
import DeleteModal from './DeleteModal';
import { ReactTableType } from '../Types/componentsTypes';
import { ExpandableRowsComponent } from 'react-data-table-component/dist/src/DataTable/types';
import axios from 'axios';
import { employeeListType, manageRoleListType, productListType, userListType } from '../App';
// import ToggleHook from '../hooks/toggleHook';
// import { reducer } from '../App';
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


const ReactTable = ({ setCurrentLinks, currentUser, list, actionModal, columns, expandedComponent, isSelectable, isExpandable, dataApi, toggle, toggleFunction }: ReactTableType): JSX.Element => {


  // const {toggle, toggleFunction} = ToggleHook();

  // const ReactTable = ({columns, isSelectable}, {...state}, dispatch) => {

  // const dummyExpandedcomponent = ExpandedComponent;

  let links = [
    { label: "Home", path: "/" },
    { label: "Back", path: `/banyanUser/${currentUser}` },
  ];

  if (currentUser === "admin") {
    links = [
      { label: "Home", path: "/" },
      { label: "Back", path: `/user/${currentUser}` },
    ];
  }


  // const employeeAction = {
  //   type: "employeeLink",
  //   payload: {
  //     currentLinks: links,
  //   }
  // }
  useEffect(() => {
    setCurrentLinks(links);
  }, []);


  // dispatch(employeeAction)

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


  const [selectedRows, setSelectedRows] = useState<any>([]);
  // const [toggleCleared, setToggleCleared] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
  const [data, setData] = useState(list);
  const [loading, setLoading] = useState(false);
  const [totalRows, setTotalRows] = useState(0);
  const [perPage, setPerPage] = useState(10);

  useEffect(() => {
    setTotalRows(list.length);
  }, [])

  const fetchUsers = async (page: number) => {
    setLoading(true);
    console.log(totalRows);
    const response = await axios.get(`http://localhost:3002/${dataApi}?_page=${page}&_limit=${perPage}`);
    console.log(response.data);
    const data: userListType[] | employeeListType[] | productListType[] | manageRoleListType[] = response.data;
    setData(data);
    // setTotalRows(list.length);
    setLoading(false);
  }
  // console.log(totalRows);

  const handlePageChange = (page: number) => {
    fetchUsers(page);
  };

  const handlePerRowsChange = async (newPerPage: number, page: number) => {
    setLoading(true);
    const response = await axios.get(`http://localhost:3002/${dataApi}?_page=${page}&_limit=${newPerPage}`);
    console.log(response.data);
    const data: userListType[] | employeeListType[] | productListType[] = response.data;
    setData(data);
    setPerPage(perPage);
    setLoading(false);
  }

  useEffect(() => {
    fetchUsers(1);
  }, [toggle])


  const handleRowSelected = (state: any): void => {
    console.log(selectedRows);
    setSelectedRows(state.selectedRows);
    console.log(selectedRows);
  };

  useEffect(() => {
    dummyDeleteModal();

  }, [selectedRows]);

  //   const contextActions = React.useMemo(() => {
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
    // console.log(selectedRows);
    setShowDeleteModal(true);
    // }
    if (selectedRows.length === 0) {
      setShowDeleteModal(false);
    }
  }

  const deleteModal = <DeleteModal selectedRows={selectedRows} list={list} dataApi={dataApi} setShowDeleteModal={setShowDeleteModal} toggleFunction={toggleFunction} />;
  // const deleteModal = <DeleteModal selectedRows={selectedRows} {...state} {...dispatch} />;

  let rowDisabledCriteria;
  if (dataApi === "employees") {
    rowDisabledCriteria = (row: any) => row.company.department === "Services";
  }



  return (
    <Fragment>
      {showDeleteModal && deleteModal}
      <DataTable className="ml-40 pt-20"
        columns={columns as TableColumn<unknown>[]}
        data={data}
        selectableRows={isSelectable}
        // contextActions={contextActions}
        onSelectedRowsChange={handleRowSelected}
        selectableRowDisabled={rowDisabledCriteria}
        // clearSelectedRows={toggleCleared}
        expandableRows={isExpandable}
        expandableRowsComponent={expandedComponent as ExpandableRowsComponent<unknown> | undefined}
        progressPending={loading}
        pagination
        // fixedHeader
        // conditionalRowStyles={conditionalRowStyles}
        // customStyles={customStyles}
        // theme="dark"
        paginationServer
        paginationTotalRows={list.length}
        onChangeRowsPerPage={handlePerRowsChange}
        onChangePage={handlePageChange}
        subHeaderAlign={Alignment.CENTER}
        direction={Direction.LTR}
      />
      {actionModal}

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

export default ReactTable;