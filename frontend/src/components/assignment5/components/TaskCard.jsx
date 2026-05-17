import { updateTask, deleteTask } from "../services/api";

export default function TaskCard({ task, onRefresh }) {

  const completeTask = async () => {
    await updateTask(task._id, { status: "completed" });
    onRefresh();
  };

  const removeTask = async () => {
    await deleteTask(task._id);
    onRefresh();
  };

  return (
    <div className={`task-card ${task.status}`}>

      <h3>{task.title}</h3>
      <p>{task.description}</p>

      <span>{task.status}</span>

      <div className="actions">

        {task.status === "pending" && (
          <button onClick={completeTask}>
            Complete
          </button>
        )}

        <button onClick={removeTask}>
          Delete
        </button>

      </div>

    </div>
  );
}