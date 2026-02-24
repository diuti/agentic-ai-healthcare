import React from "react";

function Dashboard() {
  const name = localStorage.getItem("name");
  const role = localStorage.getItem("role");

  return (
    <div>
      <h1>Welcome {name}</h1>
      <h3>Role: {role}</h3>

      {role === "Patient" && <p>Access Symptom Submission</p>}
      {role === "Admin" && <p>Manage Users & Logs</p>}
      {role === "Specialist" && <p>View Appointments</p>}
    </div>
  );
}

export default Dashboard;