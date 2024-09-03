import Msg from "./msg.js";

function isJson(str) {
  const result = new Msg({});
  try {
    result.obj = JSON.parse(str);
    result.success = true;
  } catch (e) {
    result.msg = e;
    result.success = false;
  }
  return result;
}

export function jsonParser(str) {
  const _isJson = isJson(str);
  if (_isJson.success) {
    return _isJson.obj;
  }
  return str;
}
