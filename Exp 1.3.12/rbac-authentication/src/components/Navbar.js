import { logout, getUser } from "../utils/token";
import { useNavigate } from "react-router-dom";

function Navbar() {

  const navigate = useNavigate();

  const user = getUser();

  const handleLogout = () => {

    logout();

    navigate("/");

  };

  return (

    <nav>

      <h2>RBAC Authentication</h2>

      <div>

        {user?.username}

        {" | "}

        {user?.role}

        <button onClick={handleLogout}>
          Logout
        </button>

      </div>

    </nav>

  );

}

export default Navbar;
