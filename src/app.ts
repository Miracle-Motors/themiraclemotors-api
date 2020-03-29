import { userRouter } from "./api";
import { profileRouter } from "./api";
import { authorize } from "./middleware/authorization";
import { vehicleRouter } from "./api";
import { vehicleTypesRouter } from "./api";
import { terminalsRouter } from "./api";
import "reflect-metadata";
import express from "express";
import { BASE_PATH, DB_HOST, DB_USER, DB_PASSWORD, DB_NAME } from "./config";
import { errorHandler, global } from "./middleware";
import { logger } from "./utils/logger";
import { createConnection } from "typeorm-plus";
import { authRouter } from "./api";
import { roleRouter } from "./api";
import { vehiclesFeaturesRouter } from "./api";
import { tripsRouter } from "./api";
import { bookingsRouter } from "./api";
class App {
    public express = express();
    public basePath = BASE_PATH || "";
    constructor() {
        this.boot();
    }

    private boot() {
        this.initializeDb();
        this.registerMiddlewares();
        this.mountRoutes();
        this.handleUncaughtErrorEvents();

    }

    private mountRoutes() {
        this.express.use(`${this.basePath}/auth`, authRouter);
        this.express.use(`${this.basePath}/roles`, roleRouter);
        this.express.use(`${this.basePath}/terminals`, terminalsRouter);

        this.express.use(authorize);
        this.express.use(`${this.basePath}/users`, userRouter);
        this.express.use(`${this.basePath}/profiles`, profileRouter);
        this.express.use(`${this.basePath}/vehicles/features`, vehiclesFeaturesRouter);
        this.express.use(`${this.basePath}/vehicles/types`, vehicleTypesRouter);
        this.express.use(`${this.basePath}/vehicles`, vehicleRouter);
        this.express.use(`${this.basePath}/trips`, tripsRouter);
        this.express.use(`${this.basePath}/bookings`, bookingsRouter);

    }

    private registerMiddlewares() {
        global(this.express);
    }

    private async initializeDb() {
        try {
            await createConnection({
                type: "mysql",
                host: DB_HOST,
                port: 3306,
                username: DB_USER,
                password: DB_PASSWORD,
                database: DB_NAME,
                synchronize: false,
                migrations: ["/src/db/migrations/*.ts"],
                entities: ["**/api/**/*Model.js"],
            });
            logger.info("Database connection has been established successfully.");
        } catch (err) {
            throw new Error(("Unable to connect to the database:" + err));
        }

    }

    // Error handlers
    private handleUncaughtErrorEvents() {
        process.on("unhandledRejection", (reason, promise) => {
            throw reason;
        });

        process.on("uncaughtException", (error) => {
            logger.error(`Uncaught Exception: ${500} - ${error.message}, Stack: ${error.stack}`);
            process.exit(1);
        });

        process.on("SIGINT", () => {
            logger.info(" Alright! Bye bye!");
            process.exit();
        });

        this.express.use(errorHandler);

    }
}

const app = new App().express;
export default app;
