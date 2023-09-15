// import React from 'react'

import ReactTable from "../components/ReactTable";

const EmpoyeeRDTPage = ({setCurrentLinks, currentUser, setEmployeeList, employeeList}) => {


    const columns = [

        {
            name: "ID",
            selector: row => row.id,
            sortable: true,
        },
        {
            name: "FirstName",
            selector: row => row.firstName,
            sortable: true,
        },
        {
            name: "LastName",
            selector: row => row.lastName,
            sortable: true,
        },
        {
            name: "Company",
            selector: row => row.company.name,
            sortable: true,
        },
        {
            name: "Title",
            selector: row => row.company.title,
            sortable: true,
        },
        {
            name: "Department",
            selector: row => row.company.department,
            sortable: true,
        },
        

    ]



  return (
    <ReactTable setCurrentLinks={setCurrentLinks} currentUser={currentUser} setList={setEmployeeList} list={employeeList} columns={columns} isSelectable={true} />
  )
}

export default EmpoyeeRDTPage;