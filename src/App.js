import React from "react";
import AnimalForm from "./components/AnimalForm";

import "./App.css";

function App() {
  return (
    <div className="App">
      <h1 data-testid="head">Add New Animal</h1>
      <AnimalForm />
    </div>
  );
}

export default App;
