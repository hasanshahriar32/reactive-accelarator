if(!self.define){let e,a={};const c=(c,r)=>(c=new URL(c+".js",r).href,a[c]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=a,document.head.appendChild(e)}else e=c,importScripts(c),a()})).then((()=>{let e=a[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(r,t)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(a[i])return;let s={};const n=e=>c(e,i),o={module:{uri:i},exports:s,require:n};a[i]=Promise.all(r.map((e=>o[e]||n(e)))).then((e=>(t(...e),s)))}}define(["./workbox-3c9d0171"],(function(e){"use strict";importScripts("/reactive-accelarator/fallback-ce627215c0e4a9af.js"),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/reactive-accelarator/AppImages/android/android-launchericon-144-144.png",revision:"08102077bcf2ab9e1c2e198367ac4b64"},{url:"/reactive-accelarator/AppImages/android/android-launchericon-192-192.png",revision:"2ef0bfb4b682b45f4a24224be867c964"},{url:"/reactive-accelarator/AppImages/android/android-launchericon-48-48.png",revision:"e8043e48b13397084660a13939ab4bff"},{url:"/reactive-accelarator/AppImages/android/android-launchericon-512-512.png",revision:"d39b886a45ee981cfcf49ac59663858f"},{url:"/reactive-accelarator/AppImages/android/android-launchericon-72-72.png",revision:"2003da13a1d3c17446b3c086357451b5"},{url:"/reactive-accelarator/AppImages/android/android-launchericon-96-96.png",revision:"03bd7be112d12df85726ef49f7d86542"},{url:"/reactive-accelarator/AppImages/ios/1024.png",revision:"ea46dfaf3a8cdb990fc4a9029071fce3"},{url:"/reactive-accelarator/DOM.png",revision:"32b18626897d35f6ac2e06b9dd6a72b4"},{url:"/reactive-accelarator/Propagation.svg",revision:"548c361be46e494719eb30d3b3b286c9"},{url:"/reactive-accelarator/React-tree.png",revision:"bc7ebf3aa3a1cd6fd70cdce34180b2d1"},{url:"/reactive-accelarator/UISTATES/added.png",revision:"a8228d4253bc89b5514ec8078fef18c1"},{url:"/reactive-accelarator/UISTATES/counters.png",revision:"5fc984ae9f9782930fda7d21403e156a"},{url:"/reactive-accelarator/UISTATES/deleted.png",revision:"4e1eb94fda85e34a3141be921ae316ca"},{url:"/reactive-accelarator/UISTATES/empty.png",revision:"7bc348b71a6150a9b6dff97527c056b7"},{url:"/reactive-accelarator/UISTATES/emptyCounter.png",revision:"650a1426e3fd8ce3ade0a5f02431ac86"},{url:"/reactive-accelarator/UISTATES/error.png",revision:"ae87072a27f6bb6bbe693a542f57a5d8"},{url:"/reactive-accelarator/UISTATES/reacttree.png",revision:"10cfba5ad19cc2cca7612b8c550f6405"},{url:"/reactive-accelarator/UISTATES/resetstate.png",revision:"33d2d9178ae9b206e7bc1cd4f8a5f429"},{url:"/reactive-accelarator/UISTATES/state.png",revision:"cccbef55d0a0bf71671ee3d1ab3bd30a"},{url:"/reactive-accelarator/UISTATES/submitting.png",revision:"76202a157866956674e863572963f15a"},{url:"/reactive-accelarator/UISTATES/success.png",revision:"ed770271678a3665f425afa51257aef1"},{url:"/reactive-accelarator/UISTATES/typing.png",revision:"c4e61b82c413524cc47bb96de79c48f2"},{url:"/reactive-accelarator/UISTATES/unchecked.png",revision:"dc7a03d204dd26775a2a66850b8e7986"},{url:"/reactive-accelarator/UISTATES/updatedCounterB.png",revision:"02116ea7a40025a3a15c53dec88f3c27"},{url:"/reactive-accelarator/UseEffect lifecycle.png",revision:"5d961fe20148ad562981d4964c5b76e3"},{url:"/reactive-accelarator/_next/static/91xazMZYebzyWNDErka3C/_buildManifest.js",revision:"12486603939386d8f353c56a3cc64d61"},{url:"/reactive-accelarator/_next/static/91xazMZYebzyWNDErka3C/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/reactive-accelarator/_next/static/chunks/3383-df7b85944ffed6ec.js",revision:"91xazMZYebzyWNDErka3C"},{url:"/reactive-accelarator/_next/static/chunks/6daa518c-e67e6ddfb2ef406a.js",revision:"91xazMZYebzyWNDErka3C"},{url:"/reactive-accelarator/_next/static/chunks/8349-d60fce6257904ce2.js",revision:"91xazMZYebzyWNDErka3C"},{url:"/reactive-accelarator/_next/static/chunks/9495-1ec9452aa53c289e.js",revision:"91xazMZYebzyWNDErka3C"},{url:"/reactive-accelarator/_next/static/chunks/app/_not-found/page-f5a69804b1297f8e.js",revision:"91xazMZYebzyWNDErka3C"},{url:"/reactive-accelarator/_next/static/chunks/app/layout-bef7535e8ea7fb38.js",revision:"91xazMZYebzyWNDErka3C"},{url:"/reactive-accelarator/_next/static/chunks/app/page-4a2a85a373637c1c.js",revision:"91xazMZYebzyWNDErka3C"},{url:"/reactive-accelarator/_next/static/chunks/app/~offline/page-8d92eb6152c7b503.js",revision:"91xazMZYebzyWNDErka3C"},{url:"/reactive-accelarator/_next/static/chunks/framework-c2cdfcddc84210fd.js",revision:"91xazMZYebzyWNDErka3C"},{url:"/reactive-accelarator/_next/static/chunks/main-60b480fb1582eb96.js",revision:"91xazMZYebzyWNDErka3C"},{url:"/reactive-accelarator/_next/static/chunks/main-app-ebd23cded2e6e2f6.js",revision:"91xazMZYebzyWNDErka3C"},{url:"/reactive-accelarator/_next/static/chunks/pages/_app-23eb51630caa027a.js",revision:"91xazMZYebzyWNDErka3C"},{url:"/reactive-accelarator/_next/static/chunks/pages/_error-2743100f3e28a960.js",revision:"91xazMZYebzyWNDErka3C"},{url:"/reactive-accelarator/_next/static/chunks/pages/reactive-accilarator-f8417c76692ac346.js",revision:"91xazMZYebzyWNDErka3C"},{url:"/reactive-accelarator/_next/static/chunks/pages/reactive-accilarator/React-js/module-1/React-installation-and-development-environment-setup-dca6f684cb0254ee.js",revision:"91xazMZYebzyWNDErka3C"},{url:"/reactive-accelarator/_next/static/chunks/pages/reactive-accilarator/React-js/module-1/basics-of-react-component-67b1febc17f6637d.js",revision:"91xazMZYebzyWNDErka3C"},{url:"/reactive-accelarator/_next/static/chunks/pages/reactive-accilarator/React-js/module-1/component-export-import-dc6676e4b26b5c72.js",revision:"91xazMZYebzyWNDErka3C"},{url:"/reactive-accelarator/_next/static/chunks/pages/reactive-accilarator/React-js/module-1/conditional-renderaing-dbd1537606be77e1.js",revision:"91xazMZYebzyWNDErka3C"},{url:"/reactive-accelarator/_next/static/chunks/pages/reactive-accilarator/React-js/module-1/introduction-to-react-c5475e7c12fbc038.js",revision:"91xazMZYebzyWNDErka3C"},{url:"/reactive-accelarator/_next/static/chunks/pages/reactive-accilarator/React-js/module-1/javascript-in-jsx-58c1579d98c4a979.js",revision:"91xazMZYebzyWNDErka3C"},{url:"/reactive-accelarator/_next/static/chunks/pages/reactive-accilarator/React-js/module-1/jsx-markup-9bca271052dfc9c9.js",revision:"91xazMZYebzyWNDErka3C"},{url:"/reactive-accelarator/_next/static/chunks/pages/reactive-accilarator/React-js/module-1/pure-components-9709126c48ebfd87.js",revision:"91xazMZYebzyWNDErka3C"},{url:"/reactive-accelarator/_next/static/chunks/pages/reactive-accilarator/React-js/module-1/rendering-list-00ddd6f8a8f84612.js",revision:"91xazMZYebzyWNDErka3C"},{url:"/reactive-accelarator/_next/static/chunks/pages/reactive-accilarator/React-js/module-1/understanding-props-4786d48804810208.js",revision:"91xazMZYebzyWNDErka3C"},{url:"/reactive-accelarator/_next/static/chunks/pages/reactive-accilarator/React-js/module-1/vertual-dom-3145ab922721a241.js",revision:"91xazMZYebzyWNDErka3C"},{url:"/reactive-accelarator/_next/static/chunks/pages/reactive-accilarator/React-js/module-1/your-ui-as-a-tree-a19b7f607676df58.js",revision:"91xazMZYebzyWNDErka3C"},{url:"/reactive-accelarator/_next/static/chunks/pages/reactive-accilarator/React-js/module-2/event-propagation-62ce6f123d80b430.js",revision:"91xazMZYebzyWNDErka3C"},{url:"/reactive-accelarator/_next/static/chunks/pages/reactive-accilarator/React-js/module-2/how-rendering-works-5795c5813adb1f38.js",revision:"91xazMZYebzyWNDErka3C"},{url:"/reactive-accelarator/_next/static/chunks/pages/reactive-accilarator/React-js/module-2/queueing-state-abdc74f865340899.js",revision:"91xazMZYebzyWNDErka3C"},{url:"/reactive-accelarator/_next/static/chunks/pages/reactive-accilarator/React-js/module-2/responding-to-event-0c9361ac270c27c4.js",revision:"91xazMZYebzyWNDErka3C"},{url:"/reactive-accelarator/_next/static/chunks/pages/reactive-accilarator/React-js/module-2/state-as-a-snapshot-641d722195d02b34.js",revision:"91xazMZYebzyWNDErka3C"},{url:"/reactive-accelarator/_next/static/chunks/pages/reactive-accilarator/React-js/module-2/understanding-state-dc553250e84e3143.js",revision:"91xazMZYebzyWNDErka3C"},{url:"/reactive-accelarator/_next/static/chunks/pages/reactive-accilarator/React-js/module-2/updateing-array-in-state-86272bff8d371b67.js",revision:"91xazMZYebzyWNDErka3C"},{url:"/reactive-accelarator/_next/static/chunks/pages/reactive-accilarator/React-js/module-2/updating-object-in-state-6aa3b927660cab63.js",revision:"91xazMZYebzyWNDErka3C"},{url:"/reactive-accelarator/_next/static/chunks/pages/reactive-accilarator/React-js/module-3/choosing-the-state-structure-2c9ed032f616157e.js",revision:"91xazMZYebzyWNDErka3C"},{url:"/reactive-accelarator/_next/static/chunks/pages/reactive-accilarator/React-js/module-3/declaretive-imperative-a863815120da44d1.js",revision:"91xazMZYebzyWNDErka3C"},{url:"/reactive-accelarator/_next/static/chunks/pages/reactive-accilarator/React-js/module-3/extracting-state-logic-into-reducer-316c2d173b798a13.js",revision:"91xazMZYebzyWNDErka3C"},{url:"/reactive-accelarator/_next/static/chunks/pages/reactive-accilarator/React-js/module-3/lifting-state-up-9b4ba68131e51291.js",revision:"91xazMZYebzyWNDErka3C"},{url:"/reactive-accelarator/_next/static/chunks/pages/reactive-accilarator/React-js/module-3/passing-data-deeply-with-context-1868f09ec8fb811f.js",revision:"91xazMZYebzyWNDErka3C"},{url:"/reactive-accelarator/_next/static/chunks/pages/reactive-accilarator/React-js/module-3/preserving-and-reseting-state-fc29c52e9b9ab5c6.js",revision:"91xazMZYebzyWNDErka3C"},{url:"/reactive-accelarator/_next/static/chunks/pages/reactive-accilarator/React-js/module-3/reseting-state-at-same-position-6bd384c033fc35c7.js",revision:"91xazMZYebzyWNDErka3C"},{url:"/reactive-accelarator/_next/static/chunks/pages/reactive-accilarator/React-js/module-3/scaling-up-with-reducer-and-context-866f6f215aecc34c.js",revision:"91xazMZYebzyWNDErka3C"},{url:"/reactive-accelarator/_next/static/chunks/pages/reactive-accilarator/React-js/module-3/thinking-about-ui-3ad69d96a83c93e2.js",revision:"91xazMZYebzyWNDErka3C"},{url:"/reactive-accelarator/_next/static/chunks/pages/reactive-accilarator/React-js/module-4/effect-react-to-reactive-values-1688e3c30cab8051.js",revision:"91xazMZYebzyWNDErka3C"},{url:"/reactive-accelarator/_next/static/chunks/pages/reactive-accilarator/React-js/module-4/fatching-data-8883b11556ee7c55.js",revision:"91xazMZYebzyWNDErka3C"},{url:"/reactive-accelarator/_next/static/chunks/pages/reactive-accilarator/React-js/module-4/flushing-state-updates-synchronously-a8103e2cf5fdaca9.js",revision:"91xazMZYebzyWNDErka3C"},{url:"/reactive-accelarator/_next/static/chunks/pages/reactive-accilarator/React-js/module-4/forwarding-refs-30b12538de285052.js",revision:"91xazMZYebzyWNDErka3C"},{url:"/reactive-accelarator/_next/static/chunks/pages/reactive-accilarator/React-js/module-4/handling-effects-firing-twice-9b1675b53c1ec057.js",revision:"91xazMZYebzyWNDErka3C"},{url:"/reactive-accelarator/_next/static/chunks/pages/reactive-accilarator/React-js/module-4/manipulating-dom-with-refs-d0f302c352de07ca.js",revision:"91xazMZYebzyWNDErka3C"},{url:"/reactive-accelarator/_next/static/chunks/pages/reactive-accilarator/React-js/module-4/performance-optimization-dac056ac70fff8ae.js",revision:"91xazMZYebzyWNDErka3C"},{url:"/reactive-accelarator/_next/static/chunks/pages/reactive-accilarator/React-js/module-4/referencing-values-with-refs-cb450a056efa3574.js",revision:"91xazMZYebzyWNDErka3C"},{url:"/reactive-accelarator/_next/static/chunks/pages/reactive-accilarator/React-js/module-4/removing-effect-dependecies-3cb30db89bf4a1b0.js",revision:"91xazMZYebzyWNDErka3C"},{url:"/reactive-accelarator/_next/static/chunks/pages/reactive-accilarator/React-js/module-4/reusing-logic-with-custom-hook-5404f462eb5b78fc.js",revision:"91xazMZYebzyWNDErka3C"},{url:"/reactive-accelarator/_next/static/chunks/pages/reactive-accilarator/React-js/module-4/seperating-events-from-effects-23ef9a6b54334a5a.js",revision:"91xazMZYebzyWNDErka3C"},{url:"/reactive-accelarator/_next/static/chunks/pages/reactive-accilarator/React-js/module-4/syncronising-with-effets-overview-f99221eb4b9a8cf5.js",revision:"91xazMZYebzyWNDErka3C"},{url:"/reactive-accelarator/_next/static/chunks/pages/reactive-accilarator/React-js/module-4/the-lifecycle-of-an-effect-2c0a873873d75b67.js",revision:"91xazMZYebzyWNDErka3C"},{url:"/reactive-accelarator/_next/static/chunks/pages/reactive-accilarator/React-js/module-4/useImperativeHandle-49b9ae5203804cc2.js",revision:"91xazMZYebzyWNDErka3C"},{url:"/reactive-accelarator/_next/static/chunks/pages/reactive-accilarator/React-js/module-4/you-might-not-need-an-effect-47de02bacb3431ca.js",revision:"91xazMZYebzyWNDErka3C"},{url:"/reactive-accelarator/_next/static/chunks/pages/reactive-accilarator/frontend-focus-topic-3820c42c3ba91d05.js",revision:"91xazMZYebzyWNDErka3C"},{url:"/reactive-accelarator/_next/static/chunks/pages/reactive-accilarator/git-a666327a31054e60.js",revision:"91xazMZYebzyWNDErka3C"},{url:"/reactive-accelarator/_next/static/chunks/pages/reactive-accilarator/javascript-refresher-9adf245255629ae1.js",revision:"91xazMZYebzyWNDErka3C"},{url:"/reactive-accelarator/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/reactive-accelarator/_next/static/chunks/webpack-35d09512cecca908.js",revision:"91xazMZYebzyWNDErka3C"},{url:"/reactive-accelarator/_next/static/css/1beee812247f5ed1.css",revision:"1beee812247f5ed1"},{url:"/reactive-accelarator/_next/static/css/471946d199e2edea.css",revision:"471946d199e2edea"},{url:"/reactive-accelarator/_next/static/css/4b52f3ae87dcc58e.css",revision:"4b52f3ae87dcc58e"},{url:"/reactive-accelarator/_next/static/media/26a46d62cd723877-s.woff2",revision:"befd9c0fdfa3d8a645d5f95717ed6420"},{url:"/reactive-accelarator/_next/static/media/55c55f0601d81cf3-s.woff2",revision:"43828e14271c77b87e3ed582dbff9f74"},{url:"/reactive-accelarator/_next/static/media/581909926a08bbc8-s.woff2",revision:"f0b86e7c24f455280b8df606b89af891"},{url:"/reactive-accelarator/_next/static/media/6d93bde91c0c2823-s.woff2",revision:"621a07228c8ccbfd647918f1021b4868"},{url:"/reactive-accelarator/_next/static/media/97e0cb1ae144a2a9-s.woff2",revision:"e360c61c5bd8d90639fd4503c829c2dc"},{url:"/reactive-accelarator/_next/static/media/DOM.92dfe66e.png",revision:"32b18626897d35f6ac2e06b9dd6a72b4"},{url:"/reactive-accelarator/_next/static/media/Propagation.df7e81b3.svg",revision:"548c361be46e494719eb30d3b3b286c9"},{url:"/reactive-accelarator/_next/static/media/UseEffect-lifecycle.d1840044.png",revision:"280283aea7cd6c55397cb6d7041237d1"},{url:"/reactive-accelarator/_next/static/media/a34f9d1faa5f3315-s.p.woff2",revision:"d4fe31e6a2aebc06b8d6e558c9141119"},{url:"/reactive-accelarator/_next/static/media/added.db4c8afe.png",revision:"a8228d4253bc89b5514ec8078fef18c1"},{url:"/reactive-accelarator/_next/static/media/capturetrue.efffa835.png",revision:"a98a67c20ceb000c94c5163b6b21604e"},{url:"/reactive-accelarator/_next/static/media/counters.c51aef2d.png",revision:"5fc984ae9f9782930fda7d21403e156a"},{url:"/reactive-accelarator/_next/static/media/deleted.70c98ee0.png",revision:"4e1eb94fda85e34a3141be921ae316ca"},{url:"/reactive-accelarator/_next/static/media/df0a9ae256c0569c-s.woff2",revision:"d54db44de5ccb18886ece2fda72bdfe0"},{url:"/reactive-accelarator/_next/static/media/dif.13d07124.png",revision:"350b22a074b389425b59bb42db769a27"},{url:"/reactive-accelarator/_next/static/media/empty.efa2cc84.png",revision:"7bc348b71a6150a9b6dff97527c056b7"},{url:"/reactive-accelarator/_next/static/media/emptyCounter.d0d1fb04.png",revision:"650a1426e3fd8ce3ade0a5f02431ac86"},{url:"/reactive-accelarator/_next/static/media/error.53f43300.png",revision:"ae87072a27f6bb6bbe693a542f57a5d8"},{url:"/reactive-accelarator/_next/static/media/output.13382899.png",revision:"4751c7241f09ab598f08a3e1ad2145d5"},{url:"/reactive-accelarator/_next/static/media/primitive.1d230ad0.png",revision:"cf99c92efbd7117be26021b2c7a9e9c5"},{url:"/reactive-accelarator/_next/static/media/reacttree.719e401a.png",revision:"10cfba5ad19cc2cca7612b8c550f6405"},{url:"/reactive-accelarator/_next/static/media/ref1.2483fe7c.png",revision:"be4c8a81d66162ff9016b60cf8364dda"},{url:"/reactive-accelarator/_next/static/media/ref2.438d20b9.png",revision:"f8c9ca54930c8c07042faeb102b63899"},{url:"/reactive-accelarator/_next/static/media/resetstate.db9c8f2c.png",revision:"33d2d9178ae9b206e7bc1cd4f8a5f429"},{url:"/reactive-accelarator/_next/static/media/state.b0b8ba64.svg",revision:"3580b6465ce6406868de8fede9cd8778"},{url:"/reactive-accelarator/_next/static/media/state.d2995b90.png",revision:"cccbef55d0a0bf71671ee3d1ab3bd30a"},{url:"/reactive-accelarator/_next/static/media/submitting.e76ad7f9.png",revision:"76202a157866956674e863572963f15a"},{url:"/reactive-accelarator/_next/static/media/success.ccee6108.png",revision:"ed770271678a3665f425afa51257aef1"},{url:"/reactive-accelarator/_next/static/media/typing.cf026faf.png",revision:"c4e61b82c413524cc47bb96de79c48f2"},{url:"/reactive-accelarator/_next/static/media/unchecked.dc8de9f1.png",revision:"dc7a03d204dd26775a2a66850b8e7986"},{url:"/reactive-accelarator/_next/static/media/updatedCounterB.30fc1b7a.png",revision:"02116ea7a40025a3a15c53dec88f3c27"},{url:"/reactive-accelarator/_next/static/media/useREducer.80449c84.png",revision:"3ed0af11f326894779dc0b8a34c1effd"},{url:"/reactive-accelarator/capturetrue.png",revision:"a98a67c20ceb000c94c5163b6b21604e"},{url:"/reactive-accelarator/dif.png",revision:"350b22a074b389425b59bb42db769a27"},{url:"/reactive-accelarator/div with an event listener.png",revision:"bbd41eb69e09974466fda5069a8683ef"},{url:"/reactive-accelarator/fallback-ce627215c0e4a9af.js",revision:"ec3bff8ebb9282c8959681f74c86cd7d"},{url:"/reactive-accelarator/filetree.png",revision:"a34bca0fc85ad06bcbfdd8f992bcad5f"},{url:"/reactive-accelarator/hookimages/UseEffect-lifecycle.png",revision:"280283aea7cd6c55397cb6d7041237d1"},{url:"/reactive-accelarator/hookimages/useREducer.png",revision:"3ed0af11f326894779dc0b8a34c1effd"},{url:"/reactive-accelarator/manifest.json",revision:"cf4f73bff6cbbc1636825caf46d913ff"},{url:"/reactive-accelarator/meta.png",revision:"751f3f278daa24eae22ce64b5c745378"},{url:"/reactive-accelarator/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/reactive-accelarator/output.png",revision:"4751c7241f09ab598f08a3e1ad2145d5"},{url:"/reactive-accelarator/primitive.png",revision:"cf99c92efbd7117be26021b2c7a9e9c5"},{url:"/reactive-accelarator/ref1.png",revision:"be4c8a81d66162ff9016b60cf8364dda"},{url:"/reactive-accelarator/ref2.png",revision:"f8c9ca54930c8c07042faeb102b63899"},{url:"/reactive-accelarator/screenshot.png",revision:"0dc943daf904ce82e5c2ab5b424e0d4b"},{url:"/reactive-accelarator/state.svg",revision:"3580b6465ce6406868de8fede9cd8778"},{url:"/reactive-accelarator/swe-worker-5c72df51bb1f6ee0.js",revision:"5a47d90db13bb1309b25bdf7b363570e"},{url:"/reactive-accelarator/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"},{url:"/reactive-accelarator/~offline",revision:"91xazMZYebzyWNDErka3C"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]}),e.cleanupOutdatedCaches(),e.registerRoute("/reactive-accelarator",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e},{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute(/\/_next\/static.+\.js$/i,new e.CacheFirst({cacheName:"next-static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute(/\.(?:mp4|webm)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute((({sameOrigin:e,url:{pathname:a}})=>!(!e||a.startsWith("/api/auth/callback")||!a.startsWith("/api/"))),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute((({request:e,url:{pathname:a},sameOrigin:c})=>"1"===e.headers.get("RSC")&&"1"===e.headers.get("Next-Router-Prefetch")&&c&&!a.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc-prefetch",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute((({request:e,url:{pathname:a},sameOrigin:c})=>"1"===e.headers.get("RSC")&&c&&!a.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute((({url:{pathname:e},sameOrigin:a})=>a&&!e.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute((({sameOrigin:e})=>!e),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),self.__WB_DISABLE_DEV_LOGS=!0}));
