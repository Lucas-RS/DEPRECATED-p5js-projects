class autoGUI extends dat.GUI {

  constructor(guiParams) {
    super(guiParams)
    this.controllers = {}
    this.defaults = {}
    this.stickiedListItems = 0
    this.presetControllers = {
      "presetSelector": 'Default',
      "presetSave": () => {this.savePreset()}
    }
    this.presets = {}
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
  }

  enablePresets(presets) {
    this.presets = presets

    this.controllers['presetSelector'] = this.add(this.presetControllers, 'presetSelector', ['Default', ...Object.getOwnPropertyNames(this.presets)]).name("PRESET:")
    this.controllers['presetSave'] = this.add(this.presetControllers, 'presetSave').name("Save New Preset")
    this.controllers['presetSelector'].__li.style.cssText = "background-color: #188254; border: 3px solid #1ed36f; border-bottom: 0;"
    this.controllers['presetSave'].__li.style.cssText = "background-color: #188254; height: 32px; border: 3px solid #1ed36f; border-top: 0;"
    this.controllers['presetSave'].__li.children['0'].children['0'].style.cssText = "background-color: #1ed36f; border-radius: 14px; text-align: center; text-shadow: none;"
    
    this.controllers['presetSelector'].onChange((value) => {
      for(let i in this.controllers){
        let controller = this.controllers[i]
        if(i !== 'presetSelector' && controller.hasOwnProperty('__li')) {
          if(value === 'Default') {
            controller.setValue(controller["initialValue"])
          } else {
            if(this.presets[value].hasOwnProperty(i)){
              controller.setValue(this.presets[value][i])
            } else {
              controller.setValue(controller["initialValue"])
            }
          }
        }
      }
      this.presetChanged()
    })
  }

  presetChanged(){}

  savePreset() {
    let newPreset = {}
    for(let i in this.controllers){
      let controller = this.controllers[i]
      if(i !== 'presetSave' && controller.hasOwnProperty('__li') && controller.getValue() !== controller['initialValue']){
        newPreset[i] = controller.getValue()
      }
    }
    if(Object.keys(newPreset).length > 0) {
      let newHTML
      let presetName = prompt('Enter a name for your preset: ', 'custom')
      this.presets[presetName] = newPreset
      let currentPresets = ['Default', ...Object.getOwnPropertyNames(this.presets)]
      for(let p = 0; p < currentPresets.length; p++){
        newHTML += "<option value='" + currentPresets[p] + "'>" + currentPresets[p] + "</option>"
      }
      this.controllers.presetSelector.__select.innerHTML = newHTML
    } else {
      alert("You have not changed any settings, what is the use in an empty preset?")
    }
  }

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



