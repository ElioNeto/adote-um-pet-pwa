import "./App.css";
import { Login } from "./pages/login/login";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home/home";
import { Signup } from "./pages/signup/signup";
import { Registerpet } from "./pages/registerpet/registerpet";
import { Search } from "./pages/search/search";
import { Details } from "./pages/details/details";
import { Favorites } from "./pages/favorites/favorites";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="home" element={<Home />} />
        <Route path="signup" element={<Signup />} />
        <Route path="registerpet" element={<Registerpet />} />
        <Route path="search" element={<Search />} />
        <Route path="favorites" element={<Favorites />} />
        <Route path="detail/:id" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}
