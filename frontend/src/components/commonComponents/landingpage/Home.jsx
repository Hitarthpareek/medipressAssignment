import { assignments } from "../../../data/landingpageData";
import {Link } from "react-router-dom";

function Home() {
  return (
    <div className="container" style={{boxSizing:"border-box"}}>
      <h1 className="title">Assignment Dashboard</h1>

      <div className="card-grid">
        {assignments.map((item) => (
          <Link to={item.route} key={item.id} className="card-link">
            <div className="card">
            
              <h2>{item.id}. {item.title}</h2>

              <p>{item.description}</p>

              <span className="tech">{item.tech}</span>

              <button>View Assignment</button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;