import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const userAdminIsTrue = this.usersRepository.findById(user_id);
    if (userAdminIsTrue.admin === true) {
      const users = this.usersRepository.list();

      return users;
    }
    throw new Error(`User ${user_id} not found`);
  }
}

export { ListAllUsersUseCase };
