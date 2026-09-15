import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authenticateUser } from "../services/authService";

function Login() {

  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {

    const token = authenticateUser(
      username,
      password
    );

    if (!token) {

      alert("Invalid Credentials");

      return;

    }

    localStorage.setItem("token", token);

    const payload = JSON.parse(
      atob(token.split(".")[1])
    );

    if (payload.role === "Admin")
      navigate("/admin");

    else if (payload.role === "Editor")
      navigate("/editor");

    else
      navigate("/viewer");

  };

  return (
  <div>

    <div className="student-info">
      <h3>Name: Shibaji Biswas</h3>
      <h3>UID: 24BAI71018</h3>
    </div>

    <h1>RBAC Login</h1>

    <input
      placeholder="Username"
      value={username}
      onChange={(e) => setUsername(e.target.value)}
    />

    <input
      type="password"
      placeholder="Password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
    />

    <button onClick={handleLogin}>
      Login
    </button>

  </div>
  );
}
export default Login;