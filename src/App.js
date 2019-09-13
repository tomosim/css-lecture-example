import React, { Component } from "react";
import "./App.css";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Sidebar from "./Components/Sidebar";
import Footer from "./Components/Footer";

class App extends Component {
  state = {
    isDarkMode: false
  };

  toggleDarkMode = () => {
    this.setState({ isDarkMode: !this.state.isDarkMode });
  };

  render() {
    return (
      <div
        className="App"
        style={
          this.state.isDarkMode
            ? { backgroundColor: "black", color: "white" }
            : { backgroundColor: "white", color: "black" }
        }
      >
        <Header />
        <Sidebar toggleDarkMode={this.toggleDarkMode} />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
