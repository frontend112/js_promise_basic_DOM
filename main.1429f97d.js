parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";var n=document.querySelector(".logo"),e=function(n){return new Promise(function(e,t){return n?e("Promise was resolved!"):t(new Error("Promise was rejected"))})},t=function(){return e(!0)},r=function(){return e(!1)},c=function(n,e){var t=document.createElement("div");t.textContent=n,t.className=e,document.body.appendChild(t)},o=function(e){n.addEventListener("click",function(){c(e,"message")})},u=function(e){n.addEventListener("click",function(){setTimeout(function(){c(e,"error-message")},3e3)})};t().then(function(n){return o(n)}).catch(function(n){return u(n)}),r().then(function(n){return o(n)}).catch(function(n){return u(n)});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.1429f97d.js.map