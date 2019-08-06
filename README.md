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

-   query

```typescript
import axios from 'axios';

axios.post('http://localhost:...', { name: 'jimmy' });
```
