# ToDo List API
ToDo List API is a Node.js server application built with Express.js and TypeScript, using a PostgreSQL database. 
It serves as a backend for managing tasks in my [ToDo List Client](https://github.com/mGlok/todo-list-client) web application.

## To install the application, follow the steps below:
### Installation using Yarn

1. clone the ToDo List API repository using the `git clone https://github.com/mGlok/todo-list-api` command.
2. navigate to the application directory using the `cd todo-list-api` command.
3. install the required dependencies by running the `yarn` command.

After installation, compile the application by running the `yarn build` command and start the server using the `yarn start` command.

### Installation using npm

1. clone the ToDo List API repository using the `git clone https://github.com/mGlok/todo-list-api` command.
2. navigate to the application directory using the `cd todo-list-api` command.
3. install the required dependencies by running the `npm install` command.

After installation, compile the application by running the `npm run build` command and start the server using the `npm run start` command.

## Database setup
1. Create a new database named todolist:
```bash
CREATE DATABASE todolist;
```

2. List all available databases:
```bash
\l
```

3. Switch connection to the new database:
```bash
\c todolist;.
```

4. Create a new table named todos with columns id, todo, and finished, using the command:
```sql
CREATE TABLE todos (
  id SERIAL PRIMARY KEY,
  todo VARCHAR(255),
  finished boolean
);
```

5. Finally, you can insert some data into the todos table using the command:
```sql
INSERT INTO todos (todo, finished)
  VALUES ('sample todo content', false),
  ('second sample todo content', false),
  ('third sample todo content', false);
  ```
  
If you have any questions or suggestions for the project, feel free to get in touch with me.

Thank you for using the ToDo List Client!
