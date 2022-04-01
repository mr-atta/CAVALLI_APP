import React, { Component } from "react";
import Footer from "./componant/Footer/Footer.js";
import Header from "./componant/Header/Header.js";
import Main from "./componant/Main/Main.js";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
