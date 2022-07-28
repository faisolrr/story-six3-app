import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "../pages/auth/Register";
import axios from "axios";

axios.defaults.baseURL = "https://immense-spire-81553.herokuapp.com/";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Register to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
