import { User } from "../../model/User";
import { ICreateUserDTO, IUsersRepository } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  private users: User[];

  private static INSTANCE: UsersRepository;

  private constructor() {
    this.users = [];
  }

  public static getInstance(): UsersRepository {
    if (!UsersRepository.INSTANCE) {
      UsersRepository.INSTANCE = new UsersRepository();
    }

    return UsersRepository.INSTANCE;
  }

  create({ name, email }: ICreateUserDTO): User {
    const user = new User();
    Object.assign(user, {
      name,
      email,
    });

    this.users.push(user);
    return user;
  }

  findById(id: string): User | undefined {
    const userID = this.users.find((user) => user.id === id);
    return userID;
  }

  findByEmail(email: string): User | undefined {
    const userEmail = this.users.find((user) => user.email === email);
    return userEmail;
  }

  turnAdmin(receivedUser: User): User {
    const userAdmin = this.users.find((user) => user === receivedUser);

    userAdmin.admin = true;
    return userAdmin;
  }

  list(): User[] {
    return this.users;
    // Complete aqui
  }
}

export { UsersRepository };
