// import React from 'react'
// import { userListType } from "../App";
import { AllStudentPageProps } from "../Types/pagesProps";
import AllStudent from "../components/AllStudent"
// import StudentPage from "./StudentPage"

// interface AllStudentPageProps {
//   setCurrentLinks: React.Dispatch<React.SetStateAction<{label: string;path: string;}[]>>;
//   currentUser: string;
//   setUserList: React.Dispatch<React.SetStateAction<userListType>>;
//   userList: userListType;
// }

const AllStudentPage = ({ setCurrentLinks, currentUser, setUserList, userList }: AllStudentPageProps): JSX.Element => {



  return (
    <AllStudent setCurrentLinks={setCurrentLinks} currentUser={currentUser} setUserList={setUserList} userList={userList} />
  )
}

export default AllStudentPage;