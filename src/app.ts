import express, { Express, Router } from "express";
import cors from 'cors'
import morgan from "morgan"

export class App {
  port: number;
  app: Express;

  constructor(routers: Router[], port = 3000) {
    this.port = port;
    this.app = express()
    this.initializeMiddlewares()
    this.initializeRouters(routers)
  }

  private initializeMiddlewares() {
    this.app.use(cors())
    this.app.use(express.json())
    this.app.use(morgan('tiny'))
  }

  private initializeRouters(routers: Router[]) {
    routers.forEach(router => {
      this.app.use(router)
    })
  }


  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server is running at localhost:${this.port}`)
    })
  }
}

