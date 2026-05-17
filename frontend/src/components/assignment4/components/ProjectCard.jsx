export default function ProjectCard({
  project,
}) {

  const start =
    new Date(
      project.startDate
    );

  const end =
    project.isOngoing
      ? new Date()
      : new Date(project.endDate);

  const days =
    Math.floor(
      (end - start) /
      (1000 * 60 * 60 * 24)
    );

  return (
    <div className="project-card">

      <h3>
        {project.projectName}
      </h3>

      <p>
        {project.description}
      </p>

      <span>

        {project.isOngoing
          ? "Ongoing"
          : "Completed"}

      </span>

      <p>
        {days} Days
      </p>

    </div>
  );
}