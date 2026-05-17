import { useState } from "react";
import { createTask } from "../services/api";

export default function TaskForm({ refresh }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [open, setOpen] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    await createTask({ title, description });
    setTitle(""); setDescription(""); setOpen(false); refresh();
  };

  return (
    <div className="task-form-wrapper">
      {!open ? (
        <button className="add-task-trigger" onClick={() => setOpen(true)}>
          <span className="trigger-icon">+</span>
          Add a new task…
        </button>
      ) : (
        <form className="task-form" onSubmit={submit}>
          <input className="form-input" placeholder="Task title" value={title} onChange={e => setTitle(e.target.value)} autoFocus />
          <textarea className="form-textarea" placeholder="Add description (optional)" value={description} onChange={e => setDescription(e.target.value)} rows={3} />
          <div className="form-actions">
            <button type="button" className="btn-cancel" onClick={() => setOpen(false)}>Cancel</button>
            <button type="submit" className="btn-add">Add Task</button>
          </div>
        </form>
      )}
    </div>
  );
}