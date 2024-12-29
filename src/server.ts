//const express = require('express') //importa express - CJS Common JS
import express from 'express' //Ecma script
import 'dotenv/config'
import router from './router'
import { connectDB } from './config/db'

const app = express()

connectDB()

//Leer datos de formulario
app.use(express.json())

app.use('/', router)



export default app