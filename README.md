# localcache-meisam

A Node.js application for managing in-memory and local storage with RESTful API endpoints.

## Table of Contents

- [Overview](#overview)
- [Installation](#installation)
- [Usage](#usage)
  - [As a Package](#as-a-package)
  - [Global Utility](#global-utility)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)

## Overview

This project provides a basic API for interacting with both in-memory storage and file-based local storage. It supports setting, getting, removing, and clearing data. It includes an Express-based server that exposes these functionalities via HTTP endpoints.

## Installation

To get started, you have two options:

### Install Locally

1. **Clone the repository and install dependencies**:

   ```bash
   git clone https://github.com/maanimis/localcache-meisam.git
   cd localcache-meisam
   npm install
   ```

### Install Globally

1. **Install globally using npm**:

   ```bash
   npm install -g localcache-meisam
   ```

   This will install the package globally and make the `localcache-meisam` command available.

## Usage

### As a Package

You can use this storage manager as a package in your Node.js project. Follow these steps to integrate it:

1. **Install the package**:

   ```bash
   npm install localcache-meisam
   ```

2. **Import and use the package**:

   ```javascript
   import { localCache } from 'localcache-meisam';

   const { LocalStorage, InMemoryStorage } = localCache;

   // Example for InMemoryStorage
   const inMemoryStorage = new InMemoryStorage();
   inMemoryStorage.setItem('key1', 'value1');
   console.log(inMemoryStorage.getItem('key1')); // Output: 'value1'

   // Example for LocalStorage
   const localStorage = new LocalStorage('path/to/storage');
   localStorage.setItem('key1', 'value1');
   console.log(localStorage.getItem('key1')); // Output: 'value1'
   ```

### Global Utility

You can also use this as a global utility. Follow these steps to use it directly from the command line.

1. **Install globally using npm**:

   ```bash
   npm install -g localcache-meisam
   ```

2. **Run the application**:

   You can start the server with the following command:

   ```bash
   localcache-meisam
   ```

   The server will start running at `http://localhost:PORT`.

## API Endpoints

### Memory Storage Endpoints

- **Set Memory Item**

  ```http
  POST /memory/set
  ```

  **Body**:

  ```json
  {
    "key": "someKey",
    "value": "someValue"
  }
  ```

- **Get Memory Items**

  ```http
  GET /memory/get/:keys
  ```

  **Example**: `/memory/get/key1,key2`

### Local Storage Endpoints

- **Set Local Item**

  ```http
  POST /local/set
  ```

  **Body**:

  ```json
  {
    "key": "someKey",
    "value": "someValue"
  }
  ```

- **Get Local Item**

  ```http
  GET /local/get/:keys
  ```

  **Example**: `/local/get/key1,key2`

- **Remove Local Item**

  ```http
  DELETE /local/remove/:keys
  ```

  **Example**: `/local/remove/key1,key2`

- **Clear Local Storage**

  ```http
  DELETE /local/clear
  ```

## [Contributing](#contributing)

Contributions are welcome! Please feel free to submit a Pull Request.

