
# localCache

### [Express.js In-Memory and Local Storage API](#expressjs-in-memory-and-local-storage-api)

This project is an Express.js API that provides endpoints to store, retrieve, and manage data in both in-memory storage and local storage (using the `node-localstorage` package). The API supports basic CRUD operations and is designed for simplicity and ease of use in development and testing environments.

## [Features](#features)

- **In-Memory Storage**: Store and retrieve data in memory, ideal for temporary storage during runtime.
- **Local Storage**: Store and manage data using `node-localstorage`, which saves data to the filesystem.
- **CORS Support**: Cross-Origin Resource Sharing (CORS) enabled for flexibility in development.
- **JSON API**: Interact with the API using JSON-formatted requests and responses.
- **Error Handling**: Comprehensive error handling for common scenarios (e.g., missing keys, not found).

## [Endpoints](#endpoints)

### [In-Memory Storage](#in-memory-storage)

- **Set Data in Memory**
  ```http
  POST /memory/set
  ```
  **Request Body:**
  ```json
  {
    "key": "yourKey",
    "value": "yourValue"
  }
  ```

- **Get Data from Memory**
  ```http
  GET /memory/get/:keys
  ```
  **URL Parameters:**
  - `:keys` - Comma-separated list of keys to retrieve.

### [Local Storage](#local-storage)

- **Set Data in Local Storage**
  ```http
  POST /local/set
  ```
  **Request Body:**
  ```json
  {
    "key": "yourKey",
    "value": "yourValue"
  }
  ```

- **Get Data from Local Storage**
  ```http
  GET /local/get/:keys
  ```
  **URL Parameters:**
  - `:keys` - Comma-separated list of keys to retrieve.

- **Remove Data from Local Storage**
  ```http
  DELETE /local/remove/:keys
  ```
  **URL Parameters:**
  - `:keys` - Comma-separated list of keys to remove.

- **Clear Local Storage**
  ```http
  DELETE /local/clear
  ```

## [Getting Started](#getting-started)

### [Prerequisites](#prerequisites)

- Node.js
- npm

### [Installation](#installation)

#### Method 1: Standard Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/maanimis/localcache-meisam
   cd localcache-meisam
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

#### Method 2: Using `localcache-meisam`

 + Install the `localcache-meisam` package globally:
   ```bash
   npm install -g localcache-meisam
   ```

   
### [Running the Server](#running-the-server)

Start the server using:
```bash
npm start
```

The server will be accessible at `http://127.0.0.1:3000`.

### [Testing the API](#testing-the-api)

You can use tools like [Postman](https://www.postman.com/) or `curl` to interact with the API.

Example using `curl`:
```bash
curl -X POST http://127.0.0.1:3000/memory/set -H "Content-Type: application/json" -d '{"key": "test", "value": "Hello, World!"}'
```

## [Contributing](#contributing)

Contributions are welcome! Please feel free to submit a Pull Request.

