// import React from 'react'

// import axios from "axios";
import { useEffect } from "react";
import { banyanUserListType, manageRoleListType } from "../App";
import DataBase from "../../db.json";
import { assignedPermissionType } from "./RoleEditModal";
import { BanyanUserType } from "../Types/componentsTypes";

const BanyanUser = ({ username, setCurrentUser, banyanUserList, setCurrentLinks, setStudentAccess, setProductAccess, setEmployeeAccess }: BanyanUserType) => {

    useEffect(() => {
        setCurrentUser(username!);
    }, [])

    const user: banyanUserListType | undefined = banyanUserList.find(user => user.username === username);
    console.log(user);

    const permissions: Set<string> = new Set();
    const userRoles: string[] = [];

    const assignedPermissions: assignedPermissionType[] = DataBase.assignedPermissions;
    const roles: manageRoleListType[] = DataBase.roles;

    const studentAccessSet: Set<string> = new Set();
    const productAccessSet: Set<string> = new Set();
    const employeeAccessSet: Set<string> = new Set();

    const studentAccess = { view: false, edit: false, delete: false };
    const productAccess = { view: false, edit: false, delete: false };
    const employeeAccess = { view: false, edit: false, delete: false };

    useEffect(() => {
        setStudentAccess({ view: false, edit: false, delete: false });
        setProductAccess({ view: false, edit: false, delete: false });
        setEmployeeAccess({ view: false, edit: false, delete: false });

    }, []);

    console.log(studentAccess);
    console.log(productAccess);
    console.log(employeeAccess);

    assignedPermissions.map(assignedPermission => {
        if (user!.roleIds.includes(assignedPermission.id)) {
            assignedPermission.assignedRoles.map(assignedRole => {
                permissions.add(assignedRole.name);
                if (assignedRole.name === "student") {
                    if (assignedRole.access.view === true) {
                        studentAccessSet.add("view");
                        studentAccess.view = true;
                    }
                    // else { studentAccess.view = false }
                    if (assignedRole.access.edit === true) {
                        studentAccessSet.add("edit");
                        studentAccess.edit = true;
                    }
                    // else { studentAccess.edit = false }
                    if (assignedRole.access.delete === true) {
                        studentAccessSet.add("delete");
                        studentAccess.delete = true;
                    }
                    // else { studentAccess.delete = false }
                    // console.log(studentAccess);
                }
                else if (assignedRole.name === "product") {
                    if (assignedRole.access.view === true) {
                        productAccessSet.add("view");
                        productAccess.view = true;
                    }
                    // else { productAccess.view = false }
                    if (assignedRole.access.edit === true) {
                        productAccessSet.add("edit");
                        productAccess.edit = true;
                    }
                    // else { productAccess.edit = false }
                    if (assignedRole.access.delete === true) {
                        productAccessSet.add("delete");
                        productAccess.delete = true;
                    }
                    // else { productAccess.delete = false }
                    // console.log(productAccess);
                }
                else if (assignedRole.name === "employee") {
                    if (assignedRole.access.view === true) {
                        employeeAccessSet.add("view");
                        employeeAccess.view = true;
                    }
                    // else { employeeAccess.view = false }
                    if (assignedRole.access.edit === true) {
                        employeeAccessSet.add("edit");
                        employeeAccess.edit = true;
                    }
                    // else { employeeAccess.edit = false }
                    if (assignedRole.access.delete === true) {
                        employeeAccessSet.add("delete");
                        employeeAccess.delete = true;
                    }
                    // else { employeeAccess.delete = false }
                    // console.log(employeeAccess);
                }
            });
        }
    });



    useEffect(() => {
        setStudentAccess({ ...studentAccess });
        setEmployeeAccess({ ...employeeAccess });
        setProductAccess({ ...productAccess });
    }, []);


    roles.map(role => {
        if (user!.roleIds.includes(role.id)) {
            userRoles.push(role.roleName);
        }
    })

    console.log(permissions);

    console.log(studentAccess);
    console.log(productAccess);
    console.log(employeeAccess);

    const links = [
        { label: "Home", path: "/" },
    ];

    permissions.forEach(permission => {
        if (permission === "student") {
            const link = { label: "Student Data", path: `/student/reacttable` };
            links.push(link);
        }
        if (permission === "product") {
            const link = { label: "Product Data", path: `/product/reacttable` };
            links.push(link);
        }
        if (permission === "employee") {
            const link = { label: "Employee Data", path: `/employee/reacttable` };
            links.push(link);
        }
    });

    links.push({ label: "Back", path: "/banyanUser" });

    useEffect(() => {
        setCurrentLinks(links);
    }, []);


    const renderedStudentAccess = [...studentAccessSet].map(access => {
        return (
            <label className="bg-black px-2 mx-2 text-white">{access}</label>
        )
    });

    const renderedProductAccess = [...productAccessSet].map(access => {
        return (
            <label className="bg-black px-2 mx-2 text-white">{access}</label>
        )
    });

    const renderedEmployeeAccess = [...employeeAccessSet].map(access => {
        return (
            <label className="bg-black px-2 mx-2 text-white">{access}</label>
        )
    });

    const renderedRoles = userRoles.map(role => {
        return (
            <label className="bg-gray-500 px-2 mx-2 text-white">{role}</label>
        )
    })


    return (
        <div className="bg-stone-100 ml-16 pb-52 pt-28 pl-3">
            <div className="bg-stone-100 ml-16 pb-52 pt-14 pl-3 text-center">
                <div className="border-4 border-stone-500 bg-stone-300 font-extrabold text-3xl text-center text-gray-600 py-4">
                    <h1>
                        Hello!!!! {user!.name}
                    </h1>
                </div>
                <div className="bg-zinc-200 px-96 py-8 text-left">
                    <div className="grid grid-cols-2 py-2 pl-20">
                        <div className="pl-2">
                            <label className="bg-slate-500 px-4 font-bold text-lg  text-white">Data</label>
                        </div>
                        <div className="pl-10">
                            <label className="bg-slate-500 px-4 font-bold text-lg  text-white">Access</label>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 py-2 pl-20">
                        <div className="">
                            <label className="bg-neutral-500 px-4 font-semibold rounded text-white">student</label>
                        </div>
                        <div>
                            {renderedStudentAccess}
                        </div>
                    </div>
                    <div className="grid grid-cols-2 py-2 pl-20">
                        <div>
                            <label className="bg-neutral-500 px-4 font-semibold rounded text-white">product</label>
                        </div>
                        <div>
                            {renderedProductAccess}
                        </div>
                    </div>
                    <div className="grid grid-cols-2 py-2 pl-20">
                        <div>
                            <label className="bg-neutral-500 px-4 font-semibold rounded text-white">employee</label>
                        </div>
                        <div>
                            {renderedEmployeeAccess}
                        </div>
                    </div>
                </div>
                <div className="bg-zinc-300 px-96 py-4 grid grid-cols-2">
                    {renderedRoles}
                </div>
            </div>
        </div>
    )
}

export default BanyanUser;