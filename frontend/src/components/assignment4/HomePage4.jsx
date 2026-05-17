import {
  useEffect,
  useState,
} from "react";

import {
  Routes,
  Route,
} from "react-router-dom";

import Navbar from "./components/Navbar";

import LoginForm from "./components/LoginForm";

import Dashboard from "./pages/Dashboard";

import UserDashboard from "./pages/UserDashboard";

import UserProfile from "./pages/UserProfile";

import {
  loginUser,
  registerUser,
  getProjects,
  createProject,
} from "./services/api";

import {
  saveAuth,
  getUser,
  logout,
} from "./utils/auth";

import "./HomePage4.css";

export default function HomePage4() {

  const [user, setUser] =
    useState(null);

  const [projects, setProjects] =
    useState([]);

  useEffect(() => {

    fetchProjects();

    const savedUser =
      getUser();

    if (savedUser) {

      setUser(savedUser);

    }

  }, []);

  const fetchProjects =
    async () => {

      try {

        const data =
          await getProjects();

        setProjects(data);

      } catch (error) {

        console.log(error);

      }
    };

  const handleSignup =
    async (formData) => {

      try {

        await registerUser(
          formData
        );

        alert(
          "Signup Successful"
        );

      } catch (error) {

        console.log(error);

      }
    };

  const handleLogin =
    async (formData) => {

      try {

        const data =
          await loginUser(
            formData
          );

        saveAuth(
          data.token,
          data.user
        );

        setUser(data.user);

      } catch (error) {

        console.log(error);

      }
    };

  const handleLogout = () => {

    logout();

    setUser(null);
  };

  const handleAddProject =
    async (projectData) => {

      try {

        const payload = {
          ...projectData,

          username:
            user.name,
        };

        await createProject(
          payload
        );

        fetchProjects();

      } catch (error) {

        console.log(error);

      }
    };

  const userProjects =
    projects.filter(
      (project) =>
        project.username ===
        user?.name
    );

  return (
    <div className="homepage4">

      <Navbar
        user={user}
        onLogout={
          handleLogout
        }
      />

      {!user ? (

        <div className="public-layout">

          <div className="dashboard-section">

            <Routes>

              <Route
                path="/"
                element={
                  <Dashboard
                    projects={
                      projects
                    }
                  />
                }
              />

              <Route
                path="/profile/:id"
                element={
                  <UserProfile />
                }
              />

            </Routes>

          </div>

          <div className="login-section">

            <LoginForm
              onLogin={
                handleLogin
              }
              onSignup={
                handleSignup
              }
            />

          </div>

        </div>

      ) : (

        <UserDashboard
          projects={
            userProjects
          }
          onAddProject={
            handleAddProject
          }
        />

      )}

    </div>
  );
}