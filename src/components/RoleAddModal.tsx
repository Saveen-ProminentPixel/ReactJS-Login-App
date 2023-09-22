// import React from 'react'
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { manageRoleListType } from "../App";
import axios from "axios";
import Modal from 'react-bootstrap/Modal'
import { RoleAddModalType } from "../Types/componentsTypes";

const RoleAddModal = ({ manageRoleList, toggleFunction, showAddModal, setShowAddModal }: RoleAddModalType) => {

    const validate = Yup.object({
        roleName: Yup.string()
            .max(30, "Must be 30 characters or less")
            .required("Required"),
        description: Yup.string()
            .min(6, "Description must contain at least 6 characters")
            .required("Description is required"),
    })
    console.log(showAddModal);
    const onHide = () => {
        setShowAddModal(false)
    }
    return (

        <Modal show={showAddModal} onHide={onHide} size="sm">
            <Modal.Header closeButton>
                <Modal.Title>
                    Add new role:
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Formik
                    initialValues={{
                        roleName: "",
                        description: ""
                    }}
                    validationSchema={validate}
                    onSubmit={async (values) => {
                        // addNewRole(values.roleName, values.description);
                        // onClose();
                        let newId: number = 0;

                        await (async () => {
                            const data = await axios.get("http://localhost:3002/roles");
                            const response: manageRoleListType[] = data.data;
                            console.log("response length : " + response.length);
                            newId = response.length;
                        })();

                        const date = new Date();
                        const createdDate = date.getDay() + "-" + date.getMonth() + "-" + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
                        console.log(manageRoleList.length);
                        console.log("New Id before new Role" + newId);
                        const newRole: manageRoleListType = {
                            id: newId + 1,
                            roleName: values.roleName,
                            description: values.description,
                            createdAt: createdDate,
                            updatedAt: createdDate
                        };

                        await (async () => {
                            await axios.post("http://localhost:3002/roles", newRole);
                        })();

                        console.log("New Id before available Permission" + newId);
                        const availablePermission = {
                            id: newId + 1,
                            availableRoles: ["student", "product", "employee"]
                        };

                        await (async () => {
                            await axios.post("http://localhost:3002/availablePermissions", availablePermission);
                        })();

                        const assignedPermission = {
                            id: newId + 1,
                            assignedRoles: []
                        }
                        await (async () => {
                            await axios.post("http://localhost:3002/assignedPermissions", assignedPermission);
                        })();

                        toggleFunction();
                        setShowAddModal(false);
                    }}
                >
                    {({ errors, touched }) => (
                        <div>


                            <Form className="">
                                <div>
                                    <div>
                                        <label className="bg-stone-500 rounded pr-28 px-2 text-white">Role Name:</label>
                                        <Field name="roleName" type="text" className="bg-zinc-200 rounded border-2 border-gray-400 mx-2 mb-2" />
                                        {errors.roleName && touched.roleName ? (
                                            <div>{errors.roleName}</div>
                                        ) : null}
                                    </div>
                                    <div>
                                        <label className="bg-stone-500 rounded pr-28 px-2 text-white">Description:</label>
                                        <Field name="description" type="text" className="bg-zinc-200 rounded border-2 border-gray-400 mx-2 mb-2" />
                                        {errors.description && touched.description ? (
                                            <div>{errors.description}</div>
                                        ) : null}
                                    </div>
                                    <Modal.Footer>
                                        <button type="button" className="btn btn-secondary bg-red-500" onClick={onHide}>Close</button>
                                        <button type="submit" className="btn btn-primary bg-green-500" >Save changes</button>
                                    </Modal.Footer>
                                </div>
                            </Form>


                        </div>

                    )}
                </Formik>
            </Modal.Body>

        </Modal>




    )
}

export default RoleAddModal;