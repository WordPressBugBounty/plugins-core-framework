"use strict";{const t="cf-theme-dark",e="cf-theme-light",o="cf-theme",n=300,a="cf-theme-toggle-button",l=o=>[...document.getElementsByClassName(a)].forEach((n=>{n.classList.remove("dark"===o?e:t),n.classList.add("dark"===o?t:e)})),s=()=>{const t=`* { \n\t\t\ttransition-property: color, background-color, border-color, text-decoration-color, fill, stroke !important;\n\t\t\ttransition-timing-function: ease-in-out !important;\n\t\t\ttransition-duration: ${n}ms !important;\n\t\t}`,e=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.appendChild(document.createTextNode(t)),e.appendChild(o),setTimeout((()=>o.remove()),n)},c=()=>{const o=document.querySelector("html");(null==o?void 0:o.classList.contains(t))&&[...document.getElementsByClassName(a)].forEach((o=>{o.classList.remove(t),o.classList.add(e)}))};document.addEventListener("DOMContentLoaded",(()=>{null!==localStorage.getItem(o)?"dark"===localStorage.getItem(o)?l("light"):l("dark"):c(),[...document.getElementsByClassName(a)].forEach((n=>n.addEventListener("click",(n=>{var a,c,i;n.preventDefault(),n.stopPropagation(),s();const d=null===(a=document.getElementsByTagName("html"))||void 0===a?void 0:a[0];null===(c=null==d?void 0:d.classList)||void 0===c||c.toggle(t),null===(i=null==d?void 0:d.classList)||void 0===i||i.toggle(e),l((null==d?void 0:d.classList.contains(t))?"light":"dark"),localStorage.setItem(o,(null==d?void 0:d.classList.contains(t))?"dark":"light")}))))}))}