import React, { Component } from "react";

import "./style.css";

export class TabControl extends Component {
  constructor() {
    super();
    this.state = {
      currentTab: 0,
    };
  }
  render() {
    const { titles } = this.props;
    return (
      <div>
        <div className="title">
          {titles.map((item, index) => {
            return (
              <div
                className={index === this.state.currentTab ? "active" : ""}
                key={index}
                onClick={() => this.changeTab(index)}
              >
                {item}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
  changeTab(index) {
    this.setState({ currentTab: index });
    this.props.changeCont(index)
  }
}

export default TabControl;
