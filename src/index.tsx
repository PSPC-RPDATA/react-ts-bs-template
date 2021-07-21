import _ from "lodash";
import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import reportWebVitals from "./reportWebVitals";

if (window.location.pathname.includes("/fr/")) {
  window.lang = "fr";
  window.other_lang = "en";
} else {
  window.lang = "en";
  window.other_lang = "fr";
}

window._ = _;

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
