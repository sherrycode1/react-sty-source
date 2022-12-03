import React, { Component } from "react";

export class AddCounter extends Component {
  render() {
    return (
      <div>
        <button onClick={(e) => this.addCount(1)}>+1</button>
        <button onClick={(e) => this.addCount(5)}>+5</button>
        <button onClick={(e) => this.addCount(10)}>+10</button>
      </div>
    );
  }
  addCount(count) {
    const { addClick } = this.props;
    addClick(count)
  }
}

export default AddCounter;
