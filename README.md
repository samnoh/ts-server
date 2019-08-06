# TypeScript Web Framework

-   typescript
-   parceljs
-   axios
-   json-server

## TIL

### JSON Server

-   Get a full fake REST API with zero coding
-   [npm](https://www.npmjs.com/package/json-server)

```bash
npm install -g json-server
```

-   db.json
-   This file will be updated automatically

```json
{
    "user": { "name": "smith" },
    "posts": [{ "id": 1, "title": "first post", "author": "smith" }]
}
```

-   start server

```bash
json-server --watch db.json --port 5000
```

### Generic Constraints

```TypeScript
interface UserProps {
    id?: number;
    name?: string;
    age?: number;
}

const data: UserProps = {
    id: 1,
    name: 'Smith',
    age: 30
}

const getUser = <K extends keyof UserProps>(key: K): UserProps[K] => {
    return data[key];
}

const a = getUser('name');
console.log(a);

const b = getUser('abc'); // error
```
