const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]");let o=null;function n(){o=setInterval((()=>{document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3)}function l(){clearInterval(o)}t.addEventListener("click",n),e.addEventListener("click",l),console.log(n),console.log(l);
//# sourceMappingURL=01-color-switcher.b83b3dde.js.map
