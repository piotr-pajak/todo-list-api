# todo-list-api
Tech: Node.js, Express.js, TypeScript, PostgreSQL

## How to install:

```bash
  git clone https://github.com/mGlok/todo-list-api
  cd todo-list-api
  npm i
```

### After installation:

```bash
  npm run build
  npm run start
```

#### Setup database:

1. Create database:

```bash
  CREATE DATABASE todolist;
```

2. List available databases:

```bash
  \l
```

3. Switch connection to a new database:

```bash
  \c todolist;
```

4. Create table:

```bash
  CREATE TABLE todos (
    id SERIAL PRIMARY KEY,
    todo VARCHAR(255),
    finished boolean
  );
```

5. Insert data to our table:

```bash
  INSERT INTO todos (todo, finished)
    VALUES ('sample todo content', false),
    ('second sample todo content', false),
    ('third sample todo content', false);
```
