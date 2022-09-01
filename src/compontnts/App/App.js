import "./App.css";
import AppInfo from "../App-info/App-info";
import SearchPanel from "../Search-panel/Search-panel";
import AppFilter from "../App-filter/App-filter";
import EmployeesList from "../Employees-list/Employees-list";
import EmployeesAddForm from "../Employees-add-form/Employees-add-form";
import { useState } from "react";

function App() {
  const [deleted, setDeleted] = useState({
    data: [
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
    ],
  });

  console.log(deleted);

  function addSetDeleted(id) {
    deleted.data.findIndex((elem) => elem.id === id);
    let data = [];
    deleted.data.map((item) => data.push(item));
    setDeleted({ data: data.filter((item) => item.id !== id) });
  }

  return (
    <div className="App">
      <AppInfo />
      <div className="search-panel">
        <SearchPanel />
        <AppFilter />
      </div>
      <EmployeesList
        data={deleted}
        onDelete={addSetDeleted}
      />
      <EmployeesAddForm />
    </div>
  );
}

export default App;
