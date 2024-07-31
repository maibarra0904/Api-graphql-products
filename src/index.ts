import  server from './server';
import cors from "cors"
import dotenv from 'dotenv';
import { ProductRouter } from './routes/products.route';
import db from './config/database';
import express from 'express';


dotenv.config()

const port = +process.env.PORT || 3000;

server.use(cors());
server.use(express.json());


server.use("/products", ProductRouter)



db.sync({ force: false })
  .then(() => {
    console.log("Tablas sincronizadas con la base de datos.");

    // Iniciar el servidor
    server.listen(port, () => {
      console.log(`Servidor iniciado en el puerto ${port}`);
    });
  })
  .catch((error) => {
    console.error("Error al sincronizar las tablas:", error);
})