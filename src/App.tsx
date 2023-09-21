// import React from "react";
import "./index.css";
import LoginPage from "./pages/LoginPage";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
// import Sidebar from "./components/Sidebar";
// import Navbar from "./components/Navbar";
import UserPage from "./pages/UserPage";
import { useEffect, useState } from "react";
import StudentPage from "./pages/StudentPage";
import TablePage from "./pages/TablePage";
import Sidebar2 from "./components/Sidebar2";
import AllStudentPage from "./pages/AllStudentPage";
// import {users} from "./users";
// import userData from "./userData.json"
import userDb from "../db.json";
// import ReactTable from "./components/ReactTable";
import UserRDTPage from "./pages/UserRDTPage";
import ProductRDTPage from "./pages/ProductRDTPage";
import EmpoyeeRDTPage from "./pages/EmpoyeeRDTPage";
import axios from "axios";
import ManageRolePage from "./pages/ManageRolePage";
import { ManageRolePageType } from "./Types/pagesProps";
import Modal from 'react-bootstrap/Modal'
// import ToggleHook from "./hooks/toggleHook";


// interface LinkModal{
//     name: string,
//     password: string,
// }

export type userListType = {
    id: number
    name: string;
    password: string;
    username: string;
    email: string;
};

export type productListType = {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[];
};

export type employeeListType = {
  id: number;
  firstName: string;
  lastName: string;
  company: { name: string; title: string; department: string; };
};  

export type manageRoleListType = {
  id: number;
  roleName: string;
  createdAt: string;
  updatedAt: string;
  description: string;
};



const links: {label: string; path: string;}[] = [{label: "Home", path: "/"},];
const user: string = "guest";

// const initialState = {
//   currentLinks: links,
//   currentUser: user,
//   userList: userDb.users,
//   userListOfRDT: userDb.users,
//   productListOfRDT: userDb.products,
//   employeeListOfRDT: userDb.employees
// };



// export const reducer = (state, action) => {
//   if(action.type === "employeeLink"){
//    return {
//     ...state, currentLinks : action.payload.currentLinks,
//    }
//   }
//  }


function App(): JSX.Element {

  // useEffect(() => {
  //   const fetchData = async() => {
  //     return await axios.get("http://localhost:3002/employees");
  //     // return res.data;
  //   }
  //   console.log(fetchData());
  // }, []);

  // const [toggle, toggleFunction] = ToggleHook();
  

  const [currentLinks, setCurrentLinks] = useState(links);
  const [currentUser, setCurrentUser] = useState(user);
  // const [userList, setUserList] = useState<userListType[]>(userDb.users);
  const [userList, setUserList] = useState<userListType[]>([]);
  const [userListOfRDT, setUserListOfRDT] = useState<userListType[]>([]);
  const [productListOfRDT, setProductListOfRDT] = useState<productListType[]>(userDb.products);
  const [employeeListOfRDT, setEmployeeListOfRDT] = useState<employeeListType[]>(userDb.employees);
  const [manageRoleList, setManageRoleList] = useState<manageRoleListType[]>(userDb.roles);

  useEffect(() => {

    (async() => {
      const data = await axios.get("http://localhost:3002/users");
      const response: userListType[] = data.data;
      setUserList(response);
      setUserListOfRDT(response);
    }) ();

    (async() => {
      const data = await axios.get("http://localhost:3002/employees");
      const response: employeeListType[] = data.data;
      setEmployeeListOfRDT(response);
    }) ();

    (async() => {
      const data = await axios.get("http://localhost:3002/products");
      const response: productListType[] = data.data;
      setProductListOfRDT(response);
    }) ();

    (async() => {
      const data = await axios.get("http://localhost:3002/roles");
      const response: manageRoleListType[] = data.data;
      setManageRoleList(response);
    }) ();
  },[])


  
  
  // const [state, dispatch] = useReducer(reducer, initialState);


  // console.log(userListOfRDT);

  // const employeeAction = {
  //   type: "employee",
  //   payload: {
  //     data: userDb.employees,
  //   }
  // }

  // dispatch(employeeAction)


  

  return (
    <div>
      {/* <Header /> */}
      <div className="">
        <div className="">
          {/* <Navbar currentUser={currentUser} /> */}
          <Header currentUser={currentUser} />
        </div>   
        <div className="">
          {/* <Sidebar links={currentlinks} /> */}
          <Sidebar2 links={currentLinks} />
        </div> 
      </div>
       
      <div className="col-span-5">
        
          <Routes>
            <Route path="/" element={<LoginPage setCurrentLinks={setCurrentLinks} setCurrentUser={setCurrentUser} />} />
            <Route path="user/:name" element={<UserPage setCurrentLinks={setCurrentLinks} setCurrentUser={setCurrentUser} />} />
            <Route path="user/student/:name" element={<StudentPage setCurrentLinks={setCurrentLinks} setCurrentUser={setCurrentUser} />} />
            <Route path="user/studenttable/:name" element={<TablePage setCurrentLinks={setCurrentLinks} setCurrentUser={setCurrentUser} />} />
            <Route path="user/allstudent/" element={<AllStudentPage setCurrentLinks={setCurrentLinks} currentUser={currentUser} setUserList={setUserList} userList={userList} />} />
            <Route path="user/reacttable/" element={<UserRDTPage setCurrentLinks={setCurrentLinks} currentUser={currentUser} userList={userListOfRDT} />} />
            <Route path="product/reacttable/" element={<ProductRDTPage setCurrentLinks={setCurrentLinks} currentUser={currentUser} productList={productListOfRDT} />} />
            <Route path="employee/reacttable/" element={<EmpoyeeRDTPage setCurrentLinks={setCurrentLinks} currentUser={currentUser} employeeList={employeeListOfRDT} />} />
            {/* <Route path="employee/reacttable/" element={<EmpoyeeRDTPage reducer={reducer}  />} /> */}
            <Route path="user/managerole/" element={<ManageRolePage setCurrentLinks={setCurrentLinks} currentUser={currentUser} manageRoleList={manageRoleList} />} />
          </Routes>
        
      </div>
    </div>
    
  );
}

export default App;


