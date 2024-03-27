export class Query {
    private constructor() { }

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
    public insertIntoTable(tableName: string, columnNames: any[], values: any[]): any {
        return `insert into "${tableName}"` + this.makeInsertCase(columnNames, values);
    }

    public getItemById(tableName: string, columnName: string, id: string): any {
        return `select * from "${tableName}" where "${columnName}" = '${id}'`;
    }

    private makeInsertCase(columnNames: any[], values: any[]): string {

        let insertCase: string = "(";

        columnNames.forEach((columnName, idx) => {
            insertCase += `"${columnName}"`;

            if (idx !== columnNames.length - 1) {
                insertCase += ",";
            }
        });

        insertCase += ")" + "values" + "(";

        values.forEach((value, idx) => {
            insertCase += `'${value}'`;

            if (idx !== values.length - 1) {
                insertCase += ",";
            }
        });

        insertCase += ")";

        return insertCase;
    }
}