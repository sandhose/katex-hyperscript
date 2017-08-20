import React, { Component } from "react";
import h from "react-hyperscript";
import katex from "katex";

class Katex extends Component {
  render() {
    try {
      return katex.renderHyperscript(this.props.math, {}, h);
    } catch (e) {
      return (
        <div
          style={{
            fontFamily: "sans-serif",
            backgroundColor: "red",
            color: "white",
            fontWeight: 900,
            padding: 20
          }}
        >
          {e.message}
        </div>
      );
    }
  }
}

export default Katex;
