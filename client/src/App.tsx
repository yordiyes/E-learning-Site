import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar.tsx";
import Show from "./pages/Show.tsx";
import SignUp from "./pages/SignUp.tsx";
import SignIn from "./pages/SignIn.tsx";
import StudentDashboard from "./pages/StudentDashboard.tsx";
import TeacherDashboard from "./pages/TeacherDashboard.tsx";
import Sponsors from "./pages/Sponsors.tsx";
import Search from "./pages/Search.tsx"
import Courses from "./pages/Courses.tsx";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <NavBar />
              <Show />
              <Sponsors/>
              <Search/>
              <Courses/>
            </>
          }
        />{" "}
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/student-dashboard" element={<StudentDashboard />} />
        <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}
