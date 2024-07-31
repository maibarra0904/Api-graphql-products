import { Sequelize } from "sequelize-typescript"
import dotenv from 'dotenv'

dotenv.config({path: '.env'})

const db = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD ?? '', {
    host: process.env.DB_HOST,
    port: +process.env.DB_PORT,
    dialect: 'mysql',
});



export default db;