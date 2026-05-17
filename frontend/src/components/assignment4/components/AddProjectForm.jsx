import { useState } from "react";

export default function AddProjectForm({
  onAdd,
}) {

  const [formData, setFormData] =
    useState({
      projectName: "",
      description: "",
      isOngoing: true,
      startDate: "",
      endDate: "",
    });

  const handleSubmit = (e) => {

    e.preventDefault();

    onAdd(formData);
  };

  return (
    <form
      className="project-form"
      onSubmit={handleSubmit}
    >

      <input
        type="text"
        placeholder="Project Name"
        value={formData.projectName}
        onChange={(e) =>
          setFormData({
            ...formData,
            projectName:
              e.target.value,
          })
        }
      />

      <textarea
        placeholder="Description"
        value={formData.description}
        onChange={(e) =>
          setFormData({
            ...formData,
            description:
              e.target.value,
          })
        }
      />

      <input
        type="date"
        value={formData.startDate}
        onChange={(e) =>
          setFormData({
            ...formData,
            startDate:
              e.target.value,
          })
        }
      />

<label className="modern-checkbox">

  <input
    type="checkbox"

    checked={
      formData.isOngoing
    }

    onChange={(e) =>
      setFormData({
        ...formData,

        isOngoing:
          e.target.checked,
      })
    }
  />

  <span className="checkmark"></span>

  Currently Working

</label>

      {!formData.isOngoing && (
        <input
          type="date"
          value={formData.endDate}
          onChange={(e) =>
            setFormData({
              ...formData,
              endDate:
                e.target.value,
            })
          }
        />
      )}

      <button type="submit">
        Add Project
      </button>

    </form>
  );
}