import { UserService } from "./userService";
import { Config } from "../config";

describe("UserService", () => {
    let service: UserService;

    beforeEach(() => {
        service = new UserService(new Config());
    });

    test("creates a user with correct fields", async () => {
        const user = await service.createUser("Alice", "alice@example.com");
        expect(user.name).toBe("Alice");
        expect(user.email).toBe("alice@example.com");
        expect(user.role).toBe("user");
        expect(user.id).toBeDefined();
    });

    test("retrieves a created user by ID", async () => {
        const created = await service.createUser("Bob", "bob@example.com");
        const found = await service.getUser(created.id);
        expect(found).toEqual(created);
    });

    test("returns undefined for nonexistent user", async () => {
        const found = await service.getUser("nonexistent-id");
        expect(found).toBeUndefined();
    });

    test("deletes a user", async () => {
        const user = await service.createUser("Charlie", "charlie@example.com");
        const deleted = await service.deleteUser(user.id);
        expect(deleted).toBe(true);
        const found = await service.getUser(user.id);
        expect(found).toBeUndefined();
    });

    test("lists all users", async () => {
        await service.createUser("Alice", "alice@example.com");
        await service.createUser("Bob", "bob@example.com");
        const users = await service.listUsers();
        expect(users).toHaveLength(2);
    });
});
