import React, { Component } from "react";
import MainBanner from "./MainBanner";
import MainProduct from "./MainProduct";

export class Main extends Component {
  constructor() {
    super();
    this.state = {
      banners: ['新歌曲', '新mv', '新电影', '新东西'],
      productList: ['推荐商品', '热门商品', '流行商品']
    };
  }

  render() {
    const { banners, productList } = this.state
    return <div>
      <MainBanner banners={banners}/>
      <MainBanner />
      <MainProduct productList={productList}/>
    </div>;
  }
}

export default Main;
