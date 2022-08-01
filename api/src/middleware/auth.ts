import { Request, Response } from 'express'
import admin from 'firebase-admin'

import firebaseConfig from '../../config/env/staging.json'

admin.initializeApp(firebaseConfig)

export default async (req: Request, res: Response, next: () => any) => {
  try {
    const authHeader = req.headers?.authorization
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).send('Unauthorized')
    }
    const idToken = authHeader.split('Bearer ')[1]
    const token = await admin.auth().verifyIdToken(idToken)
    req.user = token
  } catch (err) {
    console.error(err)
    return res.status(401).send('Unauthorized')
  }
  next()
}
