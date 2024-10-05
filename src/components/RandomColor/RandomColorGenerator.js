import React, { useState, useEffect } from "react";

const RandomColorGenerator = () => {
  const [color, setColor] = useState("#000");
  const [colorType, setColorType] = useState("hex");

  const randomNumber = (len) => {
    return Math.floor(Math.random() * len);
  };
  const hexacolorGenerator = () => {
    const values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
    let hex = "#";
    for (let i = 0; i < 6; i++) {
      hex += values[randomNumber(values.length)];
    }
    setColor(hex);
  };

  const rgbGenerator = () => {
    const r = randomNumber(255);
    const g = randomNumber(255);
    const b = randomNumber(255);
    setColor(`rgb(${r},${g},${b})`);
  };

  const btnstyle = {
    color: "#fff",
    border: "1px solid white",
    backgroundColor: "gray",
    padding: "2px",
  };

  useEffect(() => {
    if (colorType === "hex") hexacolorGenerator();
    else rgbGenerator();
  }, [colorType]);

  return (
    <div
      style={{
        display: "flex",
        margin: "auto",
        justifyContent: "center",
        backgroundColor: color,
        height: "100vh",
      }}>
      <div>
        <button style={btnstyle} onClick={() => setColorType("hex")}>
          HEX Color
        </button>
        <button style={btnstyle} onClick={() => setColorType("rgb")}>
          RGB Color
        </button>
        <button
          style={btnstyle}
          onClick={colorType === "hex" ? hexacolorGenerator : rgbGenerator}>
          Random Generate
        </button>
        <h1 style={{ fontWeight: "bold" }}>
          {colorType} - {color}
        </h1>
      </div>
    </div>
  );
};

export default RandomColorGenerator;
