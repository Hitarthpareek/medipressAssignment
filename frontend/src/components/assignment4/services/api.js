const BASE_URL = "/api";

/* AUTH */

export const registerUser = async (
  userData
) => {

  const response = await fetch(
    `${BASE_URL}/auth/register`,
    {
      method: "POST",

      headers: {
        "Content-Type":
          "application/json",
      },

      body: JSON.stringify(userData),
    }
  );

  return response.json();
};

export const loginUser = async (
  userData
) => {

  const response = await fetch(
    `${BASE_URL}/auth/login`,
    {
      method: "POST",

      headers: {
        "Content-Type":
          "application/json",
      },

      body: JSON.stringify(userData),
    }
  );

  return response.json();
};

/* PROJECTS */

export const getProjects =
  async () => {

    const response =
      await fetch(
        `${BASE_URL}/projects`
      );

    return response.json();
};

export const createProject =
  async (projectData) => {

    const token =
      localStorage.getItem("token");

    const response =
      await fetch(
        `${BASE_URL}/projects`,
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",

            Authorization:
              `Bearer ${token}`,
          },

          body: JSON.stringify(
            projectData
          ),
        }
      );

    return response.json();
};

export const completeProject =
  async (id) => {

    const response =
      await fetch(
        `/api/projects/${id}/complete`,
        {
          method: "PUT",
        }
      );

    return response.json();
};