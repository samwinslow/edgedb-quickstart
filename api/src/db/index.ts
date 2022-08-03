import { Client, createClient as edgeDBClient } from 'edgedb'
import config from '../../config/env/staging.json'

export const createClient = (globals?: { current_uid?: string } & Record<string, any>): Client =>
  edgeDBClient({
    dsn: config.edgedbDSN,
  }).withGlobals(globals || {})
