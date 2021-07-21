import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Route, Routes } from "react-router-dom";

import FirstPage from "./FirstPage/FirstPage";
import SecondPage from "./SecondPage/SecondPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/en/page1/" element={<FirstPage />} />
        <Route path="/fr/page1/" element={<FirstPage />} />
        <Route path="/en/page2/" element={<SecondPage />} />
        <Route path="/fr/page2/" element={<SecondPage />} />
      </Routes>
    </div>
  );
}

export default App;
