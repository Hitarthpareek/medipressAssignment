const BASE_URL = "/api";

export const registerUser = async (userData) => {
  const response = await fetch(`${BASE_URL}/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });

  return response.json();
};

export const loginUser = async (userData) => {
  const response = await fetch(`${BASE_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });

  return response.json();
};

export const getEmployees = async () => {
  const token = localStorage.getItem("token");

  const response = await fetch(`${BASE_URL}/employees`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    });

  return response.json();
};