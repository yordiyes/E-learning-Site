import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import NavBar from "./components/NavBar.tsx";
import Show from "./components/Show.tsx";
import SignUp from "./components/SignUp.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <NavBar />
    <Show/> */}
    <SignUp/>
  </StrictMode>
);
