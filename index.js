const express = require('express')
const bodyParser = require('body-parser')
const ToDoApp = require('./src/app.js')

const app = express()
const port = 3000

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const toDoApp = new ToDoApp(['Piotr', 'Blazej']);

app.get('/all', (req, res) => {
    const allNames = toDoApp.getNames();
    res.json({ data: allNames }).status(200);
})

app.get('/check/:name', (req, res) => {
    const name = req.params.name;
    const hasName = toDoApp.hasName(name);
    res.json({ data: { hasName } });
})

app.post('/name', (req, res) => {
    const data = req.body;
    toDoApp.setName(data.name);

    res.json({ success: true }).status(201);
});

app.delete('/name',(req, res) => {
    const name = req.body.name;
    toDoApp.deleteName(name);
    res.json({succes : true}).status(200);
})
app.patch('/name', (req, res) => {
    const oldName = req.body.oldName
    const newName = req.body.newName;
    toDoApp.modifyName(oldName, newName);
    res.json({succes: true}).status(200)
})

app.get('*', (req, res) => {
    res.send({ error: "Nie ma takiej metody!", data: {} });
})

app.post('*', (req, res) => {
    res.json({ error: "Nie ma takiej metody!", data: {} });
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})