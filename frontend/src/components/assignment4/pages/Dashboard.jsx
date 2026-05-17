import {
  useMemo,
  useState,
} from "react";

import SearchBar from "../components/SearchBar";

import { useNavigate } from "react-router-dom";

export default function Dashboard({
  projects,
}) {

  const navigate =
    useNavigate();

  const [search, setSearch] =
    useState("");

  const usersMap = {};

  projects.forEach((project) => {

    if (
      !usersMap[
        project.username
      ]
    ) {

      usersMap[
        project.username
      ] = {
        userId:
          project.userId,

        username:
          project.username,

        total: 0,

        ongoing: 0,

        completed: 0,
      };
    }

    usersMap[
      project.username
    ].total++;

    if (project.isOngoing) {

      usersMap[
        project.username
      ].ongoing++;

    } else {

      usersMap[
        project.username
      ].completed++;
    }
  });

  const users =
    Object.values(usersMap);

  const filteredUsers =
    useMemo(() => {

      return users.filter(
        (user) =>
          user.username
            ?.toLowerCase()
            .includes(
              search.toLowerCase()
            )
      );

    }, [users, search]);

  return (
    <div className="dashboard-page">

      <div className="dashboard-top">

        <div style={{paddingBottom:15}}>

          <h1>
            PMIS Dashboard
          </h1>

          <p>
            Monitor employee
            project progress
          </p>

        </div>

      </div>

      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      <div className="table-wrapper">

        <table className="dashboard-table">

          <thead>

            <tr>

              <th>
                Employee
              </th>

              <th>
                Total
              </th>

              <th>
                Ongoing
              </th>

              <th>
                Completed
              </th>

            </tr>

          </thead>

          <tbody>

            {filteredUsers.map(
              (user) => (

                <tr
                  key={
                    user.userId
                  }

                  onClick={() =>
                    navigate(
                      `/assignment4/profile/${user.userId}`
                    )
                  }
                >

                  <td>
                    {
                      user.username
                    }
                  </td>

                  <td>
                    {user.total}
                  </td>

                  <td>
                    {user.ongoing}
                  </td>

                  <td>
                    {
                      user.completed
                    }
                  </td>

                </tr>

              )
            )}

          </tbody>

        </table>

      </div>

    </div>
  );
}