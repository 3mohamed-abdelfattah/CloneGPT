import { HashRouter as Router, Route, Routes } from "react-router-dom";

// Pages
import { Welcome } from "@/pages/Welcome";
import { Login } from "@/pages/Login";
import { StartScreen } from "@/pages/StartScreen";
import { SignUp } from "@/pages/SignUp/SignUp";

const Router = () => {
  return (
    <Router>
      <Routes>
        <Route path="/ChatGPT/" element={<Welcome />} />
        <Route path="/ChatGPT/login" element={<Login />} />
        <Route path="/ChatGPT/signup" element={<SignUp />} />
        <Route path="/ChatGPT/start" element={<StartScreen />} />
      </Routes>
    </Router>
  );
};

export default Router;