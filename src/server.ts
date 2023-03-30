import express from "express"
import { routes } from "./routes/routes"
const cors = require('cors')


const server = express()

// server.use(cors)
server.use(express.json())
server.use(routes)

server.listen(3333, ()=>{
    console.log("Server is running!");
    
})

