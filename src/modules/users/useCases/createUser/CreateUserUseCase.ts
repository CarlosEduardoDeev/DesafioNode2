import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): void {
    const emailAlreadyExists = this.usersRepository.findByEmail(email);

    if (emailAlreadyExists) {
      throw new Error("Email already exists!");
    }
    this.usersRepository.create({ email, name });
  }
}

export { CreateUserUseCase };
