
export const manageRoleColumns = (handleEditClick, handleDeleteClick) => {

    const columns = [

        {
            cell: (row: { id: number; }) => <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle bg-slate-400" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Dropdown button
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <button onClick={() => handleEditClick(row.id)} className='dropdown-item rounded bg-yellow-400 my-2 mx-3 w-32 pl-4'>Edit</button>
              <button onClick={() => handleDeleteClick(row.id)} className='dropdown-item rounded bg-red-400 my-2 mx-3 w-32 pl-4'>Delete</button>
              {/* <button onClick={() => handleClick(user)} className='dropdown-item rounded bg-green-400 my-2 mx-3 w-32 pl-4'>Add</button> */}
            </div>
          </div>,
            ignoreRowClick: true,
            allowOverflow: true,
            button: true,
            width: "200px",
        },
        {
            name: "Role Name",
            selector: (row: { roleName: string; }) => row.roleName,
            sortable: true,
        },
        {
            name: "Created At",
            selector: (row: { createdAt: string; }) => row.createdAt,
            sortable: true,
        },
        {
            name: "Updated At",
            selector: (row: { updatedAt: string; }) => row.updatedAt,
            sortable: true,
        },
        {
            name: "Description",
            selector: (row: { description: string; }) => row.description,
            sortable: true,
        },
        

    ];

    return columns;

}