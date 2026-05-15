import { Link } from "react-router-dom";
import {employees} from "../../data/employeeData"
import EmployeeCard from "./EmployeeCard";
import "./EmployeeCard.css"
import Header from "../commonComponents/Header/Header";


export default function HomePage1() {
  return (
    <>
    <Header/>
    <div className="employee-container">
      <h1 className="page-title">Employee Directory</h1>

      <div className="employee-grid">
        {employees.map((employee) => (
          <EmployeeCard key={employee.id} employee={employee} />
        ))}
      </div>
    </div>
    </>
  );
}