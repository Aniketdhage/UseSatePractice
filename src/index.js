import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import Timer from "./Timer";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
    <Timer />
  </StrictMode>,
  rootElement
);
