import AddProjectForm from "../components/AddProjectForm";

import ProjectCard from "../components/ProjectCard";

import StatsCards from "../components/StatsCards";

import { useMemo, useState } from "react";

export default function UserDashboard({
  projects,
  onAddProject,
  onCompleteProject
}) {

    const [filter, setFilter] =
  useState("all");

  const filteredProjects =
  useMemo(() => {

    if (filter === "ongoing") {

      return projects.filter(
        (project) =>
          project.isOngoing
      );
    }

    if (filter === "completed") {

      return projects.filter(
        (project) =>
          !project.isOngoing
      );
    }

    return projects;

  }, [projects, filter]);

  return (

    <div className="user-dashboard">

<div className="dashboard-hero">

  <div>

    <h1>
      Project Dashboard
    </h1>

    <p>
      Manage your projects,
      track ongoing work and
      completed tasks.
    </p>

  </div>

  <div className="dashboard-filters">

    <button
      className={
        filter === "all"
          ? "active-filter"
          : ""
      }

      onClick={() =>
        setFilter("all")
      }
    >

      All

    </button>

    <button
      className={
        filter === "ongoing"
          ? "active-filter"
          : ""
      }

      onClick={() =>
        setFilter(
          "ongoing"
        )
      }
    >

      Ongoing

    </button>

    <button
      className={
        filter === "completed"
          ? "active-filter"
          : ""
      }

      onClick={() =>
        setFilter(
          "completed"
        )
      }
    >

      Completed

    </button>

  </div>

</div>

      <StatsCards
        projects={projects}
      />

      <AddProjectForm
        onAdd={onAddProject}
      />

      <div className="projects-grid">

        {projects.length === 0 ? (

  <div className="empty-projects">

    <h2>
      No Projects Yet
    </h2>

    <p>
      Add your first project
      to start tracking work.
    </p>

  </div>

) : (

  filteredProjects.map((project) => (

    <ProjectCard
      key={project._id}
      project={project}
      onComplete={onCompleteProject}
    />

  ))

)}

      </div>

    </div>

  );
}