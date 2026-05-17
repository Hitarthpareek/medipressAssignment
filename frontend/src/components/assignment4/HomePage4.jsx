import { useEffect, useState } from "react";

import Header from "../commonComponents/Header";

import LoginForm from "./components/LoginForm";
import Navbar from "./components/Navbar";
import DashboardCards from "./components/DashboardCards";
import EmployeeTable from "./components/EmployeeTable";
import ProjectTable from "./components/ProjectTable";
import WorkLogTable from "./components/WorkLogTable";

import {
  loginUser,
  registerUser,
  getEmployees,
} from "./services/api";

import {
  saveToken,
  getToken,
  logout,
} from "./utils/auth";

import "./HomePage4.css";

export default function HomePage4() {
  const [user, setUser] = useState(null);

  const [employees, setEmployees] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const token = getToken();

      if (!token) {
        setLoading(false);
        return;
      }

      await fetchEmployees();

      const savedUser = JSON.parse(
        localStorage.getItem("user")
      );

      if (savedUser) {
        setUser(savedUser);
      }

    } catch (error) {
      console.log(error);
      logout();

          } finally {
      setLoading(false);
    }
  };

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

            localStorage.setItem(
        "user",
        JSON.stringify(data.user)
      );

      setUser(data.user);

      await fetchEmployees();

    } catch (error) {
      console.log(error);
      alert("Invalid Credentials");
    }
  };

    const handleSignup = async (formData) => {
    try {
      await registerUser(formData);

      alert("Account Created Successfully");

    } catch (error) {
      console.log(error);
      alert("Signup Failed");
    }
  };

  const handleLogout = () => {
    logout();

    localStorage.removeItem("user");

    setUser(null);
  };

   if (loading) {
    return (
      <div className="loader-screen">
        <h1>Loading...</h1>
      </div>
    );
  }

  if (!user) {
    return (
      <>
        <Header title="PMIS Login" />

        <LoginForm
          onLogin={handleLogin}
          onSignup={handleSignup}
        />
      </>
    );
  }

   return (
    <>
      <Header title="PMIS Dashboard" />

      <div className="pmis-container">
        <Navbar
          user={user}
          onLogout={handleLogout}
        />

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