// HomePage2.jsx
import { useState } from "react";
import "./HomePage2.css";
import Header from "../commonComponents/Header/Header"

export default function HomePage2() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Complete React Assignment",
      completed: false,
    },
    {
      id: 2,
      title: "Prepare UI Design",
      completed: true,
    },
  ]);

   useEffect(() => {
  
    window.scrollTo(0, 0);
  
  }, []);

  const [taskInput, setTaskInput] = useState("");
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  // Add Task
  const addTask = () => {
    if (!taskInput.trim()) return;

    const newTask = {
      id: Date.now(),
      title: taskInput,
      completed: false,
    };

    setTasks([newTask, ...tasks]);
    setTaskInput("");
  };

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle Complete
  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  // Filter + Search
  const filteredTasks = tasks.filter((task) => {
    const matchesSearch = task.title
      .toLowerCase()
      .includes(search.toLowerCase());

    if (filter === "completed") {
      return matchesSearch && task.completed;
    }

    if (filter === "pending") {
      return matchesSearch && !task.completed;
    }

    return matchesSearch;
  });

  return (
    <>
    <Header title="Task Manager"/>
    <div className="task-container">
      <div className="task-header">
        <h1>Task Manager</h1>
        <p>Manage your daily workflow efficiently</p>
      </div>

      {/* Add Task */}

      <div className="task-input-box">
        <input
          type="text"
          placeholder="Enter new task..."
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
        />

        <button onClick={addTask}>Add Task</button>
      </div>

      {/* Search + Filter */}

      <div className="task-controls">
        <input
          type="text"
          placeholder="Search tasks..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="all">All Tasks</option>
          <option value="completed">Completed</option>
          <option value="pending">Pending</option>
        </select>
      </div>

      {/* Task List */}

      <div className="task-list">
        {filteredTasks.length > 0 ? (
          filteredTasks.map((task) => (
            <div
              key={task.id}
              className={`task-card ${
                task.completed ? "completed-task" : ""
              }`}
            >
              <div className="task-left">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleTask(task.id)}
                />

                <span>{task.title}</span>
              </div>

              <button
                className="delete-btn"
                onClick={() => deleteTask(task.id)}
              >
                Delete
              </button>
            </div>
          ))
        ) : (
          <div className="empty-state">
            No tasks found
          </div>
        )}
      </div>
    </div>
    </>
  );
}