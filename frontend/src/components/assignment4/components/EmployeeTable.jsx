export default function EmployeeTable({ employees }) {
  return (
    <div className="table-container">
      <h2>Employees</h2>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Department</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {employees.map((employee) => (
            <tr key={employee._id}>
              <td>{employee.name}</td>
              <td>{employee.department}</td>
              <td>{employee.status}</td>
            </tr>
                  ))}
        </tbody>
      </table>
    </div>
  );
}