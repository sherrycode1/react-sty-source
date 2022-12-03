import React, { Component } from "react";

export class SubCounter extends Component {
  render() {
    return (
      <div>
        <button onClick={() => this.subCount(-1)}>-1</button>
        <button onClick={() => this.subCount(-5)}>-5</button>
        <button onClick={() => this.subCount(-10)}>-10</button>
      </div>
    );
  }
  subCount(c) {
    const { subClick } = this.props;
    subClick(c)
  }
}

export default SubCounter;
