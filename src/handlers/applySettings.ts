import { settings } from "../settings"
import { handleUploadesrToggle } from "./common"
import { updateBigCookie } from "./updateBigCookie"

export const applySettings = () => {
  updateBigCookie()

  const fileUploader = l("ACfileUploader")
  const linkUploader = l("AClinkUploader")

  if (!fileUploader || !linkUploader) return

  handleUploadesrToggle(fileUploader, linkUploader)
}