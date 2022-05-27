import { Prisma, PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    const roomData: Prisma.RoomCreateInput = JSON.parse(req.body);
    const savedRoom = await prisma.room.create({ data: roomData });
    res.status(200).json(savedRoom);
  } catch (err) {
    res.status(400).json({ message: 'Something went wrong' });
  }
};
