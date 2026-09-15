const user = {
  username: "admin",
  password: "admin123",
  email: "admin@gmail.com",
  role: "Administrator",
};

export const authenticateUser = (username, password) => {

  if (
    username === user.username &&
    password === user.password
  ) {

    const header = btoa(
      JSON.stringify({
        alg: "HS256",
        typ: "JWT",
      })
    );

    const payload = btoa(
      JSON.stringify({
        username: user.username,
        email: user.email,
        role: user.role,
      })
    );

    const signature = btoa("jwt-secret");

    return `${header}.${payload}.${signature}`;
  }

  return null;
};
