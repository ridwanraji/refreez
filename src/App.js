import React from "react";
import "./Styles/App.css";
import SportInfoList from "./SportInfoList";
import sportdata from "./data/SportRules.js";

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
      <div className={"App"}>
        <h1 className={"title"}> REFREEZ </h1>
        {listData}
      </div>
    );
  }
}

export default App;
