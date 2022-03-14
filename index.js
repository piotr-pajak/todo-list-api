const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const cors = require('cors')
const { dbConfig } = require("./config");
const ToDoApp = require("./src/app");
const ToDoData = require("./src/data/ToDoData");

const app = express();
const port = 3000;

app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const dbConn = mysql.createConnection(dbConfig);
dbConn.connect(function (err) {
  if (err) throw err;
  console.log("Connected to database!");
});

const toDoData = new ToDoData(dbConn);
const toDoApp = new ToDoApp([], toDoData);

app.get("/all", async (req, res) => {
  try {
    const allNames = await toDoApp.getAllTasks();
    res.json({ data: allNames }).status(200);
  } catch (err) {
    res.json({ data: [], error: "Something went wrong..." }).status(500);
  }
});

app.get("/check/:name", (req, res) => {
  const name = req.params.name;
  const hasName = toDoApp.hasName(name);
  res.json({ data: { hasName } });
});

app.post("/task", async (req, res) => {
  const { task } = req.body;
  try {
    const addTask = await toDoApp.addTask(task);
    res.json({ success: true, info: addTask }).status(201);
  } catch (err) {
    res.json({ data: [], error: "Something went wrong..." }).status(500);
  }
});

app.delete("/name", (req, res) => {
  const name = req.body.name;
  toDoApp.deleteName(name);
  res.json({ succes: true }).status(200);
});
app.patch("/name", (req, res) => {
  const oldName = req.body.oldName;
  const newName = req.body.newName;
  toDoApp.modifyName(oldName, newName);
  res.json({ succes: true }).status(200);
});

app.get("*", (req, res) => {
  res.send({ error: "Nie ma takiej metody!", data: {} });
});

app.post("*", (req, res) => {
  res.json({ error: "Nie ma takiej metody!", data: {} });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
