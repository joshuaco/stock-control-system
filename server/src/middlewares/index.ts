import { Request, Response, NextFunction } from 'express';
import { check, validationResult } from 'express-validator';

export const handleInputErrors = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() });
    return;
  }

  next();
};

export const handleBodyValidations = async (
  req: Request,
  _res: Response,
  next: NextFunction
) => {
  await check('name').notEmpty().withMessage('Name is required').run(req);
  await check('price')
    .notEmpty()
    .isNumeric()
    .custom((value) => value > 0)
    .withMessage('Price must be greater than 0')
    .run(req);

  next();
};
