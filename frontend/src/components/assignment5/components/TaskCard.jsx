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
      <div className="task-top">
        <h3>{task.title}</h3>

        <span className={`badge ${task.status}`}>
          {task.status}
        </span>
      </div>

      <p className="desc">{task.description}</p>

      <div className="task-actions">
        {task.status === "pending" && (
          <button className="complete-btn" onClick={complete}>
            Mark Done
          </button>
        )}

        <button className="delete-btn" onClick={remove}>
          Delete
        </button>
      </div>
    </div>
  );
}