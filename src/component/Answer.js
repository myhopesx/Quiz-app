import React from "react";
import { useState } from "react";
const Answer = ({ answer, correct }) => {
  const [color, setColor] = useState("white");

  console.log();
  const onClick = (e) => {
    console.log(e.target.innerText);
    console.log(correct);
    if (e.target.innerText.trim() !== correct.trim()) {
      setColor("red");
    } else {
      console.log(color);
      if (color === "white") {
        let counter = parseInt(localStorage.getItem("counter")) + 1
        localStorage.setItem("counter", counter);
      }
      setColor("green");
    }
  };

  return (
    <div
      class="answer p-2"
      onClick={onClick}
      style={{
        backgroundColor: color,
      }}
    >
      {answer}
    </div>
  );
};

export default Answer;
