!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n=e();for(var r in n)("object"==typeof exports?exports:t)[r]=n[r]}}(this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var i=n[r]={exports:{},id:r,loaded:!1};return t[r].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){t.exports=n(39)},function(t,e){"use strict";var n={isArray:Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)},funcOrValue:function(t,e){return"function"==typeof t?t.call(e):t},execFuncs:function(t,e,r){t&&(n.isArray(r)||(r=[r])),"function"==typeof t?t.apply(e,r):n.isArray(t)&&t.length&&t.forEach(function(t){t&&t.apply(e,r)})},blend:["source-over","source-in","source-out","source-atop","destination-over","destination-in","destination-out","destination-atop","lighter","copy","xor","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],pointInRect:function(t,e,n,r,i,o){return!(t<n||t>r||e<i||e>o)},firstValuable:function(t,e,n){return"undefined"==typeof t?"undefined"==typeof e?n:e:t}};t.exports=n},function(t,e){"use strict";var n=3.141593;t.exports=function(t,e,r,i,o,a){var s=o?-o/180*n:0,l=t,u=e;return o&&(l=(t-r)*Math.cos(s)-(e-i)*Math.sin(s)+r,u=(t-r)*Math.sin(s)+(e-i)*Math.cos(s)+i),a?[l,u]:{x:l,y:u}}},,function(t,e){"use strict";t.exports={xywh:["sx","sy","sw","sh","tx","ty","tw","th"],txywh:["tx","ty","tw","th"],sxywh:["sx","sy","sw","sh"],devFlag:"__EASYCANVAS_DEVTOOL__",version:"0.7.2"}},,,,,function(t,e){"use strict";var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r={},i=[],o=0,a=function t(e,a,s){var l=s||{},u=t.cacheCanvas;if("object"===("undefined"==typeof e?"undefined":n(e))){var c=e;return l.callbackArgs=l.callbackArgs||[],void t(c.shift(),function(e){l.callbackArgs.push(e),c.length>1?t(c,a,l):t(c[0],function(t){l.callbackArgs.push(t),a(l.callbackArgs)},l)},s)}var f=e+"_"+JSON.stringify(s)+"_"+u;if(r[f])return a?void(r[f].width&&a?a(r[f]):setTimeout(function(){t(e,a,s)},100)):r[f];var h=new Image;l.block?(h.src=e,o++):0===o?h.src=e:i.push({imgObj:h,src:e}),r[f]=h;var d=void 0;return(l.canvas||l.alphaColor||u)&&(d=document.createElement("canvas"),d.width=d.height||0,r[f]=d),h.onload=function(){if("jpg"===h.src.substr(-3)||"jpeg"===h.src.substr(-3)||"bmp"===h.src.substr(-3)?h.$noAlpha=!0:0===h.src.indexOf("data:image/jpg;")&&(h.$noAlpha=!0),l.block&&(o--,0===o&&(i.forEach(function(t){t.imgObj.src=t.src}),i.splice(0))),d&&(l.canvas||l.alphaColor||u)){var t=d.getContext("2d");if(d.width=h.width,d.height=h.height,d.$noAlpha=h.$noAlpha,t.drawImage(h,0,0),l.alphaColor){for(var e=t.getImageData(0,0,h.width,h.height),n=0;n<e.data.length;n+=4){var r=e.data[n]+e.data[n+1]+e.data[n+2],s=1;e.data[n]<s&&e.data[n+1]<s&&e.data[n+2]<s&&(e.data[n+3]=Math.floor(r/255))}t.putImageData(e,0,0),d.$noAlpha=!1}h=d}a&&a(h)},h.onerror=function(){r[f]=h},d||h};a.cacheCanvas=!1,t.exports=a},function(t,e){"use strict";function n(t,e){if(t&&t.match(/^data:/))return void(e&&e(t));if(i[t])return void(i[t]!==r?e(i[t]):setTimeout(function(){n(t,e)},100));i[t]=r;var o=new XMLHttpRequest;o.onload=function(){var n=new FileReader;n.onloadend=function(){i[t]=n.result,e&&e(n.result)},n.readAsDataURL(o.response)},o.open("GET",t),o.responseType="blob",o.send()}var r="processing",i={};t.exports=n},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}var i=n(2),o=(r(i),3.141593);t.exports=function(t,e,n,r,i,a,s,l,u){var c=u?-u/180*o:0;return c&&(t=(t-s)*Math.cos(c)-(e-l)*Math.sin(c)+s,e=(t-s)*Math.sin(c)+(e-l)*Math.cos(c)+l),t>=n&&t<=n+i&&e>=r&&e<=r+a}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}var i=n(2),o=(r(i),n(11)),a=r(o);t.exports=function(t,e,n,r,i,o,s,l,u,c,f){if(!f){if(e>o+l)return!1;if(o>e+r)return!1;if(t>i+s)return!1;if(i>t+n)return!1}var h=(0,a.default)(t,e,i,o,s,l,u,c,f)||(0,a.default)(t+n,e,i,o,s,l,u,c,f)||(0,a.default)(t,e+r,i,o,s,l,u,c,f)||(0,a.default)(t+n,e+r,i,o,s,l,u,c,f);if(h)return!0;var d=(0,a.default)(i,o,t,e,n,r,u,c,-f)||(0,a.default)(i+s,o,t,e,n,r,u,c,-f)||(0,a.default)(i,o+l,t,e,n,r,u,c,-f)||(0,a.default)(i+s,o+l,t,e,n,r,u,c,-f);return!!d||(e>o&&e+r<o+l&&t<i&&t+n>i+s||t>i&&t+n<i+s&&e<o&&e+r>o+l)}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o=n(1),a=r(o),s=n(4),l=r(s),u=n(19),c=r(u),f=n(18),h=r(f),d=n(16),p=r(d),y=n(17),v=r(y),g=n(20),x=r(g),m=n(15),$=r(m),b=n(32),w=r(b),k=n(31),O=r(k),T=n(33),V=r(T),M=function t(e){e.children&&e.children.forEach(function(n,r){n.$id||(e.children[r]=new _(n)),e.$id&&!e.$dom?(e.children[r].$canvas=e.$canvas,e.children[r].$parent=e):e.children[r].$canvas=e,t(e.children[r])})},A=function(t){var e=t||{};e.$id||(e.$id=Math.random().toString(36).substr(2)),e.$tickedTimes=e.$tickedTimes||0,e.content=e.content||{},e.style=e.style||{},e.style.tx=e.style.tx||0,e.style.ty=e.style.ty||0,e.style.scale=a.default.firstValuable(e.style.scale,1),e.style.opacity=a.default.firstValuable(e.style.opacity,1),e.style.zIndex=e.style.zIndex||0,e.style.locate=e.style.locate||"center";a.default.funcOrValue(e.content.img);l.default.xywh.forEach(function(t){e.style[t]=e.style[t]||0}),e.events=e.events||{};e.events.eIndex=e.events.eIndex,e.hooks=e.hooks||{};return e.children=e.children||[],M(e),e.$cache={},e.$styleCacheTime={},e},R=function(t){var e=this;this.$extendList.forEach(function(n){n.call(e,t)})},_=function(t){var e=A(t);for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(this[n]=e[n]);return R.call(this,e),this};_.prototype.$extendList=[],_.prototype.add=function(t){if(t)return this.children.push(t),M(this),this.children[this.children.length-1]},_.prototype.getRect=function(t,e){var n=this,r={};if(l.default.txywh.forEach(function(t){r[t]=n.getStyle(t,e)}),0===r.tw&&this.content.img&&!t){var i=a.default.funcOrValue(this.content.img,this);r.tw=i.width,r.th=i.height}var o=this.getStyle("locate");return"lt"===o||("ld"===o?r.ty-=r.th:"rt"===o?r.tx-=r.tw:"rd"===o?(r.tx-=r.tw,r.ty-=r.th):(r.tx-=r.tw>>1,r.ty-=r.th>>1)),r},_.prototype.getSelfStyle=function(t){var e={};if(t)return a.default.funcOrValue(this.style[t],this);for(var n in this.style)e[n]=a.default.funcOrValue(this.style[n],this);return e},_.prototype.getStyle=function(t,e){var n=this;if(e&&void 0!==n.$cache[t])return n.$cache[t];var r=a.default.funcOrValue(n.style[t],n);if(n.$parent){var i=n.$parent.getStyle(t);if("tx"===t||"ty"===t)return i=a.default.firstValuable(i,0),i+a.default.firstValuable(r,0);if("scale"===t||"opacity"===t)return i=a.default.firstValuable(i,1),i*a.default.firstValuable(r,1)}return r},_.prototype.remove=function(t){return t?(this.$canvas.remove(t),void a.default.execFuncs(t.hooks.removed,t)):(this.$parent?this.$parent.remove(this):this.$canvas.remove(this),void a.default.execFuncs(this.hooks.removed,this))},_.prototype.update=function(t){if(t)for(var e in t)if("object"===i(t[e]))for(var n in t[e])this[e][n]=t[e][n];else this[e]=t[e]},_.prototype.getAllChildren=function(t){var e=this,n=t?[e]:[];return e.children.forEach(function(t){n=n.concat(t.getAllChildren(!0))}),n},_.prototype.getOuterRect=w.default,_.prototype.combine=O.default,_.prototype.uncombine=V.default,_.prototype.combineAsync=function(){return this.on("ticked",this.combine,100),this},_.prototype.nextTick=v.default,_.prototype.on=c.default,_.prototype.off=h.default,_.prototype.clear=p.default,_.prototype.trigger=x.default,_.prototype.broadcast=$.default,t.exports=_},,function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}var i=n(1),o=r(i);t.exports=function(){var t=Array.prototype.slice.call(arguments),e=t.shift();this.hooks[e]&&o.default.execFuncs(this.hooks[e],this,t),t.unshift(e),this.children&&this.children.forEach(function(e){e.broadcast.apply(e,t)})}},function(t,e){"use strict";t.exports=function(){this.children.forEach(function(t){t.remove()}),this.children=[]}},function(t,e){"use strict";t.exports=function(t){var e=function e(){t.apply(this,arguments),this.off("ticked",e)};this.on("ticked",e)}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}var i=n(1),o=r(i);t.exports=function(t,e){this.hooks[t]&&(this.hooks[t]!==e&&this.hooks[t].$handle!==e&&e?o.default.isArray(this.hooks[t])&&(this.hooks[t].indexOf(e)>=0?this.hooks[t][this.hooks[t].indexOf(e)]=void 0:this.hooks[t].indexOf(e.$handle)>=0&&(this.hooks[t][this.hooks[t].indexOf(e.$handle)]=void 0)):delete this.hooks[t])}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}var i=n(1),o=r(i);t.exports=function(t,e,n){var r=e;if(n){var i=this;r=function(){var t=Date.now();if(t>r.$lastTriggerTime+n){r.$lastTriggerTime=t;var o=Array.prototype.slice.call(arguments);e.apply(i,o)}},r.$lastTriggerTime=-1,r.$handle=e}this.hooks[t]?o.default.isArray(this.hooks[t])?this.hooks[t].push(r):this.hooks[t]=[this.hooks[t],r]:this.hooks[t]=r}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}var i=n(1),o=r(i);t.exports=function(){var t=Array.prototype.slice.call(arguments),e=t.shift();if(this.hooks[e])return o.default.execFuncs(this.hooks[e],this,t)}},,,,,,,,function(t,e){"use strict";var n=function(t){setTimeout(t,1e3/60)},r="undefined"!=typeof requestAnimationFrame?requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||n:n;t.exports=r},function(t,e,n){"use strict";var r=n(1),i=3.141593,o=function(t){return t.$lastPaintTime||Date.now()},a={linear:function(t,e,n){var r=o(this),i=!1,a=void 0,s=function(){var o=this.$lastPaintTime,l=(o-r)/n,u=(e-t)*l+t;if(i)if(e>t)for(;u>e;)u-=e-t;else for(;u<e;)u+=t-e;else e>t&&u>e?(s.$done=!0,u=e):e<t&&u<e&&(s.$done=!0,u=e);return l>=1&&a&&(a.call(this,u),a=null),u}.bind(this);return s.loop=function(){return i=!0,s},s.restart=function(){return r=o(this),s},s.then=function(t){return a=t,s},s},pendulum:function(t,e,n,r){var a=o(this),s=r||{};s.start=s.start||0;var l=!1,u=void 0,c=s.cycle||1,f=function(){var r=o(this),h=(r-a)/n;l?c&&(h%=c):c?h>c&&(h=c,f.$done=!0,h=c):h>1&&(f.$done=!0,h=1);var d=h*i*2-i/2+s.start/360*i,p=(e-t)*(Math.sin(d)+1)/2+t;return h>=c&&u&&(u.call(this,p),u=null),p}.bind(this);return f.loop=function(){return l=!0,f},f.restart=function(){return a=o(this),f},f.then=function(t){return u=t,f},f},ease:function(t,e,n){return this.pendulum(t,e,2*n,{cycle:.5})},oneByOne:function(t){var e=t,n=!1,r=function(){for(var t=0;t<e.length;t++){if(!e[t].$done)return e[t]();if(!e[t].$nextRestart&&(e[t].$nextRestart=!0,e[t+1]))return e[t+1].restart(),e[t+1]()}if(n){for(var r=0;r<e.length;r++)e[r].$done=!1,e[r].$nextRestart=!1,e[r].restart();return e[0]()}return e[e.length-1]()};return r.loop=function(){return n=!0,r},r}},s=function t(e,n,i,o,s){var l=(0,r.funcOrValue)(e[n]);l=l||0,e[n]=a[i].bind(t)(l,o,s)};for(var l in a)s[l]=a[l];t.exports=s},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}var i=(Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},n(4)),o=(r(i),n(1));r(o)},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}var i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},o=n(1),a=r(o),s=1,l=2,u=3;t.exports=function(){var t=this;setTimeout(function(){var e=t;if(e.$combine)return s;if(a.default.funcOrValue(e.style.visible,e)===!1)return u;var n=t.$canvas,r=e.getRect(!1,!0);if(r.tx<0||r.tr>n.width)return l;if(r.ty<0||r.tb>n.height)return l;for(var o=e.getAllChildren(!0),c=0;c<o.length;c++){var f=o[c],h=f.content.img;if(h&&h.src&&(!h.$painted||0===h.width||h.complete===!1||0===h.naturalHeight))return u;if(1!==f.getStyle("scale"))return u}var d=e.getOuterRect(!1,!0);if(d.tx=Math.floor(d.tx),d.ty=Math.floor(d.ty),d.tw=Math.round(d.tw),d.th=Math.round(d.th),d.tr=Math.round(d.tr),d.tb=Math.round(d.tb),d.tx<0||d.tr>n.width)return l;if(d.ty<0||d.tb>n.height)return l;var p=n.$children.filter(function(t){for(var e=0;e<o.length;e++)if(o[e].$id===t.$id)return!0}),y=n.$children,v=e.getStyle("opacity");p.forEach(function(t){t.settings.$combineGlobalAlpha=t.settings.globalAlpha,t.settings.globalAlpha=v>0?t.settings.globalAlpha/v:1}),n.$children=p,n.$paintContext.clearRect(0,0,n.width,n.height),n.$lastTickChildren=!1,n.$render(),p.forEach(function(t){t.settings.globalAlpha=t.settings.$combineGlobalAlpha});var g=document.createElement("canvas");g.width=d.tw,g.height=d.th;var x=g.getContext("2d");x.drawImage(n.$dom,d.tx,d.ty,d.tw,d.th,0,0,d.tw,d.th),e.children.forEach(function(t){t.$cache={}}),e.$combine={content:e.content,children:e.children,style:e.style},e.children=[],e.content={img:g};var m=e.getSelfStyle("tx")-(Math.floor(r.tx)-d.tx),$=e.getSelfStyle("ty")-(Math.floor(r.ty)-d.ty);return e.style=i({},e.style,{scale:1,tx:m,ty:$,tw:g.width,th:g.height}),n.$children=y,n.$lastTickChildren=!1,n.paint(),e.off("ticked",t.combine),s})}},function(t,e){"use strict";t.exports=function(t,e){var n=this,r=n.getRect(t,e);return r.tr=r.tx+r.tw,r.tb=r.ty+r.th,this.children.forEach(function(n){var i=n.getOuterRect(t,e);i.tx<r.tx&&(r.tx=i.tx),i.ty<r.ty&&(r.ty=i.ty),i.tr>r.tr&&(r.tr=i.tr),i.tb>r.tb&&(r.tb=i.tb),r.tw=r.tr-r.tx,r.th=r.tb-r.ty}),r}},function(t,e){"use strict";var n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t};t.exports=function(){n(this,this.$combine),this.$combine=!1}},,,,,,function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}var i=n(4),o=r(i),a=n(61),s=r(a),l=n(28),u=r(l),c=n(103),f=r(c),h=n(1),d=r(h),p=n(29),y=r(p),v=n(9),g=r(v),x=n(102),m=r(x),$=n(104),b=r($),w=n(13),k=r(w),O=n(30),T=(r(O),{painter:s.default,imgLoader:g.default,imgPretreat:m.default,multlineText:b.default,transition:y.default,tick:u.default,utils:d.default,mirror:f.default,class:{sprite:k.default},sprite:k.default,$version:o.default.version,env:"production"});T.extend=function(t){var e=T.sprite.prototype.$extendList;e.indexOf(t)>=0||e.push(t)},T.use=function(t){var e=T.painter.prototype.$extendList;e.indexOf(t)>=0||(t.onUse&&t.onUse(T),e.push(t))},T.component=function(t,e){t(T,e)};var V="undefined"!=typeof window;V&&(window.Easycanvas?console.warn("[Easycanvas] already loaded, it should be loaded only once."):window.Easycanvas=T),t.exports=T},,,,function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}var i=n(47),o=r(i),a=n(49),s=r(a),l=n(44),u=r(l),c=n(48),f=r(c),h=n(60),d=(r(h),{$render:s.default,$eventHandler:u.default,$perPaint:o.default,$rAFer:f.default});t.exports=d},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}var i,o=n(1),a=r(o),s=n(4),l=(r(s),"undefined"!=typeof wx||/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)),u=function(t){return t.sort(function(t,e){return a.default.funcOrValue(a.default.firstValuable(t.events.eIndex,t.style.zIndex),t)<a.default.funcOrValue(a.default.firstValuable(e.events.eIndex,e.style.zIndex),e)?1:-1})},c=function(t,e){var n=t.getRect();return a.default.pointInRect(e.canvasX,e.canvasY,n.tx,n.tx+n.tw,n.ty,n.ty+n.th)},f=function t(e,n,r){if(e&&e.length&&!n.$stopPropagation)for(var i=e.length,o=0;o<i;o++){var s=e[o];if(a.default.funcOrValue(s.style.visible,s)!==!1&&(!s.events||"none"!==s.events.pointerEvents)){if(c(s,n)){var l=s.events.interceptor;if(l){var f=a.default.firstValuable(l.call(s,n),n);if(!f||f.$stopPropagation)return}}var h=s.$combine?s.$combine.children:s.children;if(h.length&&t(u(h.filter(function(t){return a.default.funcOrValue(a.default.firstValuable(t.events.eIndex,t.style.zIndex),t)>=0})),n,r),n.$stopPropagation)break;if(c(s,n))return d(s,n,r),void n.stopPropagation();h.length&&t(u(h.filter(function(t){return!(a.default.funcOrValue(a.default.firstValuable(t.events.eIndex,t.style.zIndex),t)>=0)})),n,r)}}},h=function(t,e){var n=this;this.$extendList.forEach(function(r){r.onEvent&&r.onEvent.call(n,t,e)})},d=function t(e,n,r){r&&r.push(e),e.events[n.type]&&(e.events[n.type].call(e,n),n.$stopPropagation)||e.$parent&&t(e.$parent,n,r)},p={x:0,y:0,timeStamp:0};i=function(t,e){var n=this,r=void 0,o=void 0,s=1,c=1;if(!e){!t.layerX&&t.targetTouches&&t.targetTouches[0]?(r=t.targetTouches[0].pageX-t.currentTarget.offsetLeft,o=t.targetTouches[0].pageY-t.currentTarget.offsetTop):!t.layerX&&t.changedTouches&&t.changedTouches[0]?(r=t.changedTouches[0].pageX-t.currentTarget.offsetLeft,o=t.changedTouches[0].pageY-t.currentTarget.offsetTop):(r=t.layerX,o=t.layerY);var y=!1;if(this.$dom.getBoundingClientRect){var v=this.$dom.getBoundingClientRect();s=Math.floor(v[y?"height":"width"])/this.width,c=Math.floor(v[y?"width":"height"])/this.height}}var g=e||{type:t.type,canvasX:r/s,canvasY:o/c,event:t};if(l&&n.fastclick){if("click"===g.type&&!g.$fakeClick)return;"touchstart"===g.type?(p.x=g.canvasX,p.y=g.canvasY,p.timeStamp=Date.now()):"touchend"===g.type&&Math.abs(p.x-g.canvasX)<30&&Math.abs(p.y-g.canvasY)<30&&Date.now()-p.timeStamp<200&&i.call(this,null,{$fakeClick:!0,type:"click",canvasX:p.x,canvasY:p.y,event:t})}if(g.stopPropagation=function(){g.$stopPropagation=!0},!n.events.interceptor||(g=a.default.firstValuable(n.events.interceptor.call(n,g),g),g&&!g.$stopPropagation)){var x=[];if(f(u(n.children),g,x),g&&!g.$stopPropagation&&d(n,g),h.call(n,g,x),("mousemove"===g.type||"touchmove"===g.type)&&n.eLastMouseHover&&x.indexOf(n.eLastMouseHover)===-1){var m=n.eLastMouseHover.events.mouseout||n.eLastMouseHover.events.touchout;m&&m.call(n.eLastMouseHover,g)}if(n.eLastMouseHover=x[0],!x.length&&n.eLastMouseHover){var $=n.eLastMouseHover.events.mouseout;$&&$.call(n.eLastMouseHover,g),n.eLastMouseHover=null}}},t.exports=i},function(t,e){"use strict";t.exports=function(t,e,n,r){if(e.sx<0&&e.sw){var i=-e.sx/e.sw;e.tx+=e.tw*i,e.sx=0}if(e.sy<0&&e.sh){var o=-e.sy/e.sh;e.ty+=e.th*o,e.sy=0}if(n&&e.sx+e.sw>n){var a=(e.sx+e.sw-n)/e.sw;e.sw-=e.sw*a,e.tw-=e.tw*a}if(r&&e.sy+e.sh>r){var s=(e.sy+e.sh-r)/e.sh;e.sh-=e.sh*s,e.th-=e.th*s}if(e.tx<0&&e.tw>-e.tx){var l=-e.tx/e.tw;e.sx+=e.sw*l,e.sw-=e.sw*l,e.tw=e.tw+e.tx,e.tx=0}if(e.ty<0&&e.th>-e.ty){var u=-e.ty/e.th;e.sy+=e.sh*u,e.sh-=e.sh*u,e.th=e.th+e.ty,e.ty=0}if(e.tw&&e.tx+e.tw>t.width){var c=(e.tx+e.tw-t.width)/e.tw;e.tw-=e.tw*c,e.sw-=e.sw*c}if(e.th&&e.ty+e.th>t.height){var f=(e.ty+e.th-t.height)/e.th;e.th-=e.th*f,e.sh-=e.sh*f}}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}var i=n(1),o=r(i);t.exports=function(t,e,n){e.filter(function(t){var e=o.default.funcOrValue(t.style.zIndex,t);return n<0?e<0:e>=0}).sort(function(t,e){var n=o.default.funcOrValue(t.style.zIndex,t),r=o.default.funcOrValue(e.style.zIndex,e);return n===r?0:n>r?1:-1}).forEach(function(e,n){t.$perPaint.call(t,e,n)})}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}var i=n(1),o=r(i),a=n(4),s=(r(a),n(45)),l=r(s),u=n(46),c=r(u),f=n(12),h=r(f),d=o.default.blend,p=function(t){var e=/[^\u4e00-\u9fa5]/;return!e.test(t)},y=function(){var t=this;this.$canvas.$extendList.forEach(function(e){e.onPaint&&e.onPaint.call(t)})},v=function t(e){if(e&&e.style){var n=o.default.funcOrValue(e.style.scale,e);return 1!==n?e:t(e.$parent)}};t.exports=function(t,e){if(t.$rendered=!1,o.default.execFuncs(t.hooks.beforeTick,t,t.$tickedTimes),o.default.funcOrValue(t.style.visible,t)===!1)return void o.default.execFuncs(t.hooks.ticked,t,++t.$tickedTimes);var n=this;y.call(t);var r=t.$props={};r.img=o.default.funcOrValue(t.content.img,t),r.text=o.default.funcOrValue(t.content.text,t),"string"==typeof r.img&&(r.img=t.content.img=n.imgLoader(r.img));var i=r.text,a=r.img;r.tx=o.default.funcOrValue(t.style.tx,t)||0,t.$parent&&(r.tx+=o.default.firstValuable(t.$parent.$cache.tx,0)),t.$cache.tx=r.tx,r.ty=o.default.funcOrValue(t.style.ty,t)||0,t.$parent&&(r.ty+=o.default.firstValuable(t.$parent.$cache.ty,0)),t.$cache.ty=r.ty;var s=0,u=0;a&&(s=a.width||0,u=a.height||0,r.sx=o.default.funcOrValue(t.style.sx,t)||0,r.sy=o.default.funcOrValue(t.style.sy,t)||0,r.sw=o.default.funcOrValue(t.style.sw,t)||s,r.sh=o.default.funcOrValue(t.style.sh,t)||u),r.tw=o.default.funcOrValue(t.style.tw,t)||r.sw||0,r.th=o.default.funcOrValue(t.style.th,t)||r.sh||0,r.locate=o.default.funcOrValue(t.style.locate,t),r.rotate=o.default.funcOrValue(t.style.rotate,t)||0,r.overflow=o.default.funcOrValue(t.style.overflow,t)||0,r.overflowX=o.default.funcOrValue(t.style.overflowX,t)||0,r.overflowY=o.default.funcOrValue(t.style.overflowY,t)||0,r.scale=o.default.funcOrValue(t.style.scale,t)||1,t.$parent&&(r.scale*=o.default.firstValuable(t.$parent.$cache.scale,1)),t.$cache.scale=r.scale;var f=t.children;if(1!==r.scale){var g=r.scale,x=v(t);if(x){var m=x.getRect(t!==x),$=m.tx+m.tw/2,b=m.ty+m.th/2;r.tx-=($-r.tx)*(g-1),r.ty-=(b-r.ty)*(g-1),r.tw*=g,r.th*=g}}"lt"===r.locate||("ld"===r.locate?r.ty-=r.th:"rt"===r.locate?r.tx-=r.tw:"rd"===r.locate?(r.tx-=r.tw,r.ty-=r.th):(r.tx-=r.tw>>1,r.ty-=r.th>>1));var w={};if(r.rotate){r.rx=o.default.firstValuable(o.default.funcOrValue(t.style.rx,t),r.tx+.5*r.tw),r.ry=o.default.firstValuable(o.default.funcOrValue(t.style.ry,t),r.ty+.5*r.th);var k=o.default.firstValuable(r.rx,r.tx+.5*r.tw),O=o.default.firstValuable(r.ry,r.ty+.5*r.th);w.beforeRotate=[k,O],w.rotate=-r.rotate*Math.PI/180,w.rotate=Number(w.rotate.toFixed(4)),w.afterRotate=[-k,-O]}var T=(0,h.default)(r.tx,r.ty,r.tw,r.th,0,0,n.width,n.height,w.beforeRotate&&w.beforeRotate[0],w.beforeRotate&&w.beforeRotate[1],r.rotate),V=(r.overflow||r.overflowX||r.overflowY)&&"visible"!==r.overflow;if(T||i){r.opacity=o.default.funcOrValue(t.style.opacity,t)||0,t.$parent&&(r.opacity*=o.default.firstValuable(t.$parent.$cache.opacity,1)),t.$cache.opacity=r.opacity;for(var M in t.style)"undefined"==typeof r[M]&&(r[M]=o.default.funcOrValue(t.style[M],t));w.globalAlpha=o.default.firstValuable(r.opacity,1),(r.fh||r.fv)&&(r.fh=r.fh||0,r.fv=r.fv||0,r.fx=r.fx||0,r.fy=r.fy||0,w.transform={fh:r.fh,fv:r.fv,fx:-(r.ty+(r.th>>1))*r.fv+r.fx,fy:-(r.tx+(r.tw>>1))*r.fh+r.fy}),r.blend&&(w.globalCompositeOperation="string"==typeof r.blend?r.blend:d[r.blend]),r.backgroundColor&&(w.fillRect=r.backgroundColor),r.border&&(w.line=r.border),r.mirrX?(w.translate=[n.width,0],w.scale=[-1,1],r.tx=n.width-r.tx-r.tw,r.mirrY&&(w.translate=[n.width,n.height],w.scale=[-1,-1],r.ty=n.height-r.ty-r.th)):r.mirrY&&(w.translate=[0,n.height],w.scale=[1,-1],r.ty=n.height-r.ty-r.th),V&&(w.clip=!0);if(w.clip&&T){var A={$id:t.$id,type:"clip",settings:w,img:a,props:r};A.$origin=t,n.$children.push(A)}if(f.length&&(0,c.default)(n,f,-1),w.fillRect&&T){t.$rendered=!0;var R={$id:t.$id,type:"fillRect",settings:w,img:a,props:r};R.$origin=t,n.$children.push(R)}if(s&&0!==r.opacity&&r.sw&&r.sh){r.rotate||i||(0,l.default)(n,r,s,u);var _=(0,h.default)(r.tx,r.ty,r.tw,r.th,0,0,n.width-1,n.height-1,w.beforeRotate&&w.beforeRotate[0],w.beforeRotate&&w.beforeRotate[1],r.rotate);if(_){t.$rendered=!0;var C={$id:t.$id,type:"img",settings:w,img:a,props:r};a.$painted=!0,C.$origin=t,n.$children.push(C)}}if(i){t.$rendered=!0;var E=r.tx,S=r.ty,F=r.align||r.textAlign||"left",P=r.textFont||"14px Arial",I=parseInt(P),L="top",H=r.lineHeight||I;if("center"===F?E+=r.tw/2:"right"===F&&(E+=r.tw),"top"===r.textVerticalAlign?L="top":"bottom"===r.textVerticalAlign?(L="bottom",S+=r.th):"middle"===r.textVerticalAlign&&(S+=r.th>>1,L="middle"),"string"==typeof i||"number"==typeof i)S+2*I>0&&S-2*I<n.height&&n.$children.push({$id:t.$id,type:"text",settings:w,props:{tx:E,ty:S,content:String(i),fontsize:I,align:F,baseline:L,font:P,color:r.color,type:r.textType},$origin:t});else if(i.length)i.forEach(function(e){n.$children.push({$id:t.$id,type:"text",settings:w,props:{tx:E+o.default.funcOrValue(e.tx,t),ty:S+o.default.funcOrValue(e.ty,t),content:o.default.funcOrValue(e.content,t),fontsize:I,baseline:L,align:F,font:P,color:r.color,type:r.textType},$origin:t})});else if("multline-text"===i.type){var z=i.text.split(/\t|\n/),j=[];z.forEach(function(t,e){t=String.prototype.trim.apply(t),i.config.start&&(t=t.replace(i.config.start,""));for(var n=0,o=r.tw;t.length&&n<t.length;)o<=0&&(o=r.tw,j.push(t.substr(0,n)),t=t.substr(n),n=0),n++,o-=I*(p(t[n])?1.05:.6);(t||e)&&j.push(t)}),j.forEach(function(e){n.$children.push({$id:t.$id,type:"text",settings:w,props:{tx:E,ty:S,fontsize:I,content:e,baseline:L,align:F,font:P,color:r.color,type:r.textType},$origin:t}),S+=H||I})}}if(a||i||(t.$rendered=void 0),f.length&&(0,c.default)(n,f,1),w.clip&&T){var X={$id:t.$id,type:"clipOver",settings:w,img:a,props:r};X.$origin=t,n.$children.push(X)}if(w.line&&T){t.$rendered=!0;var D={$id:t.$id,type:"line",settings:w,img:a,props:r};D.$origin=t,n.$children.push(D)}o.default.execFuncs(t.hooks.ticked,t,++t.$tickedTimes)}else V||(t.$rendered=void 0,f.length&&(0,c.default)(n,f,-1),f.length&&(0,c.default)(n,f,1)),o.default.execFuncs(t.hooks.ticked,t,++t.$tickedTimes)}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}var i=n(28),o=r(i),a=n(29),s=r(a);t.exports=function(t){var e=this,n=Date.now();s.default.$lastPaintTime=this.$nextTickTime=n,n-this.fpsCalculateTime>=1e3&&(this.fpsCalculateTime=n,this.fpsHandler&&this.fpsHandler.call(this,this.fps),this.lastFps=this.fps,this.fps=0),(0,o.default)(function(r){if(e.$rafTime=r,e.$rAFer(t),e.maxFps>0&&e.maxFps<60){if(n-e.$lastPaintTime<=1e3/e.maxFps)return;e.$lastPaintTime=n-(n-e.$lastPaintTime)%(1e3/e.maxFps)}else e.$lastPaintTime=Date.now();e.fps++,t()})}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}var i=n(1),o=r(i),a=function(t,e){var n=this,r=!1;return this.$extendList.forEach(function(i){if(i.onRender){var o=i.onRender.call(n,t,e);o&&(r=o)}}),r},s=function(t,e){var n=this,r=t.props,i=void 0,s="text"===t.type;if(r&&"clip"!==t.type&&"clipOver"!==t.type&&"line"!==t.type){if(s){var l=r.content.length;i=r.fontsize*r.fontsize*9*l,r[5]=r.tx-1.5*r.fontsize*l,r[5]<0&&(r[5]=0),r[6]=r.ty-1.5*r.fontsize,r[6]<0&&(r[6]=0),r[7]=3*r.fontsize*l,r[5]+r[7]>n.width&&(r[7]=n.width-r[5]),r[8]=3*r.fontsize,r[6]+r[8]>n.height&&(r[8]=n.height-r[6])}else i=r.tw*r.th;if((i>4e4||s)&&!t.settings.transform&&!t.settings.rotate)for(var u=n.$children,c=u.length-1;c>e;c--){var f=u[c];if(!f.$cannotCover){var h=f.settings;if(f.type&&"img"===f.type||"fillRect"===f.type&&h.fillRect.indexOf("rgba")===-1){var d=f.props;if(d.tw*d.th<4e4)f.$cannotCover=!0;else if(!(d.tw*d.th<i))if(!f.img||f.img.$noAlpha){if(1!==h.globalAlpha||h.globalCompositeOperation||h.transform||h.rotate)f.$cannotCover=!0;else if(o.default.pointInRect(r.tx,r.ty,d.tx,d.tx+d.tw,d.ty,d.ty+d.th)&&o.default.pointInRect(r.tx+r.tw,r.ty+r.th,d.tx,d.tx+d.tw,d.ty,d.ty+d.th))return}else f.$cannotCover=!0}else f.$cannotCover=!0}}}var p=t.settings||{};if(!a.call(n,t,p)){var y=n.$paintContext;"clip"===t.type&&(y.save(),y.beginPath(),y.moveTo(r.tx,r.ty),y.lineTo(r.tx+r.tw,r.ty),y.lineTo(r.tx+r.tw,r.ty+r.th),y.lineTo(r.tx,r.ty+r.th),y.lineTo(r.tx,r.ty),y.closePath(),y.clip());var v=!1;p.globalCompositeOperation&&(v||(y.save(),v=!0),y.globalCompositeOperation=p.globalCompositeOperation),1===p.globalAlpha||isNaN(p.globalAlpha)||(v||(y.save(),v=!0),y.globalAlpha=p.globalAlpha),p.translate&&(v||(y.save(),v=!0),y.translate(p.translate[0]||0,p.translate[1]||0)),p.rotate&&(v||(y.save(),v=!0),y.translate(p.beforeRotate[0]||0,p.beforeRotate[1]||0),y.rotate(p.rotate||0),y.translate(p.afterRotate[0]||0,p.afterRotate[1]||0)),p.scale&&(v||(y.save(),v=!0),y.scale(p.scale[0]||1,p.scale[1]||1)),p.transform&&(v||(y.save(),v=!0),y.transform(1,p.transform.fh,p.transform.fv,1,p.transform.fx,p.transform.fy)),"img"===t.type?y.drawImage(t.img,r.sx,r.sy,r.sw,r.sh,r.tx,r.ty,r.tw,r.th):"text"===t.type&&r.content?(y.font=r.font,y.fillStyle=r.color||"white",y.textAlign=r.align,y.textBaseline=r.baseline,y[r.type||"fillText"](r.content,r.tx,r.ty)):"fillRect"===t.type?(y.fillStyle=p.fillRect,y.fillRect(r.tx,r.ty,r.tw,r.th)):"line"===t.type?(y.beginPath(),y.strokeStyle=r.border.substr(r.border.indexOf(" "))||"black",y.lineWidth=r.border.split(" ")[0]||1,y.moveTo(r.tx,r.ty),y.lineTo(r.tx+r.tw,r.ty),y.lineTo(r.tx+r.tw,r.ty+r.th),y.lineTo(r.tx,r.ty+r.th),y.closePath(),y.stroke()):"clipOver"===t.type&&y.restore(),v&&y.restore()}};t.exports=function(){var t=this;t.$children.forEach(s.bind(t))}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}var i=n(51),o=r(i),a=n(55),s=r(a),l=n(59),u=r(l),c=n(52),f=r(c),h=n(16),d=r(h),p=n(53),y=r(p),v=n(19),g=r(v),x=n(18),m=r(x),$=n(20),b=r($),w=n(15),k=r(w),O=n(17),T=r(O),V=n(54),M=r(V),A=n(56),R=r(A),_=n(57),C=r(_),E=n(58),S=(r(E),{start:u.default,paint:f.default,add:o.default,remove:s.default,register:M.default,clear:d.default,setFpsHandler:R.default,setMaxFps:C.default,pause:y.default,on:g.default,off:m.default,trigger:b.default,broadcast:k.default,nextTick:T.default});t.exports=S},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}var i=n(13),o=r(i);t.exports=o.default.prototype.add},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}var i=n(1),o=r(i),a=function(t,e){if(!t||t.length!==e.length)return e;for(var n=0;n<t.length;n++){var r=t[n],i=e[n];if(r.$id!==i.$id||r.img!==i.img)return e;if(r.props&&i.props)for(var o in i.props)if(i.props[o]!==r.props[o])return e}return!1};t.exports=function(){if(!(this.$pausing||this.$inBrowser&&document.hidden)){var t=this;if(o.default.execFuncs(t.hooks.beforeTick,t,[t.$rafTime]),t.$freezing||(t.$lastTickChildren=t.$children,t.$children=[],this.children.sort(function(t,e){var n=o.default.funcOrValue(t.style.zIndex,t),r=o.default.funcOrValue(e.style.zIndex,e);return n===r?0:n>r?1:-1}).forEach(function(e,n){t.$perPaint(e,n)})),t.$paintContext.clearRect){var e=t.$nodiff?t.$children:a(t.$lastTickChildren,t.$children);e&&(t.$paintContext.clearRect(0,0,this.width,this.height),t.$render())}else t.$render();o.default.execFuncs(t.hooks.ticked,t,[t.$rafTime]),t.hooks.nextTick&&(o.default.execFuncs(t.hooks.nextTick,t,[t.$rafTime]),delete t.hooks.nextTick)}}},function(t,e){"use strict";t.exports=function(t){this.$pausing=void 0===t||t}},function(t,e,n){"use strict";var r=function(t){var e=this;this.$extendList.forEach(function(n){n.onCreate&&n.onCreate.call(e,t)})};t.exports=function(t,e){var n=this,i=e||{};t=this.$dom=t||this.$dom;for(var o in i)this[o]=i[o];if(this.name=i.name||t.id||t.classList&&t.classList[0]||"Unnamed",this.$inBrowser="undefined"!=typeof window,i.fullScreen&&"undefined"!=typeof document&&(t.width=t.style.width=document.body.clientWidth||document.documentElement.clientWidth,t.height=t.style.height=document.body.clientHeight||document.documentElement.clientHeight),t.width=this.width=this.width||i.width||t.width,t.height=this.height=this.height||i.height||t.height,this.events=i.events||{},this.hooks=i.hooks||{},this.$inBrowser){var a=["contextmenu","mousewheel","click","dblclick","mousedown","mouseup","mousemove","touchstart","touchend","touchmove"];a.forEach(function(e){t.addEventListener(e,n.$eventHandler.bind(n))})}return r.call(this,i),this.$paintContext=this.$paintContext||t.getContext("2d"),this}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}var i=n(1),o=r(i);t.exports=function(t,e){var n=this;o.default.execFuncs(t.hooks.beforeRemove,t,t.$tickedTimes++),t.style.visible=!1,
t.$removing=!0,setTimeout(function(){t.$parent?t.$parent.children=t.$parent.children.filter(function(t){return t.$removing!==!0}):n.children=n.children.filter(function(t){return t.$removing!==!0}),t.$canvas&&(t.$canvas=void 0,t.$parent=void 0,t.$tickedTimes=void 0,t.$cache=void 0,t.$rendered=!1,o.default.execFuncs(t.hooks.removed,t,t.$tickedTimes))}),e&&this.children.splice(this.children.indexOf(t),1)}},function(t,e){"use strict";t.exports=function(t){this.fpsHandler=t}},function(t,e){"use strict";t.exports=function(t){this.maxFps=t||-1}},function(t,e,n){"use strict"},function(t,e){"use strict";t.exports=function(){return this.fpsCalculateTime=Date.now(),this.$rAFer(this.paint.bind(this)),this}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}var i=n(1),o=(r(i),n(4));r(o);t.exports=function(){}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}var i=n(50),o=r(i),a=n(43),s=r(a),l=n(62),u=r(l),c=n(9),f=r(c),h=function(t){this.imgLoader=f.default;for(var e in u.default)this[e]=this[e]||JSON.parse(JSON.stringify(u.default[e]));t&&(t.el||(t={el:t}),t.el&&this.register("string"==typeof t.el?document.querySelector(t.el):t.el,t))};h.prototype.$extendList=[];for(var d in s.default)Object.prototype.hasOwnProperty.call(s.default,d)&&(h.prototype[d]=s.default[d]);for(var p in o.default)Object.prototype.hasOwnProperty.call(o.default,p)&&(h.prototype[p]=o.default[p]);t.exports=h},function(t,e){"use strict";var n={$dom:null,$paintContext:null,$nextTickTime:0,$lastPaintTime:0,$pausing:!1,$freezing:!1,name:"",fps:0,lastFps:0,fpsCalculateTime:0,fpsHandler:null,width:0,height:0,events:{click:null},children:[],eHoldingFlag:!1,eLastMouseHover:null,maxFps:-1,$flags:{}};t.exports=n},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}var i=n(9),o=r(i),a=n(10),s=r(a);t.exports=function(t,e){var n;return(0,s.default)(t,function(t){return(0,o.default)(t,function(t){for(var r=t.width,i=t.height,o=t.getContext("2d").getImageData(0,0,r,i),a=o.data,s=a.length-1;s>=0;s-=4)if(e&&e.conversion){var l=e.conversion({r:a[s-3],g:a[s-2],b:a[s-1],a:a[s]},(s+1>>2)%r,Math.floor((s+1>>2)/r));a[s-3]=l.r,a[s-2]=l.g,a[s-1]=l.b,a[s-0]=l.a}t.getContext("2d").clearRect(0,0,r,i),t.getContext("2d").putImageData(o,0,0),n=t},{canvas:!0,cacheFlag:Math.random()})}),function(){return n}}},function(t,e){"use strict";t.exports=function(t){var e=t.width,n=t.height,r=document.createElement("canvas");r.width=e,r.height=n;var i=r.getContext("2d");i.scale(1,-1),i.translate(0,-n),i.drawImage(t,0,0);var o=i.getImageData(0,0,e,n);return{canvas:i,img:o}}},function(t,e){"use strict";t.exports=function(t,e){return{type:"multline-text",text:t,config:e}}}])});