!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var i=(a=r,l=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),u="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(l),"/*# ".concat(u," */")),o=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[n].concat(o).concat([i]).join("\n")}var a,l,u;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(r)for(var o=0;o<this.length;o++){var a=this[o][0];null!=a&&(i[a]=!0)}for(var l=0;l<e.length;l++){var u=[].concat(e[l]);r&&i[u[0]]||(n&&(u[2]?u[2]="".concat(n," and ").concat(u[2]):u[2]=n),t.push(u))}},t}},function(e,t,n){var r=n(2),i=n(3);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var o={insert:"head",singleton:!1};r(i,o);e.exports=i.locals||{}},function(e,t,n){"use strict";var r,i=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},o=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),a=[];function l(e){for(var t=-1,n=0;n<a.length;n++)if(a[n].identifier===e){t=n;break}return t}function u(e,t){for(var n={},r=[],i=0;i<e.length;i++){var o=e[i],u=t.base?o[0]+t.base:o[0],c=n[u]||0,s="".concat(u," ").concat(c);n[u]=c+1;var f=l(s),d={css:o[1],media:o[2],sourceMap:o[3]};-1!==f?(a[f].references++,a[f].updater(d)):a.push({identifier:s,updater:v(d,t),references:1}),r.push(s)}return r}function c(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var i=n.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var a=o(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var s,f=(s=[],function(e,t){return s[e]=t,s.filter(Boolean).join("\n")});function d(e,t,n,r){var i=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=f(t,i);else{var o=document.createTextNode(i),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(o,a[t]):e.appendChild(o)}}function h(e,t,n){var r=n.css,i=n.media,o=n.sourceMap;if(i?e.setAttribute("media",i):e.removeAttribute("media"),o&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var p=null,y=0;function v(e,t){var n,r,i;if(t.singleton){var o=y++;n=p||(p=c(t)),r=d.bind(null,n,o,!1),i=d.bind(null,n,o,!0)}else n=c(t),r=h.bind(null,n,t),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else i()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=i());var n=u(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var i=l(n[r]);a[i].references--}for(var o=u(e,t),c=0;c<n.length;c++){var s=l(n[c]);0===a[s].references&&(a[s].updater(),a.splice(s,1))}n=o}}}},function(e,t,n){"use strict";n.r(t);var r=n(0),i=n.n(r)()(!1);i.push([e.i,"#main {\n\tposition: absolute;\n\ttop: 50%;\n\tleft: 50%;\n\tmargin-right: -50%;\n\ttransform: translate(-50%, -50%);\n\twidth: 360px;\n\tborder: 1px;\n\tborder-color: black;\n\tborder-style: solid;\n}\n\n#field {\n\tdisplay: flex;\n\tflex-flow: row wrap;\n\tjustify-content: center;\n}\n\n.flex-cell {\n\tflex: 0 0 9%;\n\tmargin: 1px;\n\tborder: 1px;\n\tborder-radius: 7%;\n\tborder-color: azure;\n\tborder-style: solid;\n\tmin-width: 30px;\n\tmin-height: 30px;\n\tmax-width: 30px;\n\tmax-height: 30px;\n\ttext-align: center;\n\tfont-size: 1.7em;\n\tfont-family: Arial, Helvetica, sans-serif;\n\tbackground-color: gainsboro;\n}\n\n#menu {\n\tdisplay: flex;\n\tflex-flow: row nowrap;\n\tjustify-content: space-around;\n\tmargin: 25px 0 10px;\n\tfont-size: xx-large;\n}\n\n#game-over {\n\tposition: absolute;\n\ttop: 50%;\n\tleft: 50%;\n\tmargin-right: -50%;\n\ttransform: translate(-50%, -50%);\n\tfont-size: 160px;\n\tz-index: 100;\n}\n",""]),t.default=i},function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}n.r(t);var i=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.height=t,this.width=n,this.fieldData=this.createField()}var t,n,i;return t=e,(n=[{key:"createField",value:function(){for(var e=[],t=0;t<this.height;t++){e.push([]);for(var n=0;n<this.width;n++)e[t][n]=0}return e}},{key:"renderField",value:function(){for(var e=document.querySelector("#field");e.firstChild;)e.removeChild(e.firstChild);for(var t=0;t<this.height;t++)for(var n=0;n<this.width;n++){var r=document.createElement("div");r.setAttribute("class","flex-cell"),r.setAttribute("id","cell-".concat(t,"-").concat(n)),1===this.fieldData[t][n]&&(r.style.backgroundColor="red"),e.append(r)}}},{key:"mergeFieldAndFigure",value:function(e){for(var t=0;t<e.type.length;t++)for(var n=0;n<e.type[0].length;n++)1===e.type[t][n]&&(this.fieldData[e.y+t][e.x+n]=e.type[t][n])}},{key:"hasLeftCollisions",value:function(e){for(var t=0;t<e.type.length;t++)for(var n=0;n<e.type[0].length;n++)if(1===e.type[t][n]&&void 0===this.fieldData[0][e.x+n-1]||1===e.type[t][n]&&1===this.fieldData[e.y+t][e.x+n-1])return!0;return!1}},{key:"hasRightCollisions",value:function(e){for(var t=e.type[0].length;t>=0;t--)for(var n=0;n<e.type.length;n++)if(1===e.type[n][t]&&void 0===this.fieldData[0][e.x+t+1]||1===e.type[n][t]&&1===this.fieldData[e.y+n][e.x+t+1])return!0;return!1}},{key:"hasDownCollisions",value:function(e){for(var t=0;t<e.type.length;t++)for(var n=0;n<e.type[0].length;n++)if(1===e.type[t][n]&&e.y+t>=this.fieldData.length-1||1===e.type[t][n]&&1===this.fieldData[e.y+t+1][e.x+n])return this.mergeFieldAndFigure(e,this.fieldData),!0;return!1}},{key:"hasRotateCollisions",value:function(e){if(e.x<0||e.x+e.type.length-1>=this.fieldData[0].length)return!0;for(var t=0;t<e.type.length;t++)for(var n=0;n<e.type[0].length;n++)if(1===this.fieldData[e.y+t][e.x+n])return!0;return!1}},{key:"fullRowCleanup",value:function(){var e=this;this.fieldData.forEach((function(t,n){t.every((function(e){return 1===e}))&&(e.fieldData.splice(n,1),e.fieldData.unshift(Array(10).fill(0)),e.renderField(e.fieldData),document.querySelector("#score").innerHTML=+document.querySelector("#score").innerText+100)}))}},{key:"isGameOver",value:function(e){for(var t=0;t<e.type.length;t++)for(var n=0;n<e.type[0].length;n++)if(1===this.fieldData[e.y+t][e.x+n])return document.onkeydown=null,document.querySelector("body").style.backgroundColor="brown",document.querySelector("#game-over").style.display="",clearInterval(document.querySelector("#main").getAttribute("timerID")),!0;return!1}}])&&r(t.prototype,n),i&&r(t,i),e}();function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}function l(e,t,n){if(e!==t)throw new TypeError("Private static access of wrong provenance");return n.get?n.get.call(e):n.value}var u=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.type=t,this.x=4,this.y=0}return a(e,null,[{key:"create",value:function(){return new e(l(e,e,c)[Math.floor(Math.random()*Math.floor(l(e,e,c).length))])}}]),a(e,[{key:"down",value:function(){this.eraseFigure(),this.y+=1,this.renderFigure()}},{key:"left",value:function(){this.eraseFigure(),this.x-=1,this.renderFigure()}},{key:"right",value:function(){this.eraseFigure(),this.x+=1,this.renderFigure()}},{key:"rotate",value:function(){this.eraseFigure(),this.type=this.type.reverse();for(var e=0;e<this.type.length;e++)for(var t=0;t<e;t++){var n=this.type[e][t];this.type[e][t]=this.type[t][e],this.type[t][e]=n}this.renderFigure()}},{key:"renderFigure",value:function(){for(var e=0;e<this.type.length;e++)for(var t=0;t<this.type[0].length;t++)0!==this.type[e][t]&&(document.querySelector("#cell-".concat(this.y+e,"-").concat(this.x+t," ")).style.backgroundColor="red")}},{key:"eraseFigure",value:function(){for(var e=0;e<this.type.length;e++)for(var t=0;t<this.type[0].length;t++)0!==this.type[e][t]&&(document.querySelector("#cell-".concat(this.y+e,"-").concat(this.x+t," ")).style=null)}}]),e}(),c={writable:!0,value:[[[1,1],[1,1]],[[0,0,1],[1,1,1],[0,0,0]],[[1,0,0],[1,1,1],[0,0,0]],[[1,0,0],[1,1,0],[0,1,0]],[[0,1,0],[1,1,0],[1,0,0]],[[0,1,0],[1,1,1],[0,0,0]],[[0,1,0,0],[0,1,0,0],[0,1,0,0],[0,1,0,0]]]},s=(n(1),n.p+"favicon.png"),f=new i(20,10);f.renderField();var d=u.create();function h(){if(f.hasDownCollisions(d)){f.fullRowCleanup();var e=u.create();e.renderFigure(),f.isGameOver(e),d=e}else d.down()}d.renderFigure(),document.onkeydown=function(e){switch(e.which){case 37:f.hasLeftCollisions(d)||d.left();break;case 38:f.hasRotateCollisions(d)||d.rotate();break;case 39:f.hasRightCollisions(d)||d.right();break;case 40:h();break;default:return}e.preventDefault()},document.querySelector("#main").setAttribute("timerID",setInterval(h,500)),document.querySelector("link").setAttribute("href",s)}]);