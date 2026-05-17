export default function Navbar({
  user,
  onLogout,
}) {

  return (
    <div className="navbar">

      <h2>
        PMIS Dashboard
      </h2>

      <div className="nav-right">

        <span>
          {user?.name}
        </span>

        <button
          onClick={onLogout}
        >
          Logout
        </button>

      </div>

    </div>
  );
}