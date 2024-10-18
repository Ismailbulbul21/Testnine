// src/Dashboard.js
import React, { useEffect, useState } from "react";
import { auth } from "./firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [userEmail, setUserEmail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserEmail(user.email);
      } else {
        navigate("/"); // Redirect to login if not authenticated
      }
    });

    return () => unsubscribe(); // Cleanup subscription
  }, [navigate]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/"); // Redirect to login after logout
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-yellow-200">
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome!</h1>
        {userEmail && <p className="text-lg mb-4">Your email: {userEmail}</p>}
        <button
          onClick={handleLogout}
          className="p-2 bg-red-500 text-white rounded"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
