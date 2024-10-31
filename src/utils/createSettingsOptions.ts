import { updateBigCookie } from "../handlers/updateBigCookie";
import { settings, Settings } from "../settings";

export const createSettingsOptions = (optionId: keyof Settings, optionName: string, onChange?: () => void) => {  
  const option = document.createElement("a")
  option.id = `${optionId}SettingOption`
  option.classList.add("smallFancyButton", "option", "prefButton")
  option.classList.toggle("off", !settings[optionId])
  option.innerHTML = `${optionName} (${settings[optionId] ? "ON" : "OFF"})`

  option.onclick = () => {
    (settings[optionId] as boolean) = !settings[optionId]
    updateBigCookie()
    option.innerHTML = `${optionName} (${settings[optionId] ? "ON" : "OFF"})`
    option.classList.toggle("off", !settings[optionId])
    onChange?.()
    PlaySound('snd/tick.mp3');
  }

  return option
}