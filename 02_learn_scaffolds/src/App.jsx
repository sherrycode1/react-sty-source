import React from "react";
import HelloWorld from "./HelloWorld";
class App extends React.Component {
    constructor() {
        super()
        this.state = {
            msg: 'hello world'
        }
    }
  render() {
    const { msg } = this.state
    return (
      <div>
        <h2>
          <span>{msg}</span>
          <HelloWorld/>
        </h2>
      </div>
    );
  }
}
export default App