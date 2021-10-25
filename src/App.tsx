import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";

import FirstPage from "./FirstPage/FirstPage";
import SecondPage from "./SecondPage/SecondPage";

function App() {
  const lang = window.lang;
  return (
    <div className="App">
      <Routes>
        <Route path={`${lang}/page1/`} element={<FirstPage />} />
        <Route path={`${lang}/page2/`} element={<SecondPage />} />
      </Routes>
    </div>
  );
}

export default App;
