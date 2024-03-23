import {Pool, QueryResult} from "pg";
import { Query } from "./SQL/query";
import { Database } from "./DatabaseService";

export class DatabaseManagerService {
    private static instance: DatabaseManagerService;

    private constructor() { }

    // Get the singleton instance
    static getInstance(): DatabaseManagerService {
        if (!DatabaseManagerService.instance) {
            DatabaseManagerService.instance = new DatabaseManagerService();
        }
        return DatabaseManagerService.instance;
    }

    /**
     * Function for putting the item into the database table.
     * @param tableName 
     * @param values 
     * @returns the rows of the table.
     */
    async putItem(tableName: string, values: any[]): Promise<any[]> {
        try {
            const query: string = Query.Instance().insertIntoTable(tableName, values);
            const result: any = await Database.getInstance().queryDatabase(query);
            return result.rows;
        } catch (err) {
            console.log("Some error encountered. Error details: " +JSON.stringify(err));
            throw err;
        }
    }
}