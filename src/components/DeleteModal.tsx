// import React from 'react'

// import { employeeListType, productListType, userListType } from "../App";
// import { SetStateAction, useEffect } from "react";
// import { employeeListType, productListType, userListType } from "../App";
// import { useState } from "react";
import { DeleteModalType } from "../Types/componentsTypes";
import axios from "axios";
// import { employeeListType, userListType } from "../App";

const DeleteModal = ({selectedRows, list, dataApi, setShowDeleteModal, toggleFunction}: DeleteModalType): JSX.Element => {
  // const DeleteModal = ({selectedRows}, {...state}, {...dispatch}) => {
  // const [rowDeleted, setRowDelteted] = useState(false);
  // console.log(list);
  const yesClickHandle = () => {
    console.log(list);
    // for(const selectedRow of selectedRows){
    //   for(const employee of list){
    //     if(selectedRow.id === employee.id){
    //       console.log(employee)
    //       list.pop(employee);
    //     }
    //   }
    // }

    
      for(const row of selectedRows){
        // const newRow: {id: number} = row;
        console.log(row.id);
        console.log("I am delting");
        (async() => {
          await axios.delete(`http://localhost:3002/${dataApi}/${row.id}`);
          // const response: employeeListType[] = data.data;
          // setEmployeeListOfRDT(response);
        }) ();
        console.log("I am delting");
      }
      // setList(list);
      setShowDeleteModal(false);
      toggleFunction!();
      

      // const links = [
      //   {label: "Home", path: "/"},
      //   {label: "Back", path: `/user/${currentUser}`},
      // ];

      // setCurrentLinks(links);

      // (async() => {
      //   const data = await axios.get(`http://localhost:3002/${dataApi}`);
      //   const response: userListType[] | employeeListType[] = data.data;
      //   setList(response);
      //   // setUserListOfRDT(response);
      // }) ();
      // console.log("deleting process completed");
      // setRowDelteted(!rowDeleted);
    

    // list = list.filter(employee => {
    //   return !selectedRows.includes(employee);
    // });

    // setList(list as (SetStateAction<userListType[]> & SetStateAction<productListType[]>) & SetStateAction<employeeListType[]>);

    // const deleteAction = {
    //   type: "employeeDelete",
    //   payload: {
    //     employeeList: list,
    //   }
    // }

    // dispatch(deleteAction);

    // console.log(list);
  }

  return (
    // <!-- Button trigger modal -->
    <div className=""> 
        <div className="ml-56 pt-20 pr-64">
        <button type="button" className="btn btn-primary bg-red-500" data-toggle="modal" data-target="#exampleModalLong">
          Delete
        </button>
        </div>

        {/* // <!-- Modal --> */}
        <div className="modal fade" id="exampleModalLong" tab-index="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">Delete Items</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                Are you sure you want to delete selected items?
              </div>
              <div className="modal-footer">
              <button type="button" onClick={yesClickHandle} className="btn btn-danger bg-red-500 mr-3 px-6" data-dismiss="modal">Yes</button>
              <button type="button" className="btn btn-secondary bg-gray-400" data-dismiss="modal">Cancel</button>
              </div>
            </div>
          </div>
        </div>
        </div>
  )
}

export default DeleteModal;