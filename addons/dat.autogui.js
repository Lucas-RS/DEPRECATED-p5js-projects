//Todo:
//add functionality for drop down menus
//Create sticky box which can hold folders and controllers at the top.

class autoGUI extends dat.GUI {

  constructor(guiParams, jsonPresetFilePath) {
    super(guiParams)
    this.controllers = {}
    this.defaults = {}
    this.stickiedListItems = 0

    fetch(jsonPresetFilePath)
      .then(function(response) {
        return response.json();
      })
      .then(function(jsonPresets) {
        window.presets = jsonPresets
      });
  }

  autoAdd(object, parentKey, parent = this) {
    for(let key in object){
      let controller
      if (!key.startsWith('_')) {
        let value = object[key]
        let keyPath = parentKey + "." + key
        let s = object['_' + key] || object['_all'] || {}
        
        if(typeof value === 'object'){
          if(s.hasOwnProperty('type') && s['type'] == 'color'){
            controller = parent.addColor(object, key)
          } else {
            controller = parent.addFolder(key)
            if (s.hasOwnProperty('openFolder') && s['openFolder']) {
              controller.open()
            }
            this.autoAdd(value, keyPath, controller)
          }
        } else if (typeof value == 'string'){
          if(s.hasOwnProperty('type') && s['type'] == 'select'){
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

        this.controllers[keyPath] = controller
      }
    }
    if (this.controllers.hasOwnProperty(parentKey + '.presetSelector')) {
      let that = this
      this.controllers[parentKey + '.presetSelector'].onChange(function(value) {
        for(let i in that.controllers){
          let controller = that.controllers[i]
          if(i !== parentKey + '.presetSelector' && controller.hasOwnProperty('__li')) {
            if(value === 'Default') {
              controller.setValue(controller["initialValue"])
            } else {
              if(presets[value].hasOwnProperty(i)){
                controller.setValue(presets[value][i])
              } else {
                controller.setValue(controller["initialValue"])
              }
            }
          }
        }
        that.presetChanged()
      })
    }
  }

  presetChanged(){}

  addToggleDisplayEvent(bool, recipient) {
    let that = this
    this.controllers[bool].onChange(function(value) {
      if(value) {
        if('__li' in that.controllers[recipient]){
          that.controllers[recipient].__li.style.display = ''
        } else {
          that.controllers[recipient].show()
        }
      } else {
        if('__li' in that.controllers[recipient]){
          that.controllers[recipient].__li.style.display = 'none'
        } else {
          that.controllers[recipient].hide()
        }
      }
    })
  }

  addMenuFolderSwitch(select, parentFolder) {
    let that = this
    this.controllers[select].onChange(function(value) {
      for (let folder in that.controllers[parentFolder]['__folders']) {
        //need to make this check which folders to hide
        that.controllers[parentFolder]['__folders'][folder].hide()
      }
      that.controllers[parentFolder]['__folders'][value].show()
    })
  }

  sticky(controller, bgColor = '#1a1a1a') {
    this.controllers[controller].__li.style.backgroundColor = bgColor
    this.controllers[controller].__li.style.position = "sticky"
    this.controllers[controller].__li.style.top = this.stickiedListItems * 28 + "px"
    this.controllers[controller].__li.style.zIndex = 1
    this.stickiedListItems += 1
  }
}



