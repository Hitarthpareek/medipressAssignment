const BASE_URL = "/api/tasks";

/* GET TASKS */

export const getTasks =
  async () => {

    const token =
      localStorage.getItem(
        "token"
      );

    const response =
      await fetch(
        BASE_URL,
        {
          headers: {
            Authorization:
              `Bearer ${token}`,
          },
        }
      );

    return response.json();
};

/* CREATE TASK */

export const createTask =
  async (taskData) => {

    const token =
      localStorage.getItem(
        "token"
      );

    const response =
      await fetch(
        BASE_URL,
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",

            Authorization:
              `Bearer ${token}`,
          },

          body: JSON.stringify(
            taskData
          ),
        }
      );

    return response.json();
};

/* COMPLETE TASK */

export const completeTask =
  async (id) => {

    const token =
      localStorage.getItem(
        "token"
      );

    const response =
      await fetch(
        `${BASE_URL}/${id}/complete`,
        {
          method: "PUT",

          headers: {
            Authorization:
              `Bearer ${token}`,
          },
        }
      );

    return response.json();
};

/* DELETE TASK */

export const deleteTask =
  async (id) => {

    const token =
      localStorage.getItem(
        "token"
      );

    const response =
      await fetch(
        `${BASE_URL}/${id}`,
        {
          method: "DELETE",

          headers: {
            Authorization:
              `Bearer ${token}`,
          },
        }
      );

    return response.json();
};