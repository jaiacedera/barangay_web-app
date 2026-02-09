import "./App.css";
import { useState } from "react";
import Login from "./Login";
import SignUp from "./SignUp";

function App() {
  const [page, setPage] = useState("signup");

  return page === "login" ? (
    <Login onNavigate={setPage} page={page} />
  ) : (
    <SignUp onNavigate={setPage} page={page} />
  );
}

export default App;
