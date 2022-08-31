import EmployeesListItem from "../Employees-list-item/Employees-list-item";
import "./Employees-list.css";

const EmployeesList = ({ data, onDelete }) => {
  return (
    <ul className="app-list list-group">
      {data.map((item) => {
        const { id, ...itemProps } = item;
        return (
          <EmployeesListItem
            {...itemProps}
            key={id}
            onDelete={() => onDelete(id)}
          />
        );
      })}
    </ul>
  );
};

export default EmployeesList;
