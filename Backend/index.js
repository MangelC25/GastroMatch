import express from "express";

const app = express();
const port = 3000;

// Definir una ruta
app.get('/', (req, res) => {
  res.send('¡Hola Mundo desde Express!');
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});