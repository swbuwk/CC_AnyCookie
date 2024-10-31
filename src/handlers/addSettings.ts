import { updateBigCookie } from "./updateBigCookie"
import { imageFitDescriptions, imageFitVariants, settings } from "../settings"
import { createFileUploader } from "../uploaders/createFileUploader"
import { createLinkUploader } from "../uploaders/createLinkUploader"
import { handleUploadesrToggle } from "./common"
import { createSettingsOptions } from "../utils/createSettingsOptions"

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

  // Switch button
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

  const switchButtonDescription = document.createElement("label")
  switchButtonDescription.innerHTML = `(note: file uploaded images is stored in your browser (localstorage), not in the game's save file!)`

  settingsListing.appendChild(switchButton)
  settingsListing.appendChild(switchButtonDescription)
  settingsListing.appendChild(document.createElement("br"))
  settingsListing.appendChild(fileUploader)
  settingsListing.appendChild(linkUploader)
  // Switch button end

  settingsListing.appendChild(document.createElement("br"))

  // Rounding button
  const roundingSettingOption = createSettingsOptions("roundImage", "Round image", () => {
    const fileUploadCircleCover = l("fileUploadCircleCover")
    if (fileUploadCircleCover) {
      fileUploadCircleCover.style.display = settings.roundImage ? "block" : "none"
    }
  })

  settingsListing.appendChild(roundingSettingOption)
  settingsListing.appendChild(document.createElement("br"))
  // Rounding button end

  // Image fit button 
  const imageFitOption = document.createElement("a")
  imageFitOption.id = `imageFitSettingOption`
  imageFitOption.classList.add("smallFancyButton", "option")
  imageFitOption.innerHTML = `Image fit: ${settings.imageFit.toUpperCase()}`

  imageFitOption.onclick = () => {
    const optionIndex = imageFitVariants.indexOf(settings.imageFit)
    settings.imageFit = imageFitVariants[(optionIndex + 1) % imageFitVariants.length]
    updateBigCookie()
    imageFitOption.innerHTML = `Image fit: ${settings.imageFit.toUpperCase()}`
    imageFitDescription.innerHTML = imageFitDescriptions[imageFitVariants.indexOf(settings.imageFit)]
    const fileUploadPreview = l("fileUploadPreview")
    if (fileUploadPreview) {
      fileUploadPreview.style.objectFit = settings.imageFit
    }
    PlaySound('snd/tick.mp3');
  }

  const imageFitDescription = document.createElement("label")
  imageFitDescription.innerHTML = imageFitDescriptions[imageFitVariants.indexOf(settings.imageFit)]

  settingsListing.appendChild(imageFitOption)
  settingsListing.appendChild(imageFitDescription)
  settingsListing.appendChild(document.createElement("br"))
  // Image fit button end

  // Drop shadow button
  const dropShadowOption = createSettingsOptions("dropShadow", "Drop shadow")

  settingsListing.appendChild(dropShadowOption)
  // Drop shadow button end

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