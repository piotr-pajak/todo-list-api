const addTaskQuery = (name) => `
INSERT INTO tasks
(task, isRealized)
VALUES('${name}', false)
`

module.exports = addTaskQuery;