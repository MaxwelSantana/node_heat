import { Request, response, Response } from 'express';
import { AuthenticateUserService } from '../services/AuthenticateUserService';

class CreateMessageController {
  async handle(req: Request, res: Response) {
    const {message} = req.body;

    

  }
}

export { CreateMessageController };
