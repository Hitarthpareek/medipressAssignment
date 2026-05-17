export default function UserCard({
  user,
  onClick,
}) {

  return (
    <div
      className="user-card"
      onClick={onClick}
    >

      <h3>{user.username}</h3>

      <p>
        {user.projectName}
      </p>

    </div>
  );
}