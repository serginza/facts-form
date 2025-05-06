import { Router } from 'express';
import { ROOT } from 'constants/routes';
import { sendUserInfo } from 'controllers/controller';

export const factsRoutes = Router();

factsRoutes.post(ROOT, sendUserInfo);
