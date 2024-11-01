(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6250],{6924:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/reactive-accilarator/React-js/module-4/fatching-data",function(){return a(6043)}])},6828:function(e,t,a){"use strict";var n=a(2676),r=a(3909);t.Z={logo:(0,n.jsxs)("span",{style:{color:"",fontSize:"30px"},children:["Devripon",(0,n.jsx)("span",{style:{color:"red",fontSize:"50px"},children:"."}),(0,n.jsx)("span",{style:{color:"red",fontSize:"30px",fontWeight:"bolder"}})]}),project:{link:"https://github.com/Deveripon/reactive-accelarator"},docsRepositoryBase:"https://github.com/Deveripon/reactive-accelarator/tree/main/",useNextSeoProps(){let{asPath:e}=(0,r.useRouter)();if("/"!==e)return{titleTemplate:"%s – Reactive Accelarator"}},head:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,n.jsx)("meta",{property:"og:title",content:"রিয়াক্টিভ এক্সিলারেটর"}),(0,n.jsx)("meta",{property:"og:description",content:"রিয়াক্ট ও নেক্সট জে এস এর বাংলায় লিখা ডকুমেন্টেশন যা একজন ডেভেলপারকে রিয়াক্ট ও নেক্সট জে এস নিজের ভাষায় আরও সহজ করে বুঝতে সাহায্য করবে।"})]}),banner:{key:"2.0-release",text:(0,n.jsx)("a",{href:"https://github.com/deveripon/",target:"_blank",children:"\uD83C\uDF89 follow my github →"}),dismissible:!0},toc:{backToTop:!0},sidebar:{defaultMenuCollapseLevel:2},footer:{text:(0,n.jsxs)("span",{children:["copyright ",new Date().getFullYear()," \xa9"," ",(0,n.jsx)("a",{href:"https://github.com/deveripon",target:"_blank",children:"devripon"}),"."]})}}},6043:function(e,t,a){"use strict";a.r(t),a.d(t,{__toc:function(){return c}});var n=a(2676),r=a(6957),i=a(4857),s=a(6828);a(5078);var o=a(3772);let c=[{depth:3,value:"Fetching data with effects",id:"fetching-data-with-effects"}];function l(e){let t=Object.assign({h3:"h3",p:"p",code:"code",pre:"pre",span:"span",a:"a"},(0,o.a)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h3,{id:"fetching-data-with-effects",children:"Fetching data with effects"}),"\n",(0,n.jsxs)(t.p,{children:["যখন আমরা রিয়াক্টে ইফেক্টের মাধ্যমে কোন ডাটা ",(0,n.jsx)(t.code,{children:"fetch"})," করবো তখন অবশ্যই আমাদেরকে ইফেক্টের ক্লিন-আপ ফাংশন ইমপ্লিমেন্ট করতে হবে এবং ডেভেলপমেন্ড মুডে আমরা যখনি ডাটা ",(0,n.jsx)(t.code,{children:"fetch"})," করে স্টেট এ সেট করবো তখন যাতে দুইবার সেট না হয় সেজন্য ইফেক্টের ক্লিন-আপে প্রথমবার ",(0,n.jsx)(t.code,{children:"setState"})," কে ইগনোর করতে হবে।"]}),"\n",(0,n.jsx)(t.pre,{"data-language":"jsx","data-theme":"default",hasCopyCode:!0,children:(0,n.jsxs)(t.code,{"data-language":"jsx","data-theme":"default",children:[(0,n.jsxs)(t.span,{className:"line",children:[(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" ["}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"data"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"setData"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"] "}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-function)"},children:"useState"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"([]);"})]}),"\n",(0,n.jsxs)(t.span,{className:"line",children:[(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-function)"},children:"useEffect"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"(() "}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,n.jsxs)(t.span,{className:"line highlighted",children:[(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"let"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" ignore "}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"false"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,n.jsx)(t.span,{className:"line",children:" "}),"\n",(0,n.jsxs)(t.span,{className:"line",children:[(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"async"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-function)"},children:"startFatching"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"() {"})]}),"\n",(0,n.jsxs)(t.span,{className:"line",children:[(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"fetched"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"await"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-function)"},children:"fetch"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-string-expression)"},children:"`apiurl/"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"${"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"id"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"}"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-string-expression)"},children:"`"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:");"})]}),"\n",(0,n.jsxs)(t.span,{className:"line",children:[(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"json"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"await"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"fetched"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-function)"},children:".json"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"();"})]}),"\n",(0,n.jsx)(t.span,{className:"line",children:" "}),"\n",(0,n.jsxs)(t.span,{className:"line highlighted",children:[(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"if"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" ("}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"!"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"ignore) {"})]}),"\n",(0,n.jsxs)(t.span,{className:"line highlighted",children:[(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"            "}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-function)"},children:"setData"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"(json);"})]}),"\n",(0,n.jsx)(t.span,{className:"line highlighted",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"        }"})}),"\n",(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"    }"})}),"\n",(0,n.jsx)(t.span,{className:"line",children:" "}),"\n",(0,n.jsxs)(t.span,{className:"line",children:[(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-function)"},children:"startFatching"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"();"})]}),"\n",(0,n.jsx)(t.span,{className:"line",children:" "}),"\n",(0,n.jsxs)(t.span,{className:"line",children:[(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" () "}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,n.jsxs)(t.span,{className:"line",children:[(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"        ignore "}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"true"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"    };"})}),"\n",(0,n.jsxs)(t.span,{className:"line",children:[(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"}"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" [id]);"})]})]})}),"\n",(0,n.jsxs)(t.p,{children:["দেখেন এখানে আমরা ৩ নাম্বার লাইনে একটা ভ্যারিয়েবল রেখেছি ",(0,n.jsx)(t.code,{children:"ignore"})," নামে এবং ৯-১১ নাম্বার লাইনে আমরা স্টেট আপডেট করার আগে চেক করেছি যে ",(0,n.jsx)(t.code,{children:"ignore"})," এর ভ্যালু ",(0,n.jsx)(t.code,{children:"true"})," কিনা, যদি ",(0,n.jsx)(t.code,{children:"true"})," না হয়,সেখেত্রে আমরা স্টেট আপডেট করেছি।"]}),"\n",(0,n.jsx)(t.p,{children:"এখন চলুন এই প্যাটার্নটা আরেকটু ভালো করে বুঝি,"}),"\n",(0,n.jsxs)(t.p,{children:["আমরা জানি ডেভেলপমেন্ট মুডে প্রতিটা কম্পোনেন্ট দুইবার করে রান হয়, মানে হলো ",(0,n.jsx)(t.code,{children:"mount --> unmount --> remount"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["তাই প্রথমবার যখন আমাদের কম্পোনেন্ট মাউন্ট হয়েছে তখন আমাদের ইফেক্ট রান হয়েছে এবং সেখানে ",(0,n.jsx)(t.code,{children:"ignore"})," এর ভ্যালু ",(0,n.jsx)(t.code,{children:"false"})," পেয়েছে, এবং তারের পরের লাইনেই আমাদের ডাটা ",(0,n.jsx)(t.code,{children:"fatching"})," এর জন্য একটা ",(0,n.jsx)(t.code,{children:"asynchronous"})," ফাংশন ",(0,n.jsx)(t.code,{children:"startFatching()"})," কল হয়েছে, ",(0,n.jsx)(t.code,{children:"asynchronous"})," ফাংশনটার ক্লোজারের মধ্যে ",(0,n.jsx)(t.code,{children:"ignore"})," ভ্যারিয়েবল এর ভ্যালু ",(0,n.jsx)(t.code,{children:"false"})," নিয়ে ",(0,n.jsx)(t.code,{children:"Web API"})," এর মধ্যে তার ডাটা ",(0,n.jsx)(t.code,{children:"fatching"})," এর কাজ করছে।"]}),"\n",(0,n.jsxs)(t.p,{children:["এর পরে আমাদের এফেক্টের আর কোন কাজ নাই, তাই সে দ্বিতীয়বার রান হউয়ার জন্য কম্পোনেন্টকে ",(0,n.jsx)(t.code,{children:"unmount"})," করতে যাবে এমন সময় দেখে একটা ক্লিন-আপ ফাংশন লেখা হয়েছে ইফেক্টের মধ্যে, তাই সে ক্লিন-আপ ফাংশনটা রান করবে, এবং ক্লিন-আপের মধ্যে ",(0,n.jsx)(t.code,{children:"ignore"})," ভ্যারিয়েবল এর ভ্যালু ",(0,n.jsx)(t.code,{children:"true"})," করে দেয়া হয়েছে,"]}),"\n",(0,n.jsxs)(t.p,{children:["এই সময়ের মধ্যে যখন ",(0,n.jsx)(t.code,{children:"startFatching()"})," ফাংশনটা তার কাজ শেষ করে ফিরে আসবে এবং স্টেট-আপডেট করতে যাবে তখন সে দেখবে তার ক্লোজারের মধ্যে থাকা ",(0,n.jsx)(t.code,{children:"ignore"})," ভ্যারিয়েবল এর ভ্যালু ",(0,n.jsx)(t.code,{children:"true"})," হয়ে গিয়েছে। তখন সে আর কোন কাজ করবেনা।"]}),"\n",(0,n.jsxs)(t.p,{children:["এরই মধ্যে যখন কম্পোনেন্ট ",(0,n.jsx)(t.code,{children:"remount"})," হবে তখন আবার পুরো কম্পোনেন্ট নতুন করে রান হবে, এবং তখন ",(0,n.jsx)(t.code,{children:"ignore"})," ভ্যারিয়েবল এর ভ্যালু ",(0,n.jsx)(t.code,{children:"false"})," পাবে, আর ",(0,n.jsx)(t.code,{children:"startFatching()"})," ফাংশনটা কল হবে, এবারে কিন্তু কম্পোনেট আর ",(0,n.jsx)(t.code,{children:"unmount"})," হবেনা, তাই ক্লিন-আপ ফাংশনও কল হবেনা আর ",(0,n.jsx)(t.code,{children:"ignore"})," ভ্যারিয়েবল এর ভ্যালুও চেঞ্জ হবেনা। তখন ",(0,n.jsx)(t.code,{children:"startFatching()"})," ফাংশনটা তার কাজ শেষ করে যখন ডাটা নিয়ে ফিরত আসবে তখনও সে ",(0,n.jsx)(t.code,{children:"ignore"})," ভ্যারিয়েবল এর ভ্যালু ",(0,n.jsx)(t.code,{children:"false"})," পাবে, আর তাই স্টেট আপডেট করে দিবে।"]}),"\n",(0,n.jsx)(t.p,{children:"এই প্যাটার্নে করলে আমাদের ডেভেলপমেন্ট মুড এবং প্রোডাকশন মুড দুইটাতে সেফ। দুইবার আমাদের স্টেট আপডেট হবেনা।"}),"\n",(0,n.jsxs)(t.p,{children:["যদিও ইফেক্টের মাধ্যমে এভাবে ডাটা ফেচ করাটা বেস্ট এপ্রোচ না, আমরা রিয়াক্ট এপ্লিকেশনে ডাটা ফেচিং এর জন্য ",(0,n.jsx)(t.a,{href:"https://tanstack.com/query/latest",children:"React Query"}),", ",(0,n.jsx)(t.a,{href:"https://swr.vercel.app/",children:"useSWR"}),", ",(0,n.jsx)(t.a,{href:"https://redux-toolkit.js.org/rtk-query/overview",children:"rtkQuery"})," ইত্যাদি চাইলে ব্যবাহার করতে পারি। অথবা আমরা যদি কোন ফ্রেমওয়ার্ক ব্যবাহার করি তাহলে সেখানে বিল্ট-ইন ডাটা ফেচিং মেকানিজম পেয়ে যাবো।"]})]})}let d={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}=Object.assign({},(0,o.a)(),e.components);return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)},pageOpts:{filePath:"pages/reactive-accilarator/React-js/module-4/fatching-data.mdx",route:"/reactive-accilarator/React-js/module-4/fatching-data",timestamp:1730442572e3,pageMap:[{kind:"Meta",data:{"reactive-accilarator":{title:"Reactive Accelerator",type:"page"}}},{kind:"Folder",name:"reactive-accilarator",route:"/reactive-accilarator",children:[{kind:"Folder",name:"React-js",route:"/reactive-accilarator/React-js",children:[{kind:"Meta",data:{"module-1":"Getting Started With React : Describing The UI","module-2":"Going Deep into React: Adding Interactivity","module-3":"React State Management Deep Dive","module-4":"React Escape Hatches"}},{kind:"Folder",name:"module-1",route:"/reactive-accilarator/React-js/module-1",children:[{kind:"MdxPage",name:"React-installation-and-development-environment-setup",route:"/reactive-accilarator/React-js/module-1/React-installation-and-development-environment-setup"},{kind:"Meta",data:{"introduction-to-react":"1.1 - Introduction to React","React-installation-and-development-environment-setup":"1.2 - React-installation-and-development-environment-setup","vertual-dom":"1.3 - How React Works: Virtual Dom","basics-of-react-component":"1.4 - Basics of React Component: Your First Component","component-export-import":"1.5 - Basics of React Component: Importing & Exporting Components","jsx-markup":"1.6 - Basics of JSX: React's Markup - Writing Markup with JSX","javascript-in-jsx":"1.7 - Basics of JSX: React's Markup - JavaScript in JSX with Curly Braces","understanding-props":"1.8 - Understanding Props - Passing Props to a Component","conditional-renderaing":"1.9 - Conditional Rendering","rendering-list":"1.10 - Rendering Lists","pure-components":"1.11 - Pure Components: Keeping Components Pure","your-ui-as-a-tree":"1.12 - Your UI as a Tree"}},{kind:"MdxPage",name:"basics-of-react-component",route:"/reactive-accilarator/React-js/module-1/basics-of-react-component"},{kind:"MdxPage",name:"component-export-import",route:"/reactive-accilarator/React-js/module-1/component-export-import"},{kind:"MdxPage",name:"conditional-renderaing",route:"/reactive-accilarator/React-js/module-1/conditional-renderaing"},{kind:"MdxPage",name:"introduction-to-react",route:"/reactive-accilarator/React-js/module-1/introduction-to-react"},{kind:"MdxPage",name:"javascript-in-jsx",route:"/reactive-accilarator/React-js/module-1/javascript-in-jsx"},{kind:"MdxPage",name:"jsx-markup",route:"/reactive-accilarator/React-js/module-1/jsx-markup"},{kind:"MdxPage",name:"pure-components",route:"/reactive-accilarator/React-js/module-1/pure-components"},{kind:"MdxPage",name:"rendering-list",route:"/reactive-accilarator/React-js/module-1/rendering-list"},{kind:"MdxPage",name:"understanding-props",route:"/reactive-accilarator/React-js/module-1/understanding-props"},{kind:"MdxPage",name:"vertual-dom",route:"/reactive-accilarator/React-js/module-1/vertual-dom"},{kind:"MdxPage",name:"your-ui-as-a-tree",route:"/reactive-accilarator/React-js/module-1/your-ui-as-a-tree"}]},{kind:"Folder",name:"module-2",route:"/reactive-accilarator/React-js/module-2",children:[{kind:"Meta",data:{"responding-to-event":"2.1 - Responding to Events - Adding Event Handlers","event-propagation":"2.2 - Responding to Events - Event Propagation","understanding-state":"2.3 - Understanding State - A Component's Memory","how-rendering-works":"2.4 - How Rendering Works","state-as-a-snapshot":"2.5 - State as a Snapshot","queueing-state":"2.6 - Queueing a Series of State Updates","updating-object-in-state":"2.7 - Updating Objects in a State","updateing-array-in-state":"2.8 - Updating Arrays in a State"}},{kind:"MdxPage",name:"event-propagation",route:"/reactive-accilarator/React-js/module-2/event-propagation"},{kind:"MdxPage",name:"how-rendering-works",route:"/reactive-accilarator/React-js/module-2/how-rendering-works"},{kind:"MdxPage",name:"queueing-state",route:"/reactive-accilarator/React-js/module-2/queueing-state"},{kind:"MdxPage",name:"responding-to-event",route:"/reactive-accilarator/React-js/module-2/responding-to-event"},{kind:"MdxPage",name:"state-as-a-snapshot",route:"/reactive-accilarator/React-js/module-2/state-as-a-snapshot"},{kind:"MdxPage",name:"understanding-state",route:"/reactive-accilarator/React-js/module-2/understanding-state"},{kind:"MdxPage",name:"updateing-array-in-state",route:"/reactive-accilarator/React-js/module-2/updateing-array-in-state"},{kind:"MdxPage",name:"updating-object-in-state",route:"/reactive-accilarator/React-js/module-2/updating-object-in-state"}]},{kind:"Folder",name:"module-3",route:"/reactive-accilarator/React-js/module-3",children:[{kind:"Meta",data:{"declaretive-imperative":"3.1 - Declarative vs Imperative UI","thinking-about-ui":"3.2 - Thinking About UI Declaratively in React","choosing-the-state-structure":"3.3 - Choosing the state Structure in React","lifting-state-up":"3.4 - Share State Between Components: Lifting State Up","preserving-and-reseting-state":"3.5 - Preserving and Reseting State : Default Behaviour","reseting-state-at-same-position":"3.6 - Resetting State at Same Position : Changing Default Behaviour","extracting-state-logic-into-reducer":"3.7 - Extracting State Logic into Reducers","passing-data-deeply-with-context":"3.8 - Passing Data Deeply With Context - Introduction to Context API","scaling-up-with-reducer-and-context":"3.9 - Scaling Up with Reducers and Context"}},{kind:"MdxPage",name:"choosing-the-state-structure",route:"/reactive-accilarator/React-js/module-3/choosing-the-state-structure"},{kind:"MdxPage",name:"declaretive-imperative",route:"/reactive-accilarator/React-js/module-3/declaretive-imperative"},{kind:"MdxPage",name:"extracting-state-logic-into-reducer",route:"/reactive-accilarator/React-js/module-3/extracting-state-logic-into-reducer"},{kind:"MdxPage",name:"lifting-state-up",route:"/reactive-accilarator/React-js/module-3/lifting-state-up"},{kind:"MdxPage",name:"passing-data-deeply-with-context",route:"/reactive-accilarator/React-js/module-3/passing-data-deeply-with-context"},{kind:"MdxPage",name:"preserving-and-reseting-state",route:"/reactive-accilarator/React-js/module-3/preserving-and-reseting-state"},{kind:"MdxPage",name:"reseting-state-at-same-position",route:"/reactive-accilarator/React-js/module-3/reseting-state-at-same-position"},{kind:"MdxPage",name:"scaling-up-with-reducer-and-context",route:"/reactive-accilarator/React-js/module-3/scaling-up-with-reducer-and-context"},{kind:"MdxPage",name:"thinking-about-ui",route:"/reactive-accilarator/React-js/module-3/thinking-about-ui"}]},{kind:"Folder",name:"module-4",route:"/reactive-accilarator/React-js/module-4",children:[{kind:"Meta",data:{"referencing-values-with-refs":"4.1 - Referenceing Values with Refs","manipulating-dom-with-refs":"4.2 - Manipulating DOM with Refs","forwarding-refs":"4.3 - Forwarding Refs : Accessing another component’s DOM nodes ",useImperativeHandle:"4.4 - UseImperativeHandle : Exposing the subset of the API with an Imperative Handle","flushing-state-updates-synchronously":"4.5 - Flushing State Updates Synchronously with flushSync","syncronising-with-effets-overview":"4.6 - Synchronising with Effects: Overview and How To Write Effects","handling-effects-firing-twice":"4.7 - Handling Effects Firing Twice in Development","fatching-data":"4.8 - Synchronising with Effects: Fatching Data","you-might-not-need-an-effect":"4.9 - You Might Not Need an Effect","the-lifecycle-of-an-effect":"4.10 - The Lifecycle of an Effect","effect-react-to-reactive-values":"4.11 - Effect React To Reactive Values","seperating-events-from-effects":"4.12 - Separating Events from Effects","removing-effect-dependecies":"4.13 - Removing Effect Dependencies"}},{kind:"MdxPage",name:"effect-react-to-reactive-values",route:"/reactive-accilarator/React-js/module-4/effect-react-to-reactive-values"},{kind:"MdxPage",name:"fatching-data",route:"/reactive-accilarator/React-js/module-4/fatching-data"},{kind:"MdxPage",name:"flushing-state-updates-synchronously",route:"/reactive-accilarator/React-js/module-4/flushing-state-updates-synchronously"},{kind:"MdxPage",name:"forwarding-refs",route:"/reactive-accilarator/React-js/module-4/forwarding-refs"},{kind:"MdxPage",name:"handling-effects-firing-twice",route:"/reactive-accilarator/React-js/module-4/handling-effects-firing-twice"},{kind:"MdxPage",name:"manipulating-dom-with-refs",route:"/reactive-accilarator/React-js/module-4/manipulating-dom-with-refs"},{kind:"MdxPage",name:"referencing-values-with-refs",route:"/reactive-accilarator/React-js/module-4/referencing-values-with-refs"},{kind:"MdxPage",name:"removing-effect-dependecies",route:"/reactive-accilarator/React-js/module-4/removing-effect-dependecies"},{kind:"MdxPage",name:"seperating-events-from-effects",route:"/reactive-accilarator/React-js/module-4/seperating-events-from-effects"},{kind:"MdxPage",name:"syncronising-with-effets-overview",route:"/reactive-accilarator/React-js/module-4/syncronising-with-effets-overview"},{kind:"MdxPage",name:"the-lifecycle-of-an-effect",route:"/reactive-accilarator/React-js/module-4/the-lifecycle-of-an-effect"},{kind:"MdxPage",name:"useImperativeHandle",route:"/reactive-accilarator/React-js/module-4/useImperativeHandle"},{kind:"MdxPage",name:"you-might-not-need-an-effect",route:"/reactive-accilarator/React-js/module-4/you-might-not-need-an-effect"}]}]},{kind:"Meta",data:{index:{title:"Getting Started"},git:"Git and Github Refresher","frontend-focus-topic":"Frontend Focus Topic","javascript-refresher":"Javascript Refresher","React-js":"React Js"}},{kind:"MdxPage",name:"frontend-focus-topic",route:"/reactive-accilarator/frontend-focus-topic"},{kind:"MdxPage",name:"git",route:"/reactive-accilarator/git"},{kind:"MdxPage",name:"index",route:"/reactive-accilarator"},{kind:"MdxPage",name:"javascript-refresher",route:"/reactive-accilarator/javascript-refresher"}]}],flexsearch:{codeblocks:!0},title:"Fatching Data",headings:c},pageNextRoute:"/reactive-accilarator/React-js/module-4/fatching-data",nextraLayout:i.ZP,themeConfig:s.Z};t.default=(0,r.j)(d)},5184:function(){}},function(e){e.O(0,[3383,2888,9774,179],function(){return e(e.s=6924)}),_N_E=e.O()}]);