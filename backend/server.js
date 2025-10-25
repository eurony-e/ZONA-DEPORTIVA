const express = require("express");
const cors = require("cors");


const app = express();
const PORT = 4000; // puerto del backend

// Middleware
app.use(cors());
app.use(express.json());


// Ruta de prueba
app.get("/", (req, res) => {
  res.send("Servidor backend de Zona Deportiva funcionando correctamente 🚀");
});


// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
