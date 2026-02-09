import "./App.css";
import { useState } from "react";
import Login from "./Login";
import SignUp from "./SignUp";
import MonDashboard from "./MonDashboard";

function App() {
  const [page, setPage] = useState("signup");

  if (page === "dashboard")
    return <MonDashboard onNavigate={setPage} page={page} />;
  if (page === "login") return <Login onNavigate={setPage} page={page} />;
  return <SignUp onNavigate={setPage} page={page} />;
}

export default App;
