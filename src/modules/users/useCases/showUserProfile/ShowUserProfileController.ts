import { Request, Response } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.params;

    const userID = this.showUserProfileUseCase.execute({ user_id });

    return response.json(userID);
  }
}

export { ShowUserProfileController };
