export const getUser = () => {

  const token = localStorage.getItem("token");

  if (!token) return null;

  return JSON.parse(
    atob(token.split(".")[1])
  );

};

export const logout = () => {

  localStorage.removeItem("token");

};
