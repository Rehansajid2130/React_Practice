import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./components/home.jsx";
import About from "./components/About.jsx";
import ContactUs from "./components/contactUs.jsx";
import Product from "./components/Product.jsx"
import Error_page from "./components/Error_page.jsx";
import Mens from "./components/Mens.jsx";
import Women from "./components/Women.jsx";
import Product_detail from "./components/Product_detail.jsx";
import { Link } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";



const App = () => {
  return (
    <div>
      <div className="navbar">
        <div className="logo">
          <h3>Routing</h3>
        </div>
        <div className="links">
          <Link to={"/"}>Home</Link>
          <Link to={"/About"}>About</Link>
          <Link to={"/ContactUs"}>ContactUs</Link>
          <Link to={"/Product"}> Product </Link>
          <Link to={"/Product_detail"}> Product Detail</Link>
        </div>
      </div>
        <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/Product_detail/:id?" element={<Product_detail />} /> 

        <Route path="/Product" element = {<Product />}>
        <Route path="Mens" element = {<Mens /> } />
        <Route path="Women" element ={<Women />} />     
        <Route path="*" element={<Error_page />} />

        </Route>
       </Routes>
    </div>
  );
};

export default App;
