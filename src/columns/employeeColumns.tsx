import { accessType } from "../App";

export const employeeColumns = (employeeAccess: accessType) => {

    const editAllowed = employeeAccess.edit;
    const deleteAllowed = employeeAccess.delete;

    const columns = [

        {
            name: "ID",
            selector: (row: { id: number; }) => row.id,
            sortable: true,
        },
        {
            cell: () => <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle bg-slate-400" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown button
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    {editAllowed && <button className='dropdown-item rounded bg-yellow-400 my-2 mx-3 w-32 pl-4'>Edit</button>}
                    {deleteAllowed && <button className='dropdown-item rounded bg-red-400 my-2 mx-3 w-32 pl-4'>Delete</button>}
                    {/* <button onClick={() => handleClick(user)} className='dropdown-item rounded bg-green-400 my-2 mx-3 w-32 pl-4'>Add</button> */}
                </div>
            </div>,
            ignoreRowClick: true,
            allowOverflow: true,
            button: true,
            width: "200px",
        },
        {
            name: "FirstName",
            selector: (row: { firstName: string; }) => row.firstName,
            sortable: true,
        },
        {
            name: "LastName",
            selector: (row: { lastName: string; }) => row.lastName,
            sortable: true,
        },
        {
            name: "Company",
            selector: (row: { company: { name: string; }; }) => row.company.name,
            sortable: true,
        },
        {
            name: "Title",
            selector: (row: { company: { title: string; }; }) => row.company.title,
            sortable: true,
        },
        {
            name: "Department",
            selector: (row: { company: { department: string; }; }) => row.company.department,
            sortable: true,
            // cell: row => <div>{row.company.department === "Services" ? 'Yes' : 'No'}</div>,
        },


    ];

    return columns;
}