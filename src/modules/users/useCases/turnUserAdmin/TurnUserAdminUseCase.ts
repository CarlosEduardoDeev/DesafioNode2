import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const usuario = this.usersRepository.findById(user_id);
    if (!usuario) {
      throw new Error(`User not found`);
    }
    const receivedUser = this.usersRepository.turnAdmin(usuario);

    return receivedUser;
  }
}

export { TurnUserAdminUseCase };
