import React from "react";
import Navbar from "../components/Navbar";

function Admin() {
  return (
    <div>
      <div className="student-info">
        <h3>Name: Shibaji Biswas</h3>
        <h3>UID: 24BAI71018</h3>
      </div>

      <Navbar />

      <h1>Admin Dashboard</h1>

      <h3>User Management</h3>
      <h3>Reports</h3>
      <h3>Settings</h3>
    </div>
  );
}

export default Admin;
