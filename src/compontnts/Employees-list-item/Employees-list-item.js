import "./Employees-list-item.css";
import { useState } from "react";

const EmployeesListItem = ({ item }) => {
  let className = "list-group-item d-flex justife-content-between";
  const [prize, setPrize] = useState(false);

  function addSetPrize() {
    if (prize) {
      className = "list-group-item d-flex justife-content-between";
      setPrize(false);
    } else {
      className += " like";
      setPrize(true);
    }
  }

  if (prize) {
    className += " like";
  }
  if (item.increase) {
    className += " increase";
  }
  return (
    <li className={className}>
      <span className="list-group-item-label">{item.name}</span>
      <input
        type="text"
        className="list-groups-item-input"
        defaultValue={item.salary + "$"}
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
        >
          <i className="fas fa-trash"></i>
        </button>
        <i className="fas fa-star"></i>
      </div>
    </li>
  );
};

export default EmployeesListItem;
