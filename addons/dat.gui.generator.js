class generatedGUI extends dat.GUI {
  constructor(guiParams) {
    super(guiParams)
    this.controllers = {}
  }

  autoAdd(object, parent = this) {
    for(key in object){
      let controller
      if (!key.startsWith('_')) {
        let value = object[key]
        let s = object['_' + key] || object['_all'] || []
  
        if(typeof value === 'object'){
          if(s.length && s[2] === 'color'){
            controller = parent.addColor(object, key)
            if (s.length && s[1]){
              controller.name = s[1]
            }
          } else {
            controller = parent.addFolder(key)
            if (s.length && s[1]){
              controller.name = s[1]
            }
            if (s.length && s[0]) {
              controller.open()
            }
            this.autoAdd(value, controller)
          }
        } else if (typeof value == 'string' && value.startsWith("#")){
          controller = parent.addColor(object, key)
        } else {
          controller = parent.add(object, key, s[0], s[1], s[2])
          if (s.length && s[3]) {
            controller.name(s[3])
          }
        }
        this.controllers[key] = (controller)
      }
    }
  }
  
  updateControllers() {
    for(i in this.controllers){
      this.controllers[i].updateDisplay()
    }
  }
}



