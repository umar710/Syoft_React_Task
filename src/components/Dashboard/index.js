import React from "react";

const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user);

  // Assuming the structure is user.user_data.user_firstname
  return (
    <div>
      <h2>Dashboard</h2>
      {user && user.user_data ? (
        <div>
          <p>
            <strong>Name:</strong> {user.user_data.user_firstname}
          </p>
          <p>
            <strong>Email:</strong> {user.user_data.user_email}
          </p>
          <p>
            <strong>Phone:</strong> {user.user_data.user_phone}
          </p>
        </div>
      ) : (
        <p>No user data found.</p>
      )}
    </div>
  );
};

export default Dashboard;
