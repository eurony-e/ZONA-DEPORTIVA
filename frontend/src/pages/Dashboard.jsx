import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!localStorage.getItem("isLoggedIn")) {
      navigate("/login");
    } else if (user) {
      setUserEmail(user.email);
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Zona Deportiva </h1>
        <button className="logout-btn" onClick={handleLogout}>
          Cerrar sesión
        </button>
      </header>

      <main className="dashboard-main">
        <section className="welcome-card">
          <h2>Bienvenido, {userEmail.split("@")[0]} </h2>
        </section>

        <section className="cards-container">
          <div className="card">
            <h3>Productos</h3>
            <button>Ver productos</button>
          </div>

          <div className="card">
            <h3>Perfil</h3>
            <button>Editar perfil</button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;
