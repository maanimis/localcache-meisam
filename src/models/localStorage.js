import fs from "fs";
import path from "path";
import { LocalStorage as NodeLocalStorage } from "node-localstorage";

class LocalStorage {
  constructor(dir) {
    this.dir = dir;
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }
    this.storage = new NodeLocalStorage(dir);
  }

  setItem(key, value) {
    this.storage.setItem(key, value);
  }

  getItem(key) {
    return this.storage.getItem(key) || null;
  }

  removeItem(key) {
    this.storage.removeItem(key);
  }

  clear() {
    fs.readdirSync(this.dir).forEach((file) =>
      fs.unlinkSync(path.join(this.dir, file))
    );
  }
}

export default LocalStorage;
