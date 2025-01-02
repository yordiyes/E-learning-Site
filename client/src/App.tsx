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
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
}
