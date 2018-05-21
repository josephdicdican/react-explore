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
    <Hello name="React Explorations" />
    <h2>Work with react {"\u2728"}</h2>

    <h4>Rendering (+concatinating)</h4>
    <pre>
      <div>{"\"1+2 = {1+2}\""} => "1+2 = {1+2}"</div>
    </pre>

    <h4>Conditions</h4>
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
