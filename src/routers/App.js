import HomePage from "../pages/HomePage";
import ProfilesPage from "../pages/ProfilesPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "../pages/HomePage";
import CreatePosting from "../pages/CreatePosting";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "../pages/HomePage";
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
