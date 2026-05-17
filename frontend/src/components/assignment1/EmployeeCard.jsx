export default function EmployeeCard({ employee }) {
  return (
    <div className="employee-card">
      <div className="employee-top">
        <img
          src={employee.image}
          alt={employee.name}
          className="employee-image"
        />

        <span
          className={`status-badge ${
            employee.status === "Active"
              ? "active"
              : employee.status === "On Leave"
              ? "leave"
              : "inactive"
          }`}
        >
          {employee.status}
        </span>
      </div>

      <div className="employee-content">
        <h2>{employee.name}</h2>

        <p>{employee.department}</p>
      </div>
    </div>
  );
}