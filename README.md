# Any Cookie
![image](https://github.com/user-attachments/assets/bd798fb9-bc0b-4f6f-896c-6167bb34c67f)

# Installation
### Steam
<a href="https://steamcommunity.com/sharedfiles/filedetails/?id=3357678293" target="_blank">https://steamcommunity.com/sharedfiles/filedetails/?id=3357678293</a>


### Userscript (browser)
Code for tampermonkey:
```
// ==UserScript==
// @name         Any Cookie skin
// @namespace    http://tampermonkey.net/
// @version      2024-10-25
// @description  Big cookie skin manager! Made by @swbuwk
// @author       You
// @match        http://*/*
// @include http://orteil.dashnet.org/cookieclicker/
// @include http://orteil.dashnet.org/cookieclicker/beta/
// @include https://orteil.dashnet.org/cookieclicker/
// @include https://orteil.dashnet.org/cookieclicker/beta/
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

const readyCheck = setInterval(() => {
  if (typeof Game !== 'undefined' && typeof Game.ready !== 'undefined' && Game.ready) {
    Game.LoadMod("https://swbuwk.github.io/CC_AnyCookie/dist/AnyCookie.js");
    clearInterval(readyCheck);
  }
}, 1000);
```

### Bookmarklet (browser)
Make a bookmark in browser and paste this into URL
```
javascript: (() => { Game.LoadMod("https://swbuwk.github.io/CC_AnyCookie/dist/AnyCookie.js"); })()
```
