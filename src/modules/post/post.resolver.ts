import { Resolver, Query, Arg, Mutation, Int } from "type-graphql";
import Post from "./post.schema";
import PostService from "./post.service";

const postService = new PostService()

@Resolver()
export default class PostResolver {
  // Query to fetch all posts
  @Query(() => [Post])
  async posts() {
    return await postService.getPosts();
  }

  // Query to fetch post by ID
  @Query(() => Post, { nullable: true })
  async post(@Arg("id", () => Int) id: number) {
    return await postService.getPost(id);
  }

  // Query to fetch post by ID
  @Mutation(() => Post)
  async createPost(
    @Arg("title", () => String) title: string,
    @Arg("content", () => String) content: string,
    @Arg("authorId", () => Int) authorId: number
  ) {
    return await postService.createPost({ title, content, authorId });
  }

  // Mutation update post by ID
  @Mutation(() => Post)
  async updatePost(
    @Arg("id", () => Int) id: number,
    @Arg("title", () => String) title: string,
    @Arg("content", () => String) content: string
  ) {
    return await postService.updatePost({ id, title, content });
  }

  // Mutation delete post by ID
  @Mutation(() => Boolean)
  async deletePost(
    @Arg("id", () => Int) id: number
  ) {
    await postService.deletePost(id);
    return true;
  }
}
