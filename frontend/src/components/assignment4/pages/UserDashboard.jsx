import {
  useMemo,
  useState,
} from "react";

import AddProjectForm from "../components/AddProjectForm";

import ProjectCard from "../components/ProjectCard";

export default function UserDashboard({
  projects,
  onAddProject,
  onCompleteProject,
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

      if (
        filter ===
        "completed"
      ) {

        return projects.filter(
          (project) =>
            !project.isOngoing
        );
      }

      return projects;

    }, [projects, filter]);

  const ongoingCount =
    projects.filter(
      (project) =>
        project.isOngoing
    ).length;

  const completedCount =
    projects.filter(
      (project) =>
        !project.isOngoing
    ).length;

  return (
    <div className="user-dashboard-layout">

      {/* LEFT SIDE */}

      <div className="dashboard-left">

        <div className="left-top">

          <h1>
            Project Manager
          </h1>

          <p>
            Track ongoing and
            completed projects.
          </p>

        </div>

        <div className="stats-vertical">

          <div className="stats-card">

            <h2>
              {projects.length}
            </h2>

            <p>
              Total Projects
            </p>

          </div>

          <div className="stats-card ongoing-card">

            <h2>
              {ongoingCount}
            </h2>

            <p>
              Ongoing
            </p>

          </div>

          <div className="stats-card completed-card">

            <h2>
              {completedCount}
            </h2>

            <p>
              Completed
            </p>

          </div>

        </div>

        <AddProjectForm
          onAdd={onAddProject}
        />

      </div>

      {/* RIGHT SIDE */}

      <div className="dashboard-right">

        <div className="right-top">

          <h2>
            Your Projects
          </h2>

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
                filter ===
                "ongoing"
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
                filter ===
                "completed"
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

        <div className="projects-scroll">

          {filteredProjects
            .length === 0 ? (

            <div className="empty-projects">

              <h2>
                No Projects
              </h2>

              <p>
                Add a project to
                get started.
              </p>

            </div>

          ) : (

            filteredProjects.map(
              (project) => (

                <ProjectCard
                  key={
                    project._id
                  }

                  project={
                    project
                  }

                  onComplete={
                    onCompleteProject
                  }
                />

              )
            )

          )}

        </div>

      </div>

    </div>
  );
}