// import React from 'react'

import ReactTable from "../components/ReactTable";

const ProductRDTPage = ({setCurrentLinks, currentUser, setProductList, productList}) => {

    const ExpandedComponent = ({ data }) => <pre>{data.description}</pre>;

    const columns = [

        {
            name: "ID",
            selector: row => row.id,
            sortable: true,
        },
        {
            name: "Title",
            selector: row => row.title,
            sortable: true,
        },
        // {
        //     name: "Description",
        //     selector: row => row.description,
        //     sortable: true,
        // },
        {
            name: "Price",
            selector: row => row.price,
            sortable: true,
        },
        {
            name: "Rating",
            selector: row => row.rating,
            sortable: true,
        },
        {
            name: "Brand",
            selector: row => row.brand,
            sortable: true,
        },
        {
            name: "Category",
            selector: row => row.category,
            sortable: true,
        },
        // {
        //     name: "Image",
        //     selector: row => row.thumbnail,
        //     sortable: true,
        // },
        {
            name: "Image",
            cell: (row) => <img src={row.thumbnail} alt="thumbnail" width="60" height="60" />
        },

    ];


    const actionModal = (
        <div>
        </div>
      );

    // const actionExpandable = (
    //     <>
    //     {expandableRows} 
    //     {expandableRowsComponent={ExpandedComponent}}  
    //     </> 
    // );


  return (
    <ReactTable setCurrentLinks={setCurrentLinks} currentUser={currentUser} setList={setProductList} list={productList} actionModal={actionModal} columns={columns} ExpandedComponent={ExpandedComponent} />
  )
}

export default ProductRDTPage;