import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase", "success");
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase", "success");
  };

  const handleOnChange = (e) => {
    setText(e.target.value);
  };

  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Removed Extra Spaces", "success");
  };

  const handleCopy = () => {
    let text = document.getElementById("myBox").value;
    navigator.clipboard.writeText(text);
    props.showAlert("Text Copied", "success");
  };

  const handleClearText = () => {
    setText("");
    props.showAlert("Text Cleared", "success");
  };

  const [text, setText] = useState("Enter Text here");

  return (
    <>
      <div
        className="container my-3"
        style={{
          color: props.mode === "dark" ? "white" : "#042743",
        }}
      >
        <div>
          <h1>{props.heading}</h1>
          <textarea
            style={{
              background: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
            value={text}
            onChange={handleOnChange}
            className="form-control my-3"
            id="myBox"
            rows={8}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>
          Convert to LowerCase
        </button>

        <button className="btn btn-primary mx-2" onClick={handleClearText}>
          Clear Text
        </button>

        <button className="btn btn-primary mx-2" onClick={handleCopy}>
          Copy Text
        </button>

        <button className="btn btn-primary mx-2" onClick={handleExtraSpace}>
          Remove Extra Space
        </button>
      </div>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "#042743",
        }}
      >
        <h2>Your Text Summary</h2>
        <p>
          {text.split(" ").length} Words , {text.length} Chracters
        </p>
        <p> {0.005 * text.split(" ").length} Minutes to Read</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter somthing in the textBox to Preview it here"}
        </p>
      </div>
    </>
  );
}
