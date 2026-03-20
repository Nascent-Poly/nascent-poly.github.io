export class Logger {
    private context: string;

    constructor(context: string) {
        this.context = context;
    }

    info(message: string, ...args: unknown[]): void {
        console.log(`[${this.timestamp()}] [INFO] [${this.context}] ${message}`, ...args);
    }

    warn(message: string, ...args: unknown[]): void {
        console.warn(`[${this.timestamp()}] [WARN] [${this.context}] ${message}`, ...args);
    }

    error(message: string, ...args: unknown[]): void {
        console.error(`[${this.timestamp()}] [ERROR] [${this.context}] ${message}`, ...args);
    }

    debug(message: string, ...args: unknown[]): void {
        console.debug(`[${this.timestamp()}] [DEBUG] [${this.context}] ${message}`, ...args);
    }

    private timestamp(): string {
        return new Date().toISOString();
    }
}
