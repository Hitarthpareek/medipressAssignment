export default function TaskCard({
  task,
  onComplete,
  onDelete,
}) {

  return (
    <div
      className={
        task.completed
          ? "task-card completed"
          : "task-card"
      }
    >

      <div>

        <h3>
          {task.title}
        </h3>

        <p>
          {task.completed
            ? "Completed"
            : "Pending"}
        </p>

      </div>

      <div className="task-actions">

        {!task.completed && (

          <button
            className="complete-btn"
            onClick={() =>
              onComplete(
                task._id
              )
            }
          >
            Complete
          </button>

        )}

        <button
          className="delete-btn"
          onClick={() =>
            onDelete(
              task._id
            )
          }
        >
          Delete
        </button>

      </div>

    </div>
  );
}