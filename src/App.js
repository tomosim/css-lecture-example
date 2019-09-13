import React, { Component } from "react";
import "./App.css";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Sidebar from "./Components/Sidebar";
import Footer from "./Components/Footer";

class App extends Component {
  state = {};

  render() {
    return (
      <div className="App">
        <Header />
        <Sidebar toggleDarkMode={this.toggleDarkMode} />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
