import EmployeesListItem from "../Employees-list-item/Employees-list-item";
import "./Employees-list.css";

const EmployeesList = ({ data }) => {
  return (
    <ul className="app-list list-group">
      {data.map((item) => {
        return (
          <EmployeesListItem
            item={item}
            key={item.name}
          />
        );
      })}
    </ul>
  );
};

export default EmployeesList;
