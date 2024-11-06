import { Request, Response } from 'express'

export const creatTaskController = async (req: Request, res: Response) => {
    console.log("Creat Task Controller...");
    res.send("Creat Task Controller...");
}
