parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"DOAq":[function(require,module,exports) {

},{}],"TfLS":[function(require,module,exports) {
var define;
var e;(function(n,t){"use strict";!function(){for(var e=0,t=["ms","moz","webkit","o"],a=0;a<t.length&&!n.requestAnimationFrame;++a)n.requestAnimationFrame=n[t[a]+"RequestAnimationFrame"],n.cancelAnimationFrame=n[t[a]+"CancelAnimationFrame"]||n[t[a]+"CancelRequestAnimationFrame"];n.requestAnimationFrame||(n.requestAnimationFrame=function(t,a){var o=(new Date).getTime(),i=Math.max(0,16-(o-e)),r=n.setTimeout(function(){t(o+i)},i);return e=o+i,r}),n.cancelAnimationFrame||(n.cancelAnimationFrame=function(e){clearTimeout(e)})}();var a,o,i,r,s,l={autoRun:!0,barThickness:3,barColors:{0:"rgba(26,  188, 156, .9)",".25":"rgba(52,  152, 219, .9)",".50":"rgba(241, 196, 15,  .9)",".75":"rgba(230, 126, 34,  .9)","1.0":"rgba(211, 84,  0,   .9)"},shadowBlur:10,shadowColor:"rgba(0,   0,   0,   .6)",className:null},c=function(){a.width=n.innerWidth,a.height=5*l.barThickness;var e=a.getContext("2d");e.shadowBlur=l.shadowBlur,e.shadowColor=l.shadowColor;var t=e.createLinearGradient(0,0,a.width,0);for(var o in l.barColors)t.addColorStop(o,l.barColors[o]);e.lineWidth=l.barThickness,e.beginPath(),e.moveTo(0,l.barThickness/2),e.lineTo(Math.ceil(r*a.width),l.barThickness/2),e.strokeStyle=t,e.stroke()},m={config:function(e){for(var n in e)l.hasOwnProperty(n)&&(l[n]=e[n])},show:function(){var e,u,d,h;s||(s=!0,null!==i&&n.cancelAnimationFrame(i),a||((h=(a=t.createElement("canvas")).style).position="fixed",h.top=h.left=h.right=h.margin=h.padding=0,h.zIndex=100001,h.display="none",l.className&&a.classList.add(l.className),t.body.appendChild(a),u="resize",d=c,(e=n).addEventListener?e.addEventListener(u,d,!1):e.attachEvent?e.attachEvent("on"+u,d):e["on"+u]=d),a.style.opacity=1,a.style.display="block",m.progress(0),l.autoRun&&function e(){o=n.requestAnimationFrame(e),m.progress("+"+.05*Math.pow(1-Math.sqrt(r),2))}())},progress:function(e){return void 0===e?r:("string"==typeof e&&(e=(e.indexOf("+")>=0||e.indexOf("-")>=0?r:0)+parseFloat(e)),r=e>1?1:e,c(),r)},hide:function(){s&&(s=!1,null!=o&&(n.cancelAnimationFrame(o),o=null),function e(){if(m.progress("+.1")>=1&&(a.style.opacity-=.05,a.style.opacity<=.05))return a.style.display="none",void(i=null);i=n.requestAnimationFrame(e)}())}};"object"==typeof module&&"object"==typeof module.exports?module.exports=m:"function"==typeof e&&e.amd?e(function(){return m}):this.topbar=m}).call(this,window,document);
},{}],"KIzB":[function(require,module,exports) {
"use strict";require("normalize.css"),require("../css/loco-base.css"),require("../css/style.scss");var e=t(require("topbar"));function t(e){return e&&e.__esModule?e:{default:e}}function r(e){return c(e)||a(e)||o(e)||n()}function n(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function o(e,t){if(e){if("string"==typeof e)return s(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?s(e,t):void 0}}function a(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function c(e){if(Array.isArray(e))return s(e)}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}e.default.show(),e.default.config({shadowColor:"rgba(0, 0, 0, .1)"});var i=document.querySelector("#loading"),u=document.querySelector("#hero"),l=document.querySelector("header");document.onreadystatechange=function(){"complete"===document.readyState&&setTimeout(function(){i.style.display="none",e.default.hide()},1800)};var d=new IntersectionObserver(function(e,t){e.forEach(function(e){e.isIntersecting?l.classList.remove("header-scrolled"):l.classList.add("header-scrolled")})},{rootMargin:"-90% 0px 0px 0px"});d.observe(u);var f=document.querySelectorAll(".tech-stack svg"),m=document.querySelector(".tech-stack-name");function y(e){return function(){var t=m;t.innerText=e,t.style.display="block",v(e)}}function h(){m.style.display="none",f.forEach(function(e){return b(e,!1)})}function v(e){r(f).filter(function(t){return t.dataset.techname!==e}).forEach(b)}function b(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];t&&e.classList.add("blur-me"),!t&&e.classList.remove("blur-me")}f.forEach(function(e){e.addEventListener("mouseenter",y(e.dataset.techname)),e.addEventListener("mouseleave",h)});
},{"normalize.css":"DOAq","../css/loco-base.css":"DOAq","../css/style.scss":"DOAq","topbar":"TfLS"}]},{},["KIzB"], null)
//# sourceMappingURL=/main.76ef155b.js.map