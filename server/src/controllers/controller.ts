import { Request, Response } from 'express';
import { FactsService } from 'services/factsService';

export const sendUserInfo = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const newUserInfo = await FactsService.sendUserInfo(req.body);

    res.status(201).json(newUserInfo);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching user info' });
  }
};
