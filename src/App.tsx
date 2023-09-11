// import React from "react";
import "./index.css";
import LoginPage from "./pages/LoginPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import UserPage from "./pages/UserPage";
import { useState } from "react";
import StudentPage from "./pages/StudentPage";
import TablePage from "./pages/TablePage";


interface LinkModal{
    name: string,
    password: string,
}


function App() {

  const links: {label: string; path: string;}[] = [{label: "Home", path: "/"},];
  const user: string = "guest";

  const [currentlinks, setCurrentLinks] = useState(links);
  const [currentUser, setCurrentUser] = useState(user);

  return (
    <div>
      {/* <Header /> */}
      <div className="">
        <Navbar currentUser={currentUser} />
        <Sidebar links={currentlinks} />
      </div>   
      <div className="col-span-5">
        
          <Routes>
            <Route path="/" element={<LoginPage setCurrentUser={setCurrentUser} />} />
            <Route path="user/:name" element={<UserPage setCurrentLinks={setCurrentLinks} setCurrentUser={setCurrentUser} />} />
            <Route path="user/student/:name" element={<StudentPage setCurrentLinks={setCurrentLinks} setCurrentUser={setCurrentUser} />} />
            <Route path="user/studenttable/:name" element={<TablePage setCurrentLinks={setCurrentLinks} setCurrentUser={setCurrentUser} />} />
          </Routes>
        
      </div>
    </div>
    
  );
}

export default App;
