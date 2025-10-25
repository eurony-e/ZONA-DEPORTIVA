import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <div style={{ textAlign: "center", marginTop: "80px" }}>
      <h1>BIENVENIDO A ZONA DEPORTIVA</h1>
      <button onClick={() => navigate("/login")}>Login</button>
      <br /><br />
      <button onClick={() => navigate("/register")}>Registro</button>
    </div>
  );
}

export default Home;
