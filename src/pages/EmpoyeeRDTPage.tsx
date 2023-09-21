// import React from 'react'

import { EmployeeRDTPageType } from "../Types/pagesProps";
import { employeeColumns } from "../columns/employeeColumns";
import ReactTable from "../components/ReactTable";
// import { reducer } from '../App.tsx'

const EmpoyeeRDTPage = ({setCurrentLinks, currentUser, employeeList}: EmployeeRDTPageType): JSX.Element => {
// const EmpoyeeRDTPage = ({reducer}) => {

    // const employeeAction = {
    // type: "employee",
    // payload: {
    //   data: userDb.employees,
    // }
//   }

const columns = employeeColumns();
// console.log(columns);

// const newSetCurrentLinks = setCurrentLinks;

    // const columns = [

    //     {
    //         name: "ID",
    //         selector: (row: { id: number; }) => row.id,
    //         sortable: true,
    //     },
    //     {
    //         name: "FirstName",
    //         selector: (row: { firstName: string; }) => row.firstName,
    //         sortable: true,
    //     },
    //     {
    //         name: "LastName",
    //         selector: (row: { lastName: string; }) => row.lastName,
    //         sortable: true,
    //     },
    //     {
    //         name: "Company",
    //         selector: (row: { company: { name: string; }; }) => row.company.name,
    //         sortable: true,
    //     },
    //     {
    //         name: "Title",
    //         selector: (row: { company: { title: string; }; }) => row.company.title,
    //         sortable: true,
    //     },
    //     {
    //         name: "Department",
    //         selector: (row: { company: { department: string; }; }) => row.company.department,
    //         sortable: true,
    //     },
        

    // ]

    const actionModal = (
        <div>
            ...
        </div>
    );

    // const ExpandedComponent = "";

    const dataApi: string = "employees";

  return (
    <ReactTable setCurrentLinks={setCurrentLinks} currentUser={currentUser} list={employeeList} actionModal={actionModal} columns={columns} isExpandable={false} isSelectable={true} dataApi={dataApi} />
    // <ReactTable columns={columns} isSelectable={true} {...state, dispatch} />
  )
}

export default EmpoyeeRDTPage;