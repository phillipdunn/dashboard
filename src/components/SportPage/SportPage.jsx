import React, { Component } from "react";
import styles from "./SportPage.module.scss";
// import Papa from 'papaparse';

class SportPage extends Component {
  state = {
    data: [],
  };

  componentDidMount() {
    this.getCsvData();
  }

  fetchCsv() {
    return fetch(
      "https://cors-anywhere.herokuapp.com/http://www.football-data.co.uk/mmz4281/1718/I1.csv"
    ).then((response) => {
      let reader = response.body.getReader();
      let decoder = new TextDecoder("utf-8");
      return reader.read().then((result) => {
        return decoder.decode(result.value);
      });
    });
  }

  setData = (arrData) => {
    return this.setState({ data: arrData });
  };

  async getCsvData() {
    let csvData = await this.fetchCsv();
    return this.csvToArray(csvData, ",");
  }

  csvToArray = (strData, strDelimiter) => {
    strDelimiter = strDelimiter || ",";
    let objPattern = new RegExp(
      "(\\" +
        strDelimiter +
        "|\\r?\\n|\\r|^)" +
        '(?:"([^"]*(?:""[^"]*)*)"|' +
        '([^"\\' +
        strDelimiter +
        "\\r\\n]*))",
      "gi"
    );
    let arrData = [[]];
    let arrMatches = null;
    while (arrMatches === objPattern.exec(strData)) {
      let strMatchedDelimiter = arrMatches[1];
      if (strMatchedDelimiter.length && strMatchedDelimiter !== strDelimiter) {
        arrData.push([]);
      }
      let strMatchedValue;
      if (arrMatches[2]) {
        strMatchedValue = arrMatches[2].replace(new RegExp('""', "g"), '"');
        console.log(strMatchedValue);
      } else {
        strMatchedValue = arrMatches[3];
      }
      arrData[arrData.length - 1].push(strMatchedValue);
    }

    return this.setData(arrData);
  };

  // searchTeam = () => {
  //  if event.target.value
  // }
  // onChange={SearchTeam()}

  render() {
    console.log(this.state.data);
    return (
      <section className={styles.sportPage}>
        {/* <h1 className={styles.header}>Champions League Challenge</h1>
      <div className={styles.inputLine}>
       <input className={styles.teamInput} type="text" placeholder="Type team here..." />
      </div> */}
      </section>
    );
  }
}

export default SportPage;

// ftr - fulltime result (H-home win, A-away win) [6]
//HomeTeam [2]
//AwayTeam [3]
