export default function ProjectTable() {
  return (
    <div className="table-container">
      <h2>Projects</h2>

      <table>
        <thead>
          <tr>
            <th>Project</th>
            <th>Manager</th>
            <th>Status</th>
          </tr>
        </thead>

                <tbody>
          <tr>
            <td>PMIS Tool</td>
            <td>Rahul</td>
            <td>Active</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}