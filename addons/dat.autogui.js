//Todo:
//add functionality for drop down menus
//Make top function buttons sticky

class autoGUI extends dat.GUI {

  constructor(guiParams) {
    super(guiParams)
    this.controllers = {}
  }

  autoAdd(object, parent = this) {
    for(let key in object){
      let controller
      if (!key.startsWith('_')) {
        let value = object[key]
        let s = object['_' + key] || object['_all'] || {}
        
        if(typeof value === 'object'){
          if(s.hasOwnProperty('type') && s['type'] == 'color'){
            controller = parent.addColor(object, key)
          } else {
            controller = parent.addFolder(key)
            if (s.hasOwnProperty('openFolder') && s['openFolder']) {
              controller.open()
            }
            this.autoAdd(value, controller)
          }
        } else if (typeof value == 'string'){
          if(s.hasOwnProperty('type') && s['type'] == 'dropmenu'){
            controller = parent.add(object, key, s['options'])
          } else if (value.startsWith("#")) {
            controller = parent.addColor(object, key)
          }
        } else {
          controller = parent.add(object, key, s['min'], s['max'], s['step'])
        }

        if(controller.hasOwnProperty('__li')){
          if (s.hasOwnProperty('name')) {
            controller.name(s['name'])
          }
          if (s.hasOwnProperty('hide') && s['hide']){
            controller.__li.style.display = 'none';
          }
        } else {
          if (s.hasOwnProperty('name')){
            controller.name = s['name']
          }
          if (s.hasOwnProperty('hide') && s['hide']){
            controller.hide()
          }
        }

        this.controllers[key] = controller
      }
    }
  }
  
  updateControllers() {
    for(let i in this.controllers){
      this.controllers[i].updateDisplay()
    }
  }

  addToggleDisplayEvent(bool, recipient) {
    let that = this
    this.controllers[bool].onChange(function(value) {
      if('__li' in that.controllers[recipient]){
        if(value) {
          that.controllers[recipient].__li.style.display = '';
        } else {
          that.controllers[recipient].__li.style.display = 'none';
        }
      } else {
        if(value) {
          that.controllers[recipient].show()
        } else {
          that.controllers[recipient].hide()
        }
      }
    })
  }

  addMenuFolderSwitch(menu, parentFolder) {
    let that = this
    this.controllers[menu].onChange(function(value) {
      for (let folder in that.controllers[parentFolder]['__folders']) {
        that.controllers[parentFolder]['__folders'][folder].hide()
      }
      that.controllers[parentFolder]['__folders'][value].show()
    })
  }
}



