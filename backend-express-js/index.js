import express from "express";
import morgan from "morgan";
import cors from "cors";

const app = express();

// MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan("dev"));

//RUTAS
app.use("/", (req, res) => {
  res.send("hola");
});

// //MANEJAR RUTAS NO EXISTENTES
// app.use((req, res, next) => {
//   const error = new Error("Ruta no encontrada");
//   error.status = 400;
//   next(error);
// });

// app.use((req, res, error, next) => {
//   console.log("Error: ", error);s
//   res.status(500 || error.status).json({
//     messagE: "Error en el servidor" || error.message,
//   });
// });

//SERVIDOR
app.listen(3000, () => {
  console.log("encendido");
});
