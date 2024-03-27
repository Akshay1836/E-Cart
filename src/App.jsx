import "./App.css";

import { Outlet, Route, Routes } from "react-router-dom";
import Hero from "./components/Hero";

import Category from "./components/Category";
import Icons from "./components/Icons";

import Details from "./components/Details";
import Navbar from "./components/Navbar";
import UsersList from "./components/UsersList";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar/>}>
          <Route path="/" index element={<Hero />} />
          <Route path="/section/category/:id" element={<Category />} />
          <Route path="/section/category/:type/item/:id" element={<Details />} />
          <Route path="item/:id" element={<Details />} />
          <Route path="/users" index element={<UsersList />} />
          <Route path="/section" index element={<Icons/>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
