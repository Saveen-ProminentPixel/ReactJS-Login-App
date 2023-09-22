// import React from 'react'

import axios from "axios";
import { ManageRolePageType } from "../Types/pagesProps";
import { manageRoleColumns } from "../columns/manageRoleColumns";
import ReactTable from "../components/ReactTable";
import ToggleHook from "../hooks/toggleHook";
import { useState } from "react";
import RoleAddModal from "../components/RoleAddModal";
import RoleEditModal from "../components/RoleEditModal";

const ManageRolePage = ({ setCurrentLinks, currentUser, manageRoleList }: ManageRolePageType): JSX.Element => {

    const { toggle, toggleFunction } = ToggleHook();

    const [showAddModal, setShowAddModal] = useState<boolean>(false);
    // const [showModal, setShowModal] = useState<boolean>(false);
    const [showEditModal, setShowEditModal] = useState<boolean>(false);
    const [editId, setEditId] = useState<number>(0);

    const handleAddClick = () => {
        setShowAddModal(true);
    }

    // const handleAddClose = (): void => {
    //     setShowAddModal(false);
    // }


    const handleEditClick = (id: number) => {
        console.log("Clicked on Edit ---> Handle Edit Click Activated")
        setEditId(id);
        setShowEditModal(true);
    };

    // const handleEditClose = (): void => {
    //     setShowEditModal(false);
    // }

    const handleDeleteClick = (id: number) => {

        // console.log(userList);
        // console.log(name);

        // const user = manageRoleList.find(user => user.id === id);
        (async () => {
            await axios.delete(`http://localhost:3002/roles/${id}`);
        })();

        (async () => {
            await axios.delete(`http://localhost:3002/availablePermissions/${id}`);
        })();

        (async () => {
            await axios.delete(`http://localhost:3002/assignedPermissions/${id}`);
        })();

        toggleFunction();
    };


    const roleAddModal = <RoleAddModal manageRoleList={manageRoleList} toggleFunction={toggleFunction} showAddModal={showAddModal} setShowAddModal={setShowAddModal} ></RoleAddModal>;
    const roleEditModal = <RoleEditModal editId={editId} showEditModal={showEditModal} setShowEditModal={setShowEditModal} toggleFunction={toggleFunction}></RoleEditModal>;


    const columns = manageRoleColumns(handleEditClick, handleDeleteClick);


    return (
        <div className="pt-20">
            <div className="pl-40 grid grid-cols-2">
                <div className="font-bold text-xl pt-2 pl-10">
                    <h1>Manage roles</h1>
                </div>
                <div className="text-right pr-20">
                    <button type="button" onClick={handleAddClick} className="btn btn-primary bg-blue-500 font-semibold" data-toggle="modal" data-target="#exampleModal" >Add New</button>
                </div>
            </div>

            <div>
                <ReactTable setCurrentLinks={setCurrentLinks} currentUser={currentUser} list={manageRoleList} columns={columns} isSelectable={false} isExpandable={false} dataApi="roles" toggle={toggle} toggleFunction={toggleFunction} />
            </div>
            {showAddModal && roleAddModal}
            {showEditModal && roleEditModal}
        </div>

    )
}

export default ManageRolePage;