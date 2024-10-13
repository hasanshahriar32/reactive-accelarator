(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[252],{3107:function(e,n,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/reactive-accilarator/React-js/module-2/responding-to-event",function(){return s(2189)}])},4930:function(e,n,s){"use strict";var r=s(2676),o=s(821);n.Z={logo:(0,r.jsxs)("span",{style:{color:"",fontSize:"30px"},children:["Devripon",(0,r.jsx)("span",{style:{color:"red",fontSize:"50px"},children:"."}),(0,r.jsx)("span",{style:{color:"red",fontSize:"30px",fontWeight:"bolder"}})]}),project:{link:"https://github.com/Deveripon/reactive-accelarator"},docsRepositoryBase:"https://github.com/Deveripon/reactive-accelarator/tree/main/",useNextSeoProps(){let{asPath:e}=(0,o.useRouter)();if("/"!==e)return{titleTemplate:"%s – Reactive Accelarator"}},head:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,r.jsx)("meta",{property:"og:title",content:"রিয়াক্টিভ এক্সিলারেটর"}),(0,r.jsx)("meta",{property:"og:description",content:"রিয়াক্ট ও নেক্সট জে এস এর বাংলায় লিখা ডকুমেন্টেশন যা একজন ডেভেলপারকে রিয়াক্ট ও নেক্সট জে এস নিজের ভাষায় আরও সহজ করে বুঝতে সাহায্য করবে।"})]}),banner:{key:"2.0-release",text:(0,r.jsx)("a",{href:"https://github.com/deveripon/",target:"_blank",children:"\uD83C\uDF89 follow my github →"}),dismissible:!0},toc:{backToTop:!0},sidebar:{defaultMenuCollapseLevel:2},footer:{text:(0,r.jsxs)("span",{children:["copyright ",new Date().getFullYear()," \xa9"," ",(0,r.jsx)("a",{href:"https://github.com/deveripon",target:"_blank",children:"devripon"}),"."]})}}},2189:function(e,n,s){"use strict";s.r(n),s.d(n,{__toc:function(){return c}});var r=s(2676),o=s(6957),i=s(297),t=s(4930);s(9691);var l=s(3772),a=s(5841);let c=[{depth:3,value:"Adding Event Handler to JSX",id:"adding-event-handler-to-jsx"},{depth:3,value:"হ্যান্ডেলার ফাংশন ডিক্লেয়ার করা এবং লজিক এড করাঃ",id:"হ্যান্ডেলার-ফাংশন-ডিক্লেয়ার-করা-এবং-লজিক-এড-করাঃ"},{depth:3,value:"হ্যান্ডেলার ফাংশনটি বাটনে এড করাঃ",id:"হ্যান্ডেলার-ফাংশনটি-বাটনে-এড-করাঃ"},{depth:3,value:"Reading Props in Event Handler",id:"reading-props-in-event-handler"},{depth:3,value:"Pass Event Handler to Child Components as Props",id:"pass-event-handler-to-child-components-as-props"},{depth:3,value:"Naming Conventions of event handler props",id:"naming-conventions-of-event-handler-props"}];function d(e){let n=Object.assign({p:"p",h3:"h3",code:"code",pre:"pre",span:"span",strong:"strong",ul:"ul",li:"li",hr:"hr",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,l.a)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"রিয়াক্ট আমাদের ইভেন্ট হ্যন্ডেল করার সিস্টেম দিয়ে দিয়েছে। ইভেন্ট হ্যান্ডেলার হলো মূলত যখন কোন ইভেন্ট ট্রিগার হয়, যেমন ঃ ক্লিক,হভার,ফোকাস এসব।"}),"\n",(0,r.jsx)(n.h3,{id:"adding-event-handler-to-jsx",children:"Adding Event Handler to JSX"}),"\n",(0,r.jsxs)(n.p,{children:["রিয়াক্টে আমরা দুটি স্টেপে ",(0,r.jsx)(n.code,{children:"Event Handler"})," এড করতে পারিঃ"]}),"\n",(0,r.jsxs)(a.Rg,{children:[(0,r.jsx)(n.h3,{id:"হ্যান্ডেলার-ফাংশন-ডিক্লেয়ার-করা-এবং-লজিক-এড-করাঃ",children:"হ্যান্ডেলার ফাংশন ডিক্লেয়ার করা এবং লজিক এড করাঃ"}),(0,r.jsxs)(n.p,{children:["প্রথমত একটা হ্যান্ডেলার ফাংশন ডিক্লেয়ার করতে হবে এবং এতে লজিক ইমপ্লিমেন্ট করতে হবে।\nধরুন, একটা ",(0,r.jsx)(n.code,{children:"button"}),' এ ক্লিক করলে আমরা দেখাতে চাই যে "বাটনে ক্লিক করা হয়েছে" সেক্ষেত্রে আমাদের হ্যান্ডেলার ফাংশন ও লজিক হবে এমনঃ']}),(0,r.jsx)(n.pre,{"data-language":"jsx","data-theme":"default",filename:"Button.jsx",hasCopyCode:!0,children:(0,r.jsxs)(n.code,{"data-language":"jsx","data-theme":"default",children:[(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"Button"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"(){"})]}),"\n",(0,r.jsx)(n.span,{className:"line",children:" "}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"handleClick"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"(){ "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"// এখনে handleClick নামে একটা হ্যন্ডেলার ফাংশন ডিক্লেয়ার করা হয়েছে এবং তার ভিতরে লজিক ইমপ্লিমেন্ট করা হয়েছে।"})]}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"alert"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"বাটনে ক্লিক করা হয়েছে"'}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:");"})]}),"\n",(0,r.jsx)(n.span,{className:"line",children:(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    }"})}),"\n",(0,r.jsx)(n.span,{className:"line",children:" "}),"\n",(0,r.jsx)(n.span,{className:"line",children:(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"}"})}),"\n",(0,r.jsx)(n.span,{className:"line",children:" "})]})}),(0,r.jsx)(n.h3,{id:"হ্যান্ডেলার-ফাংশনটি-বাটনে-এড-করাঃ",children:"হ্যান্ডেলার ফাংশনটি বাটনে এড করাঃ"}),(0,r.jsxs)(n.p,{children:["এরপর হ্যান্ডেলার ফাংশনটি ",(0,r.jsx)(n.code,{children:"button"})," এলিমেন্টে এড করতে হবেঃ"]}),(0,r.jsx)(n.pre,{"data-language":"jsx","data-theme":"default",filename:"Button.jsx",hasCopyCode:!0,children:(0,r.jsxs)(n.code,{"data-language":"jsx","data-theme":"default",children:[(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"Button"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"(){"})]}),"\n",(0,r.jsx)(n.span,{className:"line",children:" "}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"handleClick"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"(){"})]}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"alert"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"বাটনে ক্লিক করা হয়েছে"'}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:");"})]}),"\n",(0,r.jsx)(n.span,{className:"line",children:(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    }"})}),"\n",(0,r.jsx)(n.span,{className:"line",children:" "}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" <"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"button"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"onClick"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"{handleClick}>Click Me</"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"button"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"> "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"// এখনে বাটনের onClick এ হ্যান্ডেলার ফাংশনটি এড করা হয়েছে।"})]}),"\n",(0,r.jsx)(n.span,{className:"line",children:" "}),"\n",(0,r.jsx)(n.span,{className:"line",children:(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"}"})})]})})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsxs)(n.strong,{children:["এছাড়াও আমরা ",(0,r.jsx)(n.code,{children:"JSX"})," এর ইনলাইনেও ",(0,r.jsx)(n.code,{children:"Event Handler"})," ফাংশন এড করতে পারি ।"]})}),"\n",(0,r.jsx)(n.p,{children:"যেমনঃ"}),"\n",(0,r.jsx)(n.pre,{"data-language":"jsx","data-theme":"default",filename:"Button.jsx",hasCopyCode:!0,children:(0,r.jsxs)(n.code,{"data-language":"jsx","data-theme":"default",children:[(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"Button"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"(){"})]}),"\n",(0,r.jsx)(n.span,{className:"line",children:" "}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" <"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"button"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"onClick"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"{ "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"handleClick"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"(){"})]}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"alert"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"বাটনে ক্লিক করা হয়েছে"'}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:");"})]}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    }}>Click Me</"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"button"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"> "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"// এখনে বাটনের onClick এ হ্যান্ডেলার ফাংশনটি এড করা হয়েছে।"})]}),"\n",(0,r.jsx)(n.span,{className:"line",children:" "}),"\n",(0,r.jsx)(n.span,{className:"line",children:(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"}"})})]})}),"\n",(0,r.jsxs)(n.p,{children:["অথবা আরও ছোট করেও লিখতে পারি ",(0,r.jsx)(n.code,{children:"Arrow Function"})," এর সিনট্যাক্সেঃ"]}),"\n",(0,r.jsx)(n.pre,{"data-language":"jsx","data-theme":"default",filename:"Button.jsx",hasCopyCode:!0,children:(0,r.jsxs)(n.code,{"data-language":"jsx","data-theme":"default",children:[(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"Button"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"() {"})]}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" ("})]}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"        <"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"button"})]}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"            "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"onClick"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"{() "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"                "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"alert"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"বাটনে ক্লিক করা হয়েছে"'}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:");"})]}),"\n",(0,r.jsx)(n.span,{className:"line",children:(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"            }}>"})}),"\n",(0,r.jsx)(n.span,{className:"line",children:(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"            Click Me"})}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"        </"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"button"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    ); "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"// এখনে বাটনের onClick এ হ্যান্ডেলার ফাংশনটি এড করা হয়েছে।"})]}),"\n",(0,r.jsx)(n.span,{className:"line",children:(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"}"})})]})}),"\n",(0,r.jsxs)(n.p,{children:["এখানে একটি ফাংশন ডিফাইন করা হয়েছে ",(0,r.jsx)(n.code,{children:"handleClick"})," নামে এবং তা ",(0,r.jsx)(n.code,{children:"button"})," এলিমেন্টে ",(0,r.jsx)(n.code,{children:"as a props"})," পাস করা হয়েছে । ",(0,r.jsx)(n.code,{children:"handleClick"})," ফাংশনটি একটা ",(0,r.jsx)(n.code,{children:"event handler"})," ফাংশন।"]}),"\n",(0,r.jsx)(a.UW,{type:"warning",emoji:"\uD83D\uDCA1",children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\uD83D\uDC49 ইভেন্ট হ্যান্ডেলার ফাংশনগুলো কম্পোনেন্ট এর ভিতরে ডিফাইন করতে হয় ।"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\uD83D\uDC49 কনভেনশন অনুযায়ী ",(0,r.jsx)(n.code,{children:"event handler"}),"এর নামগুলোর শুরুতে ",(0,r.jsx)(n.code,{children:"handle"})," এবং তারপর\n",(0,r.jsx)(n.code,{children:"event name"})," দিয়ে লিখতে হয়। যেমনঃ",(0,r.jsx)(n.code,{children:"handleClick"})," ",(0,r.jsx)(n.code,{children:"handleMouseEnter"}),"\n",(0,r.jsx)(n.code,{children:"handleMouseLeave"})]}),"\n"]}),"\n"]})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsxs)(a.UW,{type:"info",emoji:"\uD83D\uDCCD",children:[(0,r.jsxs)(n.p,{children:["ইভেন্ট হ্যান্ডেলার ফাংশনগুলো কম্পোনেন্ট এর ভিতরে পাস করতে হবে, ",(0,r.jsx)(n.strong,{children:"অবশ্যই শুধুমাত্র পাস করা লাগবে, কল করা যাবেনা"}),"\nযেমনঃ"]}),(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{align:"center",children:"✅ শুধুমাত্র পাস করা হয়েছে"}),(0,r.jsx)(n.th,{align:"center",children:"❌ সরাসরি কল করা হয়েছে"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{align:"center",children:(0,r.jsx)(n.code,{children:"<button onClick={handleClick}</button>"})}),(0,r.jsx)(n.td,{align:"center",children:(0,r.jsx)(n.code,{children:"<button onClick={handleClick()}</button>"})})]})})]}),(0,r.jsx)(n.p,{children:"এই দুইটা সিস্টেমের মাঝে খুব ভালো একটা পার্থক্য আছে।"}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["শুধুমাত্র পাস করা ",(0,r.jsx)(n.code,{children:"<button onClick={handleClick}</button>"})," মানে হলো - রিয়াক্ট কে বলা যে আমি তোমাকে একটা ইভেন্ট হ্যান্ডেলার দিয়ে দিলাম,তুমি এটা মনে রেখো যে যখনি ওই ইভেন্ট টা ঘটবে তখনই তুমি ফাংশন টা কল করে দিও।\nএক্ষেত্রে যেমন ",(0,r.jsx)(n.code,{children:"Click"})," ইভেন্ট হ্যান্ডেলার ব্যাবহার করা হয়েছে,তার মানে হলো যখন ",(0,r.jsx)(n.code,{children:"Click"})," হবে ঠিক তখনি ফাংশনটা কল হবে এবং আউটপুট দেখা যাবে ।"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["কিন্তু সরাসরি কল করে দেয়া ",(0,r.jsx)(n.code,{children:"<button onClick={handleClick()}</button>"})," মানে হলোঃ কম্পোনেন্ট রেন্ডার হওয়ার সাথে সাথেই অটোমেটিক ফাংশন কল হয়ে যাবে , এতে ক্লিক হউয়ার জন্য ওয়েট করবেনা । এতে করে যদি কখনো কোন ফাংশনের দ্বারা ",(0,r.jsx)(n.code,{children:"State"})," ম্যানেজ করা হয়ে থাকে, তখন বার বার ",(0,r.jsx)(n.code,{children:"State"})," চেঞ্জ হতে থাকবে আর কম্পোনেন্ট রি-রেন্ডার হতে থাকবে। এটা এপ্লিকেশন একটা ",(0,r.jsx)(n.code,{children:"infinte"})," লুপে পড়ে যাবে।"]}),"\n"]}),"\n"]}),(0,r.jsxs)(n.p,{children:["ইনলাইনে ফাংশন ডিফাইন করার ক্ষেত্রেও এই একই বিষয় টা খেয়াল রাখতে হয়। যদিও সেখানে শুদুমাত্র আমরা ফাংশনের ডেফিনেশন টাই লিখি ফাংশনটা কল করে দেইনা। তবে ",(0,r.jsx)(n.code,{children:"IIFE-(immediately invoked function expression)"})," সাথে সাথেই কল হয়ে যায় বলে আমরা ইনলাইনে ",(0,r.jsx)(n.code,{children:"IIFE-(immediately invoked function expression)"})," লিখতে পারবোনা।"]})]}),"\n",(0,r.jsx)(n.h3,{id:"reading-props-in-event-handler",children:"Reading Props in Event Handler"}),"\n",(0,r.jsxs)(n.p,{children:["ইভেন্ট হ্যান্ডেলারগুলো যেহেতু কম্পোনেন্টের ভিতরে লেখা হয় তাই কম্পোনেন্টের যেসব প্রপস আছে তা ",(0,r.jsx)(n.code,{children:"event handler function"}),"গুলো সরাসরি এক্সেস করতে পারে ।"]}),"\n",(0,r.jsx)(n.h3,{id:"pass-event-handler-to-child-components-as-props",children:"Pass Event Handler to Child Components as Props"}),"\n",(0,r.jsxs)(n.p,{children:["কখনো কখনো আমাদের প্যারেন্ট কম্পোনেন্ট থেকে চাইল্ড কম্পোনেন্ট এর ইভেন্ট কে ম্যানেজ করা লাগে। সেই ক্ষেত্রে প্যারেন্ট কম্পোনেন্টে ",(0,r.jsx)(n.code,{children:"event handler function"})," ডিফাইন করে তা প্রপস আকারে চাইল্ড কম্পোনেন্টে পাস করা যায়।"]}),"\n",(0,r.jsx)(n.p,{children:"চলুন একটু বিস্তারিত বুঝিঃ"}),"\n",(0,r.jsx)(n.pre,{"data-language":"jsx","data-theme":"default",filename:"App.jsx",hasCopyCode:!0,children:(0,r.jsxs)(n.code,{"data-language":"jsx","data-theme":"default",children:[(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"App"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"() {"})]}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"handlePlay"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"() {"})]}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"alert"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"Movie is playing"'}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:");"})]}),"\n",(0,r.jsx)(n.span,{className:"line",children:(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    }"})}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" <"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"MovieCard"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"onPlay"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"{handlePlay} />;"})]}),"\n",(0,r.jsx)(n.span,{className:"line",children:(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"}"})})]})}),"\n",(0,r.jsx)(n.pre,{"data-language":"jsx","data-theme":"default",filename:"MovieCard.jsx",hasCopyCode:!0,children:(0,r.jsxs)(n.code,{"data-language":"jsx","data-theme":"default",children:[(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"MovieCard"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"({ onPlay }) {"})]}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" <"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"button"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"onClick"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"{onPlay}>Play</"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"button"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:">;"})]}),"\n",(0,r.jsx)(n.span,{className:"line",children:(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"}"})})]})}),"\n",(0,r.jsxs)(n.p,{children:["এখানে ",(0,r.jsx)(n.code,{children:"App"})," কম্পোনেন্ট একটি প্যারেন্ট কম্পোনেন্ট এবং এর চাইল্ড হিসেবে রয়েছে একটা ",(0,r.jsx)(n.code,{children:"MovieCard"})," কম্পোনেন্ট। এবং মুভিকার্ড কম্পোনেন্ট এ একটা প্রপ্স পাস করা হয়েছে ",(0,r.jsx)(n.code,{children:"onPlay"})," নামে। এই ",(0,r.jsx)(n.code,{children:"onPlay"})," প্রপস এর মাধ্যমে মূলত ",(0,r.jsx)(n.code,{children:"handlePlay"})," নামক একটা ইভেন্ট হ্যান্ডেলার পাস করা হয়েছে ।"]}),"\n",(0,r.jsxs)(n.p,{children:["চাইল্ড কম্পোনেন্ট ",(0,r.jsx)(n.code,{children:"MovieCard"})," সেই প্রপস টাকে রিসিভ করেছে এবং বাটনের ",(0,r.jsx)(n.code,{children:"onClick"})," এ তা ট্রিগার করা হয়েছে।"]}),"\n",(0,r.jsxs)(n.p,{children:["তার মানে হলো চাইল্ড কম্পোনেন্ট ",(0,r.jsx)(n.code,{children:"MovieCard"})," এর বাটনে ক্লিক হলে কোন হ্যন্ডেলার ফাংশন কল হবে তা আমরা প্যারেন্ট কম্পোনেন্টেই ডিফাইন করতে পারি এবং তা প্রপস আকারে পাঠাতে পারি ।"]}),"\n",(0,r.jsx)(n.h3,{id:"naming-conventions-of-event-handler-props",children:"Naming Conventions of event handler props"}),"\n",(0,r.jsx)(a.UW,{type:"warning",emoji:"\uD83D\uDCA1",children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\uD83D\uDC49 ইভেন্ট হ্যান্ডেলার প্রপস এর নামের শুরুতে ",(0,r.jsx)(n.code,{children:"on"})," দিয়ে শুরু করতে হয়।"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\uD83D\uDC49 যেসব রিসার্ভড কিওয়ার্ড আছে যেমনঃ ",(0,r.jsx)(n.code,{children:"onClick"}),",",(0,r.jsx)(n.code,{children:"onHover"})," এসব শুধুমাত্র ",(0,r.jsx)(n.code,{children:"html"})," এর নেটিভ ইলিমেন্টে ব্যাবহার করা উচিত।"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\uD83D\uDC49 ",(0,r.jsx)(n.code,{children:"on"}),"দিয়ে শুরু করে তারপর প্রসঙ্গত যেকোন নামেই ব্যাবহার করা যায়। যেমনঃ ",(0,r.jsx)(n.code,{children:"onClick"})," এর পরিবর্তে ",(0,r.jsx)(n.code,{children:"onSmash"})," ব্যাবহার করা যায় ।"]}),"\n"]}),"\n"]})})]})}let h={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,l.a)(),e.components);return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)},pageOpts:{filePath:"pages/reactive-accilarator/React-js/module-2/responding-to-event.mdx",route:"/reactive-accilarator/React-js/module-2/responding-to-event",timestamp:1728800789e3,pageMap:[{kind:"Meta",data:{"reactive-accilarator":{title:"Reactive Accelerator",type:"page"}}},{kind:"Folder",name:"reactive-accilarator",route:"/reactive-accilarator",children:[{kind:"Folder",name:"React-js",route:"/reactive-accilarator/React-js",children:[{kind:"Meta",data:{"module-1":"Getting Started With React : Describing The UI","module-2":"Going Deep into React: Adding Interactivity"}},{kind:"Folder",name:"module-1",route:"/reactive-accilarator/React-js/module-1",children:[{kind:"MdxPage",name:"React-installation-and-development-environment-setup",route:"/reactive-accilarator/React-js/module-1/React-installation-and-development-environment-setup"},{kind:"Meta",data:{"introduction-to-react":"1.1 - Introduction to React","React-installation-and-development-environment-setup":"1.2 - React-installation-and-development-environment-setup","vertual-dom":"1.3 - How React Works: Vertual Dom","basics-of-react-component":"1.4 - Basics of React Component: Your First Component","component-export-import":"1.5 - Basics of React Component: Importing & Exporting Components","jsx-markup":"1.6 - Basics of JSX: React's Markup - Writing Markup with JSX","javascript-in-jsx":"1.7 - Basics of JSX: React's Markup - JavaScript in JSX with Curly Braces","understanding-props":"1.8 - Understanding Props - Passing Props to a Component","conditional-renderaing":"1.9 - Conditional Rendering","rendering-list":"1.10 Rendering Lists","pure-components":"1.11 Pure Components: Keeping Components Pure","your-ui-as-a-tree":"1.12 Your UI as a Tree"}},{kind:"MdxPage",name:"basics-of-react-component",route:"/reactive-accilarator/React-js/module-1/basics-of-react-component"},{kind:"MdxPage",name:"component-export-import",route:"/reactive-accilarator/React-js/module-1/component-export-import"},{kind:"MdxPage",name:"conditional-renderaing",route:"/reactive-accilarator/React-js/module-1/conditional-renderaing"},{kind:"MdxPage",name:"introduction-to-react",route:"/reactive-accilarator/React-js/module-1/introduction-to-react"},{kind:"MdxPage",name:"javascript-in-jsx",route:"/reactive-accilarator/React-js/module-1/javascript-in-jsx"},{kind:"MdxPage",name:"jsx-markup",route:"/reactive-accilarator/React-js/module-1/jsx-markup"},{kind:"MdxPage",name:"pure-components",route:"/reactive-accilarator/React-js/module-1/pure-components"},{kind:"MdxPage",name:"rendering-list",route:"/reactive-accilarator/React-js/module-1/rendering-list"},{kind:"MdxPage",name:"understanding-props",route:"/reactive-accilarator/React-js/module-1/understanding-props"},{kind:"MdxPage",name:"vertual-dom",route:"/reactive-accilarator/React-js/module-1/vertual-dom"},{kind:"MdxPage",name:"your-ui-as-a-tree",route:"/reactive-accilarator/React-js/module-1/your-ui-as-a-tree"}]},{kind:"Folder",name:"module-2",route:"/reactive-accilarator/React-js/module-2",children:[{kind:"Meta",data:{"responding-to-event":"2.1 - Responding to Events - Adding Event Handlers","event-propagation":"2.2 - Responding to Events - Event Propagation","understanding-state":"2.3 - Understanding State - A Component's Memory","how-rendering-works":"2.4 - How Rendering Works","state-as-a-snapshot":"2.5 - State as a Snapshot","queueing-state":"2.6 - Queueing a Series of State Updates","updating-object-in-state":"2.7 - Updating Objects in a State"}},{kind:"MdxPage",name:"event-propagation",route:"/reactive-accilarator/React-js/module-2/event-propagation"},{kind:"MdxPage",name:"how-rendering-works",route:"/reactive-accilarator/React-js/module-2/how-rendering-works"},{kind:"MdxPage",name:"queueing-state",route:"/reactive-accilarator/React-js/module-2/queueing-state"},{kind:"MdxPage",name:"responding-to-event",route:"/reactive-accilarator/React-js/module-2/responding-to-event"},{kind:"MdxPage",name:"state-as-a-snapshot",route:"/reactive-accilarator/React-js/module-2/state-as-a-snapshot"},{kind:"MdxPage",name:"understanding-state",route:"/reactive-accilarator/React-js/module-2/understanding-state"},{kind:"MdxPage",name:"updating-object-in-state",route:"/reactive-accilarator/React-js/module-2/updating-object-in-state"}]}]},{kind:"Meta",data:{index:{title:"Getting Started"},git:"Git and Github Refresher","frontend-focus-topic":"Frontend Focus Topic","javascript-refresher":"Javascript Refresher","React-js":"React Js"}},{kind:"MdxPage",name:"frontend-focus-topic",route:"/reactive-accilarator/frontend-focus-topic"},{kind:"MdxPage",name:"git",route:"/reactive-accilarator/git"},{kind:"MdxPage",name:"index",route:"/reactive-accilarator"},{kind:"MdxPage",name:"javascript-refresher",route:"/reactive-accilarator/javascript-refresher"}]}],flexsearch:{codeblocks:!0},title:"Responding to Event",headings:c},pageNextRoute:"/reactive-accilarator/React-js/module-2/responding-to-event",nextraLayout:i.ZP,themeConfig:t.Z};n.default=(0,o.j)(h)},8543:function(){}},function(e){e.O(0,[842,888,774,179],function(){return e(e.s=3107)}),_N_E=e.O()}]);