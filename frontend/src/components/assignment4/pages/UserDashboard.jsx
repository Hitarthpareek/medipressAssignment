import AddProjectForm from "../components/AddProjectForm";

import ProjectCard from "../components/ProjectCard";

import StatsCards from "../components/StatsCards";

export default function UserDashboard({
  projects,
  onAddProject,
}) {

  return (

    <div className="user-dashboard">

      <div className="dashboard-hero">

        <div>

          <h1>
            Your Projects
          </h1>

          <p>
            Track and manage your
            ongoing work
          </p>

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

  projects.map((project) => (

    <ProjectCard
      key={project._id}
      project={project}
    />

  ))

)}

      </div>

    </div>

  );
}