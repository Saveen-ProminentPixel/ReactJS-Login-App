// import { Dispatch, SetStateAction } from "react";
import { employeeListType, manageRoleListType, productListType, userListType } from "../App";



export interface AllStudentPageProps {
    setCurrentLinks: React.Dispatch<React.SetStateAction<{ label: string; path: string; }[]>>;
    currentUser: string;
    setUserList: React.Dispatch<React.SetStateAction<userListType[]>>;
    userList: userListType[];
}


export interface EmployeeRDTPageType {
    setCurrentLinks: React.Dispatch<React.SetStateAction<{ label: string; path: string; }[]>>;
    currentUser: string;
    employeeList: employeeListType[];
}

export interface LoginPageType {
    setCurrentLinks: React.Dispatch<React.SetStateAction<{ label: string; path: string; }[]>>;
    setCurrentUser: React.Dispatch<React.SetStateAction<string>>;
}

export interface ProductRDTPageType {
    setCurrentLinks: React.Dispatch<React.SetStateAction<{ label: string; path: string; }[]>>;
    currentUser: string;
    productList: productListType[];
}

export interface StudentPageType {
    setCurrentLinks: React.Dispatch<React.SetStateAction<{ label: string; path: string; }[]>>;
    setCurrentUser: React.Dispatch<React.SetStateAction<string>>;
}

export interface TablePageType {
    setCurrentLinks: React.Dispatch<React.SetStateAction<{ label: string; path: string; }[]>>;
    setCurrentUser: React.Dispatch<React.SetStateAction<string>>;
}

export interface UserPageType {
    setCurrentLinks: React.Dispatch<React.SetStateAction<{ label: string; path: string; }[]>>;
    setCurrentUser: React.Dispatch<React.SetStateAction<string>>;
}

export interface UserRDTPageType {
    setCurrentLinks: React.Dispatch<React.SetStateAction<{ label: string; path: string; }[]>>;
    currentUser: string;
    userList: userListType[];
}

export interface ManageRolePageType {
    setCurrentLinks: React.Dispatch<React.SetStateAction<{ label: string; path: string; }[]>>;
    currentUser: string;
    manageRoleList: manageRoleListType[];
}