import { Request, Response } from "express";
import { PrismaClient } from '@prisma/client'
import redis from "../lib/cache";

const prisma = new PrismaClient();

class UserController {
  static async find(req: Request, res: Response) {
    try {
      const redisCacheKey = 'users:all';
      const redisCachedUsers = await redis.get(redisCacheKey);

      if (redisCachedUsers) {
        return res.json(JSON.parse(redisCachedUsers));
      }

      const users = await prisma.user.findMany();

      await redis.set(redisCacheKey, JSON.stringify(users));
      return res.json(users)

      // Sem Redis - 1.643s
      // Com Redis - 
    } catch (error) {
      return res.json({ error });
    }
  }
}

export default UserController;