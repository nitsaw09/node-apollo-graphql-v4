import { PrismaClient } from "@prisma/client";

export default class PostService {
    prisma;
    constructor() {
        this.prisma = new PrismaClient();
    }

    // fetch all posts
    async getPosts() {
        return await this.prisma.post.findMany()
    }

    // get post by id
    async getPost(id: number) {
        return await this.prisma.post.findUnique({ where: { id }, include: { author: true } })
    }

    // create new post
    async createPost(data: { title: string, content: string, authorId: number }) {
        return await this.prisma.post.create({ data })
    }

    // update post by id
    async updatePost(param: { id: number, title: string, content: string }) {
        const { id, title, content } = param;
        return await this.prisma.post.update({ where: { id }, data: { title, content } })
    }

    // delete post by id
    async deletePost(id: number) {
        return await this.prisma.post.delete({ where: { id } })
    }
}