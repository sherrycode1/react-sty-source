import React, { Component } from "react";
import TabControl from "./TabControl";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      titles: ["流行", "新款", "精选"],
      pageTab: 0,
    };
  }
  render() {
    const { titles, pageTab } = this.state;
    return (
      <div>
        <TabControl titles={titles} changeCont={(e) => this.changeCont(e)} />
        <h1>{titles[pageTab]}</h1>
      </div>
    );
  }
  changeCont(e) {
    this.setState({ pageTab: e });
  }
}

export default App;
