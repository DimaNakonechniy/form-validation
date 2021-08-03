import React from "react";
import "./App.css";
import { Login, Register } from "components";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="user-forms">
          <Login />
          <Register />
        </div>
      </div>
    </div>
  );
}

export default App;
