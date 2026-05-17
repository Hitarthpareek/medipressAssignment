export const saveAuth = (
  token,
  user
) => {

  localStorage.setItem(
    "token",
    token
  );

  localStorage.setItem(
    "user",
    JSON.stringify(user)
  );
};

export const getUser = () => {

  return JSON.parse(
    localStorage.getItem("user")
  );
};

export const logout = () => {

  localStorage.clear();
};