import React from 'react';
import { jwtDecode } from 'jwt-decode'; // ✅ Correct import
import './Dashboard.css';

const Dashboard = () => {
  const token = localStorage.getItem('token');

  let user = null;
  if (token) {
    try {
      user = jwtDecode(token); // ✅ Decode token to get user info
    } catch (error) {
      console.error('Invalid token:', error);
    }
  }

  return (
    <div>
      <h2>You're logged in!</h2>
      {user ? (
        <div>
          <p><strong>Email:</strong> {user.email}</p>
          {/* <p><strong>User ID:</strong> {user.id}</p> */}
        </div>
      ) : (
        <p>No user data found in token.</p>
      )}
    </div>
  );
};

export default Dashboard;
