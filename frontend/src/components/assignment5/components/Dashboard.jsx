import { useEffect, useState } from "react";
import { getTasks } from "../services/api";
import TaskCard from "./TaskCard";
import TaskForm from "./TaskForm";
import Loader from "./Loader";

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");

  const fetchTasks = async () => {
    setLoading(true);
    const res = await getTasks();
    setTasks(res.tasks || []);
    setLoading(false);
  };

  useEffect(() => { fetchTasks(); }, []);

  const filtered = filter === "all" ? tasks : tasks.filter(t => t.status === filter);
  const counts = {
    all: tasks.length,
    pending: tasks.filter(t => t.status === "pending").length,
    completed: tasks.filter(t => t.status === "completed").length,
  };

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <div>
          <h2>My Tasks</h2>
        </div>
        <div className="header-stats">
          <div className="stat-chip pending-chip">
            <div className="stat-dot" />
            {counts.pending} pending
          </div>
          <div className="stat-chip done-chip">
            <div className="stat-dot" />
            {counts.completed} done
          </div>
        </div>
      </div>

      <TaskForm refresh={fetchTasks} />

      <div className="filter-tabs">
        {["all", "pending", "completed"].map(f => (
          <button key={f} className={`filter-tab ${filter === f ? "active" : ""}`} onClick={() => setFilter(f)}>
            {f.charAt(0).toUpperCase() + f.slice(1)}
            <span className="tab-count">{counts[f]}</span>
          </button>
        ))}
      </div>

      {loading ? <Loader /> : (
        <div className="task-grid">
          {filtered.length === 0 ? (
            <div className="empty-state">
              <span className="empty-icon">◎</span>
              <p>{filter === "all" ? "No tasks yet. Create one above." : `No ${filter} tasks.`}</p>
            </div>
          ) : (
            filtered.map(task => <TaskCard key={task._id} task={task} refresh={fetchTasks} />)
          )}
        </div>
      )}
    </div>
  );
}