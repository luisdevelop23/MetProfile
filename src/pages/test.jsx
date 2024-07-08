import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import supabase from "./supabase"; // Asegúrate de ajustar la importación de supabase según tu configuración

const UserPage = () => {
  const { userId } = useParams();
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const { data, error } = await supabase
        .from("users") // Ajusta el nombre de tu tabla según tu esquema
        .select("*")
        .eq("id", userId)
        .single();

      if (error) {
        setError("User not found or an error occurred");
      } else {
        setUserData(data);
      }
    };

    fetchUserData();
  }, [userId]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>User Page</h1>
      <p>ID: {userData.id}</p>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
      {/* Render other user data as needed */}
    </div>
  );
};

export default UserPage;
