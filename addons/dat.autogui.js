//Todo:
//add functionality for drop down menus
//Create sticky box which can hold folders and controllers at the top.

class autoGUI extends dat.GUI {

  constructor(guiParams) {
    super(guiParams)
    this.controllers = {}
    this.stickiedListItems = 0
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
  
  enablePresetBox() {
    this.stickiedListItems += 1
    this.presetBox = document.createElement("div")
    let presetBoxLi = document.createElement("li")
    gui.__ul.appendChild(presetBoxLi)
    presetBoxLi.appendChild(this.presetBox)
    presetBoxLi.style.backgroundColor = '#1a1a1a'
    presetBoxLi.style.position = "sticky"
    presetBoxLi.style.top = "0"
    presetBoxLi.style.zIndex = 1
    this.presetBox.innerHTML = 
    `<select style="font: 11px 'Lucida Grande'">
      <option value="">presets</option>
      <option value="dog">Dog</option>
      <option value="cat">Cat</option>
      <option value="hamster">Hamster</option>
      <option value="parrot">Parrot</option>
      <option value="spider">Spider</option>
      <option value="goldfish">Goldfish</option>
    </select>
    <button style="font: 11px 'Lucida Grande', sans-serif">Save Preset</button>
    <button style="font: 11px 'Lucida Grande', sans-serif">Download Preset</button>`
  }

  updateControllers() {
    for(let i in this.controllers){
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

  addMenuFolderSwitch(menu, parentFolder) {
    let that = this
    this.controllers[menu].onChange(function(value) {
      for (let folder in that.controllers[parentFolder]['__folders']) {
        that.controllers[parentFolder]['__folders'][folder].hide()
      }
      that.controllers[parentFolder]['__folders'][value].show()
    })
  }

  sticky(controller, bgColor = '#1a1a1a') {
    gui.controllers[controller].__li.style.backgroundColor = bgColor
    gui.controllers[controller].__li.style.position = "sticky"
    gui.controllers[controller].__li.style.top = this.stickiedListItems * 28 + "px"
    gui.controllers[controller].__li.style.zIndex = 1
    this.stickiedListItems += 1
  }
}



