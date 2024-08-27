import debugLib from "debug";

const debug = debugLib("app:utils:msg");

class Msg {
  constructor({ success = false, msg = null, obj = null }) {
    this.success = success;
    this.msg = msg;
    this.obj = obj;
    debug("Msg:", JSON.stringify(this));
  }
}

export default Msg;
