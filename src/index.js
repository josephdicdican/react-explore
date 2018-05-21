import React from "react";
import { render } from "react-dom";
import Hello from "./Hello";

const styles = {
  fontFamily: "sans-serif"
};

const data = {
  description: ""
};
const sample = "sample";

const App = () => (
  <div style={styles}>
    <Hello name="React Conditions" />
    <h2>Work with react conditions {"\u2728"}</h2>

    <h4>Scenario:</h4>
    <pre>
      <div>{"const data = {"}</div>
      <div>&emsp; {"description: '',"}</div>
      <div>{"};"}</div>
      <div>{"const sample = 'sample';"}</div>
      <br />
      <div>
        {"{false ? sample : data.description || 'default'}"} =>
        {false ? sample : data.description || "default"}
      </div>
      <div>
        {"{!!data.description ? 'has' : 'none'}"} =>
        {!!data.description ? "has" : "none"}
      </div>
    </pre>
  </div>
);

render(<App />, document.getElementById("root"));
