import EmployeesListItem from "../Employees-list-item/Employees-list-item";
import "./Employees-list.css";

const EmployeesList = ({ data, onDelete, onToggleIncrease, onToggleRise }) => {
  return (
    <ul className="app-list list-group">
      {data.data.map((item) => {
        const { id, ...itemProps } = item;
        return (
          <EmployeesListItem
            {...itemProps}
            key={id}
            onDelete={() => onDelete(id)}
            onToggleIncrease={(e) => onToggleIncrease(id)}
            onToggleRise={(e) => onToggleRise(id, e)}
          />
        );
      })}
    </ul>
  );
};

export default EmployeesList;
