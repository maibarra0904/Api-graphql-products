import  server from './server';
import cors from "cors"
import dotenv from 'dotenv';
import { ProductRouter } from './routes/products.route';


dotenv.config()

const port = +process.env.PORT || 4000;

server.use(cors());

//server.use(express.json());

server.use("/products", ProductRouter)


server.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});