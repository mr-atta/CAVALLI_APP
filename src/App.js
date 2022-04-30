import React, { Component } from "react";
import Footer from "./componant/Footer/Footer.js";
import Header from "./componant/Header/Header.js";
import Main from "./componant/Main/Main.js";
import { BrowserRouter as Router, Route , Routes } from "react-router-dom";
// my pages
// home page is the Main
import Store from "./componant/Store/Store.js";
import Services from "./componant/Services/Services.js";
import About from "./componant/AboutUs/AboutUs.js";
import Cart from "./componant/CartPage/CartPage.js";





class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Header />

          <Routes>
          <Route path="/" exact element={<Main />} />
          <Route path="/store" element={<Store />} />
          {/* <Route path="/services" element={<Services />} /> */}
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          </Routes>

          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
