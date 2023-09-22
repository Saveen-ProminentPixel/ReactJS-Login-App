// import React from 'react'

import axios from "axios";
import { useEffect, useState } from "react";
import { Modal, Row, Container, Button } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import { manageRoleListType } from "../App";
import { RoleEditModalType } from "../Types/componentsTypes";
// import { Container } from "react-bootstrap/lib/Tab";

export type availablePermissionType = {
    id: number;
    availableRoles: string[];
}

export type assignedRoleType = {
    name: string;
    access: {
        view: boolean;
        edit: boolean;
        delete: boolean;
    };
}

export type assignedPermissionType = {
    id: number;
    assignedRoles: assignedRoleType[];
}

const RoleEditModal = ({ editId, showEditModal, setShowEditModal, toggleFunction }: RoleEditModalType) => {

    // const allRoles = ["student", "product", "employee"];

    const [availableRoles, setAvailableRoles] = useState<string[]>([]);
    const [assignedRoles, setAssignedRoles] = useState<assignedRoleType[]>([]);
    const [checkedAvailableRoles, setCheckedAvailableRoles] = useState<string[]>([]);
    const [checkedAssignableRoles, setCheckedAssignableRoles] = useState<string[]>([]);

    const handleCheckClickAvailable = (e: React.SyntheticEvent) => {
        const target = e.target as HTMLInputElement;
        const isChecked: boolean = target.checked;
        const availableRoleClickedName: string = target.name;

        if (isChecked === true) {
            checkedAvailableRoles.push(availableRoleClickedName);
            setCheckedAvailableRoles([...new Set(checkedAvailableRoles)]);
        }
        if (isChecked === false) {
            const newCheckedAvailableRoles = checkedAvailableRoles.filter(checkedAvailableRole => checkedAvailableRole !== availableRoleClickedName);
            setCheckedAvailableRoles(newCheckedAvailableRoles);
        }
        // console.log(isChecked);
        // console.log(availableRoleClickedName);
    }
    // console.log(checkedAvailableRoles);

    const handleCheckClickAssignable = (e: React.SyntheticEvent) => {
        const target = e.target as HTMLInputElement;
        const isChecked: boolean = target.checked;
        const assignableRoleClickedName = target.name;

        if (isChecked === true) {
            checkedAssignableRoles.push(assignableRoleClickedName);
            setCheckedAssignableRoles([...new Set(checkedAssignableRoles)]);
        }
        if (isChecked === false) {
            const newCheckedAssignableRoles = checkedAssignableRoles.filter(checkedAssignableRole => checkedAssignableRole !== assignableRoleClickedName);
            setCheckedAssignableRoles(newCheckedAssignableRoles);
        }

        // console.log(isChecked + " : is Clicked");
        // console.log(assignableRoleClickedName + " : Clicked Role");

    }
    // console.log(checkedAssignableRoles + " : checked Assignable Roles");

    const handleCheckClickPermission = (e: React.SyntheticEvent) => {
        const target = e.target as HTMLInputElement;
        const isChecked: boolean = target.checked;
        const permissionClickedName: string = target.name;

        const [property, owner] = permissionClickedName.split(" ");

        if (isChecked === true) {
            assignedRoles.map(assignedRole => {
                if (assignedRole.name === owner) {
                    if (property === "view") {
                        assignedRole.access.view = true;
                    }
                    else if (property === "edit") {
                        assignedRole.access.edit = true;
                    }
                    else if (property === "delete") {
                        assignedRole.access.delete = true;
                    }
                }
            });
            // console.log(assignedRoles);
        }
    }

    // fetching available roles from db.json and setting availableRoles State
    useEffect(() => {
        (async () => {
            const response = await axios.get(`http://localhost:3002/availablePermissions/${editId}`);
            const data: availablePermissionType = response.data;
            setAvailableRoles(data.availableRoles);
            // console.log(availableRoles);
        })();
    }, []);

    // console.log(availableRoles);
    const renderedAvailableRoles = availableRoles.map(availableRole => {
        return (
            <div className="border-4 border-gray-400 bg-white my-2 px-2" key={availableRole}>
                <Form.Check
                    type={"checkbox"}
                    id={`default-checkbox-${availableRole}`}
                    label={`${availableRole}`}
                    onClick={handleCheckClickAvailable}
                    name={`${availableRole}`}
                />
            </div>

        )
    });

    useEffect(() => {
        (async () => {
            const response = await axios.get(`http://localhost:3002/assignedPermissions/${editId}`);
            const data: assignedPermissionType = response.data;
            // data.assignedRoles.filter(assignedRole => {
            //     if (availableRoles.includes(assignedRole.name)) {
            //         const newAvailableRoles = (availableRoles.filter(availableRole => availableRole !== assignedRole.name));
            //         console.log(newAvailableRoles);
            //     }
            // })
            // console.log(availableRoles);
            setAssignedRoles(data.assignedRoles);
        })();
    }, []);


    const renderedAssignedRoles = assignedRoles.map(assignedRole => {
        let isView = false;
        let isEdit = false;
        let isDelete = false;
        if (assignedRole.access.view === true) {
            isView = true;
        }
        if (assignedRole.access.edit === true) {
            isEdit = true;
        }
        if (assignedRole.access.delete === true) {
            isDelete = true;
        }

        return (
            <div className="my-2" key={assignedRole.name}>
                <div className=" py-1 pl-6 bg-green-500 text-white">
                    <Form.Check
                        className=""
                        type="checkbox"
                        id={`${assignedRole.name}`}
                        name={`${assignedRole.name}`}
                        onClick={handleCheckClickAssignable}
                    />
                    <h2 className="font-bold">{assignedRole.name}</h2>
                </div>
                {/* <Form className="grid grid-col-3"> */}
                <div className="border-2 border-green-500">
                    <Form.Check
                        className="bg-green-200 pl-12"
                        type="checkbox"
                        id={`view-switch-${assignedRole.name}`}
                        label={`View`}
                        name={`view ${assignedRole.name}`}
                        defaultChecked={isView}
                        onClick={handleCheckClickPermission}
                    // key={`${assignedRole.name}-view`}
                    />
                    <Form.Check
                        className="bg-green-200 pl-12"
                        type="checkbox"
                        id={`edit-switch-${assignedRole.name}`}
                        label={`Edit`}
                        name={`edit ${assignedRole.name}`}
                        defaultChecked={isEdit}
                        onClick={handleCheckClickPermission}
                    // key={`${assignedRole.name}-edit`}
                    />
                    <Form.Check
                        className="bg-green-200 pl-12"
                        type="checkbox"
                        id={`delete-switch-${assignedRole.name}`}
                        label={`Delete`}
                        name={`delete ${assignedRole.name}`}
                        defaultChecked={isDelete}
                        onClick={handleCheckClickPermission}
                    // key={`${assignedRole.name}-delete`}
                    />
                </div>
                {/* </Form> */}

            </div>
        )
    });

    const onHide = () => {
        setShowEditModal(false);
    }


    const handleAvailableMoveClick = (e: React.SyntheticEvent) => {
        e.preventDefault();
        // console.log(checkedAvailableRoles);
        let newAvailableRoles: string[] = availableRoles;
        const newAssignedRoles: assignedRoleType[] = [];
        let newCheckedAvailable: string[] = checkedAvailableRoles;

        checkedAvailableRoles.map(checkedAvailableRole => {
            const newObject = {
                name: checkedAvailableRole,
                access: {
                    view: false,
                    edit: false,
                    delete: false
                }
            }
            newAssignedRoles.push(newObject);
            newAvailableRoles = newAvailableRoles.filter(availableRole => availableRole !== checkedAvailableRole);
            newCheckedAvailable = newCheckedAvailable.filter(currentChecked => currentChecked !== checkedAvailableRole);
        });
        // console.log(newAssignedRoles);
        setCheckedAvailableRoles([...newCheckedAvailable]);
        setAssignedRoles([...assignedRoles, ...newAssignedRoles]);
        setAvailableRoles([...newAvailableRoles]);
    }


    const handleAssignableMoveClick = (e: React.SyntheticEvent) => {
        e.preventDefault();

        const newAvailableRoles: string[] = [];
        let newAssignedRoles: assignedRoleType[] = assignedRoles;
        let newCheckedAssignable: string[] = checkedAssignableRoles;

        checkedAssignableRoles.map(checkedAssignableRole => {
            newAvailableRoles.push(checkedAssignableRole);
            newAssignedRoles = newAssignedRoles.filter(assignedRole => assignedRole.name !== checkedAssignableRole);
            newCheckedAssignable = newCheckedAssignable.filter(currentChecked => currentChecked !== checkedAssignableRole);
            console.log(newCheckedAssignable);
        });

        setCheckedAssignableRoles([...newCheckedAssignable]);
        setAssignedRoles([...newAssignedRoles]);
        setAvailableRoles([...availableRoles, ...newAvailableRoles]);
    }


    const handleUpdateClick = async (e: React.SyntheticEvent) => {
        e.preventDefault();


        await (async () => {
            const newAvailablePermissions: availablePermissionType = {
                id: editId,
                availableRoles: availableRoles
            }
            await axios.put(`http://localhost:3002/availablePermissions/${editId}`, newAvailablePermissions);
        })();

        await (async () => {
            const newAssignablePermissions: assignedPermissionType = {
                id: editId,
                assignedRoles: assignedRoles
            }
            await axios.put(`http://localhost:3002/assignedPermissions/${editId}`, newAssignablePermissions);
        })();

        await (async () => {
            const response = await axios.get(`http://localhost:3002/roles/${editId}`);
            const data: manageRoleListType = response.data;

            const date = new Date();
            const updatedDate = date.getDay() + "-" + date.getMonth() + "-" + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
            console.log(data);
            const updatedRole = { ...data, updatedAt: updatedDate };
            console.log(updatedRole);
            await axios.put(`http://localhost:3002/roles/${editId}`, updatedRole);
            // console.log(availableRoles);
            console.log(await axios.get(`http://localhost:3002/roles/${editId}`));
        })();

        toggleFunction();

        onHide();

    }



    // const availablePermissions: availablePermissionType = async () => await (async () => {
    //     const response = await axios.get(`http://localhost:3002/availablePermissions/${editId}`);
    //     const data: availablePermissionType = response.data;
    //     return data;
    // })();

    // console.log(availablePermissions());

    // const availableRoles = availablePermissions.availableRoles;
    // console.log(availableRoles);

    return (
        <Modal centered contentClassName="" show={showEditModal} size="lg">
            <Modal.Header closeButton>
                <Modal.Title>
                    Update Role:
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="flex flex-cols-2">
                <Container className=" border-4 border-black rounded-lg mx-4 bg-slate-200">
                    <Row className="">
                        <Form>
                            <div className="px-4 w-full mr-24 bg-slate-400 py-2">
                                <h1 className="font-bold text-xl">Available Permission</h1>
                            </div>
                            <div className=" mr-24 px-6 py-2 my-4 ml-20">
                                {renderedAvailableRoles}
                            </div>
                            {/* <div className="border-4 border-blue-500 px-6 py-2 my-4 ml-4 rounded-xl"> */}
                            <div className="px-6 py-2 my-4 ml-16 mr-20 text-center">
                                <Button type="submit" onClick={handleAvailableMoveClick} className="bg-blue-500 mt-6">Move</Button>
                            </div>
                        </Form>
                    </Row>
                </Container>
                <Container className=" border-4 border-black rounded-lg mx-4 bg-zinc-200">
                    <Row>
                        <Form>
                            <div className=" bg-zinc-400 w-full px-4 mr-24 py-2">
                                <h1 className="font-bold text-xl">Assigned Permission</h1>
                            </div>
                            <div className=" px-6 py-2 my-4 mr-20 ml-16">

                                {renderedAssignedRoles}

                            </div>
                            {/* <div className="border-4 border-blue-500 px-6 py-2 my-4 ml-4 rounded-xl"> */}
                            <div className="px-6 py-2 my-4 ml-16 mr-20 text-center">
                                <Button type="submit" onClick={handleAssignableMoveClick} className="bg-blue-500 mt-6">Move</Button>
                            </div>
                        </Form>
                    </Row>
                </Container>
            </Modal.Body>
            <Modal.Footer>
                <button type="button" className="btn btn-secondary bg-red-500" onClick={onHide}>Close</button>
                <button type="submit" onClick={handleUpdateClick} className="btn btn-primary bg-green-500" >Update</button>
            </Modal.Footer>
        </Modal>
    )
}

export default RoleEditModal;