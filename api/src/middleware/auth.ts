import { Request, Response } from 'express'
import admin from 'firebase-admin'

const firebaseConfig = require('../../config/env/staging.json')

admin.initializeApp(firebaseConfig)

export const authMiddleware = async (req: Request, res: Response, next: () => any) => {
  const authHeader = req.headers?.authorization
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).send('Unauthorized')
  }
  const idToken = authHeader.split('Bearer ')[1]
  const token = await admin.auth().verifyIdToken(idToken)
  req.user = token
  next()
}
