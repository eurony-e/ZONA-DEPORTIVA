import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const [user, setUser] = useState({ email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(user));
    alert("Registro exitoso ✅");
    navigate("/login");
  };

  return (
    <div className="container">
      <h2>Registro de usuario</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Correo electrónico"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          required
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          required
        />
        <button type="submit">Registrar</button>
      </form>
      <p className="text-link" onClick={() => navigate("/login")}>
        ¿Ya tienes cuenta? Inicia sesión
      </p>
    </div>
  );
}

export default Register;
