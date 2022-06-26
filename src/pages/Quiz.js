import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Question from "../component/Question";
import Swal from "sweetalert2";

const Quiz = () => {
  const search = useLocation().search;
  const URL = new URLSearchParams(search);
  const [questions, setQuestions] = useState([]);

  const showResults = () => {
    Swal.fire({
      icon: "success",
      title: "Result",
      text: "You got " + localStorage.getItem("counter") + "/" + questions.length,
      heightAuto: false,
      showCloseButton: true,
    });
  }
  useEffect(() => {

    const getQuiz = async () => {
      await fetch(
        `https://opentdb.com/api.php?amount=${URL.get(
          "amount"
        )}&category=${URL.get("category")}&difficulty=${URL.get(
          "difficulty"
        )}&type=multiple`
      )
        .then((res) => res.json())
        .then((data) => {
          setQuestions(data.results);
        });
    };

    getQuiz();
    localStorage.setItem("counter", 0);
  }, []);

  return (
    <div className="quiz">
      <h2 >Please answer the question</h2>
      {questions.map((question) => (
        <Question question={question} />
      ))}

      <button
        type="button"
        className="btn btn-primary result-btn"
        onClick={showResults}
      >
        Show Results
      </button>
    </div>
  );
};

export default Quiz;
