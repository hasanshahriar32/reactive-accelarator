(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3185],{5479:function(e,t,n){Promise.resolve().then(n.bind(n,377)),Promise.resolve().then(n.t.bind(n,560,23)),Promise.resolve().then(n.t.bind(n,3533,23))},3533:function(){},560:function(e){e.exports={style:{fontFamily:"'__Inter_f17dd4', '__Inter_Fallback_f17dd4'",fontStyle:"normal"},className:"__className_f17dd4"}},377:function(e,t,n){"use strict";n.d(t,{SpeedInsights:function(){return m}});var r=n(5784),s=n(3739),o=()=>{window.si||(window.si=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];(window.siq=window.siq||[]).push(t)})};function a(){return false}function c(e){return new RegExp("/".concat(e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),"(?=[/?#]|$)"))}var l="https://va.vercel-scripts.com/v1/speed-insights",i="".concat(l,"/script.js"),u="".concat(l,"/script.debug.js");function d(e){(0,r.useEffect)(()=>{var t;e.beforeSend&&(null==(t=window.si)||t.call(window,"beforeSend",e.beforeSend))},[e.beforeSend]);let t=(0,r.useRef)(null);return(0,r.useEffect)(()=>{if(t.current)e.route&&t.current(e.route);else{let n=function(){var e;let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!("undefined"!=typeof window)||null===t.route)return null;o();let n=!!t.dsn,r=t.scriptSrc||(n?i:"/_vercel/speed-insights/script.js");if(document.head.querySelector('script[src*="'.concat(r,'"]')))return null;t.beforeSend&&(null==(e=window.si)||e.call(window,"beforeSend",t.beforeSend));let s=document.createElement("script");return s.src=r,s.defer=!0,s.dataset.sdkn="@vercel/speed-insights"+(t.framework?"/".concat(t.framework):""),s.dataset.sdkv="1.1.0",t.sampleRate&&(s.dataset.sampleRate=t.sampleRate.toString()),t.route&&(s.dataset.route=t.route),t.endpoint&&(s.dataset.endpoint=t.endpoint),t.dsn&&(s.dataset.dsn=t.dsn),s.onerror=()=>{console.log("[Vercel Speed Insights] Failed to load script from ".concat(r,". Please check if any content blockers are enabled and try again."))},document.head.appendChild(s),{setRoute:e=>{s.dataset.route=null!=e?e:void 0}}}({framework:e.framework||"react",...e});n&&(t.current=n.setRoute)}},[e.route]),null}var f=()=>{let e=(0,s.useParams)(),t=(0,s.useSearchParams)()||new URLSearchParams,n=(0,s.usePathname)();return e?function(e,t){if(!e||!t)return e;let n=e;try{let e=Object.entries(t);for(let[t,r]of e)if(!Array.isArray(r)){let e=c(r);e.test(n)&&(n=n.replace(e,"/[".concat(t,"]")))}for(let[t,r]of e)if(Array.isArray(r)){let e=c(r.join("/"));e.test(n)&&(n=n.replace(e,"/[...".concat(t,"]")))}return n}catch(t){return e}}(n,Object.keys(e).length?e:Object.fromEntries(t.entries())):null};function p(e){let t=f();return r.createElement(d,{route:t,...e,framework:"next"})}function m(e){return r.createElement(r.Suspense,{fallback:null},r.createElement(p,{...e}))}}},function(e){e.O(0,[4951,5924,8349,1744],function(){return e(e.s=5479)}),_N_E=e.O()}]);