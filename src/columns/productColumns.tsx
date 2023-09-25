import { accessType } from "../App";

export const productColumns = (productAccess: accessType) => {

    const editAllowed = productAccess.edit;
    const deleteAllowed = productAccess.delete;

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
            name: "Title",
            selector: (row: { title: string; }) => row.title,
            sortable: true,
        },
        {
            name: "Price",
            selector: (row: { price: number; }) => row.price,
            sortable: true,
        },
        {
            name: "Rating",
            selector: (row: { rating: number; }) => row.rating,
            sortable: true,
        },
        {
            name: "Brand",
            selector: (row: { brand: string; }) => row.brand,
            sortable: true,
        },
        {
            name: "Category",
            selector: (row: { category: string; }) => row.category,
            sortable: true,
        },
        {
            name: "Image",
            cell: (row: { thumbnail: string | undefined; }) => <img src={row.thumbnail} alt="thumbnail" width="60" height="60" />
        },

    ];

    return columns;
}