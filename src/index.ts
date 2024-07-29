import  server from './server';
import cors from "cors"
import dotenv from 'dotenv';
dotenv.config()

const port = +process.env.PORT || 4000;

server.use(cors());

//server.use(express.json());


server.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});