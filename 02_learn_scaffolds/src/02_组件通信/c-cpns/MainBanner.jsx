import React, { Component } from "react";
import PropTypes from "prop-types";
import './style.css'
export class MainBanner extends Component {

  render() {
    const { banners } = this.props;
    return (
      <div className="banner">
        <h2>我是轮播图</h2>
        <ul>
            {banners.map((item) => {
               return (<li key={item}>{item}</li>)
            })}
        </ul>
      </div>
    );
  }
}

MainBanner.protoTypes = {
    banners: PropTypes.string,
}

MainBanner.defaultProps = {
    banners: ['6', '5', '4', '3', '2']

}

export default MainBanner;
