import "./Employees-list-item.css";
import { useState } from "react";

const EmployeesListItem = ({ name, salary, onDelete, increase }) => {
  let className = "list-group-item d-flex justife-content-between";
  const [prize, setPrize] = useState(increase);
  const [increases, setIncreases] = useState(increase);

  function addSetPrize() {
    if (prize) {
      className = "list-group-item d-flex justife-content-between";
      setPrize(false);
      setIncreases(false);
    } else {
      className += " like increase";
      setPrize(true);
      setIncreases(true);
    }
  }

  if (prize) {
    className += " like";
  }

  if (increases) {
    className += " increase";
  }
  return (
    <li
      className={className}
      value={increases}
    >
      <span className="list-group-item-label">{name}</span>
      <input
        type="text"
        className="list-groups-item-input"
        defaultValue={salary + "$"}
      />
      <div className="d-flex justify-content-center aling-items-center">
        <button
          type="button"
          className="btn-cookie btn-sm"
          onClick={() => addSetPrize()}
        >
          <i className="fas fa-cookie"></i>
        </button>
        <button
          type="button"
          className="btn-trash btn-sm"
          onClick={onDelete}
        >
          <i className="fas fa-trash"></i>
        </button>
        <i className="fas fa-star"></i>
      </div>
    </li>
  );
};

export default EmployeesListItem;
