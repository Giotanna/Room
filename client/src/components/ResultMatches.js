import React, { Fragment, useState, useEffect } from "react";

const ResultMatches = () => {
  const [matches, setMatches] = useState([]);
  const getMatches = async () => {
    try {
      const response = await fetch("http://localhost:5000/matches");
      const jsonData = await response.json();

      setMatches(jsonData.pairs);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getMatches();
  }, []);
  console.log(matches);

  return (
    <Fragment>
      <form className="d-flex mt-5">
        <button className="form-control btn btn-success">
          Βρες ταιριάσματα!
        </button>
      </form>
      <h1 className="text-center mt-5">Αποτελέσματα</h1>
      <table className="table mt-5 text-center">
        <thead>
          <tr>
            <th>1ος Συγκάτοικος</th>
            <th>2ος Συγκάτοικος</th>
          </tr>
        </thead>
        <tbody>
          {matches.map((match) => (
            <tr>
              <td>{match[0]}</td>
              <td>{match[1]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default ResultMatches;
