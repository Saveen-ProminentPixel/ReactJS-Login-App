// import React from 'react'
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { ModalType } from "../Types/componentsTypes";
import axios from "axios";
// import { users } from "../users";
// import userData from '../userData.json'
// import userDb from '../../db.json';
// import axios from "axios";

// import { Modal } from "react-bootstrap";

const Modal = ({onClose, actionBar, name, userList, toggleFunction}: ModalType): JSX.Element => {


    const currentEditUser = userList.find(user => user.name === name)!;

    // const editUserByName = async (id, name, password, username, email) => {
    //     const response = await axios.put(`http://localhost:3002/users/${id}`, {
    //         password: password,
    //         username: username,
    //         email: email,
    //     });

    //     console.log(response);

    // const updatedUsers = userList.map((user) => {
    //     if(user.name === name){
    //         return {...user, ...response.data};
    //     }
    //     return user;
    // });

    // console.log(updatedUsers);

    // setUserList(updatedUsers);
    // }

    function changeUserData(newPassword: string, newUsername: string, newEmail: string): void {

        // let id = 0;
        // const newUsers = userList.map(user => {
        //     if(user.name === name){
        //         return {...user, username: newUsername, password: newPassword, email: newEmail};
        //     }
        //     return user;
        // })

        // editUserByName(id, name, newPassword, newUsername, newEmail);

        // userDb.users = newUsers;
        // setUserList(newUsers);

        // const user = userList.find(user => user.name === name);
        (async() => {
            await axios.put(`http://localhost:3002/users/${currentEditUser.id}`, {
                ...currentEditUser,
                username: newUsername,
                password: newPassword,
                email: newEmail
            })
        }) ();

        toggleFunction!();

        // const updatedData = jsonData.map(item => {
        //     if (item.id === someIdToMatch) {
        //       return {
        //         ...item,
        //         propertyNameToUpdate: newValue
        //       };
        //     }
        //     return item;
        //   });

        // fs.writeFile('./userData.json', JSON.stringify(updatedData)
        // users = {...users, ...newUsers};
        onClose();
    }

    const validate = Yup.object({
        // name: Yup.string()
        // .max(15, "Must be 15 characters or less")
        // .required("Required"),
        password: Yup.string()
        .min(6, "Password must contain at least 6 characters")
        .required("Password is required"),
        username: Yup.string()
        .max(15, "Must ne 15 characters or less")
        .required("Required"),
        email: Yup.string().email()
        .required("Required")
    })

    // function handleSubmit(){
    
    // }

    return (
        <div>
            <div onClick={onClose} className="fixed inset-0 bg-gray-300 opacity-50"></div>
            <div className="fixed inset-20 p-5 mx-64 rounded-xl bg-white">
                <div className="flex flex-col h-2/3 justify-between">
                    <Formik
                        initialValues={{
                            // name: "",
                            password: currentEditUser?.password,
                            username: currentEditUser?.username,
                            email: currentEditUser?.email
                        }}
                        validationSchema={validate}
                        onSubmit={(values) => {
                            changeUserData(values.password, values.username, values.email);
                            onClose();
                            // for(const user of users){
                            //     if(user.name === name){

                            //         console.log(user);

                            //         user.password = values.password;
                            //         user.username = values.username;
                            //         user.email = values.email;

                            //         console.log(user);
                            //     }
                            // }
                        }}
                    >

                        {({errors, touched}) => (
                            <Form className="">
                                <div className="text-center">
                                    <h1 className="bg-slate-300 mx-10 text-center rounded-full border-4 border-blue-500 font-bold text-2xl text-blue-800">Edit Details</h1>
                                    <div className="bg-slate-200 mx-10 pb-5 pt-5 rounded-xl border-4 border-cyan-500">
                                    <div className=" m-2 text-center">
                                        <label className="bg-purple-500 rounded text-center px-52 text-white">{name}</label>
                                    </div>
                                    {/* <div>
                                        <Field name="name" type="text" className="bg-zinc-200 rounded border-2 border-gray-400 mx-2 mb-4" />
                                            {errors.name && touched.name ? (
                                            <div>{errors.name}</div>
                                            ) : null}
                                    </div> */}
                                    <div className=" m-2">
                                        <label className="bg-stone-500 rounded pr-28 px-2 text-white">New Password:</label>
                                    </div>
                                    <div>
                                        <Field name="password" type="password" className="bg-zinc-200 border-2 border-gray-400 rounded mx-2 mb-4" />
                                            {errors.password && touched.password ? (
                                            <div>{errors.password}</div>
                                            ) : null}
                                    </div>
                                    <div className=" m-2">
                                        <label className="bg-stone-500 rounded pr-28 px-2 text-white">New UserName:</label>
                                    </div>
                                    <div>
                                        <Field name="username" type="text" className="bg-zinc-200 border-2 border-gray-400 rounded mx-2 mb-4" />
                                            {errors.username && touched.username ? (
                                            <div>{errors.username}</div>
                                            ) : null}
                                    </div>
                                    <div className=" m-2">
                                        <label className="bg-stone-500 rounded pr-28 px-2 text-white">New Email:</label>
                                    </div>
                                    <div>
                                        <Field name="email" type="text" className="bg-zinc-200 border-2 border-gray-400 rounded mx-2 mb-4" />
                                            {errors.email && touched.email ? (
                                            <div>{errors.email}</div>
                                            ) : null}
                                    </div>
                                    <div className="m-2 grid grid-cols-2 mx-32 text-center">
                                            
                                        <button type="submit" className="bg-green-400 rounded border-2 text-white border-black font-bold mr-5 p-1 px-2">Submit</button>
                                        <div className="bg-red-500 rounded border-2 text-white border-black font-bold mr-5 p-1 px-2">{actionBar}</div>
                                            
                                    </div>    
                                    </div>
                                </div>
                            </Form>
                        )}

                    </Formik>
                </div>
            </div>
        </div>
      )
}

export default Modal;