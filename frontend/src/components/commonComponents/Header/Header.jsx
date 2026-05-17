// Header.jsx

import { useNavigate } from "react-router-dom";
import "./Header.css";

export default function Header({ title }) {
  const navigate = useNavigate();

  return (
    <header className="header">
      <button className="back-button" onClick={() => navigate(-1)}>
        ← Back
      </button>

      
    </header>
  );
}