import { Request, Response } from "express";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  handle(request: Request, response: Response): Response {
    const { name, email } = request.body;
    try {
      const usuario = this.createUserUseCase.execute({ email, name });
      return response.status(201).json(usuario);
    } catch (Error) {
      return response.status(400).json({ error: "Email already exists!" });
    }
  }
}

export { CreateUserController };
