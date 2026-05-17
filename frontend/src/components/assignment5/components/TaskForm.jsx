import { useState } from "react";
import { createTask } from "../services/api";

export default function TaskForm({ onTaskAdded }) {
  const [form, setForm] = useState({
    title: "",
    description: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (!form.title) return;

    const res = await createTask(form);

    if (res.success) {
      onTaskAdded(res.task);
      setForm({ title: "", description: "" });
    }
  };

  return (
    <div className="task-form">
      <input
        name="title"
        placeholder="Task title"
        value={form.title}
        onChange={handleChange}
      />

      <textarea
        name="description"
        placeholder="Description"
        value={form.description}
        onChange={handleChange}
      />

      <button onClick={handleSubmit}>Add Task</button>
    </div>
  );
}