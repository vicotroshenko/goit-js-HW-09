!function(){var t={buttonStart:document.querySelector("[data-start]"),buttonStop:document.querySelector("[data-stop]"),bodyRef:document.querySelector("body")};t.buttonStart.addEventListener("click",(function(e){o=setInterval((function(){t.bodyRef.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3),t.buttonStart.disabled=!0,t.buttonStop.disabled=!1})),t.buttonStop.addEventListener("click",(function(){clearInterval(o),t.buttonStart.disabled=!1,t.buttonStop.disabled=!0}));var o=null;t.buttonStop.disabled=!0}();
//# sourceMappingURL=01-color-switcher.6f1906d8.js.map
