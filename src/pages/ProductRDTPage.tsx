// import React from 'react'

// import { productListType } from "../App";
// import { productListType } from "../App";
// import { employeeListType, productListType, userListType } from "../App";
// import React from "react";
import React from "react";
import { productListType } from "../App";
import { ProductRDTPageType } from "../Types/pagesProps";
import ReactTable from "../components/ReactTable";
import { productColumns } from "../columns/productColumns";

export interface ExpandedComponentProps {
  data: productListType;
}


const ProductRDTPage = ({ setCurrentLinks, currentUser, productList, productAccess }: ProductRDTPageType): JSX.Element => {

  const expandedComponent: React.FC<ExpandedComponentProps> = ({ data }) => <pre>{data.description}</pre>;
  // const ExpandedComponent = () => "";

  const columns = productColumns(productAccess);

  // const columns = [

  //     {
  //         name: "ID",
  //         selector: (row: { id: number; }) => row.id,
  //         sortable: true,
  //     },
  //     {
  //         name: "Title",
  //         selector: (row: { title: string; }) => row.title,
  //         sortable: true,
  //     },
  //     // {
  //     //     name: "Description",
  //     //     selector: row => row.description,
  //     //     sortable: true,
  //     // },
  //     {
  //         name: "Price",
  //         selector: (row: { price: number; }) => row.price,
  //         sortable: true,
  //     },
  //     {
  //         name: "Rating",
  //         selector: (row: { rating: number; }) => row.rating,
  //         sortable: true,
  //     },
  //     {
  //         name: "Brand",
  //         selector: (row: { brand: string; }) => row.brand,
  //         sortable: true,
  //     },
  //     {
  //         name: "Category",
  //         selector: (row: { category: string; }) => row.category,
  //         sortable: true,
  //     },
  //     // {
  //     //     name: "Image",
  //     //     selector: row => row.thumbnail,
  //     //     sortable: true,
  //     // },
  //     {
  //         name: "Image",
  //         cell: (row: { thumbnail: string | undefined; }) => <img src={row.thumbnail} alt="thumbnail" width="60" height="60" />
  //     },

  // ];


  const actionModal = (
    <div>
      ....
    </div>
  );

  // const actionExpandable = (
  //     <>
  //     {expandableRows} 
  //     {expandableRowsComponent={ExpandedComponent}}  
  //     </> 
  // );

  const dataApi: string = "products";

  return (
    <ReactTable setCurrentLinks={setCurrentLinks} currentUser={currentUser} list={productList} actionModal={actionModal} columns={columns} expandedComponent={expandedComponent} isExpandable={true} isSelectable={false} dataApi={dataApi} />
  )
}

export default ProductRDTPage;