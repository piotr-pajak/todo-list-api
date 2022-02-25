class ToDoApp {
  constructor(names = []) {
    this.names = [...names];
  }

  getNames() {
    return this.names;
  }

  setName(name) {
    this.names.push(name);
  }

  deleteName(name) {
    this.names = this.names.filter((current) => current !== name);
  }

  hasName(name) {
    return Boolean(this.names.filter((n) => n === name).length)
  }

  modifyName(oldName, newName) {
    this.names = this.names.map((current) => {
      const maybeUpdated = current === oldName ? newName : current;
      return maybeUpdated;
    });
  }
}

module.exports = ToDoApp;
