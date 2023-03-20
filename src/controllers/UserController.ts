import { Request, Response } from "express";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

class UserController {
  static async find(req: Request, res: Response) {
    try {
      console.time('Find Users')

      const users = await prisma.user.findMany();

      console.timeEnd('Find Users');
      // Sem Redis - 1.643s
      // Com Redis - 
      return res.json(users)
    } catch (error) {
      return res.json({ error });
    }
  }
}

export default UserController;