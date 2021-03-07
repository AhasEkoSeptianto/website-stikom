const express = require("express");
const port = process.env.PORT || 8000;
const cors = require("cors");
const app = express();

// Conteroller
const controller = require("./server/Controller/about");

app.use(cors());

app.route("/api").get(controller.index).post();
app.route("/api/update").get(controller.update).post();

app.listen(port, () => console.log("run"));
