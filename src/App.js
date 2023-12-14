import React, { useState } from "react";

function App() {
  const [showTxt, setShowTxt] = useState("Hello World");
  const [bulb, setBulb] = useState(true);
  const imgOn =
    "https://www.freeiconspng.com/thumbs/lightbulb-png/light-bulb-png-bulb-png1247-12.png";

  const imgOff =
    "https://www.cahillheating.com/sites/cahillheating.com/files/LightBulb.jpg";

  function toggleText() {
    setShowTxt(showTxt === "Hello World" ? "Hello Pakistan" : "Hello World");
  }

  function toggleImg() {
    setBulb(!bulb);
  }
  return (
    <div>
      <h3>{showTxt}</h3>
      <button onClick={toggleText}>click</button>

      <div>
        <img
          src={bulb ? imgOn : imgOff}
          alt="bulb"
          style={{ width: "150px", height: "150px" }}
        />

        <button onClick={toggleImg}>{bulb ? "on" : "off"}</button>
      </div>
    </div>
  );
}

export default App;
