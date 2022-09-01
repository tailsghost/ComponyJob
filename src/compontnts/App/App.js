import "./App.css";
import AppInfo from "../App-info/App-info";
import SearchPanel from "../Search-panel/Search-panel";
import AppFilter from "../App-filter/App-filter";
import EmployeesList from "../Employees-list/Employees-list";
import EmployeesAddForm from "../Employees-add-form/Employees-add-form";
import { useState } from "react";

function App() {
  const [employees, setEmployees] = useState({
    data: [
      {
        name: "John C.",
        salary: 500,
        increase: false,
        rise: false,
        id: idEmployees(),
      },
      {
        name: "Alex M.",
        salary: 800,
        increase: false,
        rise: false,
        id: idEmployees(),
      },
      {
        name: "Carl W.",
        salary: 1100,
        increase: false,
        rise: false,
        id: idEmployees(),
      },
      {
        name: "Sara I.",
        salary: 600,
        increase: false,
        rise: false,
        id: idEmployees(),
      },
      {
        name: "West F.",
        salary: 5000,
        increase: false,
        rise: false,
        id: idEmployees(),
      },
    ],
  });

  function idEmployees() {
    return Math.ceil(Math.random() * 10000000);
  }

  function removeSetEmployees(id) {
    let data = [];
    employees.data.map((item) => data.push(item));
    setEmployees({ data: data.filter((item) => item.id !== id) });
  }

  function addSetEmployees({ name, salary }) {
    let data = [];

    let employeesData = {
      name: name,
      salary: salary,
      increase: false,
      rise: false,
      id: idEmployees(),
    };

    employees.data.map((item) => data.push(item));
    data.push(employeesData);
    console.log(data);
    if ((name, salary !== undefined && salary !== "")) {
      setEmployees({ data: data });
      console.log(salary);
    }
  }

  function onToggleProps(id, props) {
    let data = [];

    employees.data.map((item) => data.push(item));

    let index = data.findIndex((elem) => elem.id === id);

    let old = data[index][props];

    if (old === true) {
      data[index][props] = false;
    } else {
      data[index][props] = true;
    }

    setEmployees({ data: data });
  }

  let employeesPrize = [0];
  let employeesValue = employees.data.length;
  employees.data.map((item) => {
    if (item.rise || item.increase === true) {
      return employeesPrize++;
    } else {
      return employeesPrize;
    }
  });

  return (
    <div className="App">
      <AppInfo
        employeesPrize={employeesPrize}
        employeesValue={employeesValue}
      />
      <div className="search-panel">
        <SearchPanel />
        <AppFilter />
      </div>
      <EmployeesList
        data={employees}
        onDelete={removeSetEmployees}
        onToggleIncrease={onToggleProps}
      />
      <EmployeesAddForm onAddEmployees={addSetEmployees} />
    </div>
  );
}

export default App;
