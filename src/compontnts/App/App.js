import "./App.css";
import AppInfo from "../App-info/App-info";
import SearchPanel from "../Search-panel/Search-panel";
import AppFilter from "../App-filter/App-filter";
import EmployeesList from "../Employees-list/Employees-list";
import EmployeesAddForm from "../Employees-add-form/Employees-add-form";
import { useState } from "react";

function App() {
  const [deleted, setDeleted] = useState(50);

  function addSetDeleted(id) {
    setDeleted(id);
    const index = data.findIndex((elem) => elem.id === deleted);
    console.log(id);
  }

  const data = [
    {
      name: "John C.",
      salary: 500,
      increase: true,
      id: 1,
    },
    {
      name: "Alex M.",
      salary: 800,
      increase: false,
      id: 2,
    },
    {
      name: "Carl W.",
      salary: 1100,
      increase: false,
      id: 3,
    },
    {
      name: "Sara I.",
      salary: 600,
      increase: false,
      id: 4,
    },
    {
      name: "West F.",
      salary: 5000,
      increase: false,
      id: 5,
    },
  ];

  return (
    <div className="App">
      <AppInfo />
      <div className="search-panel">
        <SearchPanel />
        <AppFilter />
      </div>
      <EmployeesList
        data={data}
        onDelete={addSetDeleted}
      />
      <EmployeesAddForm />
    </div>
  );
}

export default App;
