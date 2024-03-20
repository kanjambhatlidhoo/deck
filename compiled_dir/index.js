"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const App_1 = require("./App");
const app = new App_1.App();
const server = app.app;
server.listen(3000, () => {
    console.log("The application has been started and is listening on port 3000.");
});
