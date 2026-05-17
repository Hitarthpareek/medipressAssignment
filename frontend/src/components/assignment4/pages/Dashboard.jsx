import { useMemo, useState } from "react";

import SearchBar from "../components/SearchBar";

import UserCard from "../components/UserCard";

import StatsCards from "../components/StatsCards";

import { useNavigate } from "react-router-dom";

export default function Dashboard({
  projects,
}) {

  const navigate =
    useNavigate();

  const [search, setSearch] =
    useState("");

  const filteredProjects =
    useMemo(() => {

      return projects.filter(
        (project) =>
          project.username
            ?.toLowerCase()
            .includes(
              search.toLowerCase()
            )
      );

    }, [projects, search]);

  return (
    <div>

      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      <StatsCards
        projects={projects}
      />

      <div className="users-grid">

        {filteredProjects.map(
          (project) => (

            <UserCard
              key={project._id}
              user={project}
              onClick={() =>
                navigate(
                  `/assignment4/profile/${project.userId}`
                )
              }
            />

          )
        )}

      </div>

    </div>
  );
}