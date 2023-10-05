import React, { Component } from "react";
import "./App.css";
import Gallery from "./Todo/addItems";
import GoogleDrive from "./Todo/googleDrive";

class App extends Component {
  render() {
    return (
      <div>
        <h2>hello world </h2>
        <Gallery />
        <GoogleDrive />
      </div>
      
    );
  }
}

export default App;
