import React, { Component } from "react";

export class MainProduct extends Component {
  
  render() {
    const { productList } = this.props;
    return (
      <div>
        <h2>我是商品</h2>
        <ul>
            {productList.map(item => {
                return (<li key={item}>{item}</li>)
            })}
        </ul>
      </div>
    );
  }
}

export default MainProduct;
