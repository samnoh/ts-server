# TypeScript Web Framework

-   typescript
-   parceljs

## TIL

### JSON Server

-   Get a full fake REST API with zero coding
-   [npm](https://www.npmjs.com/package/json-server)

```bash
npm install -g json-server
```

-   db.json

```json
{
    "user": { "name": "smith" },
    "posts": [{ "id": 1, "title": "first post", "author": "smith" }]
}
```

-   start server

```bash
json-server -w db.json
```
