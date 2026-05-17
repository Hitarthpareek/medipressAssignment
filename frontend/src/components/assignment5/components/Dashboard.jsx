import { useEffect, useState } from "react";
import { getTasks } from "../services/api";
import TaskForm from "./TaskForm";
import TaskCard from "./TaskCard";

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const res = await getTasks();

    if (res.success) {
      setTasks(res.tasks);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div>

      <div className="top-bar">
        <h2>My Tasks</h2>
      </div>

      <TaskForm onTaskAdded={fetchTasks} />

      <div className="task-list">
        {tasks.map((task) => (
          <TaskCard
            key={task._id}
            task={task}
            onRefresh={fetchTasks}
          />
        ))}
      </div>

    </div>
  );
}