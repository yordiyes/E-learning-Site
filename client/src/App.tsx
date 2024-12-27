import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar.tsx";
import Show from "./pages/Show.tsx";
import SignUp from "./pages/SignUp.tsx";
import SignIn from "./pages/SignIn.tsx";

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
            </>
          }
        />{" "}
        {/* Default to SignIn */}
        <Route path="/signup" element={<SignUp />} /> {/* SignUp Page */}
        <Route path="/signin" element={<SignIn />} /> {/* SignIn Page */}
      </Routes>
    </BrowserRouter>
  );
}
