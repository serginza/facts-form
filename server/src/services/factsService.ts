import { PrismaClient } from '@prisma/client';

interface FactsType {
  id: string;
  name: string;
  email: string;
  message: string;
  createDate: string;
}

const prisma = new PrismaClient();

export class FactsService {
  static async sendUserInfo({
    name,
    email,
    message,
  }: Omit<FactsType, 'id'>): Promise<string> {
    const userInfo = await prisma.factsData.create({
      data: {
        name,
        email,
        message,
        createDate: new Date(),
      },
    });

    return `Thank you for your interest, ${userInfo.name}`;
  }
}
