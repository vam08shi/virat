
import express from "express"
import dotenv from "dotenv"
import { conn } from "./db/conn.js"
import route from "./routes/routes.js"

const app = express()

dotenv.config()
app.use(express.json())
app.use(route)

conn()

app.listen(5000, ()=>{
    console.log("listeniung to PORT 5000")
})