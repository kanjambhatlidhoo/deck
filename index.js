const App = require("./compiled_dir/App.js");

const server = App.app;

server.listen(3000, () => {
    console.log("The application has been started and is listening on port 3000.");
});