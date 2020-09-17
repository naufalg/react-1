import React, { useState } from "react";

export default function UpCase() {
  const [inputText, setInputText] = useState("");
  const [result, setResult] = useState("");
  const [comment, setComment] = useState("");
  // const [result, setResult] = useState("");
  let handleChange = (event) => {
    if (inputText.length > 0) {
      setComment("I'm pretty sure the CAPS LOCK is turned off ¯\\_(ツ)_/¯");
      // } else if (inputText.length <= 0 ) {
      //   setComment("");
    } else {
      setComment("");
    }
    let inputted = event.target.value;
    // console.log(upperInput);
    setInputText(inputted);
    let resultUpper = inputted.toUpperCase();
    setResult(resultUpper);
  };

  // console.log(inputText.length);
  // if (inputText !== "") {
  //     setHeading("Hello, ")
  // }

  return (
    <div className="container text-center">
      <div className="row text-center">
        <div className="col-12">
          <h4 className="dipslay-4">DON'T BE ANGRY, type calmly, ok?</h4>
          {inputText.length > 0 ? (
            <small className="text-muted">
              I'm pretty sure the CAPS LOCK is turned off ¯\_(ツ)_/¯
            </small>
          ) : (
            <small></small>
          )}
        </div>
      </div>
      <br />
      <div className="row text-center">
        <div className="col-lg-3"></div>
        <div className="col-lg-6">
          <input
            className="form-control"
            type="text"
            onChange={handleChange}
            value={inputText}
            placeholder="type here, DON'T UPPER CASE PLS"
          />
          <h1>{result}</h1>
        </div>
        <div className="col-lg-3"></div>
      </div>
    </div>
  );
}
