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

  <div className="nav-user">

    <span>
      Welcome,
    </span>

    <strong>
      {user?.name}
    </strong>

  </div>

  <button
    className="logout-btn"
    onClick={onLogout}
  >

    Logout

  </button>

</div>

    </div>
  );
}