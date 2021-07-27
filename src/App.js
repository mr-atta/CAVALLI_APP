import React, { Component } from "react";
import Footer from "./componant/Footer";
import Header from "./componant/Header";
import Main from "./componant/Main";

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
