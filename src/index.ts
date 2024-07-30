import  server from './server';
import cors from "cors"
import dotenv from 'dotenv';
import { ProductRouter } from './routes/products.route';
import db from './config/database';


dotenv.config()

const port = +process.env.PORT || 4000;

server.use(cors());

//server.use(express.json());

server.use("/products", ProductRouter)


server.listen(port, async() => {
  console.log(`Servidor corriendo en http://localhost:${port}`);

  try {
    await db.authenticate()
  } catch (error) {
    console.log(error)
  }
});