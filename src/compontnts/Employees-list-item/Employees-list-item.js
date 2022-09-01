import "./Employees-list-item.css";

const EmployeesListItem = ({
  name,
  salary,
  onDelete,
  increase,
  rise,
  onToggleIncrease,
  onToggleRise,
}) => {
  let className = "list-group-item d-flex justife-content-between";

  // function addSetPrize() {
  //   if (prize) {
  //     className = "list-group-item d-flex justife-content-between";
  //     setPrize(false);
  //     setIncreases(false);
  //   } else {
  //     className += " like increase";
  //     setPrize(true);
  //     setIncreases(true);
  //   }
  // }

  if (increase) {
    className += " like";
  }

  if (rise) {
    className += " increase";
  }
  return (
    <li className={className}>
      <span
        className="list-group-item-label"
        onClick={onToggleRise}
      >
        {name}
      </span>
      <input
        type="text"
        className="list-groups-item-input"
        defaultValue={salary + "$"}
      />
      <div className="d-flex justify-content-center aling-items-center">
        <button
          type="button"
          className="btn-cookie btn-sm"
          onClick={onToggleIncrease}
          name="button1"
        >
          <i
            className="fas fa-cookie"
            name="button1"
          ></i>
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
