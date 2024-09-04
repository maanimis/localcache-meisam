import LocalStorage from "../models/localStorage.js";
import { argv } from "../utils/argv.js";
import Msg from "../utils/msg.js";
import debugLib from "debug";

const debug = debugLib("app:localController");
const localStorage = new LocalStorage(argv.db);

export const setLocalItem = (req, res) => {
  const { key, value } = req.body;
  if (!key || value === undefined) {
    return res
      .status(400)
      .json(new Msg({ success: false, msg: "Key and value are required" }));
  }
  debug("[localStorage]setting key:", key, "value:", value);
  localStorage.setItem(key, value);
  res
    .status(200)
    .json(new Msg({ success: true, msg: "Data saved in local storage" }));
};

export const getLocalItem = (req, res) => {
  const keys = req.params.keys.split(",");
  debug("[localStorage]getting:", keys);
  const values = localStorage.getItem(...keys);
  // if (value === null) {
  //   return res
  //     .status(404)
  //     .json(new Msg({ success: false, msg: "Data not found" }));
  // }
  if (Object.values(values).every((value) => value === null)) {
    return res
      .status(404)
      .json(new Msg({ success: false, msg: "Data not found" }));
  }
  res.status(200).json(new Msg({ success: true, obj: { ...values } }));
};

export const removeLocalItem = (req, res) => {
  const keys = req.params.keys.split(",");
  debug("[localStorage]removing:", keys);
  localStorage.removeItem(...keys);
  res
    .status(200)
    .json(new Msg({ success: true, msg: "Data removed from local storage" }));
};

export const clearLocalStorage = (req, res) => {
  localStorage.clear();
  res
    .status(200)
    .json(new Msg({ success: true, msg: "Local storage cleared" }));
};
