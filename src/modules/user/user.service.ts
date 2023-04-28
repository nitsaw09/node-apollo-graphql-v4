import { PrismaClient } from "@prisma/client";

export default class UserService {
    prisma;
    constructor() {
        this.prisma = new PrismaClient();
    }

    // fetch all users
    async getUsers() {
        return await this.prisma.user.findMany();        
    }

    // fetch user by id
    async getUser(id: number) {
        return await this.prisma.user.findUnique({ where: { id }, include: { posts: true } });
    }

    // create new user
    async createUser(data: { name: string, email: string }) {
        return await this.prisma.user.create({ data });
    }

    // update user data by id
    async updateUser(id: number, data: { name?: string, email?: string }) {
        return await this.prisma.user.update({ where: { id }, data });
    }

    // delete user by id
    async deleteUser(id: number) {
        await this.prisma.user.delete({ where: { id } })
        return true;
    }
}