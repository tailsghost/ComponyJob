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
        increase: true,
        rise: false,
        id: idEmployees(),
      },
      {
        name: "Alex M.",
        salary: 800,
        increase: false,
        rise: true,
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
    setEmployees({ data: data });
  }

  function onToggleIncrease(id) {
    let data = [];

    employees.data.map((item) => data.push(item));

    let index = data.findIndex((elem) => elem.id === id);

    let old = data[index].increase;

    if (old === true) {
      data[index].increase = false;
    } else {
      data[index].increase = true;
    }
    setEmployees({ data: data });
  }

  function onToggleRise(id) {
    let data = [];

    employees.data.map((item) => data.push(item));

    let index = data.findIndex((elem) => elem.id === id);

    let old = data[index].rise;

    if (old === true) {
      data[index].rise = false;
    } else {
      data[index].rise = true;
    }
    setEmployees({ data: data });
  }

  return (
    <div className="App">
      <AppInfo />
      <div className="search-panel">
        <SearchPanel />
        <AppFilter />
      </div>
      <EmployeesList
        data={employees}
        onDelete={removeSetEmployees}
        onToggleIncrease={onToggleIncrease}
        onToggleRise={onToggleRise}
      />
      <EmployeesAddForm onAddEmployees={addSetEmployees} />
    </div>
  );
}

export default App;
