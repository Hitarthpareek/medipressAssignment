export default function WorkLogTable() {
  return (
    <div className="table-container">
      <h2>Work Logs</h2>

      <table>
        <thead>
          <tr>
            <th>Employee</th>
            <th>Project</th>
            <th>Hours</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Rahul</td>
            <td>PMIS Tool</td>
            <td>8h</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}