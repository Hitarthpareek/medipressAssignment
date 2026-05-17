import { useState } from "react";

export default function TaskForm({
  onAdd,
}) {

  const [title, setTitle] =
    useState("");

  const handleSubmit =
    async (e) => {

      e.preventDefault();

      if (!title) return;

      await onAdd({
        title,
      });

      setTitle("");
    };

  return (
    <form
      className="task-form"
      onSubmit={handleSubmit}
    >

      <input
        type="text"
        placeholder="Enter task"
        value={title}
        onChange={(e) =>
          setTitle(
            e.target.value
          )
        }
      />

      <button type="submit">
        Add Task
      </button>

    </form>
  );
}