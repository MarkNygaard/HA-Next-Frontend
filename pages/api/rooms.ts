import { Prisma, PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    try {
      const roomData: Prisma.RoomCreateInput = JSON.parse(req.body);
      const savedRoom = await prisma.room.create({ data: roomData });
      res.status(200).json(savedRoom);
    } catch (err) {
      res.status(400).json({ message: 'Something went wrong' });
    }
  }

  if (req.method === 'DELETE') {
    try {
      const id = JSON.parse(req.body);
      const deleteRoom = await prisma.room.delete({
        where: {
          id: id,
        },
      });
      res.status(200).json(deleteRoom);
    } catch (err) {
      res.status(400).json({ message: 'Something went wrong' });
    }
  }
}
