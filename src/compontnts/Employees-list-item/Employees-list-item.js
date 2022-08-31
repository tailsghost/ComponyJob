import "./Employees-list-item.css";

const EmployeesListItem = ({ item }) => {
  let className = "list-group-item d-flex justife-content-between";
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
