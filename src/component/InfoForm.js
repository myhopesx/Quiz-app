import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const InfoForm = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState([]);
  const [level, setLevel] = useState("easy");
  const [numberOfQuestions, setNumberOfQuestions] = useState("");
  const [choiceOfCatories, setChoiceOfCatories] = useState(9);
  const [name, setName] = useState("");

  const onClick = (e) => {
    e.preventDefault();
    if (name === "" || numberOfQuestions === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "please fill all fields",
        heightAuto: false,
      });
      return;
    }
    navigate(
      `/quiz?amount=${numberOfQuestions}&category=${choiceOfCatories}&difficulty=${level}&type=multiple&name=${name}`
    );
  };

  useEffect(() => {
    const getCategory = async () => {
      await fetch("https://opentdb.com/api_category.php")
        .then((res) => res.json())
        .then((data) => {
          setCategory(data.trivia_categories);
        });
    };
    getCategory();
  }, []);

  return (
    <div className="info-form">
      <div className="d-flex justify-content-between myrow">
        <div className="name-div">
          <label htmlFor="name" className="form-label">
            Enter Your Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Jhon Doe"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="select-category-div">
          <label htmlFor="select-category" className="form-label">
            Enter the category
          </label>
          <select
            id="select-category"
            className="form-select"
            aria-label="Default select example"
            onChange={(e) => setChoiceOfCatories(e.target.value)}
          >
            {category.map((item) => {
              var index = item.name.indexOf(": ");
              return (
                <option key={item.id} value={item.id}>
                  {item.name.substring(index + 1)}
                </option>
              );
            })}
          </select>
        </div>
      </div>

      {/* -------------------------------------------------- */}

      <div className="d-flex justify-content-between myrow">
        <div className="NOQ">
          <label htmlFor="NOQ-input" className="form-label">
            Enter Number Of Questions
          </label>
          <input
            type="number"
            max={20}
            min={1}
            className="form-control"
            id="NOQ-input"
            placeholder="less than 20"
            onChange={(e) => setNumberOfQuestions(e.target.value)}
          />
        </div>
        <div className="select-diffuclity-div">
          <label htmlFor="select-diffuclity" className="form-label">
            Enter the level of diffuclity
          </label>
          <select
            id="select-diffuclity"
            className="form-select "
            aria-label="Default select example"
            onChange={(e) => setLevel(e.target.value)}
          >
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
        </div>
      </div>
      <button
        type="button"
        className="btn btn-primary intro-btn"
        onClick={onClick}
      >
        Start Challenge
      </button>
    </div>
  );
};

export default InfoForm;
