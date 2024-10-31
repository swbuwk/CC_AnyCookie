export const imageFitVariants = ["contain", "cover", "fill"] as const
export const imageFitDescriptions = [
  "(contain: changes width and height to make sure image fits inside, saving proportions)",
  "(cover: changes width and height to fill all space, saving proportions)",
  "(fill: changes width and height to fill all space, not saving proportions)"
]

export type Settings = {
  isFromFile: boolean
  url: string
  roundImage: boolean
  isDefaultImage: boolean
  imageFit: typeof imageFitVariants[number]
  dropShadow: boolean
}

export const settings: Settings = {
  isFromFile: false,
  url: "",
  roundImage: false,
  isDefaultImage: true,
  imageFit: "contain",
  dropShadow: true
}