import React, { Fragment } from "react";
import "./App.css";

// components

import ResultMatches from "./components/ResultMatches";

function App() {
  return (
    <Fragment>
      <div className="container">
        <ResultMatches />
      </div>
    </Fragment>
  );
}

export default App;
