import { updateTask, deleteTask } from "../services/api";

export default function TaskCard({ task, refresh }) {
  const complete = async () => {
    await updateTask(task._id, { status: "completed" });
    refresh();
  };

  const remove = async () => {
    await deleteTask(task._id);
    refresh();
  };

  return (
    <div className={`task-card ${task.status}`}>
      <div className="card-top">
        <span className={`status-dot ${task.status}`} />
        <span className={`badge ${task.status}`}>
          {task.status === "completed" ? "✓ Done" : "Pending"}
        </span>
      </div>

      <h3 className="card-title">{task.title}</h3>

      {task.description && (
        <p className="card-desc">{task.description}</p>
      )}

      <div className="card-actions">
        {task.status === "pending" && (
          <button className="btn-complete" onClick={complete}>
            Mark Complete
          </button>
        )}
        <button className="btn-delete" onClick={remove}>
          Delete
        </button>
      </div>
    </div>
  );
}