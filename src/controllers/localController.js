import config from "config";
import LocalStorage from "../models/localStorage.js";
import Msg from "../utils/msg.js";

const dbDir = config.get("dbDir");
const localStorage = new LocalStorage(dbDir);

export const setLocalItem = (req, res) => {
  const { key, value } = req.body;
  if (!key || value === undefined) {
    return res
      .status(400)
      .json(new Msg({ success: false, msg: "Key and value are required" }));
  }
  localStorage.setItem(key, value);
  res
    .status(200)
    .json(new Msg({ success: true, msg: "Data saved in local storage" }));
};

export const getLocalItem = (req, res) => {
  const keys = req.params.keys.split(",");
  const value = localStorage.getItem(keys);
  if (value === null) {
    return res
      .status(404)
      .json(new Msg({ success: false, msg: "Data not found" }));
  }
  res.status(200).json(new Msg({ success: true, obj: { value } }));
};

export const removeLocalItem = (req, res) => {
  const keys = req.params.keys.split(",");
  localStorage.removeItem(keys);
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
