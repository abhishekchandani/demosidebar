import React from "react";
import './App.css';
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  return (
    <div className="my-page">
      <div className="side-bar">
        <Sidebar/>
      </div>
      <div className="main-content">
      </div>
    </div>
  );
}

export default App;
