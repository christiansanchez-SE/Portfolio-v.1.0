import React from "react";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Navbar />
     <Routes>
        <Route path="/" element={<Homepage/>} />
      </Routes>
    </div>
  );
}

export default App;