import TaskForm from "./TaskForm";

import TaskCard from "./TaskCard";

export default function Dashboard({
  tasks,
  onAdd,
  onComplete,
  onDelete,
}) {

  const completed =
    tasks.filter(
      (task) =>
        task.completed
    ).length;

  const pending =
    tasks.filter(
      (task) =>
        !task.completed
    ).length;

  return (
    <div className="dashboard">

      <div className="summary-grid">

        <div className="summary-card">
          <h2>
            {tasks.length}
          </h2>
          <p>Total Tasks</p>
        </div>

        <div className="summary-card">
          <h2>
            {pending}
          </h2>
          <p>Pending</p>
        </div>

        <div className="summary-card">
          <h2>
            {completed}
          </h2>
          <p>Completed</p>
        </div>

      </div>

      <TaskForm onAdd={onAdd} />

      <div className="tasks-grid">

        {tasks.map((task) => (

          <TaskCard
            key={task._id}
            task={task}
            onComplete={onComplete}
            onDelete={onDelete}
          />

        ))}

      </div>

    </div>
  );
}