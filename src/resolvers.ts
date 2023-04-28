import PostResolver from "./modules/post/post.resolver";
import UserResolver from "./modules/user/user.resolver";

export const resolvers = [
    UserResolver, 
    PostResolver
] as const;
