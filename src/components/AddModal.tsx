// import React from 'react'
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { AddModalType } from "../Types/componentsTypes";
import { userListType } from "../App";
// import { users } from "../users";
// import userData from '../userData.json'
// import userDb from '../../db.json';
// import axios from "axios";

// import { Modal } from "react-bootstrap";

const AddModal = ({onClose, actionBar, setUserList, userList}: AddModalType): JSX.Element => {

    function changeUserData(name: string, password: string, username: string, email: string) {

        // let id = 0;
        // const newUsers = userDb.users.map(user => {
        //     if(user.name === name){
        //         return {...user, username: newUsername, password: newPassword, email: newEmail};
        //     }
        //     return user;
        // })
        const newUser: userListType = {
            id: 100,
            name: name,
            password: password,
            username: username,
            email: email
        }
        console.log(userList);
        userList.push(newUser);
        setUserList(userList);

        onClose();
    }

    const validate = Yup.object({
        name: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
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
            <div className="fixed inset-20 p-2 mx-64 rounded-xl bg-white">
                <div className="flex flex-col h-2/3 justify-between">
                    <Formik
                        initialValues={{
                            name: "",
                            password: "",
                            username: "",
                            email: ""
                        }}
                        validationSchema={validate}
                        onSubmit={(values) => {
                            changeUserData(values.name, values.password, values.username, values.email);
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
                                    <h1 className="bg-blue-300 mx-10 text-center rounded-xl font-bold text-2xl text-blue-800">Add New Student</h1>
                                    <div className="bg-slate-200 mx-10 pb-2 pt-2 rounded-xl ">
                                    <div className=" m-2 text-center">
                                                
                                    </div>
                                    <div>
                                        <Field name="name" type="text" className="bg-zinc-200 rounded border-2 border-gray-400 mx-2 mb-2" />
                                            {errors.name && touched.name ? (
                                            <div>{errors.name}</div>
                                            ) : null}
                                    </div>
                                    <div className=" m-2">
                                        <label className="bg-stone-500 rounded pr-28 px-2 text-white">Password:</label>
                                    </div>
                                    <div>
                                        <Field name="password" type="password" className="bg-zinc-200 border-2 border-gray-400 rounded mx-2 mb-2" />
                                            {errors.password && touched.password ? (
                                            <div>{errors.password}</div>
                                            ) : null}
                                    </div>
                                    <div className=" m-2">
                                        <label className="bg-stone-500 rounded pr-28 px-2 text-white">UserName:</label>
                                    </div>
                                    <div>
                                        <Field name="username" type="text" className="bg-zinc-200 border-2 border-gray-400 rounded mx-2 mb-2" />
                                            {errors.username && touched.username ? (
                                            <div>{errors.username}</div>
                                            ) : null}
                                    </div>
                                    <div className=" m-2">
                                        <label className="bg-stone-500 rounded pr-28 px-2 text-white">Email:</label>
                                    </div>
                                    <div>
                                        <Field name="email" type="text" className="bg-zinc-200 border-2 border-gray-400 rounded mx-2 mb-2" />
                                            {errors.email && touched.email ? (
                                            <div>{errors.email}</div>
                                            ) : null}
                                    </div>
                                    <div className="m-2 grid grid-cols-2 mx-32 text-center">
                                            
                                        <button type="submit" className="bg-green-400 rounded border-2 text-white border-black font-bold mr-5 ml-48 p-1 px-2">Submit</button>
                                        <div className="bg-red-500 rounded border-2 text-white border-black font-bold mr-52 p-1 px-2">{actionBar}</div>
                                            
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

export default AddModal;