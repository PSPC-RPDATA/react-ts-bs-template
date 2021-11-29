import "bootstrap/dist/css/bootstrap.min.css";
import "base.scss";
import { Route, Routes, Navigate } from "react-router-dom";

import FirstPage from "./FirstPage/FirstPage";
import SecondPage from "./SecondPage/SecondPage";

function App() {
  const lang = window.lang;
  return (
    <div className="App">
      <Routes>
        <Route path={`${lang}/page1/`} element={<FirstPage />} />
        <Route path={`${lang}/page2/`} element={<SecondPage />} />
        <Route
          path={`${lang}/`}
          element={<Navigate replace to={`/${lang}/page1/`} />}
        />
        <Route path="/" element={<Navigate replace to="/en/page1/" />} />
      </Routes>
    </div>
  );
}

export default App;
