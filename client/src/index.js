import { StrictMode } from "react";
//import { MemoryRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";


const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Router basename={process.env.PUBLIC_URL}>
      <App />
    </Router>
  </StrictMode>
);
