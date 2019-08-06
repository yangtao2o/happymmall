import React from "react";
import ReactDOM from "react-dom";
import "./app.scss";
import App from "./component/app.jsx";
import AppTopics from "./component/app-topics.jsx";

ReactDOM.render(
  <div className="container">
    <App />
    <AppTopics />
  </div>,
  document.getElementById("root")
);
