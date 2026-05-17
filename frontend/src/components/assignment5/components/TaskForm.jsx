import { useState } from "react";
import { createTask } from "../services/api";

export default function TaskForm({ refresh }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const submit = async (e) => {
    e.preventDefault();

    if (!title) return;

    await createTask({ title, description });

    setTitle("");
    setDescription("");

    refresh();
  };

  return (
    <form className="task-form" onSubmit={submit}>
      <input
        placeholder="Task title..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Description..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button>Add Task</button>
    </form>
  );
}