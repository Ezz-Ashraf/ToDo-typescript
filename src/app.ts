import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'

import ToDoRoutes from './routes/ToDo'

const app = express()

app.use(cors())

app.use(bodyParser.json())

app.use(ToDoRoutes);

app.listen(3000)