import EmployeesListItem from "../Employees-list-item/Employees-list-item";
import "./Employees-list.css";

const EmployeesList = ({ data, onDelete, onToggleIncrease }) => {
  return (
    <ul className="app-list list-group">
      {data.data.map((item) => {
        const { id, ...itemProps } = item;
        return (
          <EmployeesListItem
            {...itemProps}
            key={id}
            onDelete={() => onDelete(id)}
            onToggleProps={(e) =>
              onToggleIncrease(id, e.currentTarget.getAttribute("data-toggle"))
            }
          />
        );
      })}
    </ul>
  );
};

export default EmployeesList;
