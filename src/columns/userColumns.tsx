
export const userColumns = (handleEditClick: (name: string) => void, handleDeleteClick: (name: string) => void) => {

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
            {
                name: "ID",
                selector: (row: { id: any; }) => row.id,
                sortable: true,
            },
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

    return columns;

}