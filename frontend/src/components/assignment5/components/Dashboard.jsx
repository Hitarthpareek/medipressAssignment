import { useEffect, useState } from "react";
import { getTasks } from "../services/api";
import TaskForm from "./TaskForm";
import TaskCard from "./TaskCard";

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTasks = async () => {
    setLoading(true);
    const res = await getTasks();

    if (res.success) {
      setTasks(res.tasks);
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="dashboard">
      <TaskForm onTaskAdded={fetchTasks} />

      {loading && <p>Loading...</p>}

      {!loading && (
        <div className="task-list">
          {tasks.map((task) => (
            <TaskCard
              key={task._id}
              task={task}
              onRefresh={fetchTasks}
            />
          ))}
        </div>
      )}
    </div>
  );
}