!function(){var e,t={97:function(e,t,r){"use strict";var n,o;e.exports=(null==(n=r.g.process)?void 0:n.env)&&"object"==typeof(null==(o=r.g.process)?void 0:o.env)?r.g.process:r(615)},615:function(e){!function(){var t={229:function(e){var t,r,n,o=e.exports={};function i(){throw Error("setTimeout has not been defined")}function c(){throw Error("clearTimeout has not been defined")}function u(e){if(t===setTimeout)return setTimeout(e,0);if((t===i||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:i}catch(e){t=i}try{r="function"==typeof clearTimeout?clearTimeout:c}catch(e){r=c}}();var s=[],a=!1,l=-1;function f(){a&&n&&(a=!1,n.length?s=n.concat(s):l=-1,s.length&&h())}function h(){if(!a){var e=u(f);a=!0;for(var t=s.length;t;){for(n=s,s=[];++l<t;)n&&n[l].run();l=-1,t=s.length}n=null,a=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===c||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function _(e,t){this.fun=e,this.array=t}function p(){}o.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];s.push(new _(e,t)),1!==s.length||a||u(h)},_.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=p,o.addListener=p,o.once=p,o.off=p,o.removeListener=p,o.removeAllListeners=p,o.emit=p,o.prependListener=p,o.prependOnceListener=p,o.listeners=function(e){return[]},o.binding=function(e){throw Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw Error("process.chdir is not supported")},o.umask=function(){return 0}}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var i=r[e]={exports:{}},c=!0;try{t[e](i,i.exports,n),c=!1}finally{c&&delete r[e]}return i.exports}n.ab="//";var o=n(229);e.exports=o}()}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var i=r[e]={exports:{}},c=!0;try{t[e](i,i.exports,n),c=!1}finally{c&&delete r[e]}return i.exports}n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||Function("return this")()}catch(e){if("object"==typeof window)return window}}(),e=n(97),self.fallback=async t=>{let{destination:r,url:n}=t,o={document:"/reactive-accelarator/~offline",image:e.env.__PWA_FALLBACK_IMAGE__,audio:e.env.__PWA_FALLBACK_AUDIO__,video:e.env.__PWA_FALLBACK_VIDEO__,font:e.env.__PWA_FALLBACK_FONT__}[r];return o?caches.match(o,{ignoreSearch:!0}):""===r&&e.env.__PWA_FALLBACK_DATA__&&n.match(/\/_next\/data\/.+\/.+\.json$/i)?caches.match(e.env.__PWA_FALLBACK_DATA__,{ignoreSearch:!0}):Response.error()}}();