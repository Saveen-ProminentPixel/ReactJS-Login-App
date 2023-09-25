// import React from 'react'
import { Field, Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { BanyanUserLoginType } from "../Types/componentsTypes";

const BanyanUserLogin = ({ banyanUserList }: BanyanUserLoginType) => {


    const navigate = useNavigate();

    const validate = Yup.object({
        username: Yup.string()
            .max(15, "Must be 15 characters or less ")
            .min(4, "Must be more that 6 character long")
            .required("Required"),
        password: Yup.string()
            .min(6, "Password must contain at least 6 characters")
            .required("Password is required")
    });

    return (
        <div className="bg-stone-100 ml-20 pb-52 pt-28 pl-3">
            <Formik
                initialValues={{
                    username: "",
                    password: ""
                }}
                validationSchema={validate}
                onSubmit={(values) => {
                    console.log(values);
                    const loggedInUser = banyanUserList.find(user => user.username === values.username && user.password === values.password);
                    console.log(loggedInUser);

                    if (loggedInUser) {
                        navigate(`/banyanUser/${values.username}`)
                    }
                }}

                onReset={(values) => {
                    values.username = "";
                    values.password = "";
                }}
            >
                {({ errors, touched }) => (
                    <Form>
                        <div className="bg-stone-100 ml-16 pb-52 pt-14 pl-3 text-center">
                            <div className="border-4 border-stone-500 bg-stone-300 font-extrabold text-3xl text-center text-gray-600 py-4">
                                <h1>User Login</h1>
                            </div>
                            <div className="bg-zinc-200 px-96 py-8">
                                <div className="grid grid-cols-2 py-2">
                                    <div className="text-left pl-36">
                                        <label className="bg-neutral-500 px-2 rounded text-white">UserName:</label>
                                    </div>
                                    <div className="pr-36">
                                        <Field name="username" type="text" />
                                        {errors.username && touched.username ? (<div>{errors.username}</div>) : null}
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 py-2">
                                    <div className="text-left pl-36">
                                        <label className="bg-neutral-500 px-2 pr-3 rounded text-white">Password:</label>
                                    </div>
                                    <div className="pr-36">
                                        <Field name="password" type="password" />
                                        {errors.password && touched.password ? (<div>{errors.password}</div>) : null}
                                    </div>
                                </div>
                            </div>
                            <div className="bg-zinc-300 px-96 py-4 grid grid-cols-2">
                                <button type="submit" className="py-2 px-4 border-2 border-white bg-gray-700 text-white font-bold mx-10 ml-32 pl-10">Submit</button>
                                <button type="reset" className="py-2 px-4 border-2 border-black bg-gray-300 text-black font-bold mx-10 mr-32 pr-10">Reset</button>
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
        </div >
    )
}

export default BanyanUserLogin