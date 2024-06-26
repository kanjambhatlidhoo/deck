import { Pool, QueryResult } from "pg";
import { Query } from "./SQL/query.js";
import { Database } from "./DatabaseService.js";

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
    public async putItem(tableName: string, columnNames: any[], values: any[]): Promise<any[]> {
        try {
            const query: string = Query.Instance().insertIntoTable(tableName, columnNames, values);
            const result: any = await Database.getInstance().queryDatabase(query);
            return result.rows;
        } catch (err) {
            console.log("Some error encountered. Error details: " + JSON.stringify(err));
            throw err;
        }
    }

    public async getItemById(tableName: string, columnName: string, id: any): Promise<any> {
        try {
            const query: string = Query.Instance().getItemById(tableName, columnName, id);
            const result: any = await Database.getInstance().queryDatabase(query);

            if (result.length == 0) {
                throw new Error("No deck found for the deckId: " + id);
            }

            return result;
        } catch (err: any) {
            console.log("Some error encountered. Error details: " + JSON.stringify(err));
            throw err;
        }
    }
}