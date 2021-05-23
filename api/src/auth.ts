import { Request } from 'express'

// if we get undefined it gets false; if we get string of the object id it gets coverted to true
export const isLoggedIn = (req: Request) => !!req.session.userId  // not null assertion operator

export const logIn = (req: Request, userId: string) => {
    req.session!.userId = userId
}