// import React from "react";
import "./index.css";
import LoginPage from "./pages/LoginPage";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
// import Sidebar from "./components/Sidebar";
// import Navbar from "./components/Navbar";
import UserPage from "./pages/UserPage";
import { useState } from "react";
import StudentPage from "./pages/StudentPage";
import TablePage from "./pages/TablePage";
import Sidebar2 from "./components/Sidebar2";
import AllStudentPage from "./pages/AllStudentPage";
import {users} from "./users";
import userData from "./userData.json"
import userDb from "../db.json";
import ReactTable from "./components/ReactTable";
import UserRDTPage from "./pages/UserRDTPage";
import ProductRDTPage from "./pages/ProductRDTPage";
import EmpoyeeRDTPage from "./pages/EmpoyeeRDTPage";


// interface LinkModal{
//     name: string,
//     password: string,
// }


function App() {

  const links: {label: string; path: string;}[] = [{label: "Home", path: "/"},];
  const user: string = "guest";

  const [currentLinks, setCurrentLinks] = useState(links);
  const [currentUser, setCurrentUser] = useState(user);
  const [userList, setUserList] = useState(userDb.users);
  const [userListOfRDT, setUserListOfRDT] = useState(userDb.users);
  const [productListOfRDT, setProductListOfRDT] = useState(userDb.products);
  const [employeeListOfRDT, setEmployeeListOfRDT] = useState(userDb.employees);

  

  console.log(userListOfRDT);

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
            <Route path="user/reacttable/" element={<UserRDTPage setCurrentLinks={setCurrentLinks} currentUser={currentUser} setUserList={setUserListOfRDT} userList={userListOfRDT} />} />
            <Route path="product/reacttable/" element={<ProductRDTPage setCurrentLinks={setCurrentLinks} currentUser={currentUser} setProductList={setProductListOfRDT} productList={productListOfRDT} />} />
            <Route path="employee/reacttable/" element={<EmpoyeeRDTPage setCurrentLinks={setCurrentLinks} currentUser={currentUser} setEmployeeList={setEmployeeListOfRDT} employeeList={employeeListOfRDT} />} />
          </Routes>
        
      </div>
    </div>
    
  );
}

export default App;
