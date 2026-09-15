import { useNavigate } from "react-router-dom";

function Unauthorized() {

  const navigate = useNavigate();

 return (
  <div>

    <div className="student-info">
      <h3>Name: Shibaji Biswas</h3>
      <h3>UID: 24BAI71018</h3>
    </div>

    <h1>403</h1>

    <h2>Access Denied</h2>

    <button onClick={() => navigate("/")}>
      Back to Login
    </button>

  </div>
);
}
export default Unauthorized;
