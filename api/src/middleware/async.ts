import { Request, Response } from "express";

export default (fn: (req: Request, res: Response, next: () => any) => any) =>
    (req: Request, res: Response, next: () => any) => {
      Promise.resolve(fn(req, res, next))
        .catch(next);
    }
