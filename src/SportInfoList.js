import React from "react";
import ClickableButton from "./ClickableButton"

class SportInfoList extends React.Component {
  render() {
    return (
      <div className={"list-item"}>
        <h2> {this.props.name} </h2>
        <p> {this.props.shortDescription} </p>
        <ClickableButton name={"Learn More"}/>
      </div>
    );
  }
}

export default SportInfoList;
