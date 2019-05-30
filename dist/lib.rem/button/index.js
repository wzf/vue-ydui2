/*! vue-ydui2 v1.2.6 by wzf/vue-ydui2 (c) 2019 Licensed MIT */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.ydui=t():e.ydui=t()}(this,function(){return function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={exports:{},id:o,loaded:!1};return e[o].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="/dist/",t(0)}({0:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.ButtonGroup=t.Button=void 0;var r=n(27),i=o(r),a=n(159),l=o(a);t.Button=i.default,t.ButtonGroup=l.default},1:function(e,t){e.exports=function(e,t,n,o){var r,i=e=e||{},a=typeof e.default;"object"!==a&&"function"!==a||(r=e,i=e.default);var l="function"==typeof i?i.options:i;if(t&&(l.render=t.render,l.staticRenderFns=t.staticRenderFns),n&&(l._scopeId=n),o){var d=l.computed||(l.computed={});Object.keys(o).forEach(function(e){var t=o[e];d[e]=function(){return t}})}return{esModule:r,exports:i,options:l}}},2:function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(o[i]=!0)}for(r=0;r<t.length;r++){var a=t[r];"number"==typeof a[0]&&o[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},3:function(e,t,n){function o(e){for(var t=0;t<e.length;t++){var n=e[t],o=c[n.id];if(o){o.refs++;for(var r=0;r<o.parts.length;r++)o.parts[r](n.parts[r]);for(;r<n.parts.length;r++)o.parts.push(i(n.parts[r]));o.parts.length>n.parts.length&&(o.parts.length=n.parts.length)}else{for(var a=[],r=0;r<n.parts.length;r++)a.push(i(n.parts[r]));c[n.id]={id:n.id,refs:1,parts:a}}}}function r(){var e=document.createElement("style");return e.type="text/css",u.appendChild(e),e}function i(e){var t,n,o=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(o){if(b)return g;o.parentNode.removeChild(o)}if(m){var i=p++;o=f||(f=r()),t=a.bind(null,o,i,!1),n=a.bind(null,o,i,!0)}else o=r(),t=l.bind(null,o),n=function(){o.parentNode.removeChild(o)};return t(e),function(o){if(o){if(o.css===e.css&&o.media===e.media&&o.sourceMap===e.sourceMap)return;t(e=o)}else n()}}function a(e,t,n,o){var r=n?"":o.css;if(e.styleSheet)e.styleSheet.cssText=y(t,r);else{var i=document.createTextNode(r),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function l(e,t){var n=t.css,o=t.media,r=t.sourceMap;if(o&&e.setAttribute("media",o),r&&(n+="\n/*# sourceURL="+r.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var d="undefined"!=typeof document,s=n(4),c={},u=d&&(document.head||document.getElementsByTagName("head")[0]),f=null,p=0,b=!1,g=function(){},m="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,n){b=n;var r=s(e,t);return o(r),function(t){for(var n=[],i=0;i<r.length;i++){var a=r[i],l=c[a.id];l.refs--,n.push(l)}t?(r=s(e,t),o(r)):r=[];for(var i=0;i<n.length;i++){var l=n[i];if(0===l.refs){for(var d=0;d<l.parts.length;d++)l.parts[d]();delete c[l.id]}}}};var y=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},4:function(e,t){e.exports=function(e,t){for(var n=[],o={},r=0;r<t.length;r++){var i=t[r],a=i[0],l=i[1],d=i[2],s=i[3],c={id:e+":"+r,css:l,media:d,sourceMap:s};o[a]?o[a].parts.push(c):n.push(o[a]={id:a,parts:[c]})}return n}},5:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){var e=function(e){e.preventDefault(),e.stopPropagation()},t=!1;return{lock:function(n){t||(t=!0,(n||document).addEventListener("touchmove",e))},unlock:function(n){t=!1,(n||document).removeEventListener("touchmove",e)}}}(),o=function(){return{lock:function(e){r&&s(e||document.body,"g-fix-ios-prevent-scroll")},unlock:function(e){r&&c(e||document.body,"g-fix-ios-prevent-scroll")}}}(),r=!!(window.navigator&&window.navigator.userAgent||"").match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),i=function(e){var t=/^#([a-fA-F0-9]){3}(([a-fA-F0-9]){3})?$/,n=/^[rR][gG][bB][aA]\(\s*((25[0-5]|2[0-4]\d|1?\d{1,2})\s*,\s*){3}\s*(\.|\d+\.)?\d+\s*\)$/,o=/^[rR][gG][bB]\(\s*((25[0-5]|2[0-4]\d|1?\d{1,2})\s*,\s*){2}(25[0-5]|2[0-4]\d|1?\d{1,2})\s*\)$/;return t.test(e)||n.test(e)||o.test(e)},a=function(e){for(var t=e;t&&"HTML"!==t.tagName&&"BODY"!==t.tagName&&1===t.nodeType;){var n=document.defaultView.getComputedStyle(t).overflowY;if("scroll"===n||"auto"===n)return t;t=t.parentNode}return window},l=function(e,t){var n=e===window?document.body.offsetHeight:e.offsetHeight,o=e===window?0:e.getBoundingClientRect().top,r=t.getBoundingClientRect().top-o,i=r+t.offsetHeight;return r>=0&&r<n||i>0&&i<=n},d=function(e,t){return t=t||"",!(0===t.replace(/\s/g,"").length||!e)&&new RegExp(" "+t+" ").test(" "+e.className+" ")},s=function(e,t){d(e,t)||(e.className=""===e.className?t:e.className+" "+t)},c=function(e,t){if(d(e,t)){for(var n=" "+e.className.replace(/[\t\r\n]/g,"")+" ";n.indexOf(" "+t+" ")>=0;)n=n.replace(" "+t+" "," ");e.className=n.replace(/^\s+|\s+$/g,"")}},u=function(e){function t(n,o,r){if(n===o)return void("function"==typeof i&&i());var a=n+r>o?o:n+r;n>o&&(a=n-r<o?o:n-r),e===window?window.scrollTo(a,a):e.scrollTop=a,window.requestAnimationFrame(function(){return t(a,o,r)})}var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,o=arguments[2],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:500,i=arguments[4];window.requestAnimationFrame||(window.requestAnimationFrame=window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||function(e){return window.setTimeout(e,1e3/60)});var a=Math.abs(n-o),l=Math.ceil(a/r*50);t(n,o,l)};t.pageScroll=n,t.preventScroll=o,t.isIOS=r,t.isColor=i,t.getScrollview=a,t.checkInview=l,t.addClass=s,t.removeClass=c,t.scrollTop=u},23:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(5);t.default={name:"yd-button",props:{disabled:Boolean,actionType:{validator:function(e){return["button","submit","reset"].indexOf(e)>-1},default:"button"},type:{validator:function(e){return["primary","danger","warning","hollow","disabled"].indexOf(e)>-1},default:"primary"},size:{validator:function(e){return["mini","small","large"].indexOf(e)>-1}},bgcolor:{validator:function(e){return!e||(0,o.isColor)(e)}},color:{validator:function(e){return!e||(0,o.isColor)(e)}},shape:{validator:function(e){return["square","circle","angle"].indexOf(e)>-1},default:"square"},loading:{type:Boolean,default:!1},loadingColor:{validator:function(e){return!e||(0,o.isColor)(e)},default:"#FFF"},loadingTxt:String},computed:{rollingClasses:function(){var e="";return e="mini"===this.size?"yd-btn-rolling-mini":this.size&&"small"!==this.size?"yd-btn-rolling-large":"yd-btn-rolling-small"},classes:function(){var e="";e="mini"===this.size?"yd-btn-mini":"large"===this.size?"yd-btn-block":"yd-btn";var t=" yd-btn-"+this.type;this.bgcolor&&(t=""),this.disabled&&(t=" yd-btn-disabled");var n="";return n="angle"===this.shape?" yd-btn-angle":"circle"===this.shape?" yd-btn-circle":"",e+t+n}}}},26:function(e,t,n){t=e.exports=n(2)(),t.push([e.id,'@-webkit-keyframes yd-kf-rolling{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes yd-kf-rolling{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.yd-button{padding:0 .24rem}.yd-btn{text-align:center;position:relative;border:none;pointer-events:auto;-webkit-user-select:none;-ms-user-select:none;user-select:none;height:.6rem;font-size:.24rem;display:inline-block;padding:0 .2rem;box-sizing:content-box;border-radius:2px;white-space:nowrap}.yd-btn-loading{width:100%;height:100%;overflow:hidden;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;pointer-events:none;position:absolute;top:0;left:0;z-index:0}.yd-btn-block{border:none;width:100%;display:block;font-size:.3rem;height:.9rem;margin-top:.5rem;border-radius:3px}.yd-btn-block,.yd-btn-mini{text-align:center;position:relative;pointer-events:auto;-webkit-user-select:none;-ms-user-select:none;user-select:none}.yd-btn-mini{border:none;font-size:10px;border-radius:2px;white-space:nowrap;vertical-align:middle;padding:0 .2rem;height:.44rem}.yd-btn-primary{color:#fff}.yd-btn-primary:not(.yd-btn-loading){background-color:#04be02}.yd-btn-primary:not(.yd-btn-loading):active{background-color:#04ab02}.yd-btn-danger{color:#fff}.yd-btn-danger:not(.yd-btn-loading){background-color:#ef4f4f}.yd-btn-danger:not(.yd-btn-loading):active{background-color:#d74747}.yd-btn-warning{color:#fff}.yd-btn-warning:not(.yd-btn-loading){background-color:#ffb400}.yd-btn-warning:not(.yd-btn-loading):active{background-color:#e6a200}.yd-btn-disabled{background-color:#ccc;color:#f0f0f0;pointer-events:none}.yd-btn-disabled:active{background-color:#b8b8b8}.yd-btn-hollow{color:#454545;border:1px solid #eaeaea}.yd-btn-hollow:not(.yd-btn-loading){background-color:#fff}.yd-btn-hollow:not(.yd-btn-loading):active{background-color:#f7f7f7}.yd-btn-hollow.yd-btn-mini{border:none}.yd-btn-hollow.yd-btn-mini:after{position:absolute;z-index:2;top:-50%;left:-50%;content:"";width:200%;height:200%;-webkit-transform:scale(.5);transform:scale(.5);border:1px solid #ccc;border-radius:4px}.yd-btn-hollow .yd-btn-rolling>i,.yd-btn-hollow .yd-btn-rolling>i:after{border:1px solid #ccc;border-top-color:transparent}.yd-btn-circle{border-radius:200px}.yd-btn-angle{border-radius:0}.yd-btn-angle.yd-btn-hollow.yd-btn-mini:after{border-radius:0!important}.yd-btn-rolling{position:relative}.yd-btn-rolling-mini{width:10px;height:10px}.yd-btn-rolling-mini>i{margin-left:-5px;margin-top:-5px}.yd-btn-rolling-small{width:12px;height:12px}.yd-btn-rolling-small>i{margin-left:-6px;margin-top:-6px}.yd-btn-rolling-large{width:18px;height:18px}.yd-btn-rolling-large>i{margin-left:-9px;margin-top:-9px}.yd-btn-rolling>i,.yd-btn-rolling>i:after{width:inherit;height:inherit;border:1px solid #fff;position:absolute;border-top-color:transparent;border-radius:50%}.yd-btn-rolling>i{top:50%;left:50%;-webkit-animation:yd-kf-rolling .5s linear infinite;animation:yd-kf-rolling .5s linear infinite}.yd-btn-rolling>i:after{-webkit-transform:rotate(90deg);transform:rotate(90deg)}.hairline .yd-btn-block:not(.hairline .yd-btn-mini){border:.5px solid #dedede}',""])},27:function(e,t,n){n(32);var o=n(1)(n(23),n(30),null,null);e.exports=o.exports},30:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("button",{class:e.classes,style:{backgroundColor:e.bgcolor,color:e.color},attrs:{disabled:e.disabled||e.loading,type:e.actionType}},[e.loading?n("span",{staticClass:"yd-btn-loading"},[n("span",{staticClass:"yd-btn-rolling",class:e.rollingClasses,style:{marginRight:e.loadingTxt?"8px":"0"}},[n("i")]),e._v(" "),"large"===e.size?[e._v(e._s(e.loadingTxt))]:e._e()],2):e._e(),e._v(" "),n("span",{style:{visibility:e.loading?"hidden":""}},[e._t("default")],2)])},staticRenderFns:[]}},32:function(e,t,n){var o=n(26);"string"==typeof o&&(o=[[e.id,o,""]]),o.locals&&(e.exports=o.locals);n(3)("7016f218",o,!0)},40:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"yd-button-group"}},159:function(e,t,n){var o=n(1)(n(40),n(285),null,null);e.exports=o.exports},285:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"yd-button"},[e._t("default")],2)},staticRenderFns:[]}}})});