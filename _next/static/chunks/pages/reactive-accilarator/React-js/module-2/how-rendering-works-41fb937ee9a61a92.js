(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1242],{8705:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/reactive-accilarator/React-js/module-2/how-rendering-works",function(){return a(3029)}])},6828:function(e,t,a){"use strict";var r=a(2676),n=a(3909);t.Z={logo:(0,r.jsxs)("span",{style:{color:"",fontSize:"30px"},children:["Devripon",(0,r.jsx)("span",{style:{color:"red",fontSize:"50px"},children:"."}),(0,r.jsx)("span",{style:{color:"red",fontSize:"30px",fontWeight:"bolder"}})]}),project:{link:"https://github.com/Deveripon/reactive-accelarator"},docsRepositoryBase:"https://github.com/Deveripon/reactive-accelarator/tree/main/",useNextSeoProps(){let{asPath:e}=(0,n.useRouter)();if("/"!==e)return{titleTemplate:"%s – Reactive Accelarator"}},head:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,r.jsx)("meta",{property:"og:title",content:"রিয়াক্টিভ এক্সিলারেটর"}),(0,r.jsx)("meta",{property:"og:description",content:"রিয়াক্ট ও নেক্সট জে এস এর বাংলায় লিখা ডকুমেন্টেশন যা একজন ডেভেলপারকে রিয়াক্ট ও নেক্সট জে এস নিজের ভাষায় আরও সহজ করে বুঝতে সাহায্য করবে।"})]}),banner:{key:"2.0-release",text:(0,r.jsx)("a",{href:"https://github.com/deveripon/",target:"_blank",children:"\uD83C\uDF89 follow my github →"}),dismissible:!0},toc:{backToTop:!0},sidebar:{defaultMenuCollapseLevel:0},footer:{text:(0,r.jsxs)("span",{children:["copyright ",new Date().getFullYear()," \xa9"," ",(0,r.jsx)("a",{href:"https://github.com/deveripon",target:"_blank",children:"devripon"}),"."]})}}},3029:function(e,t,a){"use strict";a.r(t),a.d(t,{__toc:function(){return d}});var r=a(2676),n=a(6957),i=a(4857),o=a(6828);a(5078);var c=a(3772),s=a(1450);let d=[{depth:3,value:"রেন্ডার এবং কমিট",id:"রেন্ডার-এবং-কমিট"},{depth:3,value:"Trigger a render (ট্রিগারিং স্টেপ):",id:"trigger-a-render-ট্রিগারিং-স্টেপ"},{depth:3,value:"React render your component (রেন্ডারিং স্টেপ):",id:"react-render-your-component-রেন্ডারিং-স্টেপ"},{depth:3,value:"React Commits changes to the DOM (কমিটিং স্টেপ):",id:"react-commits-changes-to-the-dom-কমিটিং-স্টেপ"},{depth:3,value:"সবশেষে ব্রাউজার পেইন্ট হয়ঃ",id:"সবশেষে-ব্রাউজার-পেইন্ট-হয়ঃ"}];function l(e){let t=Object.assign({p:"p",h3:"h3",code:"code",ol:"ol",li:"li",strong:"strong",ul:"ul"},(0,c.a)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"রিয়াক্ট এপ্লিকেশনে আমরা ব্রাউজার স্ক্রিনে যা কিছু দেখি তার সবকিছুই রিয়াক্টের দ্বারা রেন্ডার হয়ে আসতে হয় ।"}),"\n",(0,r.jsx)(t.h3,{id:"রেন্ডার-এবং-কমিট",children:"রেন্ডার এবং কমিট"}),"\n",(0,r.jsxs)(t.p,{children:["এই যে স্ক্রিনে আমরা ",(0,r.jsx)(t.code,{children:"UI"})," দেখতে পাই তা রিয়াক্টের তিনটা প্রসেসের পর স্ক্রিনে ভিসিবল হয় । চলুন তাহলে জেনে নেই রিয়াক্টের রেন্ডারিং এর এই তিনটা প্রসেস কি আর কিভাবে কাজ করে ।"]}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.strong,{children:"Trigering a render:"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.strong,{children:"Rendering the component:"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.strong,{children:"Commiting to the DOM:"})}),"\n"]}),"\n",(0,r.jsxs)(s.Rg,{children:[(0,r.jsx)(t.h3,{id:"trigger-a-render-ট্রিগারিং-স্টেপ",children:"Trigger a render (ট্রিগারিং স্টেপ):"}),(0,r.jsxs)(t.p,{children:["মূলত দুইটা করনে রিয়াক্টের ",(0,r.jsx)(t.code,{children:"render"})," মেথডটা কল হয় বা রেন্ডারিং ট্রিগার হয়ঃ"]}),(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"ইনিশিয়াল রেন্ডার (initial render):"})," একদম সর্বপ্রথম যখন এপ্লিকেশন রান হয় তখন রিয়াক্ট ",(0,r.jsx)(t.code,{children:"HTML"})," এর একটা ",(0,r.jsx)(t.code,{children:"root"})," এলিমেন্টের ভিতর রিয়াক্টের সমস্ত কম্পোনেন্টকে রেন্ডার করে দেয় তার ",(0,r.jsx)(t.code,{children:"React.render()"})," মেথডটাকে কল করার মাধ্যমে ।"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"যখন কোন স্টেট আপডেট হয় (Re-render when state update):"})," প্রথমবার সমস্ত কম্পোনেন্ট ",(0,r.jsx)(t.code,{children:"UI"})," তে এসে যাওয়ার পর, যখন কোন কম্পোনেন্টের ভিতরে কোন স্টেট চেঞ্জ হয় তখন রিয়াক্ট অটেমেটিক ভাবে তার ",(0,r.jsx)(t.code,{children:"render()"})," মেথডকে কল করে বা রি-রেন্ডার ট্রিগার হয় ।"]}),"\n"]}),"\n"]}),(0,r.jsx)(t.h3,{id:"react-render-your-component-রেন্ডারিং-স্টেপ",children:"React render your component (রেন্ডারিং স্টেপ):"}),(0,r.jsx)(t.p,{children:"যখন রিয়াক্টের রেন্ডারিং টা ট্রিগার হয় তখন রিয়াক্ট তার কম্পোনেন্টগুলোকে কল করে। যাতে সে বুঝতে পারে কোথায় পরিবর্তনটা হয়েছে।"}),(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"এক্ষেত্রে প্রথম রেন্ডারে রিয়াক্ট তার রুট (root) কম্পোনেন্টকে কল করে"})}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:(0,r.jsxs)(t.strong,{children:["পরবর্তি সময়ে রি-রেন্ডার ট্রিগার হলে যেই কম্পোনেন্ট থেকে রি-রেন্ডার ট্রিগার হয়েছে সেই কম্পোনেন্টকে কল করে এবং তার প্রথম রেন্ডারের যে ",(0,r.jsx)(t.code,{children:"Render Tree"})," তার একটা ",(0,r.jsx)(t.code,{children:"snapshot"})," নিয়ে রাখে এবং পরবর্তি রেন্ডারেরে একটা ",(0,r.jsx)(t.code,{children:"snapshot"})," নিয়ে তার ভার্চুয়াল ডম এ ",(0,r.jsx)(t.code,{children:"Diffing"})," এলগরিদমের মাধ্যমে কেলকুলেট করে যে কোথায় পরিবর্তন হয়েছে । তারপর সে নেক্সট স্টেপে চলে যায় কমিট করার জন্য ।"]})}),"\n"]}),"\n"]}),(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"রেন্ডারিং প্রসেসটা রিকারসিভলি হয়ে থাকে, তার মানে হলো রিয়াক্ট রেন্ডারিং এ যেই কম্পোনেন্টকে কল করেছে তার ভিতর যদি নেস্টেড আরও কোন কম্পোনেন্ট থাকে সেগুলাও রি-রেন্ডার হয়"})}),(0,r.jsx)(t.h3,{id:"react-commits-changes-to-the-dom-কমিটিং-স্টেপ",children:"React Commits changes to the DOM (কমিটিং স্টেপ):"}),(0,r.jsxs)(t.p,{children:["কমিটিং ফেজে এসে রিয়াক্ট ",(0,r.jsx)(t.code,{children:"DOM"})," মডিফাই করে । এক্ষেত্রে,"]}),(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:(0,r.jsxs)(t.strong,{children:["প্রথম রেন্ডারে রিয়াক্ট ",(0,r.jsx)(t.code,{children:"DOM"})," এর ",(0,r.jsx)(t.code,{children:"appendChild()"})," কল করে সমস্ত ",(0,r.jsx)(t.code,{children:"DOM Nodes"}),"গুলোকে রুট এলিমেটে এড করে দেয়"]})}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:(0,r.jsxs)(t.strong,{children:["রি-রেন্ডারের ক্ষেত্রে রিয়াক্ট তার ভার্চুয়াল ডম এ যেই অংশটুকুর পরিবর্তন ডিটেক্ট করতে পারে শুধুমাত্র সেই অংশটুকু ",(0,r.jsx)(t.code,{children:"DOM"}),"এ চেঞ্জ করে দেয়"]})}),"\n"]}),"\n"]}),(0,r.jsx)(t.p,{children:(0,r.jsxs)(t.strong,{children:["প্রথমবার রেন্ডার হয়ে যাওয়ার পর রিয়াক্ট শুধু তখনি ",(0,r.jsx)(t.code,{children:"DOM"})," এ চেঞ্জ করে যখন সে দেখতে পারে আগের রেন্ডার এবং পরের রেন্ডারে কোন পার্থক্য আছে। যেই সকল কম্পোনেন্টে কোন প্রকার চেঞ্জ দেখা যায়না রিয়াক্ট সেই সকল কম্পোনেন্টে হাত ই দেয়না।"]})})]}),"\n",(0,r.jsx)(t.h3,{id:"সবশেষে-ব্রাউজার-পেইন্ট-হয়ঃ",children:"সবশেষে ব্রাউজার পেইন্ট হয়ঃ"}),"\n",(0,r.jsxs)(t.p,{children:["রেন্ডারিং এবং কমিট হয়ে যাওয়ার পর যখন রিয়াক্ট তার ",(0,r.jsx)(t.code,{children:"DOM"})," টাকে আপডেট করে ফেলে,তখন সে ",(0,r.jsx)(t.code,{children:"Updated DOM"}),"টা ব্রাউজারকে দিয়ে দেয়। এবং ব্রাউজার তা স্ক্রিনে রি-পেইন্ট করে দেয়।"]})]})}let u={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}=Object.assign({},(0,c.a)(),e.components);return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)},pageOpts:{filePath:"pages/reactive-accilarator/React-js/module-2/how-rendering-works.mdx",route:"/reactive-accilarator/React-js/module-2/how-rendering-works",timestamp:1731392824e3,pageMap:[{kind:"Meta",data:{"reactive-accilarator":{title:"Reactive Accelerator",type:"page"}}},{kind:"Folder",name:"reactive-accilarator",route:"/reactive-accilarator",children:[{kind:"Folder",name:"Firebase",route:"/reactive-accilarator/Firebase",children:[{kind:"MdxPage",name:"Authentication-authorization",route:"/reactive-accilarator/Firebase/Authentication-authorization"},{kind:"Meta",data:{"Authentication-authorization":"Firebase : Authentication & Authorization"}}]},{kind:"MdxPage",name:"Firebase",route:"/reactive-accilarator/Firebase"},{kind:"Folder",name:"React-js",route:"/reactive-accilarator/React-js",children:[{kind:"Meta",data:{"module-1":"Getting Started With React : Describing The UI","module-2":"Going Deep into React: Adding Interactivity","module-3":"React State Management Deep Dive","module-4":"React Escape Hatches","module-5":"React Beyond Basics: Advanced Concepts"}},{kind:"Folder",name:"module-1",route:"/reactive-accilarator/React-js/module-1",children:[{kind:"MdxPage",name:"React-installation-and-development-environment-setup",route:"/reactive-accilarator/React-js/module-1/React-installation-and-development-environment-setup"},{kind:"Meta",data:{"introduction-to-react":"1.1 - Introduction to React","React-installation-and-development-environment-setup":"1.2 - React-installation-and-development-environment-setup","vertual-dom":"1.3 - How React Works: Virtual Dom","basics-of-react-component":"1.4 - Basics of React Component: Your First Component","component-export-import":"1.5 - Basics of React Component: Importing & Exporting Components","jsx-markup":"1.6 - Basics of JSX: React's Markup - Writing Markup with JSX","javascript-in-jsx":"1.7 - Basics of JSX: React's Markup - JavaScript in JSX with Curly Braces","understanding-props":"1.8 - Understanding Props - Passing Props to a Component","conditional-renderaing":"1.9 - Conditional Rendering","rendering-list":"1.10 - Rendering Lists","pure-components":"1.11 - Pure Components: Keeping Components Pure","your-ui-as-a-tree":"1.12 - Your UI as a Tree"}},{kind:"MdxPage",name:"basics-of-react-component",route:"/reactive-accilarator/React-js/module-1/basics-of-react-component"},{kind:"MdxPage",name:"component-export-import",route:"/reactive-accilarator/React-js/module-1/component-export-import"},{kind:"MdxPage",name:"conditional-renderaing",route:"/reactive-accilarator/React-js/module-1/conditional-renderaing"},{kind:"MdxPage",name:"introduction-to-react",route:"/reactive-accilarator/React-js/module-1/introduction-to-react"},{kind:"MdxPage",name:"javascript-in-jsx",route:"/reactive-accilarator/React-js/module-1/javascript-in-jsx"},{kind:"MdxPage",name:"jsx-markup",route:"/reactive-accilarator/React-js/module-1/jsx-markup"},{kind:"MdxPage",name:"pure-components",route:"/reactive-accilarator/React-js/module-1/pure-components"},{kind:"MdxPage",name:"rendering-list",route:"/reactive-accilarator/React-js/module-1/rendering-list"},{kind:"MdxPage",name:"understanding-props",route:"/reactive-accilarator/React-js/module-1/understanding-props"},{kind:"MdxPage",name:"vertual-dom",route:"/reactive-accilarator/React-js/module-1/vertual-dom"},{kind:"MdxPage",name:"your-ui-as-a-tree",route:"/reactive-accilarator/React-js/module-1/your-ui-as-a-tree"}]},{kind:"Folder",name:"module-2",route:"/reactive-accilarator/React-js/module-2",children:[{kind:"Meta",data:{"responding-to-event":"2.1 - Responding to Events - Adding Event Handlers","event-propagation":"2.2 - Responding to Events - Event Propagation","understanding-state":"2.3 - Understanding State - A Component's Memory","how-rendering-works":"2.4 - How Rendering Works","state-as-a-snapshot":"2.5 - State as a Snapshot","queueing-state":"2.6 - Queueing a Series of State Updates","updating-object-in-state":"2.7 - Updating Objects in a State","updateing-array-in-state":"2.8 - Updating Arrays in a State"}},{kind:"MdxPage",name:"event-propagation",route:"/reactive-accilarator/React-js/module-2/event-propagation"},{kind:"MdxPage",name:"how-rendering-works",route:"/reactive-accilarator/React-js/module-2/how-rendering-works"},{kind:"MdxPage",name:"queueing-state",route:"/reactive-accilarator/React-js/module-2/queueing-state"},{kind:"MdxPage",name:"responding-to-event",route:"/reactive-accilarator/React-js/module-2/responding-to-event"},{kind:"MdxPage",name:"state-as-a-snapshot",route:"/reactive-accilarator/React-js/module-2/state-as-a-snapshot"},{kind:"MdxPage",name:"understanding-state",route:"/reactive-accilarator/React-js/module-2/understanding-state"},{kind:"MdxPage",name:"updateing-array-in-state",route:"/reactive-accilarator/React-js/module-2/updateing-array-in-state"},{kind:"MdxPage",name:"updating-object-in-state",route:"/reactive-accilarator/React-js/module-2/updating-object-in-state"}]},{kind:"Folder",name:"module-3",route:"/reactive-accilarator/React-js/module-3",children:[{kind:"Meta",data:{"declaretive-imperative":"3.1 - Declarative vs Imperative UI","thinking-about-ui":"3.2 - Thinking About UI Declaratively in React","choosing-the-state-structure":"3.3 - Choosing the state Structure in React","lifting-state-up":"3.4 - Share State Between Components: Lifting State Up","preserving-and-reseting-state":"3.5 - Preserving and Reseting State : Default Behaviour","reseting-state-at-same-position":"3.6 - Resetting State at Same Position : Changing Default Behaviour","extracting-state-logic-into-reducer":"3.7 - Extracting State Logic into Reducers","passing-data-deeply-with-context":"3.8 - Passing Data Deeply With Context - Introduction to Context API","scaling-up-with-reducer-and-context":"3.9 - Scaling Up with Reducers and Context"}},{kind:"MdxPage",name:"choosing-the-state-structure",route:"/reactive-accilarator/React-js/module-3/choosing-the-state-structure"},{kind:"MdxPage",name:"declaretive-imperative",route:"/reactive-accilarator/React-js/module-3/declaretive-imperative"},{kind:"MdxPage",name:"extracting-state-logic-into-reducer",route:"/reactive-accilarator/React-js/module-3/extracting-state-logic-into-reducer"},{kind:"MdxPage",name:"lifting-state-up",route:"/reactive-accilarator/React-js/module-3/lifting-state-up"},{kind:"MdxPage",name:"passing-data-deeply-with-context",route:"/reactive-accilarator/React-js/module-3/passing-data-deeply-with-context"},{kind:"MdxPage",name:"preserving-and-reseting-state",route:"/reactive-accilarator/React-js/module-3/preserving-and-reseting-state"},{kind:"MdxPage",name:"reseting-state-at-same-position",route:"/reactive-accilarator/React-js/module-3/reseting-state-at-same-position"},{kind:"MdxPage",name:"scaling-up-with-reducer-and-context",route:"/reactive-accilarator/React-js/module-3/scaling-up-with-reducer-and-context"},{kind:"MdxPage",name:"thinking-about-ui",route:"/reactive-accilarator/React-js/module-3/thinking-about-ui"}]},{kind:"Folder",name:"module-4",route:"/reactive-accilarator/React-js/module-4",children:[{kind:"Meta",data:{"referencing-values-with-refs":"4.1 - Referenceing Values with Refs","manipulating-dom-with-refs":"4.2 - Manipulating DOM with Refs","forwarding-refs":"4.3 - Forwarding Refs : Accessing another component’s DOM nodes ",useImperativeHandle:"4.4 - UseImperativeHandle : Exposing the subset of the API with an Imperative Handle","flushing-state-updates-synchronously":"4.5 - Flushing State Updates Synchronously with flushSync","syncronising-with-effets-overview":"4.6 - Synchronising with Effects: Overview and How To Write Effects","handling-effects-firing-twice":"4.7 - Handling Effects Firing Twice in Development","fatching-data":"4.8 - Synchronising with Effects: Fatching Data","you-might-not-need-an-effect":"4.9 - You Might Not Need an Effect","the-lifecycle-of-an-effect":"4.10 - The Lifecycle of an Effect","effect-react-to-reactive-values":"4.11 - Effect React To Reactive Values","seperating-events-from-effects":"4.12 - Separating Events from Effects","removing-effect-dependecies":"4.13 - Removing Effect Dependencies","reusing-logic-with-custom-hook":"4.14 - Reusing Logic with Custom Hook","performance-optimization":"4.15 - Performance Optimization"}},{kind:"MdxPage",name:"effect-react-to-reactive-values",route:"/reactive-accilarator/React-js/module-4/effect-react-to-reactive-values"},{kind:"MdxPage",name:"fatching-data",route:"/reactive-accilarator/React-js/module-4/fatching-data"},{kind:"MdxPage",name:"flushing-state-updates-synchronously",route:"/reactive-accilarator/React-js/module-4/flushing-state-updates-synchronously"},{kind:"MdxPage",name:"forwarding-refs",route:"/reactive-accilarator/React-js/module-4/forwarding-refs"},{kind:"MdxPage",name:"handling-effects-firing-twice",route:"/reactive-accilarator/React-js/module-4/handling-effects-firing-twice"},{kind:"MdxPage",name:"manipulating-dom-with-refs",route:"/reactive-accilarator/React-js/module-4/manipulating-dom-with-refs"},{kind:"MdxPage",name:"performance-optimization",route:"/reactive-accilarator/React-js/module-4/performance-optimization"},{kind:"MdxPage",name:"referencing-values-with-refs",route:"/reactive-accilarator/React-js/module-4/referencing-values-with-refs"},{kind:"MdxPage",name:"removing-effect-dependecies",route:"/reactive-accilarator/React-js/module-4/removing-effect-dependecies"},{kind:"MdxPage",name:"reusing-logic-with-custom-hook",route:"/reactive-accilarator/React-js/module-4/reusing-logic-with-custom-hook"},{kind:"MdxPage",name:"seperating-events-from-effects",route:"/reactive-accilarator/React-js/module-4/seperating-events-from-effects"},{kind:"MdxPage",name:"syncronising-with-effets-overview",route:"/reactive-accilarator/React-js/module-4/syncronising-with-effets-overview"},{kind:"MdxPage",name:"the-lifecycle-of-an-effect",route:"/reactive-accilarator/React-js/module-4/the-lifecycle-of-an-effect"},{kind:"MdxPage",name:"useImperativeHandle",route:"/reactive-accilarator/React-js/module-4/useImperativeHandle"},{kind:"MdxPage",name:"you-might-not-need-an-effect",route:"/reactive-accilarator/React-js/module-4/you-might-not-need-an-effect"}]},{kind:"Folder",name:"module-5",route:"/reactive-accilarator/React-js/module-5",children:[{kind:"Meta",data:{"react-suspense-and-error-bounderies":"React Suspense and Error Bounderies","react-lazy-load":"React Lazy Load"}},{kind:"MdxPage",name:"react-lazy-load",route:"/reactive-accilarator/React-js/module-5/react-lazy-load"},{kind:"MdxPage",name:"react-suspense-and-error-bounderies",route:"/reactive-accilarator/React-js/module-5/react-suspense-and-error-bounderies"}]}]},{kind:"Folder",name:"Tanstack-query",route:"/reactive-accilarator/Tanstack-query",children:[{kind:"MdxPage",name:"installation",route:"/reactive-accilarator/Tanstack-query/installation"},{kind:"Meta",data:{installation:"Installation"}}]},{kind:"Meta",data:{index:{title:"Getting Started"},git:"Git and Github Refresher","frontend-focus-topic":"Frontend Focus Topic","javascript-refresher":"Javascript Refresher","React-js":"React Js","react-router-dom":"React Router Dom",Firebase:"Firebase","tanstack-query":"Tanstack Query / React Query","react-hook-form":"React Hook Form","framer-motion":"Framer Motion",redux:"Redux"}},{kind:"MdxPage",name:"framer-motion",route:"/reactive-accilarator/framer-motion"},{kind:"MdxPage",name:"frontend-focus-topic",route:"/reactive-accilarator/frontend-focus-topic"},{kind:"MdxPage",name:"git",route:"/reactive-accilarator/git"},{kind:"MdxPage",name:"index",route:"/reactive-accilarator"},{kind:"MdxPage",name:"javascript-refresher",route:"/reactive-accilarator/javascript-refresher"},{kind:"MdxPage",name:"react-hook-form",route:"/reactive-accilarator/react-hook-form"},{kind:"MdxPage",name:"react-router-dom",route:"/reactive-accilarator/react-router-dom"},{kind:"MdxPage",name:"redux",route:"/reactive-accilarator/redux"},{kind:"MdxPage",name:"tanstack-query",route:"/reactive-accilarator/tanstack-query"}]}],flexsearch:{codeblocks:!0},title:"How Rendering Works",headings:d},pageNextRoute:"/reactive-accilarator/React-js/module-2/how-rendering-works",nextraLayout:i.ZP,themeConfig:o.Z};t.default=(0,n.j)(u)},5184:function(){}},function(e){e.O(0,[3383,2888,9774,179],function(){return e(e.s=8705)}),_N_E=e.O()}]);