import { logout } from "../utils/token";

function Navbar() {

  return (

    <nav>

      <h2>JWT Authentication</h2>

      <button onClick={logout}>
        Logout
      </button>

    </nav>

  );

}

export default Navbar;
