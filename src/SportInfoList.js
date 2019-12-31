import React from "react";

class SportInfoList extends React.Component {
  render() {
    return (
      <div className={"list-item"}>
        <h2> {this.props.name} </h2>
        <p> {this.props.shortDescription} </p>
      </div>
    );
  }
}

export default SportInfoList;
