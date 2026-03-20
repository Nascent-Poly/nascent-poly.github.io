import { UserService } from "./services/userService";
import { Logger } from "./utils/logger";
import { Config } from "./config";

const logger = new Logger("App");

export class App {
    private userService: UserService;
    private config: Config;

    constructor() {
        this.config = new Config();
        this.userService = new UserService(this.config);
    }

    async start(): Promise<void> {
        logger.info("Starting application...");
        await this.userService.initialize();
        logger.info(`Server running on port ${this.config.port}`);
    }

    async stop(): Promise<void> {
        logger.info("Shutting down...");
        await this.userService.cleanup();
    }
}

// Entry point
const app = new App();
app.start().catch((err) => {
    logger.error("Fatal error", err);
    process.exit(1);
});
