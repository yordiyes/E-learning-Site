import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./components/NavBar.tsx";
import Show from "./pages/Show.tsx";
import SignUp from "./pages/SignUp.tsx";
import SignIn from "./pages/SignIn.tsx";
import StudentDashboard from "./pages/StudentDashboard.tsx";
import TeacherDashboard from "./pages/TeacherDashboard.tsx";
import Sponsors from "./pages/Sponsors.tsx";
import Search from "./pages/Search.tsx";
import Courses from "./pages/Courses.tsx";
import TeacherBoard from "./pages/TeachersBoard.tsx";
import StudentCourses from "./components/student-dashboard comp/StudentCourses.tsx";
import Dashboard from "./components/student-dashboard comp/Dashboard.tsx";
import Resources from "./components/student-dashboard comp/Resources.tsx";
import Contacts from "./components/student-dashboard comp/Contacts.tsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public routes */}
        <Route
          path="/"
          element={
            <>
              <NavBar />
              <Show />
              <Sponsors />
              <Search />
              <Courses />
              <TeacherBoard />
            </>
          }
        />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        
        {/* Student Dashboard with nested routes */}
        <Route path="/student-dashboard" element={<StudentDashboard />}>
          <Route index element={<Navigate to="/student-dashboard/dashboard" />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="courses" element={<StudentCourses />} />
          <Route path="resources" element={<Resources />} />
          <Route path="contacts" element={<Contacts />} />
        </Route>

        {/* Teacher Dashboard */}
        <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}
