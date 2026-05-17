export default function StatsCards({
  projects,
}) {

  const ongoing =
    projects.filter(
      (p) => p.isOngoing
    ).length;

  const completed =
    projects.filter(
      (p) => !p.isOngoing
    ).length;

  return (
    <div className="stats-grid">

      <div className="stats-card">

        <h2>
          {projects.length}
        </h2>

        <p>Total Projects</p>

      </div>

      <div className="stats-card">

        <h2>
          {ongoing}
        </h2>

        <p>Ongoing</p>

      </div>

      <div className="stats-card">

        <h2>
          {completed}
        </h2>

        <p>Completed</p>

      </div>

    </div>
  );
}