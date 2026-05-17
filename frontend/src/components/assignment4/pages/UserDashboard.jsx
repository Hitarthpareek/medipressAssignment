import AddProjectForm from "../components/AddProjectForm";

import ProjectCard from "../components/ProjectCard";

import StatsCards from "../components/StatsCards";

export default function UserDashboard({
  projects,
  onAddProject,
}) {

  return (
    <div>

      <StatsCards
        projects={projects}
      />

      <AddProjectForm
        onAdd={onAddProject}
      />

      <div className="projects-grid">

        {projects.map(
          (project) => (

            <ProjectCard
              key={project._id}
              project={project}
            />

          )
        )}

      </div>

    </div>
  );
}