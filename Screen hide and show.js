import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [isScreen1, setIsScreen1] = useState(true);
  const [isScreen2, setIsScreen2] = useState(true);
  const [isScreen3, setIsScreen3] = useState(true);

  const next = (e) => {
    setIsScreen1(false);
    setIsScreen2(true);
    setIsScreen3(false);
  };
  const prev = (e) => {
    setIsScreen1(true);
    setIsScreen2(false);
    setIsScreen3(false);
  };

  
  const UpPrev = (e) => {
    setIsScreen1(false);
    setIsScreen2(true);
    setIsScreen3(false);
  };
  return (
    <div className="App">
      {isScreen1 == true && isScreen2 == false && isScreen3 == false && (
        <div>
          <h1>Screen 1</h1>
          <button onClick={(e) => next(e)}>Next</button>
        </div>
      )}

      {isScreen1 == false && isScreen2 == true && isScreen3 == false && (
        <div>
          <h1>Screen 2</h1>
          <button onClick={(e) => prev(e)}>Prev</button>
          <button onClick={(e) => Upnext(e)}> Up Next</button>
        </div>
      )}

      {isScreen1 == false && isScreen2 == false && isScreen3 == true && (
        <div>
          <h1>Screen 3</h1>
          <button onClick={(e) => UpPrev(e)}>UpPrev</button>
        </div>
      )}
    </div>
  );
}
