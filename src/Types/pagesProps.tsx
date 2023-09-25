// import { Dispatch, SetStateAction } from "react";
import { accessType, banyanUserListType, employeeListType, manageRoleListType, productListType, userListType } from "../App";



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
    employeeAccess: accessType;
}

export interface LoginPageType {
    setCurrentLinks: React.Dispatch<React.SetStateAction<{ label: string; path: string; }[]>>;
    setCurrentUser: React.Dispatch<React.SetStateAction<string>>;
}

export interface ProductRDTPageType {
    setCurrentLinks: React.Dispatch<React.SetStateAction<{ label: string; path: string; }[]>>;
    currentUser: string;
    productList: productListType[];
    productAccess: accessType;
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
    studentAccess: accessType;
}

export interface ManageRolePageType {
    setCurrentLinks: React.Dispatch<React.SetStateAction<{ label: string; path: string; }[]>>;
    currentUser: string;
    manageRoleList: manageRoleListType[];
}

export interface BanyanUserLoginPageType {
    setCurrentLinks: React.Dispatch<React.SetStateAction<{ label: string; path: string; }[]>>;
    banyanUserList: banyanUserListType[];
}

export interface BanyanUserPageType {
    setCurrentUser: React.Dispatch<React.SetStateAction<string>>;
    banyanUserList: banyanUserListType[];
    setCurrentLinks: React.Dispatch<React.SetStateAction<{ label: string; path: string; }[]>>;
    setStudentAccess: React.Dispatch<React.SetStateAction<accessType>>;
    setProductAccess: React.Dispatch<React.SetStateAction<accessType>>;
    setEmployeeAccess: React.Dispatch<React.SetStateAction<accessType>>;
}