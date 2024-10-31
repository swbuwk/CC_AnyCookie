import { addSettings } from "./handlers/addSettings";
import { applySettings } from "./handlers/applySettings";
import { Settings, settings } from "./settings";
 
const init = () => {
  const initUpdateMenu = Game.UpdateMenu
  Game.UpdateMenu = () => {
    initUpdateMenu()
    addSettings()
  }
}

const save = () => {
  return JSON.stringify(settings)
}

const load = (dataStr: string) => {
  const data = JSON.parse(dataStr);

  (Object.keys(data) as (keyof Settings)[]).forEach(<K extends keyof Settings>(key: K) => {
    settings[key] = data[key]
  })

  applySettings()
}

const AnyCookieMod = {
  init,
  save,
  load
}

if (typeof Steam !== 'undefined') {
  // Wait for Steam to load
  setTimeout(function () {
    Game.registerMod('AnyCookie', AnyCookieMod);
  }, 2000);
} else {
  Game.registerMod('AnyCookie', AnyCookieMod);
}