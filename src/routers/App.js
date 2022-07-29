import HomePage from "../pages/HomePage";
import ProfilesPage from "../pages/ProfilesPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/auth/Login";
import CreatePosting from "../pages/CreatePosting";
import CommentPage from "../pages/CommentPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profiles" element={<ProfilesPage />} />
        <Route path="/create/post" element={<CreatePosting />} />
        <Route path="/comment/:id_comment" element={<CommentPage />} />
        <Route path="*" element="page not found" />
        <Route path="/" element={<Login />} to="/signup" />
        <Route path="/" element={<Login />} to="/" />
        <Route path="/signup" element={<Login to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
