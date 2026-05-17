import {
  useParams,
} from "react-router-dom";

import {
  useEffect,
  useState,
} from "react";

import ProjectCard from "../components/ProjectCard";

export default function UserProfile() {

  const { id } = useParams();

  const [projects, setProjects] =
    useState([]);

  useEffect(() => {

    fetchUserProjects();

  }, []);

  const fetchUserProjects =
    async () => {

      try {

        const response =
          await fetch(
            `/api/projects/user/${id}`
          );

        const data =
          await response.json();

        setProjects(data);

      } catch (error) {

        console.log(error);

      }
    };

  const ongoing =
    projects.filter(
      (p) => p.isOngoing
    ).length;

  const completed =
    projects.filter(
      (p) => !p.isOngoing
    ).length;

  return (
    <div className="profile-page">

      <div className="profile-top">

        <h1>
          {
            projects[0]
              ?.username
          }
        </h1>

        <div className="profile-stats">

          <div>
            <h2>
              {projects.length}
            </h2>

            <p>Total</p>
          </div>

          <div>
            <h2>
              {ongoing}
            </h2>

            <p>Ongoing</p>
          </div>

          <div>
            <h2>
              {completed}
            </h2>

            <p>Completed</p>
          </div>

        </div>

      </div>

      <div className="projects-grid">

        {projects.map(
          (project) => (

            <ProjectCard
              key={project._id}
              project={project}
            />

          )
        )}

      </div>

    </div>
  );
}