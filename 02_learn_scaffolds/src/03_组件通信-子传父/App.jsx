import React, { Component } from "react";
import AddCounter from "./AddCounter";
import SubCounter from "./SubCounter";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 100,
    };
  }
  changeCounter(c) {
   this.setState({count: this.state.count + c})
  }
  render() {
    const { count } = this.state;
    return (
      <div>
        <h1>当前计数：{count}</h1>
        <AddCounter addClick={(c) => this.changeCounter(c)} />
        <SubCounter subClick={(c) => this.changeCounter(c)}/>
      </div>
    );
  }
}

export default App;
