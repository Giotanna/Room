function preferenceManipulation() {
  const preferences = {
    1: ["3", "4", "2", "6", "5"],
    2: ["6", "5", "4", "1", "3"],
    3: ["2", "4", "5", "1", "6"],
    4: ["5", "2", "3", "6", "1"],
    5: ["3", "1", "2", "4", "6"],
    6: ["5", "1", "3", "4", "2"],
  }; // MATCHES: {[1,6],[2,4],[3,5]}

  // const preferences = {
  //   1: ["2", "3", "4"],
  //   2: ["3", "1", "4"],
  //   3: ["1", "2", "4"],
  //   4: ["1", "2", "3"],
  // }; // NO MATCHES

  for (let key in preferences) {
    preferences[key] = preferences[key].map((n) => n.toString());
  }

  return preferences;
}

module.exports = preferenceManipulation;
