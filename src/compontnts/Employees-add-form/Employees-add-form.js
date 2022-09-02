import "./Employees-add-form.css";
import { useState } from "react";

const EmployeesAddForm = ({ onAddEmployees }) => {
  const [name, setName] = useState("");
  const [salary, setSalary] = useState("");

  function addSet(e, props) {
    props(e);
  }

  return (
    <div className="app-add-form">
      <h3>Добавьте нового сотрудника</h3>
      <form className="add-form d-flex">
        <input
          type="text"
          className="form-control new-post-label"
          placeholder="Как его зовут?"
          onChange={(e) => addSet(e.target.value, setName)}
          value={name}
        />
        <input
          type="number"
          className="form-control new-post-label"
          placeholder="З/П в $?"
          onChange={(e) => addSet(e.target.value, setSalary)}
          value={salary}
        />

        <button
          type="sumbit"
          className="btn btn-outline-light"
          onClick={(e) => {
            e.preventDefault();
            onAddEmployees({ name, salary });
          }}
        >
          Добавить
        </button>
      </form>
    </div>
  );
};

export default EmployeesAddForm;
