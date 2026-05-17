export default function DashboardCards({
  employees,
  projects,
  worklogs,
  hours,
}) {
  return (
    <div className="cards-grid">
      <div className="dashboard-card">
        <h3>Employees</h3>
        <h1>{employees}</h1>
      </div>

      <div className="dashboard-card">
        <h3>Projects</h3>
        <h1>{projects}</h1>
      </div>

            <div className="dashboard-card">
        <h3>Work Logs</h3>
        <h1>{worklogs}</h1>
      </div>

      <div className="dashboard-card">
        <h3>Total Hours</h3>
        <h1>{hours}</h1>
      </div>
    </div>
  );
}