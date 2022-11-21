import React, { useState } from "react";
import "./styles.css";

const App = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const [value, setValue] = useState(0);

  const handleaddNumber = (e) => {
    setCount(e.target.value);
    console.log(e.target.value);
  };

  const handleaddNumber2 = (e) => {
    setCount2(e.target.value);
    console.log(count2);
  };
  const addNum = (e) => {
    let a = parseInt(count);
    let b = parseInt(count2);
    setValue(a + b);
  };
  const subNum = (e) => {
    let a = parseInt(count);
    let b = parseInt(count2);
    setValue(a - b);
  };
  const mulNum = (e) => {
    let a = parseInt(count);
    let b = parseInt(count2);
    setValue(a * b);
  };
  const divNum = (e) => {
    let a = parseInt(count);
    let b = parseInt(count2);
    setValue(a / b);
  };
  const modolNum = (e) => {
    let a = parseInt(count);
    let b = parseInt(count2);
    setValue(a % b);
  };


  return (
    <div className="App">
      <h2>add numbers</h2>
      <input
        onChange={(e) => handleaddNumber(e)}
        value={count ? count : ""}
        type="number"
      />
      <br />
      <br />
      <input
        onChange={(e) => handleaddNumber2(e)}
        value={count2 ? count2 : ""}
        type="number"
      />
      <br />
      <br />
      <button  onClick={(e) => addNum(e)}>Addision</button>
      <button onClick={(e) => subNum(e)}>Subtrection</button>
      <button onClick={(e) => mulNum(e)}>Multiplay</button>
      <button onClick={(e) => divNum(e)}>Division</button>


      <p>{value > 0 ? value : ""}</p>
    </div>
  );
};

export default App;
