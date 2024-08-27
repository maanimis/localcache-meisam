export default class InMemoryStorage {
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
    return result;
  }

  getAll() {
    return this.storage;
  }

  removeItem(key) {
    delete this.storage[key];
  }

  clear() {
    this.storage = {};
  }
}
