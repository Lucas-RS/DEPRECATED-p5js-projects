class AutoGUI extends dat.GUI {

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

  autoAdd(object, parentKey, enableListen, parent = this) {
    for(let key in object){
      if (!key.startsWith('_')) {
        let controller
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
            this.autoAdd(value, keyPath, enableListen, controller)
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

        if ( enableListen && !controller.hasOwnProperty('__controllers') ) {
          controller.listen()
        }
        this.controllers[keyPath] = controller
      }
    }
  }

  enablePresets(defaultPresets, userPresetsStorageName) {
    this.defaultPresets = defaultPresets
    this.userPresetsStorageName = userPresetsStorageName
    this.userPresets = JSON.parse(localStorage.getItem(this.userPresetsStorageName)) || {}
    for(let p in this.defaultPresets) {
      this.presets[p] = this.defaultPresets[p]
    }
    for(let p in this.userPresets) {
      this.presets[p] = this.userPresets[p]
    }

    this.controllers['presetSelector'] = this.add(this.presetControllers, 'presetSelector', ['Default', ...Object.getOwnPropertyNames(this.presets)]).name("PRESET:")
    this.controllers['presetSave'] = this.add(this.presetControllers, 'presetSave').name("Save New Preset")
    this.controllers['presetSelector'].__li.style.cssText = "border: 0"
    this.controllers['presetSelector'].__select.style.cssText = "margin-top: 3px;"
    this.controllers['presetSave'].__li.style.cssText = "background-color: #2fa1d6; border: 0; padding: 0;"
    this.controllers['presetSave'].__li.children['0'].children['0'].style.cssText = "background-color: #2fa1d6; width: 100%; text-align: center; text-shadow: none;"
    
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
      this.presetsChanged(value)
    })
  }

  presetsChanged(){}

  savePreset(_other) {
    let newPreset = {}
    if ( _other !== undefined ) {
      newPreset = {_other}
    }
    for(let i in this.controllers){
      let controller = this.controllers[i]
      if(i !== 'presetSelector' && i !== 'presetSave' && controller.hasOwnProperty('__li') && controller.getValue() !== controller['initialValue']){
        newPreset[i] = controller.getValue()
        
      }
    }
    if(Object.keys(newPreset).length > 0) {
      let presetName = prompt('Enter a name for your preset: ', 'custom')
      while (true) {
        if (presetName === null) {
          break
        } else if (presetName in this.defaultPresets) {
          presetName = prompt("Cannot overwrite a default preset.\nChoose a different name: ")
        } else if (presetName in this.userPresets && !confirm("This will overwrite your previously saved preset which already has this name.\nDo you wish to continue?")) {
          presetName = prompt("Please enter a different name: ")
        } else {
          this.presets[presetName] = newPreset
          this.userPresets[presetName] = newPreset
          let currentPresets = ['Default', ...Object.getOwnPropertyNames(this.presets)]
          let newHTML      
          for(let p = 0; p < currentPresets.length; p++){
            newHTML += "<option value='" + currentPresets[p] + "'>" + currentPresets[p] + "</option>"
          }
          this.controllers.presetSelector.__select.innerHTML = newHTML
          localStorage.setItem(this.userPresetsStorageName, JSON.stringify(this.userPresets))
          break
        }
      }
    } else {
      alert("You have not changed any settings, what is the use in an empty preset?")
    }
  }

  updateAllDisplays() {
    for(let i in this.controllers) {
      this.controllers[i].updateDisplay()
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



