import { settings } from "../settings"
import { updateBigCookie } from "./updateBigCookie"

export const handleSetImage = (newUrl: string, isFromFile: boolean) => {
  const oldUrl = isFromFile ? localStorage.getItem("anyCookieImage") : settings.url
  PlaySound('snd/tick.mp3');
  if (oldUrl === newUrl) return

  settings.isFromFile = isFromFile
  if (isFromFile) {
    localStorage.setItem("anyCookieImage", newUrl);
  } else {
    settings.url = newUrl
  }
  updateBigCookie()
}

export const handleUploadesrToggle = (fileUploader: HTMLElement, linkUploader: HTMLElement) => {
  fileUploader.style.display = settings.isFromFile ? "flex" : "none"
  linkUploader.style.display = settings.isFromFile ? "none" : "block"
}