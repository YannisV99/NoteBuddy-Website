import { Routes, Route } from "react-router-dom";
import Home from './pages/Index/home'; 
import Login from './pages/Login/login';
import ForgotPassword from "./pages/Login/forgotPassword";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgotPassword" element={<ForgotPassword />} />
    </Routes>
  );
}

export default App;