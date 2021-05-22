import { SessionOptions, CookieOptions } from 'express-session'
import { IN_PROD } from './app'

const HALF_HOUR = 1000 * 60 * 30
const {
    SESSION_SECRET = 'Please keep this secret!',
    SESSION_NAME = 'sid',
    SESSION_IDLE_TIMEOUT = HALF_HOUR,
} = process.env

export const SESSION_OPTIONS: SessionOptions = {
    secret: SESSION_SECRET,
    name: SESSION_NAME,
    cookie: <CookieOptions>{
        maxAge: SESSION_IDLE_TIMEOUT,
        secured: IN_PROD,
        sameSite: true
    },
    rolling: true,   // update the cookie/req; extend timeout if active
    resave: false,
    saveUninitialized: false
}