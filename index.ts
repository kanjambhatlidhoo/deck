import { App } from "./App";

const app = new App();

const server = app.app;

server.listen(3000, () => {
    console.log("The application has been started and is listening on port 3000.");
});