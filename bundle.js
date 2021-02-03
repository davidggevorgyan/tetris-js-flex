(()=>{"use strict";var e={636:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(645),i=n.n(r)()((function(e){return e[1]}));i.push([e.id,"#main {\n\tposition: absolute;\n\ttop: 50%;\n\tleft: 50%;\n\tmargin-right: -50%;\n\ttransform: translate(-50%, -50%);\n\twidth: 360px;\n\tborder: 1px;\n\tborder-color: black;\n\tborder-style: solid;\n}\n\n#field {\n\tdisplay: flex;\n\tflex-flow: row wrap;\n\tjustify-content: center;\n}\n\n.flex-cell {\n\tflex: 0 0 9%;\n\tmargin: 1px;\n\tborder: 1px;\n\tborder-radius: 7%;\n\tborder-color: azure;\n\tborder-style: solid;\n\tmin-width: 30px;\n\tmin-height: 30px;\n\tmax-width: 30px;\n\tmax-height: 30px;\n\ttext-align: center;\n\tfont-size: 1.7em;\n\tfont-family: Arial, Helvetica, sans-serif;\n\tbackground-color: gainsboro;\n}\n\n#menu {\n\tdisplay: flex;\n\tflex-flow: row nowrap;\n\tjustify-content: space-around;\n\tmargin: 25px 0 10px;\n\tfont-size: xx-large;\n}\n\n#game-over {\n\tposition: absolute;\n\ttop: 50%;\n\tleft: 50%;\n\tmargin-right: -50%;\n\ttransform: translate(-50%, -50%);\n\tfont-size: 160px;\n\tz-index: 100;\n}\n",""]);const o=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(r)for(var o=0;o<this.length;o++){var a=this[o][0];null!=a&&(i[a]=!0)}for(var l=0;l<e.length;l++){var s=[].concat(e[l]);r&&i[s[0]]||(n&&(s[2]?s[2]="".concat(n," and ").concat(s[2]):s[2]=n),t.push(s))}},t}},379:(e,t,n)=>{var r,i=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),o=[];function a(e){for(var t=-1,n=0;n<o.length;n++)if(o[n].identifier===e){t=n;break}return t}function l(e,t){for(var n={},r=[],i=0;i<e.length;i++){var l=e[i],s=t.base?l[0]+t.base:l[0],c=n[s]||0,u="".concat(s," ").concat(c);n[s]=c+1;var f=a(u),h={css:l[1],media:l[2],sourceMap:l[3]};-1!==f?(o[f].references++,o[f].updater(h)):o.push({identifier:u,updater:y(h,t),references:1}),r.push(u)}return r}function s(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var a=i(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var c,u=(c=[],function(e,t){return c[e]=t,c.filter(Boolean).join("\n")});function f(e,t,n,r){var i=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=u(t,i);else{var o=document.createTextNode(i),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(o,a[t]):e.appendChild(o)}}function h(e,t,n){var r=n.css,i=n.media,o=n.sourceMap;if(i?e.setAttribute("media",i):e.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var d=null,p=0;function y(e,t){var n,r,i;if(t.singleton){var o=p++;n=d||(d=s(t)),r=f.bind(null,n,o,!1),i=f.bind(null,n,o,!0)}else n=s(t),r=h.bind(null,n,t),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else i()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var n=l(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var i=a(n[r]);o[i].references--}for(var s=l(e,t),c=0;c<n.length;c++){var u=a(n[c]);0===o[u].references&&(o[u].updater(),o.splice(u,1))}n=s}}}}},t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={id:r,exports:{}};return e[r](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),(()=>{function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this.height=e,this.width=n,this.fieldData=this.createField()}var n,r;return n=t,(r=[{key:"createField",value:function(){for(var e=[],t=0;t<this.height;t++){e.push([]);for(var n=0;n<this.width;n++)e[t][n]=0}return e}},{key:"renderField",value:function(){for(var e=document.querySelector("#field");e.firstChild;)e.removeChild(e.firstChild);for(var t=0;t<this.height;t++)for(var n=0;n<this.width;n++){var r=document.createElement("div");r.setAttribute("class","flex-cell"),r.setAttribute("id","cell-".concat(t,"-").concat(n)),1===this.fieldData[t][n]&&(r.style.backgroundColor="red"),e.append(r)}}},{key:"mergeFieldAndFigure",value:function(e){for(var t=0;t<e.type.length;t++)for(var n=0;n<e.type[0].length;n++)1===e.type[t][n]&&(this.fieldData[e.y+t][e.x+n]=e.type[t][n])}},{key:"hasLeftCollisions",value:function(e){for(var t=0;t<e.type.length;t++)for(var n=0;n<e.type[0].length;n++)if(1===e.type[t][n]&&void 0===this.fieldData[0][e.x+n-1]||1===e.type[t][n]&&1===this.fieldData[e.y+t][e.x+n-1])return!0;return!1}},{key:"hasRightCollisions",value:function(e){for(var t=e.type[0].length;t>=0;t--)for(var n=0;n<e.type.length;n++)if(1===e.type[n][t]&&void 0===this.fieldData[0][e.x+t+1]||1===e.type[n][t]&&1===this.fieldData[e.y+n][e.x+t+1])return!0;return!1}},{key:"hasDownCollisions",value:function(e){for(var t=0;t<e.type.length;t++)for(var n=0;n<e.type[0].length;n++)if(1===e.type[t][n]&&e.y+t>=this.fieldData.length-1||1===e.type[t][n]&&1===this.fieldData[e.y+t+1][e.x+n])return this.mergeFieldAndFigure(e,this.fieldData),!0;return!1}},{key:"hasRotateCollisions",value:function(e){if(e.x<0||e.x+e.type.length-1>=this.fieldData[0].length)return!0;for(var t=0;t<e.type.length;t++)for(var n=0;n<e.type[0].length;n++)if(1===this.fieldData[e.y+t][e.x+n])return!0;return!1}},{key:"fullRowCleanup",value:function(){var e=this;this.fieldData.forEach((function(t,n){t.every((function(e){return 1===e}))&&(e.fieldData.splice(n,1),e.fieldData.unshift(Array(10).fill(0)),e.renderField(e.fieldData),document.querySelector("#score").innerHTML=+document.querySelector("#score").innerText+100)}))}},{key:"isGameOver",value:function(e){for(var t=0;t<e.type.length;t++)for(var n=0;n<e.type[0].length;n++)if(1===this.fieldData[e.y+t][e.x+n])return document.onkeydown=null,document.querySelector("body").style.backgroundColor="brown",document.querySelector("#game-over").style.display="",clearInterval(document.querySelector("#main").getAttribute("timerID")),!0;return!1}}])&&e(n.prototype,r),t}();function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}function o(e,t,n){if(e!==t)throw new TypeError("Private static access of wrong provenance");return n.get?n.get.call(e):n.value}var a=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.type=t,this.x=4,this.y=0}return i(e,null,[{key:"create",value:function(){return new e(o(e,e,l)[Math.floor(Math.random()*Math.floor(o(e,e,l).length))])}}]),i(e,[{key:"down",value:function(){this.eraseFigure(),this.y+=1,this.renderFigure()}},{key:"left",value:function(){this.eraseFigure(),this.x-=1,this.renderFigure()}},{key:"right",value:function(){this.eraseFigure(),this.x+=1,this.renderFigure()}},{key:"rotate",value:function(){this.eraseFigure(),this.type=this.type.reverse();for(var e=0;e<this.type.length;e++)for(var t=0;t<e;t++){var n=this.type[e][t];this.type[e][t]=this.type[t][e],this.type[t][e]=n}this.renderFigure()}},{key:"renderFigure",value:function(){for(var e=0;e<this.type.length;e++)for(var t=0;t<this.type[0].length;t++)0!==this.type[e][t]&&(document.querySelector("#cell-".concat(this.y+e,"-").concat(this.x+t," ")).style.backgroundColor="red")}},{key:"eraseFigure",value:function(){for(var e=0;e<this.type.length;e++)for(var t=0;t<this.type[0].length;t++)0!==this.type[e][t]&&(document.querySelector("#cell-".concat(this.y+e,"-").concat(this.x+t," ")).style=null)}}]),e}(),l={writable:!0,value:[[[1,1],[1,1]],[[0,0,1],[1,1,1],[0,0,0]],[[1,0,0],[1,1,1],[0,0,0]],[[1,0,0],[1,1,0],[0,1,0]],[[0,1,0],[1,1,0],[1,0,0]],[[0,1,0],[1,1,1],[0,0,0]],[[0,1,0,0],[0,1,0,0],[0,1,0,0],[0,1,0,0]]]},s=n(379),c=n.n(s),u=n(636);c()(u.Z,{insert:"head",singleton:!1}),u.Z.locals;const f=n.p+"favicon.png";var h=new t(20,10);h.renderField();var d=a.create();function p(){if(h.hasDownCollisions(d)){h.fullRowCleanup();var e=a.create();e.renderFigure(),h.isGameOver(e),d=e}else d.down()}d.renderFigure(),document.onkeydown=function(e){switch(e.which){case 37:h.hasLeftCollisions(d)||d.left();break;case 38:h.hasRotateCollisions(d)||d.rotate();break;case 39:h.hasRightCollisions(d)||d.right();break;case 40:p();break;default:return}e.preventDefault()},document.querySelector("#main").setAttribute("timerID",setInterval(p,500)),document.querySelector("link").setAttribute("href",f)})()})();