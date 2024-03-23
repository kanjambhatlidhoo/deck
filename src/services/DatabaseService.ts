import { Pool, QueryResult } from "pg";
import { DATABASE_CONSTANTS } from "../utils/Constants.js";
export class Database {
    private static instance: Database;
    private pool: Pool;

    private constructor() {
        // Initialize the connection pool
        this.pool = new Pool({
            user: DATABASE_CONSTANTS.USER,
            host: DATABASE_CONSTANTS.HOST,
            database: DATABASE_CONSTANTS.DATABASE_NAME,
            password: DATABASE_CONSTANTS.DATABASE_PASSWORD,
        });
    }

    // Get the singleton instance
    static getInstance(): Database {
        if (!Database.instance) {
            Database.instance = new Database();
        }
        return Database.instance;
    }

    /**
     * Query the database with whatsoever query it receives.
     * @param query : string. Contains the sql query.
     * @returns the rows of the database in return.
     */
    public async queryDatabase(query: string): Promise<any[]> {
        const client = await this.pool.connect();
        try {
            const result: QueryResult = await client.query(query);
            return result.rows;
        } finally {
            client.release();
        }
    }


    /**
     * Close the connection pool.
     * @returns void.
     */
    public async closePool(): Promise<void> {
        if (this.pool) {
            await this.pool.end();
        }
    }
}
