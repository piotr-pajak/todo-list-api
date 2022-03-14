const getNamesQuery = require("./get-names");
const addTaskQuery = require("./add-task");
const deleteTaskQuery = require("./delete-task");
const modifyTask = require("./modify-task");

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
      this.dbConn.query(addTaskQuery(task), (err, results, fields) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  }
  deleteTask(taskId) {
    return new Promise((resolve, reject) => {
      this.dbConn.query(
        deleteTaskQuery(taskId.taskId),
        (err, results, fields) => {
          if (err) {
            reject(err);
          } else {
            resolve(results);
          }
        }
      );
    });
  }
  modifyTask(taskId, newTask) {
    return new Promise((resolve, reject) => {
      this.dbConn.query(modifyTask(taskId, newTask), (err, results, fields) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  }
}
module.exports = ToDoData;
