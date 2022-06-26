import React from "react";
import { useNavigate } from "react-router-dom";

const Intro = () => {
  const nav = useNavigate();
  return (
    <div className="container-fluid">
      <h3>Quizzy</h3>
      <h1>Challenge Your Knowlge Now With Us!</h1>
      <button
        type="button"
        className="btn btn-primary intro-btn"
        onClick={(e) => {
          nav("/home");
        }}
      >
        Start Challenge
      </button>
    </div>
  );
};

export default Intro;
