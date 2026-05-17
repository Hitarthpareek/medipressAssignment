import "./HomePage5.css";

import { useEffect,useState } from "react";

import LoginForm from "./components/LoginForm";

import Dashboard from "./components/Dashboard";

import {
  loginUser,
} from "./services/api";

import {
  saveAuth,
  getUser,
  logout,
} from "./utils/auth";

import {
  getTasks,
  createTask,
  completeTask,
  deleteTask,
} from "./api/taskApi";

export default function HomePage5() {

  const [user, setUser] =
    useState(getUser());

  const [tasks, setTasks] =
    useState([]);

  const loadTasks =
    async () => {

      const data =
        await getTasks();

      setTasks(data);
    };

  useEffect(() => {

    if (user) {
      loadTasks();
    }

  }, [user]);

  const handleLogin =
    async (formData) => {

      const data =
        await loginUser(
          formData
        );

      if (data.token) {

        saveAuth(
          data.token,
          data.user
        );

        setUser(data.user);
      }
    };

  const handleAddTask =
    async (taskData) => {

      await createTask(
        taskData
      );

      loadTasks();
    };

  const handleComplete =
    async (id) => {

      await completeTask(id);

      loadTasks();
    };

  const handleDelete =
    async (id) => {

      await deleteTask(id);

      loadTasks();
    };

  if (!user) {

    return (
      <div className="homepage5">

        <LoginForm
          onLogin={
            handleLogin
          }
        />

      </div>
    );
  }

  return (
    <div className="homepage5">

      <nav className="navbar">

        <h2>
          Task Dashboard
        </h2>

        <button
          onClick={() => {

            logout();

            setUser(null);

          }}
        >
          Logout
        </button>

      </nav>

      <Dashboard
        tasks={tasks}
        onAdd={handleAddTask}
        onComplete={
          handleComplete
        }
        onDelete={
          handleDelete
        }
      />

    </div>
  );
}