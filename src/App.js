import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./components/login-signup/Login";
import StudentSignUp from "./components/login-signup/StudentSignUp";
import FacultySignUp from "./components/login-signup/FacultySignUp";
import StudentDashBoard from './components/student-dashboard/StudentDashBoard';
import Header from './components/common/header/Header';

function App() {
  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/faculty-signup" element={<FacultySignUp/>}/>
          <Route path="/student-signup" element={<StudentSignUp/>}/>
          <Route path="/student-dashboard" element={<StudentDashBoard/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
