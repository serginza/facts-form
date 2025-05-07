import { z } from 'zod';

export const userInfoSchema = z.object({
  name: z
    .string()
    .nonempty('required field')
    .refine((val) => !/^\d+$/.test(val), {
      message: 'are you Hitman? If so, add "#" at the beginning',
    }),
  email: z
    .string()
    .trim()
    .min(3, '3 symbols minimum')
    .max(25, '40 symbols maximum')
    .nonempty('required field')
    .email('invalid email'),
  message: z
    .string()
    .trim()
    .min(7, '7 symbols minimum')
    .max(250, '250 symbols maximum')
    .nonempty('required field'),
});
