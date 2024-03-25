"use strict";
var app = require("./App");
var port = 3100;
app.listen(port, function () {
    console.log("Server is running at http://localhost:".concat(port));
});
