import React, { Component } from "react";

export class HelloWorld extends Component {
  // 1.构造方法
  constructor() {
    super()
    this.state = {
        msg: 'hello world'
    }
    console.log('hello world constructer')
  }
  changeText() {
    this.setState({msg: '你好啊， 百万富婆'})
  }
  render() {
    console.log('hello world render');
    // 2.执行render方法
    const { msg }  = this.state
    return (
        <div>
            <div>{msg}是程序员的第一个代码</div>
            <button onClick={() => this.changeText()}>修改文本</button>

        </div>
    )
  }
//   3.组件被挂载到DOM上面
  componentDidMount() {
    console.log('mount')
  }
//   4.组件DOM更新完成
  componentDidUpdate(preProps, preState, snapShot) {
    console.log('update success');
    console.log('preProps, preState, snapShot:',preProps, preState, snapShot);
  }
//   5.组件从DOM中卸载
  componentWillUnmount() {
    console.log('unmonet')
  }
//   不常用的生命周期补充
shouldComponentUpdate() {
    // 决定render函数需不需要重新渲染
    return true
}
 getSnapshotBeforeUpdate() {
    console.log('getSnapshotBeforeUpdate')
    // 在执行componentDidUpdate之前会执行这个函数
    return {
        useScroll: 1000
    }
 }
}

export default HelloWorld;
