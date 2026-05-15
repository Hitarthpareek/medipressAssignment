import { Link } from "react-router-dom";

export default function HomePage4() {
  return (
    <div className="assignment-page">
      <Link to="/">
        <button className="back-btn">Back to Home</button>
      </Link>
    </div>
  );
}