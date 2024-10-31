import { settings } from "../settings"

export const updateBigCookie = (notify?: boolean) => {
  const fileUrl = localStorage.getItem("anyCookieImage") || ""
  const url = settings.isFromFile ? fileUrl : settings.url

  if (!url) {
    Game.Loader.Replace("perfectCookie.png", "perfectCookie.png");
    Game.Loader.Replace("cookieShadow.png", "cookieShadow.png");
    settings.isDefaultImage = true
    return
  }

  const isRound = settings.roundImage

  const image = new Image();
  let canvas = document.createElement("canvas");
  let ctx = canvas.getContext("2d");

  image.src = url;
  image.setAttribute('crossorigin', 'anonymous');

  image.onerror = (e) => {
    Game.Notify("Image is blocked from this URL!", "Try downloading it as a file", [15, 5])
    return
  }

  image.onload = () => {
    canvas.width = image.width;
    canvas.height = image.width;

    if (!ctx) return;
    if (isRound) {
      const w = image.width;
      ctx.beginPath();
      ctx.arc(w/2, w/2, w/2, 0, Math.PI*2, true);
      ctx.closePath();
      ctx.clip()
    }

    if (!settings.saveProportions) {
      const w = image.width;
      image.height = w;
      ctx.drawImage(image, 0, 0, w, w);
    } else {
      const maxSide = Math.max(image.width, image.height)
      const sizeDiff = maxSide / image.width
      const newWidth = image.width / sizeDiff
      const newHeight = image.height / sizeDiff
      const x = (canvas.width - newWidth) / 2
      const y = (canvas.height - newHeight) / 2
      console.log(canvas.width, canvas.height, image.width, image.height, x, y)
      ctx.drawImage(image, x, y, canvas.width - x * 2, canvas.width - y * 2);
    }


    const processedImage = new Image()
    processedImage.src = canvas.toDataURL()

    // does not work on Steam
    // ctx.reset();
    canvas = document.createElement("canvas");
    ctx = canvas.getContext("2d");

    processedImage.width = image.width;
    processedImage.height = image.width;

    processedImage.onload = () => {
      const w = image.width;
      canvas.width = w;
      canvas.height = w;

      if (!ctx) return;

      if (Game.prefs.fancy) {
        ctx.shadowColor = "black";
        ctx.shadowBlur = 15;
        ctx.shadowOffsetY = 10;

        ctx.drawImage(processedImage, 15, 15, w-30, w-30)
      } else {
        ctx.drawImage(processedImage, 0, 0, w, w)
      }

      Game.Loader.Replace("perfectCookie.png", canvas.toDataURL());
      Game.Loader.Replace("cookieShadow.png", "filler.png");
      settings.isDefaultImage = false
      if (notify) Game.Notify(`New image set!`, "Looks wonderful!", [25, 7])
    }
  };
}