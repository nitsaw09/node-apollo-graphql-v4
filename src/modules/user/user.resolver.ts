import { Resolver, Query, Arg, Mutation } from "type-graphql";
import User from "./user.schema";
import UserService from "./user.service";

const userService = new UserService();

@Resolver()
export default class UserResolver {
  // Query to fetch all users
  @Query(() => [User])
  async users() {
    return await userService.getUsers();
  }

  // Query to fetch user by ID
  @Query(() => User, { nullable: true })
  async user(@Arg("id", () => Number) id: number): Promise<User> {
    return await userService.getUser(id);
  }

  // Mutation to create a new user
  @Mutation(() => User)
  async createUser(
    @Arg("name", () => String) name: string, 
    @Arg("email", () => String) email: string
  ) {
    return await userService.createUser({ name: name, email: email });
  }

  // Mutation to update a user
  @Mutation(() => User)
  async updateUser(
    @Arg("id", () => Number) id: number, 
    @Arg("name", () => String) name: string, 
    @Arg("email", () => String) email: string
  ) {
    return await userService.updateUser(id, { name: name, email: email });
  }

  // Mutation to delete a user
  @Mutation(() => Boolean)
  async deleteUser(@Arg("id", () => Number) id: number) {
    return await userService.deleteUser(id);
  }
}
