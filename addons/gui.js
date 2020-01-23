class GUI {
  constructor(options = {}) {
    this.controllers = {};
  }

  add(object) {
    for (let key in object.children) {
      this.addController(object.children, key);
    }
  }

  addController(object, key) {
    if (!key.startsWith("__")) {
      let newController = new Controller(object, key, object["__" + key]);
      if ("__" + key in object) {
        if ("children" in object["__" + key]) {
          this.add(object["__" + key]);
        }
      }
      this.controllers[key] = newController;
    }
  }
}

class Controller {
  constructor(object, key, settings = {}) {
    this.initialValue = object[key];
    this.object = object;
    this.key = key;
    this.type = settings.type;
    
  }

  get() {
    return this.object[this.key];
  }

  set(value) {
    this.object[this.key] = value;
  }

  reset() {
    this.object[this.key] = this.initialValue;
  }
}
