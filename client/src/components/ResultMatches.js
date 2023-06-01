import React, { Fragment, useState } from "react";
import "./style/resultMatches.css";
import Navbar from "./Navbar";

const ResultMatches = () => {
  const [matches, setMatches] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const handleButtonClick = (e) => {
    e.preventDefault();
    setShowResults(true);
    getMatches();
  };

  const getMatches = async () => {
    try {
      const response = await fetch("http://localhost:5000/matches");
      const jsonData = await response.json();
      //console.log(matches);
      setMatches(jsonData.pairName);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <Fragment>
      <form className="d-flex mt-5">
        <button className="form-control btn" onClick={handleButtonClick}>
          Βρες ταιριάσματα!
        </button>
      </form>
      {showResults && (
        <div>
          {matches.length > 0 ? (
            <Fragment>
              <h1 className="heading text-center mt-5">Αποτελέσματα</h1>
              <table className="result-table table mt-5 text-center">
                <thead>
                  <tr>
                    <th>1ος Συγκάτοικος</th>
                    <th>2ος Συγκάτοικος</th>
                  </tr>
                </thead>
                <tbody>
                  {matches.map((match, index) => (
                    <tr key={index}>
                      <td>{match[0]}</td>
                      <td>{match[1]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Fragment>
          ) : (
            <h3 className="result-message text-center mt-5">
              Ο αλγόριθμος δεν μπόρεσε να βγεί κατάλληλα ταιριάσματα.
            </h3>
          )}
        </div>
      )}
    </Fragment>
  );
};

export default ResultMatches;
