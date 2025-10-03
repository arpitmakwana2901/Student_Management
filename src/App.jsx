import React from "react";
import { Route, Routes } from "react-router-dom";
import StudentDetails from "./components/StudentDetails";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/Studentlist";
import Navbar from "./components/Navbar";
import Update from "./components/Update";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import { PrivateRoute } from "./components/PrivateRoute";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<StudentList />} />
        <Route path="/studentDetails/:id?" element={<StudentDetails />} />
        <Route
          path="/studentForm"
          element={
            <PrivateRoute>
              <StudentForm />
            </PrivateRoute>
          }
        />
        <Route path="/studentList" element={<StudentList />} />
        <Route path="/studentUpdate/:id" element={<Update />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </>
  );
}

export default App;
