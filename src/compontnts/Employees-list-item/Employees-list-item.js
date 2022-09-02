import "./Employees-list-item.css";

const EmployeesListItem = ({
  name,
  salary,
  onDelete,
  increase,
  rise,
  onToggleProps,
}) => {
  let className = "list-group-item justife-content-between flex-start";

  if (increase) {
    className += " like increase";
  }

  if (rise) {
    className += " increase like";
  }
  return (
    <li className={className}>
      <span
        className="list-group-item-label"
        onClick={onToggleProps}
        data-toggle="rise"
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
          onClick={onToggleProps}
          data-toggle="increase"
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
