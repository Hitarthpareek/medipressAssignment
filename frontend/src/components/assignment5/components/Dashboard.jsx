import { useEffect, useState } from "react";
import { getTasks } from "../services/api";
import TaskCard from "./TaskCard";
import TaskForm from "./TaskForm";
import Loader from "./Loader";

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTasks = async () => {
    setLoading(true);
    const res = await getTasks();
    setTasks(res.tasks || []);
    setLoading(false);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="dashboard">
      {/* HEADER */}
      <div className="dashboard-header">
        <h2>Your Tasks</h2>
        <p>Manage your work efficiently</p>
      </div>

      {/* FORM */}
      <TaskForm refresh={fetchTasks} />

      {/* CONTENT */}
      {loading ? (
        <Loader />
      ) : (
        <div className="task-grid">
          {tasks.length === 0 ? (
            <div className="empty">No tasks yet. Create one 🚀</div>
          ) : (
            tasks.map((task) => (
              <TaskCard
                key={task._id}
                task={task}
                refresh={fetchTasks}
              />
            ))
          )}
        </div>
      )}
    </div>
  );
}