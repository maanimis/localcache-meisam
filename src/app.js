#!/usr/bin/env node

import express from "express";
import debugLib from "debug";
import { argv } from "./utils/argv.js";
import cors from "cors";
import {
  setMemoryItem,
  getMemoryItems,
} from "./controllers/memoryController.js";
import {
  setLocalItem,
  getLocalItem,
  removeLocalItem,
  clearLocalStorage,
} from "./controllers/localController.js";
import Msg from "./utils/msg.js";
import { logo } from "./utils/logo.js";

const debug = debugLib("app:main");
const app = express();

app.use(cors());
app.use(express.json());

// Memory routes
app.post("/memory/set", setMemoryItem);
app.get("/memory/get/:keys", getMemoryItems);

// Local storage routes
app.post("/local/set", setLocalItem);
app.get("/local/get/:keys", getLocalItem);
app.delete("/local/remove/:keys", removeLocalItem);
app.delete("/local/clear", clearLocalStorage);

// 404 handler
app.use((req, res) => {
  debug("404 Not Found:", req.originalUrl);
  const result = new Msg({ success: false, msg: "Route not found" });
  res.status(404).json(result);
});

debug("Server initialization");
app.listen(argv.port, argv.ip, () => {
  logo();
  console.log(`\n[+] Server running at http://${argv.ip}:${argv.port}`);
});
