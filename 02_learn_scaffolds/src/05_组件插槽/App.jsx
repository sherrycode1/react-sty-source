import React, { Component } from 'react'
import NavBar from './nav-bar'

export class App extends Component {
  render() {
    return (
      <div>
        <NavBar>
            {/* 当这里放多个的时候，children是数组 */}
            {/* 只有一个元素的时候，children就是这个元素 */}
             <button>我是按钮</button>
             <h1>我是标题</h1>
             <i>我是斜体</i>
        </NavBar>
      </div>
    )
  }
}

export default App