!function(e){var t={};function n(o){if(t[o])return t[o].exports;var c=t[o]={i:o,l:!1,exports:{}};return e[o].call(c.exports,c,c.exports,n),c.l=!0,c.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var o="<style>\n\n</style>\n\n<div>\n  <p>Yo</p>\n  <slot></slot>\n</div>\n";customElements.define("custom-select",class extends HTMLElement{constructor(){super();const e=this.attachShadow({mode:"open"}),t=document.createElement("template");t.innerHTML=o,e.appendChild(t.content.cloneNode(!0)),console.log(this.children)}connectedCallback(){console.log(this.children)}},{extends:"select"}),customElements.define("custom-option",class extends HTMLElement{constructor(){super();const e=this.attachShadow({mode:"open"}),t=document.createElement("template");t.innerHTML="\n      <slot></slot>\n    ",e.appendChild(t.content.cloneNode(!0))}},{extends:"option"})}]);