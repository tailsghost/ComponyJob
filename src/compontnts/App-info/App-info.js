import "./App-info.css";

const AppInfo = ({ employeesValue, employeesPrize }) => {
  return (
    <div className="app-info">
      <h1>Учет сотрудников в компании AndreyXP</h1>
      <h2>Общее число сотрудников: {employeesValue}</h2>
      <h2>премию получат: {employeesPrize}</h2>
    </div>
  );
};

export default AppInfo;
