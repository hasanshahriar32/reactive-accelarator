(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1392],{3013:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/reactive-accilarator/React-js/module-3/declaretive-imperative",function(){return n(4239)}])},6828:function(e,t,n){"use strict";var s=n(2676),a=n(3909);t.Z={logo:(0,s.jsxs)("span",{style:{color:"",fontSize:"30px"},children:["Devripon",(0,s.jsx)("span",{style:{color:"red",fontSize:"50px"},children:"."}),(0,s.jsx)("span",{style:{color:"red",fontSize:"30px",fontWeight:"bolder"}})]}),project:{link:"https://github.com/Deveripon/reactive-accelarator"},docsRepositoryBase:"https://github.com/Deveripon/reactive-accelarator/tree/main/",useNextSeoProps(){let{asPath:e}=(0,a.useRouter)();if("/"!==e)return{titleTemplate:"%s – Reactive Accelarator"}},head:(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,s.jsx)("meta",{property:"og:title",content:"রিয়াক্টিভ এক্সিলারেটর"}),(0,s.jsx)("meta",{property:"og:description",content:"রিয়াক্ট ও নেক্সট জে এস এর বাংলায় লিখা ডকুমেন্টেশন যা একজন ডেভেলপারকে রিয়াক্ট ও নেক্সট জে এস নিজের ভাষায় আরও সহজ করে বুঝতে সাহায্য করবে।"})]}),banner:{key:"2.0-release",text:(0,s.jsx)("a",{href:"https://github.com/deveripon/",target:"_blank",children:"\uD83C\uDF89 follow my github →"}),dismissible:!0},toc:{backToTop:!0},sidebar:{defaultMenuCollapseLevel:2},footer:{text:(0,s.jsxs)("span",{children:["copyright ",new Date().getFullYear()," \xa9"," ",(0,s.jsx)("a",{href:"https://github.com/deveripon",target:"_blank",children:"devripon"}),"."]})}}},4239:function(e,t,n){"use strict";n.r(t),n.d(t,{__toc:function(){return c}});var s=n(2676),a=n(6957),r=n(4857),i=n(6828);n(5078);var o=n(3772);let c=[{depth:3,value:"১. ইম্পারেটিভ (Imperative) এপ্রোচ:",id:"১-ইম্পারেটিভ-imperative-এপ্রোচ"},{depth:4,value:"উদাহরণ:",id:"উদাহরণ"},{depth:3,value:"২. ডিক্লারেটিভ (Declarative) এপ্রোচ:",id:"২-ডিক্লারেটিভ-declarative-এপ্রোচ"},{depth:4,value:"উদাহরণ:",id:"উদাহরণ-1"},{depth:3,value:"প্রধান পার্থক্য:",id:"প্রধান-পার্থক্য"},{depth:3,value:"রিয়াক্ট কি এপ্রোচে তার ইউ আই চেঞ্জ করে?",id:"রিয়াক্ট-কি-এপ্রোচে-তার-ইউ-আই-চেঞ্জ-করে"},{depth:3,value:"React-এর ডিক্লারেটিভ এপ্রোচ কীভাবে কাজ করে?",id:"react-এর-ডিক্লারেটিভ-এপ্রোচ-কীভাবে-কাজ-করে"}];function l(e){let t=Object.assign({p:"p",strong:"strong",h3:"h3",h4:"h4",pre:"pre",code:"code",span:"span",ul:"ul",li:"li",ol:"ol",hr:"hr"},(0,o.a)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"ডিক্লারেটিভ (Declarative) এবং ইম্পারেটিভ (Imperative) প্রোগ্রামিং এপ্রোচ দুটি প্রোগ্রামিং করার ভিন্ন ভিন্ন পদ্ধতি। আসুন, প্রথমে প্রতিটি এপ্রোচের মূল ধারণা বুঝি, তারপরে কোডের উদাহরণ দেখি।"})}),"\n",(0,s.jsx)(t.h3,{id:"১-ইম্পারেটিভ-imperative-এপ্রোচ",children:"১. ইম্পারেটিভ (Imperative) এপ্রোচ:"}),"\n",(0,s.jsxs)(t.p,{children:["ইম্পারেটিভ প্রোগ্রামিংয়ে আপনি ",(0,s.jsx)(t.strong,{children:"কীভাবে কিছু করবেন"})," তা ধাপে ধাপে বলে দেন। আপনি প্রতিটি পদক্ষেপ নির্দিষ্টভাবে বর্ণনা করেন এবং কম্পিউটার সেই পদক্ষেপগুলি ঠিকমতো অনুসরণ করে। এটি অনেকটা রান্নার রেসিপির মতো, যেখানে প্রতিটি ধাপ স্টেপ বাই স্টেপ বলে দেয়া থাকে।"]}),"\n",(0,s.jsx)(t.h4,{id:"উদাহরণ",children:"উদাহরণ:"}),"\n",(0,s.jsx)(t.p,{children:"ধরুন, আমাদের একটি অ্যারের উপাদানগুলিকে ২ দিয়ে গুণ করতে হবে।"}),"\n",(0,s.jsx)(t.pre,{"data-language":"javascript","data-theme":"default",hasCopyCode:!0,children:(0,s.jsxs)(t.code,{"data-language":"javascript","data-theme":"default",children:[(0,s.jsx)(t.span,{className:"line",children:(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-comment)"},children:"// Imperative approach"})}),"\n",(0,s.jsxs)(t.span,{className:"line",children:[(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"numbers"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" ["}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"1"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"2"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"3"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"4"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"5"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"];"})]}),"\n",(0,s.jsxs)(t.span,{className:"line",children:[(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"doubledNumbers"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" [];"})]}),"\n",(0,s.jsx)(t.span,{className:"line",children:" "}),"\n",(0,s.jsxs)(t.span,{className:"line",children:[(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"for"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" ("}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"let"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" i "}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"0"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"; i "}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"<"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"numbers"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"."}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"length"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"; i"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"++"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:") {"})]}),"\n",(0,s.jsxs)(t.span,{className:"line",children:[(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"doubledNumbers"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-function)"},children:".push"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"(numbers[i] "}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"*"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"2"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:");"})]}),"\n",(0,s.jsx)(t.span,{className:"line",children:(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"}"})}),"\n",(0,s.jsx)(t.span,{className:"line",children:" "}),"\n",(0,s.jsxs)(t.span,{className:"line",children:[(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"console"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-function)"},children:".log"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"(doubledNumbers); "}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-comment)"},children:"// Output: [2, 4, 6, 8, 10]"})]})]})}),"\n",(0,s.jsx)(t.p,{children:"এখানে আমরা একটি লুপ দিয়ে প্রতিটি উপাদানকে ২ দিয়ে গুণ করে নতুন অ্যারেতে পুশ করছি। প্রতিটি পদক্ষেপ যেমনঃ"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"লুপিং,"}),"\n",(0,s.jsx)(t.li,{children:"গুণ,"}),"\n",(0,s.jsx)(t.li,{children:"পুশ"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"স্পষ্টভাবে বলে দেয়া হয়েছে।"}),"\n",(0,s.jsx)(t.h3,{id:"২-ডিক্লারেটিভ-declarative-এপ্রোচ",children:"২. ডিক্লারেটিভ (Declarative) এপ্রোচ:"}),"\n",(0,s.jsxs)(t.p,{children:["ডিক্লারেটিভ প্রোগ্রামিংয়ে আপনি ",(0,s.jsx)(t.strong,{children:"কী করতে চান"})," সেটি বলেন, তবে ",(0,s.jsx)(t.strong,{children:"কীভাবে করবেন"})," তা নির্দিষ্টভাবে উল্লেখ করেন না। কম্পিউটারকে নির্দিষ্টভাবে প্রতিটা স্টেপ বলে দিতে হয় না।"]}),"\n",(0,s.jsx)(t.p,{children:"এই এপ্রোচে আপনি মূলত কী চান শুধু তা বলে দেন, আর ভেতরের ইম্প্লিমেন্টেশন কম্পিউটার নিজেই বোঝে নেয় ।"}),"\n",(0,s.jsx)(t.h4,{id:"উদাহরণ-1",children:"উদাহরণ:"}),"\n",(0,s.jsx)(t.p,{children:"উপরে যে একই কাজ করলাম, এবার ডিক্লারেটিভ এপ্রোচে করবো:"}),"\n",(0,s.jsx)(t.pre,{"data-language":"javascript","data-theme":"default",hasCopyCode:!0,children:(0,s.jsxs)(t.code,{"data-language":"javascript","data-theme":"default",children:[(0,s.jsx)(t.span,{className:"line",children:(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-comment)"},children:"// Declarative approach"})}),"\n",(0,s.jsxs)(t.span,{className:"line",children:[(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"numbers"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" ["}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"1"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"2"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"3"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"4"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"5"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"];"})]}),"\n",(0,s.jsxs)(t.span,{className:"line",children:[(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"doubledNumbers"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"numbers"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-function)"},children:".map"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"((num) "}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" num "}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"*"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"2"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:");"})]}),"\n",(0,s.jsx)(t.span,{className:"line",children:" "}),"\n",(0,s.jsxs)(t.span,{className:"line",children:[(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"console"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-function)"},children:".log"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"(doubledNumbers); "}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-comment)"},children:"// Output: [2, 4, 6, 8, 10]"})]})]})}),"\n",(0,s.jsxs)(t.p,{children:["এখানে ",(0,s.jsx)(t.code,{children:".map()"})," ফাংশন ব্যবহার করেছি, যা প্রত্যেকটি উপাদানকে ২ দিয়ে গুণ করছে এবং নতুন অ্যারে তৈরি করছে। তবে, কোন লুপের উল্লেখ নেই—অ্যারের উপরে কাজ করতে কীভাবে গুণ করতে হবে, তা সরাসরি বলিনি। শুধু বলেছি, ",(0,s.jsx)(t.strong,{children:'"প্রতিটি উপাদানকে ২ দিয়ে গুণ করো"'}),"।"]}),"\n",(0,s.jsx)(t.h3,{id:"প্রধান-পার্থক্য",children:"প্রধান পার্থক্য:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"ইম্পারেটিভ:"})," প্রতিটি ধাপ স্টেপ বাই স্টেপ বলে দিতে হয়,কীভাবে কাজটি সম্পন্ন হবে তা নির্দিষ্টভাবে উল্লেখ করতে হয়।"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"ডিক্লারেটিভ:"})," শুধু কী করতে হবে তা বলে দিতে হয়, আর কীভাবে করতে হবে তা গোপন থাকে বা কম্পিউটার নিজেই বুঝে নেয়।"]}),"\n"]}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h3,{id:"রিয়াক্ট-কি-এপ্রোচে-তার-ইউ-আই-চেঞ্জ-করে",children:"রিয়াক্ট কি এপ্রোচে তার ইউ আই চেঞ্জ করে?"}),"\n",(0,s.jsxs)(t.p,{children:["React মূলত ",(0,s.jsx)(t.strong,{children:"ডিক্লারেটিভ (Declarative)"})," এপ্রোচে তার UI পরিবর্তন করে। এর অর্থ হলো, React-এ আপনি কীভাবে UI আপডেট হবে তা নিয়ে চিন্তা করার পরিবর্তে, ",(0,s.jsx)(t.strong,{children:"UI-র বর্তমান অবস্থা কেমন হবে তা"})," বর্ণনা করেন, আর React নিজেই সেই UI-টি আপডেট করার জন্য ভেতরে ভেতরে প্রয়োজনীয় কাজ করে নেয়।"]}),"\n",(0,s.jsx)(t.h3,{id:"react-এর-ডিক্লারেটিভ-এপ্রোচ-কীভাবে-কাজ-করে",children:"React-এর ডিক্লারেটিভ এপ্রোচ কীভাবে কাজ করে?"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Declarative Components:"})," React-এ আপনি প্রতিটি UI অংশ (component) তৈরি করার সময়, প্রতিটি কম্পোনেন্টকে বলে দেন কীভাবে সেটা দেখতে হবে। আপনি ",(0,s.jsx)(t.strong,{children:"UI এর শেষ অবস্থা"})," (final state) বলে দেন, কিন্তু সেই অবস্থা কীভাবে পরিবর্তন হবে তা নির্দিষ্টভাবে বলে দিতে হয় না।"]}),"\n",(0,s.jsx)(t.p,{children:"উদাহরণ:"}),"\n",(0,s.jsx)(t.pre,{"data-language":"javascript","data-theme":"default",hasCopyCode:!0,children:(0,s.jsxs)(t.code,{"data-language":"javascript","data-theme":"default",children:[(0,s.jsxs)(t.span,{className:"line",children:[(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-function)"},children:"Greeting"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"({ name }) {"})]}),"\n",(0,s.jsxs)(t.span,{className:"line",children:[(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" <"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-string-expression)"},children:"h1"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:">Hello, {name}!</"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-string-expression)"},children:"h1"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:">;"})]}),"\n",(0,s.jsx)(t.span,{className:"line",children:(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"}"})})]})}),"\n",(0,s.jsx)(t.p,{children:'এখানে আমরা শুধু বলে দিচ্ছি, "এই component-টি কেমন দেখতে হবে," কিন্তু কীভাবে render হবে বা কতবার হবে তা চিন্তা করতে হচ্ছে না। React সেই কাজগুলো নিজের মতো করে করে নিচ্ছে।'}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"State Changes:"})," React-এর ডিক্লারেটিভ এপ্রোচের আরেকটি গুরুত্বপূর্ণ বিষয় হলো ",(0,s.jsx)(t.strong,{children:"state"}),"। আপনি যখন কোনো state পরিবর্তন করেন, React সেই state অনুযায়ী UI-কে আপডেট করে।"]}),"\n",(0,s.jsx)(t.p,{children:"উদাহরণ:"}),"\n",(0,s.jsx)(t.pre,{"data-language":"javascript","data-theme":"default",hasCopyCode:!0,children:(0,s.jsxs)(t.code,{"data-language":"javascript","data-theme":"default",children:[(0,s.jsxs)(t.span,{className:"line",children:[(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" React"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" { useState } "}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"react"'}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,s.jsx)(t.span,{className:"line",children:" "}),"\n",(0,s.jsxs)(t.span,{className:"line",children:[(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-function)"},children:"Counter"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"() {"})]}),"\n",(0,s.jsxs)(t.span,{className:"line",children:[(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" ["}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"count"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"setCount"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"] "}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-function)"},children:"useState"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"0"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:");"})]}),"\n",(0,s.jsx)(t.span,{className:"line",children:" "}),"\n",(0,s.jsxs)(t.span,{className:"line",children:[(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" ("})]}),"\n",(0,s.jsxs)(t.span,{className:"line",children:[(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"        <"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-string-expression)"},children:"div"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,s.jsxs)(t.span,{className:"line",children:[(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"            <"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-string-expression)"},children:"p"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:">You clicked {count} times</"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-string-expression)"},children:"p"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,s.jsxs)(t.span,{className:"line",children:[(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"            <"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-string-expression)"},children:"button"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-function)"},children:"onClick"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"{() "}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-function)"},children:"setCount"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"(count "}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"+"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"1"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:")}>Click me</"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-string-expression)"},children:"button"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,s.jsxs)(t.span,{className:"line",children:[(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"        </"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-string-expression)"},children:"div"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,s.jsx)(t.span,{className:"line",children:(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"    );"})}),"\n",(0,s.jsx)(t.span,{className:"line",children:(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"}"})})]})}),"\n",(0,s.jsxs)(t.p,{children:["এখানে, আমরা state (",(0,s.jsx)(t.code,{children:"count"}),") এর মান পরিবর্তন করলে, React সেই অনুযায়ী UI-কে রি-রেন্ডার করে। আমরা শুধু জানাচ্ছি UI কেমন দেখতে হবে যখন state পরিবর্তন হবে, কিন্তু কিভাবে DOM ম্যানিপুলেট হবে বা পরিবর্তনগুলো কীভাবে ঘটবে, তা React-এর দায়িত্ব।"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Virtual DOM:"})," React-এর ডিক্লারেটিভ UI পরিবর্তনের আরেকটি বড় বিষয় হলো ",(0,s.jsx)(t.strong,{children:"Virtual DOM"}),"। যখন state বা props পরিবর্তিত হয়, React প্রথমে সেই পরিবর্তনগুলোকে Virtual DOM-এর মাধ্যমে চেক করে, এবং তারপর প্রয়োজনীয় স্থানে শুধুমাত্র প্রয়োজনীয় UI অংশটুকু আপডেট করে।"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"React নিজেই Virtual DOM ব্যবহার করে কীভাবে পরিবর্তন করতে হবে, সেটি নির্ধারণ করে নেয়। ফলে ডেভেলপারকে DOM নিয়ে চিন্তা করতে হয় না।"}),"\n",(0,s.jsx)(t.p,{children:"React-এর UI আপডেটিং পদ্ধতি ডিক্লারেটিভ এপ্রোচে কাজ করে। এর ফলে ডেভেলপাররা কেবল UI-র শেষ অবস্থা কী হবে তা বলে দেয়, আর React ভেতরে ভেতরে কীভাবে সেই পরিবর্তনগুলো ঘটাবে তা নিজে থেকেই করে।"})]})}let d={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}=Object.assign({},(0,o.a)(),e.components);return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)},pageOpts:{filePath:"pages/reactive-accilarator/React-js/module-3/declaretive-imperative.mdx",route:"/reactive-accilarator/React-js/module-3/declaretive-imperative",timestamp:173009696e4,pageMap:[{kind:"Meta",data:{"reactive-accilarator":{title:"Reactive Accelerator",type:"page"}}},{kind:"Folder",name:"reactive-accilarator",route:"/reactive-accilarator",children:[{kind:"Folder",name:"React-js",route:"/reactive-accilarator/React-js",children:[{kind:"Meta",data:{"module-1":"Getting Started With React : Describing The UI","module-2":"Going Deep into React: Adding Interactivity","module-3":"React State Management Deep Dive","module-4":"React Escape Hatches"}},{kind:"Folder",name:"module-1",route:"/reactive-accilarator/React-js/module-1",children:[{kind:"MdxPage",name:"React-installation-and-development-environment-setup",route:"/reactive-accilarator/React-js/module-1/React-installation-and-development-environment-setup"},{kind:"Meta",data:{"introduction-to-react":"1.1 - Introduction to React","React-installation-and-development-environment-setup":"1.2 - React-installation-and-development-environment-setup","vertual-dom":"1.3 - How React Works: Virtual Dom","basics-of-react-component":"1.4 - Basics of React Component: Your First Component","component-export-import":"1.5 - Basics of React Component: Importing & Exporting Components","jsx-markup":"1.6 - Basics of JSX: React's Markup - Writing Markup with JSX","javascript-in-jsx":"1.7 - Basics of JSX: React's Markup - JavaScript in JSX with Curly Braces","understanding-props":"1.8 - Understanding Props - Passing Props to a Component","conditional-renderaing":"1.9 - Conditional Rendering","rendering-list":"1.10 - Rendering Lists","pure-components":"1.11 - Pure Components: Keeping Components Pure","your-ui-as-a-tree":"1.12 - Your UI as a Tree"}},{kind:"MdxPage",name:"basics-of-react-component",route:"/reactive-accilarator/React-js/module-1/basics-of-react-component"},{kind:"MdxPage",name:"component-export-import",route:"/reactive-accilarator/React-js/module-1/component-export-import"},{kind:"MdxPage",name:"conditional-renderaing",route:"/reactive-accilarator/React-js/module-1/conditional-renderaing"},{kind:"MdxPage",name:"introduction-to-react",route:"/reactive-accilarator/React-js/module-1/introduction-to-react"},{kind:"MdxPage",name:"javascript-in-jsx",route:"/reactive-accilarator/React-js/module-1/javascript-in-jsx"},{kind:"MdxPage",name:"jsx-markup",route:"/reactive-accilarator/React-js/module-1/jsx-markup"},{kind:"MdxPage",name:"pure-components",route:"/reactive-accilarator/React-js/module-1/pure-components"},{kind:"MdxPage",name:"rendering-list",route:"/reactive-accilarator/React-js/module-1/rendering-list"},{kind:"MdxPage",name:"understanding-props",route:"/reactive-accilarator/React-js/module-1/understanding-props"},{kind:"MdxPage",name:"vertual-dom",route:"/reactive-accilarator/React-js/module-1/vertual-dom"},{kind:"MdxPage",name:"your-ui-as-a-tree",route:"/reactive-accilarator/React-js/module-1/your-ui-as-a-tree"}]},{kind:"Folder",name:"module-2",route:"/reactive-accilarator/React-js/module-2",children:[{kind:"Meta",data:{"responding-to-event":"2.1 - Responding to Events - Adding Event Handlers","event-propagation":"2.2 - Responding to Events - Event Propagation","understanding-state":"2.3 - Understanding State - A Component's Memory","how-rendering-works":"2.4 - How Rendering Works","state-as-a-snapshot":"2.5 - State as a Snapshot","queueing-state":"2.6 - Queueing a Series of State Updates","updating-object-in-state":"2.7 - Updating Objects in a State","updateing-array-in-state":"2.8 - Updating Arrays in a State"}},{kind:"MdxPage",name:"event-propagation",route:"/reactive-accilarator/React-js/module-2/event-propagation"},{kind:"MdxPage",name:"how-rendering-works",route:"/reactive-accilarator/React-js/module-2/how-rendering-works"},{kind:"MdxPage",name:"queueing-state",route:"/reactive-accilarator/React-js/module-2/queueing-state"},{kind:"MdxPage",name:"responding-to-event",route:"/reactive-accilarator/React-js/module-2/responding-to-event"},{kind:"MdxPage",name:"state-as-a-snapshot",route:"/reactive-accilarator/React-js/module-2/state-as-a-snapshot"},{kind:"MdxPage",name:"understanding-state",route:"/reactive-accilarator/React-js/module-2/understanding-state"},{kind:"MdxPage",name:"updateing-array-in-state",route:"/reactive-accilarator/React-js/module-2/updateing-array-in-state"},{kind:"MdxPage",name:"updating-object-in-state",route:"/reactive-accilarator/React-js/module-2/updating-object-in-state"}]},{kind:"Folder",name:"module-3",route:"/reactive-accilarator/React-js/module-3",children:[{kind:"Meta",data:{"declaretive-imperative":"3.1 - Declarative vs Imperative UI","thinking-about-ui":"3.2 - Thinking About UI Declaratively in React","choosing-the-state-structure":"3.3 - Choosing the state Structure in React","lifting-state-up":"3.4 - Share State Between Components: Lifting State Up","preserving-and-reseting-state":"3.5 - Preserving and Reseting State : Default Behaviour","reseting-state-at-same-position":"3.6 - Resetting State at Same Position : Changing Default Behaviour","extracting-state-logic-into-reducer":"3.7 - Extracting State Logic into Reducers","passing-data-deeply-with-context":"3.8 - Passing Data Deeply With Context - Introduction to Context API","scaling-up-with-reducer-and-context":"3.9 - Scaling Up with Reducers and Context"}},{kind:"MdxPage",name:"choosing-the-state-structure",route:"/reactive-accilarator/React-js/module-3/choosing-the-state-structure"},{kind:"MdxPage",name:"declaretive-imperative",route:"/reactive-accilarator/React-js/module-3/declaretive-imperative"},{kind:"MdxPage",name:"extracting-state-logic-into-reducer",route:"/reactive-accilarator/React-js/module-3/extracting-state-logic-into-reducer"},{kind:"MdxPage",name:"lifting-state-up",route:"/reactive-accilarator/React-js/module-3/lifting-state-up"},{kind:"MdxPage",name:"passing-data-deeply-with-context",route:"/reactive-accilarator/React-js/module-3/passing-data-deeply-with-context"},{kind:"MdxPage",name:"preserving-and-reseting-state",route:"/reactive-accilarator/React-js/module-3/preserving-and-reseting-state"},{kind:"MdxPage",name:"reseting-state-at-same-position",route:"/reactive-accilarator/React-js/module-3/reseting-state-at-same-position"},{kind:"MdxPage",name:"scaling-up-with-reducer-and-context",route:"/reactive-accilarator/React-js/module-3/scaling-up-with-reducer-and-context"},{kind:"MdxPage",name:"thinking-about-ui",route:"/reactive-accilarator/React-js/module-3/thinking-about-ui"}]},{kind:"Folder",name:"module-4",route:"/reactive-accilarator/React-js/module-4",children:[{kind:"Meta",data:{"referencing-values-with-refs":"4.1 - Referenceing Values with Refs","manipulating-dom-with-refs":"4.2 - Manipulating DOM with Refs","forwarding-refs":"4.3 - Forwarding Refs : Accessing another component’s DOM nodes ",useImperativeHandle:"4.4 - UseImperativeHandle : Exposing the subset of the API with an Imperative Handle","flushing-state-updates-synchronously":"4.5 - Flushing State Updates Synchronously with flushSync","syncronising-with-effets-overview":"4.6 - Synchronising with Effects: Overview and How To Write Effects","handling-effects-firing-twice":"4.7 - Handling Effects Firing Twice in Development","fatching-data":"4.8 - Synchronising with Effects: Fatching Data"}},{kind:"MdxPage",name:"fatching-data",route:"/reactive-accilarator/React-js/module-4/fatching-data"},{kind:"MdxPage",name:"flushing-state-updates-synchronously",route:"/reactive-accilarator/React-js/module-4/flushing-state-updates-synchronously"},{kind:"MdxPage",name:"forwarding-refs",route:"/reactive-accilarator/React-js/module-4/forwarding-refs"},{kind:"MdxPage",name:"handling-effects-firing-twice",route:"/reactive-accilarator/React-js/module-4/handling-effects-firing-twice"},{kind:"MdxPage",name:"manipulating-dom-with-refs",route:"/reactive-accilarator/React-js/module-4/manipulating-dom-with-refs"},{kind:"MdxPage",name:"referencing-values-with-refs",route:"/reactive-accilarator/React-js/module-4/referencing-values-with-refs"},{kind:"MdxPage",name:"syncronising-with-effets-overview",route:"/reactive-accilarator/React-js/module-4/syncronising-with-effets-overview"},{kind:"MdxPage",name:"useImperativeHandle",route:"/reactive-accilarator/React-js/module-4/useImperativeHandle"}]}]},{kind:"Meta",data:{index:{title:"Getting Started"},git:"Git and Github Refresher","frontend-focus-topic":"Frontend Focus Topic","javascript-refresher":"Javascript Refresher","React-js":"React Js"}},{kind:"MdxPage",name:"frontend-focus-topic",route:"/reactive-accilarator/frontend-focus-topic"},{kind:"MdxPage",name:"git",route:"/reactive-accilarator/git"},{kind:"MdxPage",name:"index",route:"/reactive-accilarator"},{kind:"MdxPage",name:"javascript-refresher",route:"/reactive-accilarator/javascript-refresher"}]}],flexsearch:{codeblocks:!0},title:"Declaretive Imperative",headings:c},pageNextRoute:"/reactive-accilarator/React-js/module-3/declaretive-imperative",nextraLayout:r.ZP,themeConfig:i.Z};t.default=(0,a.j)(d)},5184:function(){}},function(e){e.O(0,[3383,2888,9774,179],function(){return e(e.s=3013)}),_N_E=e.O()}]);