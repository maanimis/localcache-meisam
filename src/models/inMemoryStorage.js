import { jsonParser } from "../utils/common.js";

class InMemoryStorage {
  constructor() {
    this.storage = {};
  }

  setItem(key, value) {
    this.storage[key] = JSON.stringify(value);
  }

  getItem(...keys) {
    const result = {};
    for (const key of keys) {
      const value = this.storage[key] || null;
      result[key] = jsonParser(value);
    }
    return result;
  }

  getAll() {
    return this.storage;
  }

  removeItem(...keys) {
    for (const key of keys) {
      delete this.storage[key];
    }
  }

  clear() {
    this.storage = {};
  }
}

export default InMemoryStorage;
