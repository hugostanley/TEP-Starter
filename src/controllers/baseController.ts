import { Request, Response } from "express";

interface BaseControllerInterface {
  res: Response;
  req: Request;
  body: any;
  handleSuccess: ({ status, message, data }: ResponseHandler) => void;
  handleError: ({ status, message, data }: ResponseHandler) => void;
}

interface ResponseHandler {
  status?: number;
  message?: string;
  data?: any;
}

export default class BaseController implements BaseControllerInterface {
  res: Response;
  req: Request;
  body: any;

  constructor(req: Request, res: Response) {
    this.req = req;
    this.res = res
    this.body = req.body
  }

  handleSuccess({ status = 200, message = 'Success', data }: ResponseHandler) {
    this.res.status(status).json({ message, data })
  };


  handleError({ status = 500, message = 'Error' }: Pick<ResponseHandler, "status" | "message">) {
    this.res.status(status).json({ message })
  };
}

