import { Request, Response } from "express"

const TIMEOUT_MS = 20000

const timeout = () =>
  new Promise((_resolve, reject) => {
    setTimeout(() => reject(new Error(`Timeout after ${TIMEOUT_MS}ms`)), TIMEOUT_MS)
  })

export default (fn: (req: Request, res: Response, next: () => any) => any) =>
  (req: Request, res: Response, next: () => any) => {
    Promise.race([
      fn(req, res, next),
      timeout(),
    ]).catch((err) => {
      console.error(err)
      res.status(500).send('Internal Server Error (<traceId>)')
      next()
    })
  }
