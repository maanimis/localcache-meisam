import fs from "fs";
import path from "path";
import { LocalStorage as NodeLocalStorage } from "node-localstorage";
import { jsonParser } from "../utils/common.js";

class LocalStorage {
  constructor(dir) {
    this.dir = dir;
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }
    this.storage = new NodeLocalStorage(dir);
  }

  setItem(key, value) {
    this.storage.setItem(key, JSON.stringify(value));
  }

  getItem(...keys) {
    const result = {};
    for (const key of keys) {
      const value = this.storage.getItem(key) || null;
      result[key] = jsonParser(value);
    }
    return result;
  }

  removeItem(...keys) {
    for (const key of keys) {
      this.storage.removeItem(key);
    }
  }

  clear() {
    fs.readdirSync(this.dir).forEach((file) => {
      const filePath = path.join(this.dir, file);
      try {
        if (fs.existsSync(filePath)) {
          fs.unlinkSync(filePath);
        }
      } catch (error) {
        console.log("Error while deleting file:", filePath, error);
      }
    });
  }
}

export default LocalStorage;
