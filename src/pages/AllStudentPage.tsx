// import React from 'react'

import AllStudent from "../components/AllStudent"
// import StudentPage from "./StudentPage"

const AllStudentPage = ({setCurrentLinks, currentUser, setUserList, userList}) => {



  return (
    <AllStudent setCurrentLinks={setCurrentLinks} currentUser={currentUser} setUserList={setUserList} userList={userList} />
  )
}

export default AllStudentPage