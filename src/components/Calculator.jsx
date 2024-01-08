import React, { useState } from "react";
import "./Calculator.css";

function Calculator() {
  //!SECTION making state of our application
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [BMI, setBMI] = useState(0);
  const [message, setMessage] = useState("");

  //!SECTION : logic part of our application

  /*Underweight = <18.5
    Normal weight = 18.5–24.9
    Overweight = 25–29.9
    Obesity = BMI of 30 or greater*/

  const calBmi = (e) => {
    e.preventDefault();

    if (weight === '' || height === '') {
      alert("enter a valid height and weight");
    } else {
      let BMI = (weight * 2.205 / (height * height)) * 703;
      setBMI(BMI.toFixed(1));

      if (BMI < 18.5) {
        setMessage("you are Underweight");
      } else if (BMI >= 18.5 && BMI <= 24.9) {
        setMessage("you are healthy");
      } else {
        setMessage("you are overweight");
      }
    }
  };

  const reload = () => {
    window.location.reload();
  };

  return (
    <>
      <div className="container">
        <h2>BMI Calculator 🔥</h2>
        <form onSubmit={calBmi}>
          <div className="same">
            <label htmlFor="height">Height :</label>
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              placeholder="height(in inches)..."
            />
          </div>
          <div className="same">
            <label htmlFor="weight"> Weight :</label>
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="weight(in kg)..."
            />
          </div>

         

          <div className="center">
            <h3>Your BMI is : {BMI}</h3>
            <p>{message}</p>
          </div>

          <div className="btn-container">
            <button type="submit" className="btn">
              Submit{" "}
            </button>
            <button onClick={reload} className="btn btn-reload" type="submit">
              Reload
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Calculator;
