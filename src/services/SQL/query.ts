export class Query {
    private constructor() { };

    private static instance: Query;

    // again we do follow the singleton pattern here. Many queries can be created for many tables.
    public static Instance(): Query {
        if (!Query.instance) {
            Query.instance = new Query();
        }

        return Query.instance;
    }

    /**
     * Query for inserting values into the table.
     * @params tableName, values --> values pertaining to the table.
     * @returns just the query that the database manager executes.
     */
    public insertIntoTable (tableName: string, values: any): any {
        return `insert into ${tableName}
                values (${Object.values(values).map((_, index) => `$${index + 1}`).join(', ')}`;
    }
}