!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.PrevueImage=t():e.PrevueImage=t()}(window,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist/",n(n.s=7)}([function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"c",function(){return i}),n.d(t,"b",function(){return o});var r=function(e,t){for(var n in t)e[n]=t[n];return e},i=function(){return document.body.scrollHeight>(window.innerHeight||document.documentElement.clientHeight)},o=function(){var e=document.createElement("div");e.style.cssText="width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",document.body.appendChild(e);var t=e.offsetWidth-e.clientWidth;return document.body.removeChild(e),t}},function(e,t,n){"use strict";(function(e){var r=n(0);t.a={name:"ImagePreview",props:{img:{type:e.browser&&HTMLImageElement,required:!0}},data:function(){return{width:null,height:null,top:null,left:null,isActive:!1}},created:function(){var e=this,t=this.img;this.initSize();var n=document.documentElement,i=Object(r.b)();Object(r.a)(document.body.style,{overflow:"hidden",paddingRight:Object(r.c)()?"".concat(i,"px"):null});var o=t.offsetHeight/t.offsetWidth,s=t.naturalWidth>n.offsetWidth-100?n.offsetWidth-100:t.naturalWidth,u=s*o;this.$nextTick(function(){e.isActive=!0,e.width=s,e.height=u;var t=(n.clientHeight-u)/2;e.top=t>0?t:0,e.left=(n.offsetWidth-s)/2})},methods:{initSize:function(){var e=this.img,t=e.getBoundingClientRect(),n=t.top,r=t.left;this.isActive=!1,this.width=e.clientWidth,this.height=e.clientHeight,this.top=n,this.left=r},remove:function(){var e=this;this.initSize(),setTimeout(function(){e.$destroy(),e.$el.parentElement.removeChild(e.$el),Object(r.a)(document.body.style,{overflow:null,paddingRight:null})},300)}}}}).call(this,n(3))},function(e,t,n){var r=n(5);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,n(8).default)("2632842a",r,!0,{})},function(e,t){var n,r,i=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function u(e){if(n===setTimeout)return setTimeout(e,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:o}catch(e){n=o}try{r="function"==typeof clearTimeout?clearTimeout:s}catch(e){r=s}}();var a,c=[],l=!1,f=-1;function d(){l&&a&&(l=!1,a.length?c=a.concat(c):f=-1,c.length&&p())}function p(){if(!l){var e=u(d);l=!0;for(var t=c.length;t;){for(a=c,c=[];++f<t;)a&&a[f].run();f=-1,t=c.length}a=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===s||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function v(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new h(e,t)),1!==c.length||l||u(p)},h.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=v,i.addListener=v,i.once=v,i.off=v,i.removeListener=v,i.removeAllListeners=v,i.emit=v,i.prependListener=v,i.prependOnceListener=v,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},function(e,t,n){"use strict";var r=n(2);n.n(r).a},function(e,t,n){(e.exports=n(6)(!1)).push([e.i,".preview-image{position:fixed;top:0;left:0;bottom:0;right:0;z-index:1000;overflow:auto;transition:background-color .4s cubic-bezier(.4, 0, 0, 1) 0s}.preview-image.is-active{background-color:rgba(26,26,26,0.65)}.preview-image img{position:absolute;transition:.4s cubic-bezier(.4, 0, 0, 1) 0s;cursor:zoom-out}",""])},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var i=(s=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),o=r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"});return[n].concat(o).concat([i]).join("\n")}var s;return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];null!=o&&(r[o]=!0)}for(i=0;i<e.length;i++){var s=e[i];null!=s[0]&&r[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),t.push(s))}},t}},function(e,t,n){"use strict";n.r(t);var r=n(1).a;n(4);var i=function(e,t,n,r,i,o,s,u){var a,c="function"==typeof e?e.options:e;if(t&&(c.render=t,c.staticRenderFns=n,c._compiled=!0),r&&(c.functional=!0),o&&(c._scopeId="data-v-"+o),s?(a=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},c._ssrRegister=a):i&&(a=u?function(){i.call(this,this.$root.$options.shadowRoot)}:i),a)if(c.functional){c._injectStyles=a;var l=c.render;c.render=function(e,t){return a.call(t),l(e,t)}}else{var f=c.beforeCreate;c.beforeCreate=f?[].concat(f,a):[a]}return{exports:e,options:c}}(r,function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"preview-image",class:{"is-active":this.isActive},on:{click:this.remove}},[t("img",{style:{width:this.width+"px",height:this.height+"px",top:this.top+"px",left:this.left+"px"},attrs:{src:this.img.src}})])},[],!1,null,null,null).exports;t.default={install:function(e){this.$createElement;var t={inserted:function(t,n){t.addEventListener("click",function(t){var n=t.target;if("IMG"===n.tagName){var r=document.createElement("div"),o=new e({el:r,render:function(e){return e(i,{attrs:{img:n}})}});document.body.appendChild(o.$el)}})}};e.directive("prevue-image",t)}}},function(e,t,n){"use strict";function r(e,t){for(var n=[],r={},i=0;i<t.length;i++){var o=t[i],s=o[0],u={id:e+":"+i,css:o[1],media:o[2],sourceMap:o[3]};r[s]?r[s].parts.push(u):n.push(r[s]={id:s,parts:[u]})}return n}n.r(t),n.d(t,"default",function(){return h});var i="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!i)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var o={},s=i&&(document.head||document.getElementsByTagName("head")[0]),u=null,a=0,c=!1,l=function(){},f=null,d="data-vue-ssr-id",p="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function h(e,t,n,i){c=n,f=i||{};var s=r(e,t);return v(s),function(t){for(var n=[],i=0;i<s.length;i++){var u=s[i];(a=o[u.id]).refs--,n.push(a)}t?v(s=r(e,t)):s=[];for(i=0;i<n.length;i++){var a;if(0===(a=n[i]).refs){for(var c=0;c<a.parts.length;c++)a.parts[c]();delete o[a.id]}}}}function v(e){for(var t=0;t<e.length;t++){var n=e[t],r=o[n.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](n.parts[i]);for(;i<n.parts.length;i++)r.parts.push(g(n.parts[i]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{var s=[];for(i=0;i<n.parts.length;i++)s.push(g(n.parts[i]));o[n.id]={id:n.id,refs:1,parts:s}}}}function m(){var e=document.createElement("style");return e.type="text/css",s.appendChild(e),e}function g(e){var t,n,r=document.querySelector("style["+d+'~="'+e.id+'"]');if(r){if(c)return l;r.parentNode.removeChild(r)}if(p){var i=a++;r=u||(u=m()),t=w.bind(null,r,i,!1),n=w.bind(null,r,i,!0)}else r=m(),t=function(e,t){var n=t.css,r=t.media,i=t.sourceMap;r&&e.setAttribute("media",r);f.ssrId&&e.setAttribute(d,t.id);i&&(n+="\n/*# sourceURL="+i.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}var y,b=(y=[],function(e,t){return y[e]=t,y.filter(Boolean).join("\n")});function w(e,t,n,r){var i=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=b(t,i);else{var o=document.createTextNode(i),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(o,s[t]):e.appendChild(o)}}}]).default});