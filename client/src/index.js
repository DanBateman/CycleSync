import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

ReactDOM.render(
  <StrictMode>
    <BrowserRouter basename="localhost:3000">
      <App />
    </BrowserRouter>
  </StrictMode>,
  document.getElementById("root")
);
