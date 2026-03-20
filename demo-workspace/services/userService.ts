import { Config } from "../config";

export interface User {
    id: string;
    name: string;
    email: string;
    role: "admin" | "user" | "viewer";
    createdAt: Date;
}

export class UserService {
    private users: Map<string, User> = new Map();
    private config: Config;

    constructor(config: Config) {
        this.config = config;
    }

    async initialize(): Promise<void> {
        // Load users from database
        console.log("UserService initialized");
    }

    async getUser(id: string): Promise<User | undefined> {
        return this.users.get(id);
    }

    async createUser(name: string, email: string): Promise<User> {
        const user: User = {
            id: crypto.randomUUID(),
            name,
            email,
            role: "user",
            createdAt: new Date(),
        };
        this.users.set(user.id, user);
        return user;
    }

    async deleteUser(id: string): Promise<boolean> {
        return this.users.delete(id);
    }

    async listUsers(): Promise<User[]> {
        return Array.from(this.users.values());
    }

    async cleanup(): Promise<void> {
        this.users.clear();
    }
}
