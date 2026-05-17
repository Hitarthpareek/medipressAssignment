export default function ProjectCard({
  project,
  onComplete,
  enableMarktodo
}) {

  const start =
    new Date(
      project.startDate
    );

  const end =
    project.isOngoing
      ? new Date()
      : new Date(
          project.endDate
        );

  const days =
    Math.floor(
      (end - start) /
      (1000 * 60 * 60 * 24)
    );

  return (
    <div className={project.isOngoing?"project-card ongoing":"project-card completed"}>

      <div className="project-top">

        <h3>
          {project.projectName}
        </h3>

        <span
          className={
            project.isOngoing
              ? "ongoing-badge"
              : "completed-badge"
          }
        >

          {project.isOngoing
            ? "Ongoing"
            : "Completed"}

        </span>

      </div>

      <p className="project-description">

        {project.description}

      </p>

      <div className="project-dates">

        <div>

          <small>
            Started
          </small>

          <p>
            {new Date(
              project.startDate
            ).toLocaleDateString()}
          </p>

        </div>

        <div>

          <small>
            Duration
          </small>

          <p>
            {days} Days
          </p>

        </div>

      </div>

      {project.isOngoing && enableMarktodo && (

        <button
          className="complete-btn"

          onClick={() =>
            onComplete(
              project._id
            )
          }
        >

          Mark Completed

        </button>

      )}

    </div>
  );
}