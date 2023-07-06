import { Router, Request, Response } from "express";
import { pool } from "../db";
import { TestController } from '../controllers/'

export const userRouter: Router = Router()

userRouter.get('/', (req: Request, res: Response) => {
  new TestController(req, res).test()
})
