import express from "express";
import cors from 'cors'
import db from "./database/db.js";
import autoRoutes from "./routes/routes.js"

const app = express()

app.use(cors())
app.use(express.json())
app.use('/autos', autoRoutes)
try {
    await db.authenticate()
    console.log('Conexion exitosa a BD')
} catch (error) {
    console.log(`Error de coenxion: ${error}`)
 
}

/**app.get('/', (req, res) => {
    res.send('Hello world')
})**/

app.listen(8000, () => {
    console.log('Server UP runnig in http://localhost:8000/')


})