import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import NavBar from "./components/NavBar.tsx";
import Show from "./pages/Show.tsx";
import SignUp from "./pages/SignUp.tsx";
import SignIn from "./pages/SignIn.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <NavBar />
    <Show/>
    <SignUp/>
    <SignIn/>
  </StrictMode>
);
