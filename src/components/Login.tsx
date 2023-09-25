// import React from 'react'
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { users } from "../users";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { LoginType } from "../Types/componentsTypes";

interface FormModal {
    name: string,
    password: string
}

function Login({ setCurrentLinks }: LoginType): JSX.Element {

    const links = [
        { label: "Home", path: "/" },
        { label: "User Login", path: "/banyanUser" },
    ];

    useEffect(() => {
        setCurrentLinks(links);
    }, []);

    const navigate = useNavigate();

    const validate = Yup.object({
        name: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
        password: Yup.string()
            .min(6, "Password must contain at least 6 characters")
            .required("Password is required")
    })

    return (
        <Formik<FormModal>
            initialValues={{
                name: "",
                password: ""
            }}
            validationSchema={validate}
            onSubmit={(values) => {
                console.log(values);
                const loggedInUser = users.find(user => user.name === values.name && user.password === values.password);
                console.log(loggedInUser);

                if (loggedInUser) {
                    navigate(`/user/${values.name}`)
                }
            }}
            onReset={(values) => {
                values.name = "";
                values.password = "";
            }}
        >
            {({ errors, touched }) => (
                <Form className="ml-24 pt-14 pl-3">
                    <div className="grid grid-cols-1 text-center bg-stone-200 mx-10 pt-12 px-12 pb-52">
                        <h1 className="bg-slate-400 m-2 mx-10 mt-24 p-3 rounded-xl border-8 border-slate-400 font-extrabold text-4xl text-white">Admin Login</h1>
                        <div className="bg-neutral-50 mx-96 mt-12 pb-16 pt-10 border-4 border-zinc-500">
                            <div className=" m-2">
                                <label className="bg-stone-700 rounded pr-32 px-2 text-white">Name:</label>
                            </div>
                            <div>
                                <Field name="name" type="text" className="bg-zinc-200 rounded border-2 border-gray-400 mx-2 mb-4" />
                                {errors.name && touched.name ? (
                                    <div>{errors.name}</div>
                                ) : null}
                            </div>
                            <div className=" m-2">
                                <label className="bg-stone-700 rounded pr-28 px-2 text-white">Password:</label>
                            </div>
                            <div>
                                <Field name="password" type="password" className="bg-zinc-200 border-2 border-gray-400 rounded mx-2 mb-4" />
                                {errors.password && touched.password ? (
                                    <div>{errors.password}</div>
                                ) : null}
                            </div>
                            <div className="m-2 grid grid-cols-2 mx-32 px-16 text-center">

                                <button type="submit" className="bg-slate-500 rounded border-2 text-white border-white font-bold mr-5 p-1 px-2">Submit</button>
                                <button type="reset" className="bg-slate-100 rounded border-2 text-black border-black font-bold ml-5 p-1 px-2">Reset</button>

                            </div>
                        </div>

                    </div>
                </Form>
            )}
        </Formik>
    )

}

export default Login;