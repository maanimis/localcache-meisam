import InMemoryStorage from "../models/inMemoryStorage.js";
import Msg from "../utils/msg.js";

const inMemoryStorage = new InMemoryStorage();

export const setMemoryItem = (req, res) => {
  const { key, value } = req.body;
  if (!key || value === undefined) {
    return res
      .status(400)
      .json(new Msg({ success: false, msg: "Key and value are required" }));
  }
  inMemoryStorage.setItem(key, value);
  res.status(200).json(new Msg({ success: true, msg: "Data saved in memory" }));
};

export const getMemoryItems = (req, res) => {
  const keys = req.params.keys.split(",");
  const values = inMemoryStorage.getItem(...keys);
  if (Object.values(values).every((value) => value === null)) {
    return res
      .status(404)
      .json(new Msg({ success: false, msg: "Data not found" }));
  }
  res.status(200).json(new Msg({ success: true, obj: values }));
};
