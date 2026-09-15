import Navbar from "../components/Navbar";
import { getUser } from "../utils/token";

function Dashboard() {

  const user = getUser();

 return (
  <div>

    <div className="student-info">
      <h3>Name: Shibaji Biswas</h3>
      <h3>UID: 24BAI71018</h3>
    </div>

    <Navbar />

    <h1>Dashboard</h1>

    <h3>Welcome {user?.username}</h3>

    <p>Email : {user?.email}</p>

    <p>Role : {user?.role}</p>

  </div>
  );
}

export default Dashboard;