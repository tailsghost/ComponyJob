import "./App.css";
import AppInfo from "../App-info/App-info";
import SearchPanel from "../Search-panel/Search-panel";
import AppFilter from "../App-filter/App-filter";
import EmployeesList from "../Employees-list/Employees-list";
import EmployeesAddForm from "../Employees-add-form/Employees-add-form";
function App() {
  const data = [
    {
      name: "John C.",
      salary: 500,
      increase: true,
    },
    {
      name: "Alex M.",
      salary: 800,
      increase: false,
    },
    {
      name: "Carl W.",
      salary: 1100,
      increase: false,
    },
    {
      name: "Sara I.",
      salary: 600,
      increase: false,
    },
    {
      name: "West F.",
      salary: 5000,
      increase: false,
    },
  ];

  return (
    <div className="App">
      <AppInfo />

      <div className="search-panel">
        <SearchPanel />
        <AppFilter />
      </div>
      <EmployeesList data={data} />
      <EmployeesAddForm />
    </div>
  );
}

export default App;
