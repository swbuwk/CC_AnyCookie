import { updateBigCookie } from "./updateBigCookie"
import { settings } from "../settings"
import { createFileUploader } from "../uploaders/createFileUploader"
import { createLinkUploader } from "../uploaders/createLinkUploader"
import { handleUploadesrToggle } from "./common"

export const addSettings = () => {
  if (!l("menu")?.childNodes?.length) return
  if (Game.onMenu !== 'prefs') return

  // Settings section
  const settingsEl = document.createElement("div")
  settingsEl.id = "ACSettings"
  settingsEl.className = "subsection"

  const settingsTitle = document.createElement("div")
  settingsTitle.className = "title"
  settingsTitle.innerHTML = "Any Cookie Settings"

  const settingsListing = document.createElement("div")
  settingsListing.className = "listing"
  // Settings section end

  // URL buttons
  const switchButton = document.createElement("a")
  switchButton.id = "switchButton"
  switchButton.classList.add("smallFancyButton", "option")
  switchButton.innerHTML = `Get image from: ${settings.isFromFile ? "file" : "link"}`

  const fileUploader = createFileUploader()
  const linkUploader = createLinkUploader()
  handleUploadesrToggle(fileUploader, linkUploader)

  switchButton.onclick = () => {
    settings.isFromFile = !settings.isFromFile
    handleUploadesrToggle(fileUploader, linkUploader)
    updateBigCookie()
    switchButton.innerHTML = `Get image from: ${settings.isFromFile ? "file" : "link"}`
    PlaySound('snd/tick.mp3');
  }

  const switchDescription = document.createElement("label")
  switchDescription.innerHTML = `(note: file uploaded images is stored in your browser (localstorage), not in the game's save file!)`
  
  settingsListing.appendChild(switchButton)
  settingsListing.appendChild(switchDescription)
  settingsListing.appendChild(document.createElement("br"))
  settingsListing.appendChild(fileUploader)
  settingsListing.appendChild(linkUploader)
  // URL buttons end

  settingsListing.appendChild(document.createElement("br"))

  // Rounding button
  const roundingSettingOption = document.createElement("a")
  roundingSettingOption.id = "roundingSettingOption"
  roundingSettingOption.classList.add("smallFancyButton", "option", "prefButton")
  roundingSettingOption.classList.toggle("off", !settings.roundImage)
  roundingSettingOption.innerHTML = `Round image (${settings.roundImage ? "ON" : "OFF"})`

  roundingSettingOption.onclick = () => {
    settings.roundImage = !settings.roundImage
    updateBigCookie()
    roundingSettingOption.innerHTML = `Round image (${settings.roundImage ? "ON" : "OFF"})`
    roundingSettingOption.classList.toggle("off", !settings.roundImage)
    const fileUploadCircleCover = l("fileUploadCircleCover")
    if (fileUploadCircleCover) {
      fileUploadCircleCover.style.display = settings.roundImage ? "block" : "none"
    }
    PlaySound('snd/tick.mp3');
  }

  settingsListing.appendChild(roundingSettingOption)
  // Rounding button end

  // Save proportions button
  const saveProportionsOption = document.createElement("a")
  saveProportionsOption.id = "saveProportionsSettingOption"
  saveProportionsOption.classList.add("smallFancyButton", "option", "prefButton")
  saveProportionsOption.classList.toggle("off", !settings.saveProportions)
  saveProportionsOption.innerHTML = `Save proportions (${settings.saveProportions ? "ON" : "OFF"})`

  saveProportionsOption.onclick = () => {
    settings.saveProportions = !settings.saveProportions
    updateBigCookie()
    saveProportionsOption.innerHTML = `Save proportions (${settings.saveProportions ? "ON" : "OFF"})`
    saveProportionsOption.classList.toggle("off", !settings.saveProportions)
    const fileUploadPreview = l("fileUploadPreview")
    if (fileUploadPreview) {
      fileUploadPreview.style.objectFit = settings.saveProportions ? "contain" : "fill"
    }
    PlaySound('snd/tick.mp3');
  }

  settingsListing.appendChild(saveProportionsOption)
  // Save proportions button end

  // Reset button
  const resetButton = document.createElement("a")
  resetButton.id = "resetButton"
  resetButton.classList.add("smallFancyButton", "option", "warning")
  resetButton.innerHTML = `Reset to default`

  resetButton.onclick = () => {
    settings.isFromFile = false
    settings.url = ""
    settings.roundImage = false
    localStorage.setItem("anyCookieImage", "")
    handleUploadesrToggle(fileUploader, linkUploader)
    updateBigCookie()
    Game.Notify("All image data removed!", "Here we go again", [10, 0])
    PlaySound('snd/tick.mp3');
  }

  settingsListing.appendChild(document.createElement("br"))
  settingsListing.appendChild(resetButton)
  // Reset button end
  
  settingsEl.appendChild(settingsTitle)
  settingsEl.appendChild(settingsListing)

  l('menu')?.insertBefore(settingsEl, l('menu')?.childNodes[3] || null)
}