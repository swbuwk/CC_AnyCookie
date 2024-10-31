export type Settings = {
  isFromFile: boolean
  url: string
  roundImage: boolean
  isDefaultImage: boolean
  saveProportions: boolean
  dropShadow: boolean
}

export const settings: Settings = {
  isFromFile: false,
  url: "",
  roundImage: false,
  isDefaultImage: true,
  saveProportions: true,
  dropShadow: true
}