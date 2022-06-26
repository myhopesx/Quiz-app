import React from "react";
import Answer from "./Answer";

const Question = ({ question }) => {

  const answers = question.incorrect_answers.concat(question.correct_answer);
  answers.sort();

  return (
    <div class="d-flex flex-column mb-3">
      <div class="question">
        <h5>{question.question}</h5>
        {answers.map((answer) => (
          <Answer answer={answer} correct={question.correct_answer} />
        ))}
      </div>
    </div>
  );
};

export default Question;
