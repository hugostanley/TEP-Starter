import dotenv from 'dotenv'
dotenv.config()
import { App } from './app'
import * as routes from './routes'
import './db'


const app = new App(Object.values(routes), 8080)
app.listen()

