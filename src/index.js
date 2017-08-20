import React from "react";
import ReactDOM from "react-dom";

import Katex from "./Katex";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "L = \\frac{1}{2} \\rho v^2 S C_L"
    };
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <div
        style={{
          display: "flex",
          height: "100vh",
          width: "100vw"
        }}
      >
        <textarea
          style={{
            flex: 1,
            padding: 10
          }}
          onChange={this.handleChange.bind(this)}
          value={this.state.value}
        />
        <div style={{ flex: 1, padding: 10, position: "relative" }}>
          <Katex math={this.state.value} />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
