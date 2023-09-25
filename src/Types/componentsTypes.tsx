// import { TableColumn } from "react-data-table-component";
// import { TableColumn } from "react-data-table-component";
import { accessType, banyanUserListType, employeeListType, manageRoleListType, productListType, userListType } from "../App";
// import { ExpandableRowsComponent } from "react-data-table-component/dist/src/DataTable/types";
// import { Dispatch, SetStateAction } from "react";
import { ExpandedComponentProps } from "../pages/ProductRDTPage";
// import { dataType } from "../pages/ProductRDTPage";


export interface AddModalType {
    onClose: () => void;
    actionBar: JSX.Element;
    setUserList: React.Dispatch<React.SetStateAction<userListType[]>>;
    userList: userListType[];
}

export interface AllStudentType {
    setCurrentLinks: React.Dispatch<React.SetStateAction<{ label: string; path: string; }[]>>;
    currentUser: string;
    setUserList: React.Dispatch<React.SetStateAction<userListType[]>>;
    userList: userListType[];
}

export interface DeleteModalType {
    selectedRows: any;
    list: (userListType | productListType | employeeListType)[] | manageRoleListType[];
    dataApi: string;
    setShowDeleteModal: React.Dispatch<React.SetStateAction<boolean>>;
    toggleFunction: (() => void) | undefined;
}

export interface HeaderType {
    currentUser: string;
}

export interface LoginType {
    setCurrentLinks: React.Dispatch<React.SetStateAction<{ label: string; path: string; }[]>>;
}

export interface ModalType {
    onClose: () => void;
    actionBar: JSX.Element;
    name: string;
    userList: userListType[];
    toggleFunction?: () => void;
}

export interface NavbarType {
    currentUser: string;
}

export interface ReactTableType {
    setCurrentLinks: React.Dispatch<React.SetStateAction<{ label: string; path: string; }[]>>;
    currentUser: string;
    list: productListType[] | userListType[] | employeeListType[] | manageRoleListType[];
    actionModal?: JSX.Element;
    columns: unknown[];
    // expandedComponent?: ({data}: {data: productListType | userListType | employeeListType} ) => JSX.Element;
    expandedComponent?: React.FC<ExpandedComponentProps>;
    isSelectable: boolean;
    isExpandable: boolean;
    dataApi: string;
    toggle?: boolean;
    toggleFunction?: () => void;
}

export interface SideBar2Type {
    links: { label: string; path: string; }[];
}

export interface StudentType {
    setCurrentLinks: React.Dispatch<React.SetStateAction<{ label: string; path: string; }[]>>;
    name: string;
}

export interface StudentTableType {
    setCurrentLinks: React.Dispatch<React.SetStateAction<{ label: string; path: string; }[]>>;
    name: string;
}

export interface UserType {
    setCurrentLinks: React.Dispatch<React.SetStateAction<{ label: string; path: string; }[]>>;
    name: string;
}

export interface RoleAddModalType {
    manageRoleList: manageRoleListType[];
    toggleFunction: () => void;
    showAddModal: boolean;
    setShowAddModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface RoleEditModalType {
    editId: number;
    showEditModal: boolean;
    setShowEditModal: React.Dispatch<React.SetStateAction<boolean>>;
    toggleFunction: () => void;
}

export interface BanyanUserLoginType {
    banyanUserList: banyanUserListType[];
}

export interface BanyanUserType {
    username: string | undefined;
    setCurrentUser: React.Dispatch<React.SetStateAction<string>>;
    banyanUserList: banyanUserListType[];
    setCurrentLinks: React.Dispatch<React.SetStateAction<{ label: string; path: string; }[]>>;
    setStudentAccess: React.Dispatch<React.SetStateAction<accessType>>;
    setProductAccess: React.Dispatch<React.SetStateAction<accessType>>;
    setEmployeeAccess: React.Dispatch<React.SetStateAction<accessType>>;
}