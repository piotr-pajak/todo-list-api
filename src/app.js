class ToDoApp {
  constructor(names = [], dataStore) {
    this.names = [...names];
    this.dataStore = dataStore;
  }

  async getAllTasks() {
    const allTasks = await this.dataStore.getAllTasks();
    return allTasks;
  }

  async addTask(task) {
    const addTask = await this.dataStore.addNewTask(task);
    return addTask;
  }

  deleteName(name) {
    this.names = this.names.filter((current) => current !== name);
  }

  hasName(name) {
    return Boolean(this.names.filter((n) => n === name).length);
  }

  modifyName(oldName, newName) {
    this.names = this.names.map((current) => {
      const maybeUpdated = current === oldName ? newName : current;
      return maybeUpdated;
    });
  }
}

module.exports = ToDoApp;
