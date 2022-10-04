import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const userAdminIsTrue = this.usersRepository.findById(user_id);

    if (userAdminIsTrue.admin) {
      const users = this.usersRepository.list();

      return users;
    }
    if (!userAdminIsTrue) {
      throw new Error(`User not found `);
    }

    throw new Error(`User not admin`);
  }
}

export { ListAllUsersUseCase };
