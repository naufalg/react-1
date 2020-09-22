import React, { useState } from "react";
import BackTop from '../Components/Web-Elements/BackTop'

export default function BMICalculator() {
  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();
  const [BMIResult, setBMIResult] = useState();

  let weightChange = (e) => {
    setWeight(e.target.value);
  };
  let heightChange = (e) => {
    setHeight(e.target.value);
  };
  let resultChange = (e) => {
    setBMIResult(e.target.value);
  };

  const calculate = (event) => {
    event.preventDefault();
    // check input
    let numGex = /[0-9]/g;
    let gexObj = new RegExp(numGex);
    let gexWeightResult = gexObj.test(weight);
    let gexHeightResult = gexObj.test(height);

    if (gexWeightResult === false || gexHeightResult === false) {
      alert("invalid input, only use number");
    } else {
      let heightInM = height / 100;
      // console.log(heightInM);
      let BMINumberDecimal = weight / Math.pow(heightInM, 2);
      let BMINumber = BMINumberDecimal.toFixed(2);
      setBMIResult(`Your BMI is: ${BMINumber}`);
      setHeight("");
      setWeight("");
    }
  };
  console.log(BMIResult);

  return (
    //   <div>BMI</div>
    <div className="container">
    <BackTop to="/"></BackTop>
      <div className="row text-center">
        <div className="col-12">
          <h2>BMI Calculator</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4">
          <form action="" className="form-group">
            <label htmlFor="">Your weight (kg)</label>
            <input
              className="form-control"
              type="text"
              onChange={weightChange}
              placeholder="kg"
            />
            <br />
            <label htmlFor="">Your height (cm)</label>
            <input
              className="form-control"
              type="text"
              onChange={heightChange}
              placeholder="cm"
            />
          </form>
        </div>
        <div className="col-md-4"></div>
      </div>
      <br />
      <div className="row text-center">
        <div className="col-12">
          <button type="submit" className="btn btn-info" onClick={calculate}>
            Calculate
          </button>
          <br />
          <h3 onChange={resultChange}>{BMIResult}</h3>
        </div>
      </div>
    </div>
  );
}
