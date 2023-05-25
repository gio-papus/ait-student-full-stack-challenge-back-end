import express from "express"
import morgan from "morgan"
import cors from "cors"

import routes from "./routes/routes.js"
import imagesRoutes from "./routes/imgRoutes.js"


const app=express()

app.use(cors())
app.use(morgan("dev"))
app.use(express.json())

app.use(routes)
app.use(imagesRoutes)

export default app