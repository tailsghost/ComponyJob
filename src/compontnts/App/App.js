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
        rise: true,
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
    tern: "",
    filter: "all",
  });

  function idEmployees() {
    return Math.ceil(Math.random() * 10000000);
  }

  function removeSetEmployees(id) {
    let data = { ...employees };
    let date = [
      {
        data: data.data.filter((item) => item.id !== id),
        tern: tern,
        filter: filter,
      },
    ];
    setEmployees(...date);
  }

  function addSetEmployees({ name, salary }) {
    let data = { ...employees };

    let employeesData = {
      name: name,
      salary: salary,
      increase: false,
      rise: false,
      id: idEmployees(),
    };

    data.data.push(employeesData);
    if ((name, salary !== undefined && salary !== "")) {
      setEmployees({ ...data });
    }
  }

  function onToggleProps(id, props) {
    let data = { ...employees };

    let index = data.data.findIndex((elem) => elem.id === id);

    let old = data.data[index][props];

    if (old === true) {
      data.data[index].increase = false;
      data.data[index].rise = false;
    } else {
      data.data[index].increase = true;
      data.data[index].rise = true;
    }

    setEmployees({ ...data });
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

  const { data, tern, filter } = employees;
  const vesibleData = filterPost(searchEmp(data, tern), filter);

  function searchEmp(items, tern) {
    if (tern.length === 0) {
      return items;
    }
    return items.filter((item) => {
      return item.name.indexOf(tern) > -1;
    });
  }

  function onUpdateSearch(ternt) {
    let data = { ...employees };
    data.tern = ternt;
    setEmployees(data);
  }

  function filterPost(items, filter) {
    switch (filter) {
      case "rise":
        return items.filter((item) => item.rise);

      case "moreThen1000":
        return items.filter((item) => item.salary > 1000);
      default:
        return items;
    }
  }

  function onFilterSelect(filter) {
    let data = { ...employees };
    data.filter = filter;
    setEmployees(data);
  }

  return (
    <div className="App">
      <AppInfo
        employeesPrize={employeesPrize}
        employeesValue={employeesValue}
      />
      <div className="search-panel">
        <SearchPanel onUpdateSearch={onUpdateSearch} />
        <AppFilter
          filter={filter}
          onFilterSelect={onFilterSelect}
        />
      </div>
      <EmployeesList
        data={vesibleData}
        onDelete={removeSetEmployees}
        onToggleIncrease={onToggleProps}
      />
      <EmployeesAddForm onAddEmployees={addSetEmployees} />
    </div>
  );
}

export default App;
