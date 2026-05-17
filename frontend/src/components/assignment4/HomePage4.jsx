import { useEffect, useState } from "react";

import Header from "../commonComponents/Header/Header";

import LoginForm from "./components/LoginForm";
import Navbar from "./components/Navbar";
import DashboardCards from "./components/DashboardCards";
import EmployeeTable from "./components/EmployeeTable";
import ProjectTable from "./components/ProjectTable";
import WorkLogTable from "./components/WorkLogTable";

import {
  loginUser,
  getEmployees,
} from "./services/api";

import { saveToken } from "./utils/auth";

import "./HomePage4.css";

export default function HomePage4() {
  const [user, setUser] = useState(null);

  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const data = await getEmployees();
      setEmployees(data);
    } catch (error) {
      console.log(error);
    }
  };

   const handleLogin = async (formData) => {
    try {
      const data = await loginUser(formData);

      saveToken(data.token);

      setUser(data.user);

      fetchEmployees();

    } catch (error) {
      console.log(error);
    }
  };

   if (!user) {
    return (
      <>
        <Header title="PMIS Login" />

        <LoginForm onLogin={handleLogin} />
      </>
    );
  }

   return (
    <>
      <Header title="PMIS Dashboard" />

      <div className="pmis-container">
        <Navbar user={user} />

        <DashboardCards
          employees={employees.length}
          projects={12}
          worklogs={42}
          hours={320}
        />

       <EmployeeTable employees={employees} />

        <ProjectTable />

        <WorkLogTable />
      </div>
    </>
  );
}