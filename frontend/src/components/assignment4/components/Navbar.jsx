export default function Navbar({ user }) {
  return (
    <div className="navbar">
      <div>
        <h2>PMIS Dashboard</h2>
      </div>

      <div className="user-box">
        {user?.name}
      </div>
    </div>
  );
}