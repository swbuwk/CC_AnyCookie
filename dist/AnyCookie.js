(()=>{"use strict";var e={730:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.addSettings=void 0;const n=o(131),i=o(451),s=o(374),a=o(936),d=o(923);t.addSettings=()=>{if(!l("menu")?.childNodes?.length)return;if("prefs"!==Game.onMenu)return;const e=document.createElement("div");e.id="ACSettings",e.className="subsection";const t=document.createElement("div");t.className="title",t.innerHTML="Any Cookie Settings";const o=document.createElement("div");o.className="listing";const r=document.createElement("a");r.id="switchButton",r.classList.add("smallFancyButton","option"),r.innerHTML="Get image from: "+(i.settings.isFromFile?"file":"link");const c=(0,s.createFileUploader)(),p=(0,a.createLinkUploader)();(0,d.handleUploadesrToggle)(c,p),r.onclick=()=>{i.settings.isFromFile=!i.settings.isFromFile,(0,d.handleUploadesrToggle)(c,p),(0,n.updateBigCookie)(),r.innerHTML="Get image from: "+(i.settings.isFromFile?"file":"link"),PlaySound("snd/tick.mp3")};const g=document.createElement("label");g.innerHTML="(note: file uploaded images is stored in your browser (localstorage), not in the game's save file!)",o.appendChild(r),o.appendChild(g),o.appendChild(document.createElement("br")),o.appendChild(c),o.appendChild(p),o.appendChild(document.createElement("br"));const m=document.createElement("a");m.id="roundingSettingOption",m.classList.add("smallFancyButton","option","prefButton"),m.classList.toggle("off",!i.settings.roundImage),m.innerHTML=`Round image (${i.settings.roundImage?"ON":"OFF"})`,m.onclick=()=>{i.settings.roundImage=!i.settings.roundImage,(0,n.updateBigCookie)(),m.innerHTML=`Round image (${i.settings.roundImage?"ON":"OFF"})`,m.classList.toggle("off",!i.settings.roundImage);const e=l("fileUploadCircleCover");e&&(e.style.display=i.settings.roundImage?"block":"none"),PlaySound("snd/tick.mp3")},o.appendChild(m);const u=document.createElement("a");u.id="saveProportionsSettingOption",u.classList.add("smallFancyButton","option","prefButton"),u.classList.toggle("off",!i.settings.saveProportions),u.innerHTML=`Save proportions (${i.settings.saveProportions?"ON":"OFF"})`,u.onclick=()=>{i.settings.saveProportions=!i.settings.saveProportions,(0,n.updateBigCookie)(),u.innerHTML=`Save proportions (${i.settings.saveProportions?"ON":"OFF"})`,u.classList.toggle("off",!i.settings.saveProportions);const e=l("fileUploadPreview");e&&(e.style.objectFit=i.settings.saveProportions?"contain":"fill"),PlaySound("snd/tick.mp3")},o.appendChild(u);const y=document.createElement("a");y.id="resetButton",y.classList.add("smallFancyButton","option","warning"),y.innerHTML="Reset to default",y.onclick=()=>{i.settings.isFromFile=!1,i.settings.url="",i.settings.roundImage=!1,localStorage.setItem("anyCookieImage",""),(0,d.handleUploadesrToggle)(c,p),(0,n.updateBigCookie)(),Game.Notify("All image data removed!","Here we go again",[10,0]),PlaySound("snd/tick.mp3")},o.appendChild(document.createElement("br")),o.appendChild(y),e.appendChild(t),e.appendChild(o),l("menu")?.insertBefore(e,l("menu")?.childNodes[3]||null)}},113:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.applySettings=void 0;const n=o(923),i=o(131);t.applySettings=()=>{(0,i.updateBigCookie)();const e=l("ACfileUploader"),t=l("AClinkUploader");e&&t&&(0,n.handleUploadesrToggle)(e,t)}},923:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.handleUploadesrToggle=t.handleSetImage=void 0;const n=o(451),i=o(131);t.handleSetImage=(e,t)=>{const o=t?localStorage.getItem("anyCookieImage"):n.settings.url;PlaySound("snd/tick.mp3"),o!==e&&(n.settings.isFromFile=t,t?localStorage.setItem("anyCookieImage",e):n.settings.url=e,(0,i.updateBigCookie)(),Game.Notify("New image set!","Looks wonderful!",[25,7]))},t.handleUploadesrToggle=(e,t)=>{e.style.display=n.settings.isFromFile?"flex":"none",t.style.display=n.settings.isFromFile?"none":"block"}},131:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.updateBigCookie=void 0;const n=o(451);t.updateBigCookie=()=>{const e=localStorage.getItem("anyCookieImage")||"",t=n.settings.isFromFile?e:n.settings.url;if(!t)return Game.Loader.Replace("perfectCookie.png","perfectCookie.png"),Game.Loader.Replace("cookieShadow.png","cookieShadow.png"),void(n.settings.isDefaultImage=!0);const o=n.settings.roundImage,i=new Image,s=document.createElement("canvas"),l=s.getContext("2d");i.src=t,i.setAttribute("crossorigin","anonymous"),i.onload=()=>{if(s.width=i.width,s.height=i.width,!l)return;if(o){const e=i.width;l.beginPath(),l.arc(e/2,e/2,e/2,0,2*Math.PI,!0),l.closePath(),l.clip()}if(n.settings.saveProportions){const e=Math.max(i.width,i.height)/i.width,t=i.width/e,o=i.height/e,n=(s.width-t)/2,a=(s.height-o)/2;l.drawImage(i,n,a,s.width-2*n,s.width-2*a)}else{const e=i.width;i.height=e,l.drawImage(i,0,0,e,e)}const e=new Image;e.src=s.toDataURL(),l.reset(),e.width=i.width,e.height=i.width,e.onload=()=>{const t=i.width;Game.prefs.fancy?(l.shadowColor="black",l.shadowBlur=15,l.shadowOffsetY=10,l.drawImage(e,15,15,t-30,t-30)):l.drawImage(e,0,0,t,t),Game.Loader.Replace("perfectCookie.png",s.toDataURL()),Game.Loader.Replace("cookieShadow.png","filler.png"),n.settings.isDefaultImage=!1}}}},451:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.settings=void 0,t.settings={isFromFile:!1,url:"",roundImage:!1,isDefaultImage:!0,saveProportions:!0}},374:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.createFileUploader=void 0;const n=o(923),i=o(131),s=o(451);t.createFileUploader=()=>{const e=localStorage.getItem("anyCookieImage"),t=document.createElement("a");t.classList.add("smallFancyButton","option"),t.style.height="138px",t.style.position="relative",t.style.display="flex",t.style.alignItems="center",t.style.justifyContent="center",t.id="ACfileUploader";const o=document.createElement("div");o.style.position="absolute",o.style.display=e?"none":"block",o.innerHTML="Choose file";const l=document.createElement("img");l.id="fileUploadPreview",l.style.width="100%",l.style.height="100%",l.style.position="absolute",l.style.zIndex="8",l.style.display=e?"block":"none",l.style.objectFit=s.settings.saveProportions?"contain":"fill",l.src=e||"";const a=document.createElement("div");a.id="fileUploadCircleCover",a.style.position="absolute",a.style.top="0",a.style.left="0",a.style.width="100%",a.style.height="100%",a.style.zIndex="9",a.style.backgroundColor="rgba(0, 0, 0, 0.8)",a.style.mixBlendMode="hard-light",a.style.display=s.settings.roundImage?"block":"none";const d=document.createElement("div");d.style.position="absolute",d.style.top="0",d.style.left="0",d.style.width="100%",d.style.height="100%",d.style.zIndex="10",d.style.backgroundColor="gray",d.style.borderRadius="50%";const r=document.createElement("div");r.style.position="absolute",r.style.top="10px",r.style.right="10px",r.style.zIndex="11",r.style.cursor="pointer",r.style.display=e?"block":"none",r.innerHTML="Clear";const c=document.createElement("input");return c.type="file",c.style.width="100%",c.style.height="100%",c.style.opacity="0",c.style.position="absolute",c.style.cursor="pointer",c.style.zIndex="10",c.id="ACfileInput",c.onchange=e=>{const t=e.target,i=t?.files?.[0],s=new FileReader;i&&(s.readAsDataURL(i),s.onload=()=>{(0,n.handleSetImage)(s.result,!0),l.src=s.result,l.style.display="block",r.style.display="block",o.style.display="none"})},r.onclick=()=>{localStorage.setItem("anyCookieImage",""),l.src="",l.style.display="none",r.style.display="none",o.style.display="block",(0,i.updateBigCookie)(),PlaySound("snd/tick.mp3"),Game.Notify("Image removed!","Here we go again",[10,0])},t.appendChild(c),t.appendChild(l),t.appendChild(r),t.appendChild(o),t.appendChild(a),a.appendChild(d),t}},936:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.createLinkUploader=void 0;const n=o(451),i=o(923),s=o(131);t.createLinkUploader=()=>{const e=document.createElement("div");e.id="AClinkUploader",e.style.display="flex",e.style.alignItems="center";const t=document.createElement("input");t.type="text",t.id="AClinkInput",t.style.userSelect="all",t.style.width="300px",t.placeholder="https://example.com",t.value=n.settings.url;const o=document.createElement("a");o.id="ACapplyButton",o.classList.add("smallFancyButton","option"),o.style.width="30px",o.innerHTML="Apply";const l=document.createElement("a");l.id="ACclearButton",l.classList.add("smallFancyButton","option"),l.style.width="30px",l.innerHTML="Clear";const a=()=>{n.settings.url="",t.value="",PlaySound("snd/tick.mp3"),n.settings.isDefaultImage||((0,s.updateBigCookie)(),Game.Notify("Image removed!","Here we go again",[10,0]))};return o.onclick=()=>{t.value?(0,i.handleSetImage)(t.value,!1):a()},l.onclick=a,e.appendChild(t),e.appendChild(o),e.appendChild(l),e}}},t={};function o(n){var i=t[n];if(void 0!==i)return i.exports;var s=t[n]={exports:{}};return e[n](s,s.exports,o),s.exports}(()=>{const e=o(730),t=o(113),n=o(131),i=o(451),s={init:()=>{const t=Game.UpdateMenu;Game.UpdateMenu=()=>{t(),(0,e.addSettings)()};const o=Game.ToggleFancy;Game.ToggleFancy=()=>{o(),(0,n.updateBigCookie)()}},save:()=>JSON.stringify(i.settings),load:e=>{const o=JSON.parse(e);Object.keys(o).forEach((e=>{i.settings[e]=o[e]})),(0,t.applySettings)()}};"undefined"!=typeof Steam?setTimeout((function(){Game.registerMod("AnyCookie",s)}),2e3):Game.registerMod("AnyCookie",s)})()})();
//# sourceMappingURL=AnyCookie.js.map