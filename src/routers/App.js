import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/auth/Login";
import axios from "axios";

axios.defaults.baseURL = "https://immense-spire-81553.herokuapp.com/";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} to="/" />
        <Route path="/signup" element={<Login to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
