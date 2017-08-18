import { Component } from "react";
import h from "react-hyperscript";
import katex from "katex";

class Katex extends Component {
  render() {
    const hc = (...args) => {
      console.log(...args);
      return h(...args);
    };
    return katex.renderHyperscript(this.props.math, {}, hc);
  }
}

export default Katex;
