import InMemoryStorage from "../models/inMemoryStorage.js";
import Msg from "../utils/msg.js";
import debugLib from "debug";

const debug = debugLib("app:memoryController");
const inMemoryStorage = new InMemoryStorage();

export const setMemoryItem = (req, res) => {
  const { key, value } = req.body;
  if (!key || value === undefined) {
    return res
      .status(400)
      .json(new Msg({ success: false, msg: "Key and value are required" }));
  }
  debug("[Memory]setting key:", key, "value:", value);
  inMemoryStorage.setItem(key, value);
  res.status(200).json(new Msg({ success: true, msg: "Data saved in memory" }));
};

export const getMemoryItems = (req, res) => {
  const keys = req.params.keys.split(",");
  debug("[Memory]getting:", keys);
  const values = inMemoryStorage.getItem(...keys);
  if (Object.values(values).every((value) => value === null)) {
    return res
      .status(404)
      .json(new Msg({ success: false, msg: "Data not found" }));
  }
  res.status(200).json(new Msg({ success: true, obj: { ...values } }));
};
