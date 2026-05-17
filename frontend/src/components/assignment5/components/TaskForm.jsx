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
      setForm({ title: "", description: "" });
      onTaskAdded();
    }
  };

  return (
    <div className="task-form">

      <input
        name="title"
        value={form.title}
        placeholder="Task title"
        onChange={handleChange}
      />

      <textarea
        name="description"
        value={form.description}
        placeholder="Description"
        onChange={handleChange}
      />

      <button onClick={handleSubmit}>
        Add Task
      </button>

    </div>
  );
}