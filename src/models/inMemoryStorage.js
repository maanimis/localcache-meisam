class InMemoryStorage {
  constructor() {
    this.storage = {};
  }

  setItem(key, value) {
    this.storage[key] = value;
  }

  getItem(...keys) {
    const result = {};
    for (const key of keys) {
      result[key] = this.storage[key] || null;
    }
    return JSON.stringify(result);
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
