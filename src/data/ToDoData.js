const getNamesQuery = require("./get-names");
const addTaskQuery = require("./add-task");

class ToDoData {
  constructor(dbConn) {
    this.dbConn = dbConn;
  }

  getAllTasks() {
    return new Promise((resolve, reject) => {
      this.dbConn.query(getNamesQuery, (err, results, fields) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  }

  addNewTask(task) {
    return new Promise((resolve, reject) => {
      this.dbConn.query(addTaskQuery(task),  (err, results, fields) => {
        if (err) {
            console.log(err);
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  }
}
module.exports = ToDoData;
