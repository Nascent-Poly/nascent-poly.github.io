export class Config {
    readonly port: number;
    readonly host: string;
    readonly dbUrl: string;
    readonly logLevel: "debug" | "info" | "warn" | "error";

    constructor() {
        this.port = Number(process.env.PORT) || 3000;
        this.host = process.env.HOST || "localhost";
        this.dbUrl = process.env.DATABASE_URL || "sqlite://dev.db";
        this.logLevel = (process.env.LOG_LEVEL as Config["logLevel"]) || "info";
    }
}
