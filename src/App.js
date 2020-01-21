import React from "react";
import "./Styles/App.css";
import SportInfoList from "./SportInfoList";
import sportdata from "./data/SportRules.js";
import Nav from "./Navigtion";

class App extends React.Component {
  render() {
    const listData = sportdata.map(data => (
      <SportInfoList
        key={data.id}
        name={data.name}
        shortDescription={data.shortDescription}
      />
    ));
    return (
      <div>
        <Nav />
        <div className={"App"}>
          {listData}
        </div>
      </div>
    );
  }
}

export default App;
