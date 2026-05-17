import { updateTask, deleteTask } from "../services/api";

export default function TaskCard({ task, onRefresh }) {
  const markCompleted = async () => {
    await updateTask(task._id, { status: "completed" });
    onRefresh();
  };

  const handleDelete = async () => {
    await deleteTask(task._id);
    onRefresh();
  };

  return (
    <div className={`task-card ${task.status}`}>
      <h3>{task.title}</h3>
      <p>{task.description}</p>

      <span>Status: {task.status}</span>

      <div className="actions">
        {task.status === "pending" && (
          <button onClick={markCompleted}>
            Mark Completed
          </button>
        )}

        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
}