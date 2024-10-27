(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2873],{2482:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/reactive-accilarator/React-js/module-3/choosing-the-state-structure",function(){return a(6892)}])},6828:function(e,t,a){"use strict";var s=a(2676),n=a(3909);t.Z={logo:(0,s.jsxs)("span",{style:{color:"",fontSize:"30px"},children:["Devripon",(0,s.jsx)("span",{style:{color:"red",fontSize:"50px"},children:"."}),(0,s.jsx)("span",{style:{color:"red",fontSize:"30px",fontWeight:"bolder"}})]}),project:{link:"https://github.com/Deveripon/reactive-accelarator"},docsRepositoryBase:"https://github.com/Deveripon/reactive-accelarator/tree/main/",useNextSeoProps(){let{asPath:e}=(0,n.useRouter)();if("/"!==e)return{titleTemplate:"%s – Reactive Accelarator"}},head:(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,s.jsx)("meta",{property:"og:title",content:"রিয়াক্টিভ এক্সিলারেটর"}),(0,s.jsx)("meta",{property:"og:description",content:"রিয়াক্ট ও নেক্সট জে এস এর বাংলায় লিখা ডকুমেন্টেশন যা একজন ডেভেলপারকে রিয়াক্ট ও নেক্সট জে এস নিজের ভাষায় আরও সহজ করে বুঝতে সাহায্য করবে।"})]}),banner:{key:"2.0-release",text:(0,s.jsx)("a",{href:"https://github.com/deveripon/",target:"_blank",children:"\uD83C\uDF89 follow my github →"}),dismissible:!0},toc:{backToTop:!0},sidebar:{defaultMenuCollapseLevel:2},footer:{text:(0,s.jsxs)("span",{children:["copyright ",new Date().getFullYear()," \xa9"," ",(0,s.jsx)("a",{href:"https://github.com/deveripon",target:"_blank",children:"devripon"}),"."]})}}},6892:function(e,t,a){"use strict";a.r(t),a.d(t,{__toc:function(){return c}});var s=a(2676),n=a(6957),r=a(4857),i=a(6828);a(5078);var o=a(3772);let c=[{depth:3,value:"Group Related State (একইজাতীয় বা পারস্পারিক সম্পর্কযুক্ত স্টেটগুলোকে একটা স্টেটে গ্রুপ করে নেয়া)",id:"group-related-state-একইজাতীয়-বা-পারস্পারিক-সম্পর্কযুক্ত-স্টেটগুলোকে-একটা-স্টেটে-গ্রুপ-করে-নেয়া"},{depth:3,value:"Avoid contradictions in state (একই সাথে দুইটাই কখনও সত্য অথবা মিথ্যা না হলে দুইটা কে একটা স্টেট হিসেবে নেয়া)",id:"avoid-contradictions-in-state-একই-সাথে-দুইটাই-কখনও-সত্য-অথবা-মিথ্যা-না-হলে-দুইটা-কে-একটা-স্টেট-হিসেবে-নেয়া"},{depth:3,value:"Avoid redundant state (অপ্রয়োজনীয় স্টেট না নেয়া বা পরিহার করা)",id:"avoid-redundant-state-অপ্রয়োজনীয়-স্টেট-না-নেয়া-বা-পরিহার-করা"},{depth:4,value:"Don't mirror props in state (প্রপ্স মিরর করা এড়িয়ে চলতে হবে)",id:"dont-mirror-props-in-state-প্রপ্স-মিরর-করা-এড়িয়ে-চলতে-হবে"},{depth:3,value:"Avoid duplication in state (ডুপ্লিকেট স্টেট নেয়া যাবেনা)",id:"avoid-duplication-in-state-ডুপ্লিকেট-স্টেট-নেয়া-যাবেনা"},{depth:3,value:"Avoid deeply nested state (ডিপলি নেস্টেড অবজেক্ট কে স্টেট হিসেবে নেয়া থেকে বিরত থাকতে হবে)",id:"avoid-deeply-nested-state-ডিপলি-নেস্টেড-অবজেক্ট-কে-স্টেট-হিসেবে-নেয়া-থেকে-বিরত-থাকতে-হবে"}];function l(e){let t=Object.assign({p:"p",strong:"strong",ol:"ol",li:"li",h3:"h3",pre:"pre",code:"code",span:"span",ul:"ul",h4:"h4"},(0,o.a)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"রিয়াক্টে স্টেট ডিজাইন করার সময় আমাদের কিছু পিন্সিপাল মনে রাখা অবশ্যই জরুরি,এতে আমরা আরও সুন্দর ও ইফিশিয়েন্ট ভাবে স্টেটগুলো ম্যানেজ করতে পারবো। চলুন জেনে নেয়া যাক সেই প্রিন্সিপালগুলো,যেগুলো রিয়াক্টের স্টেট এর স্ট্রাকচার করার সময় আমাদের অবশ্যই মাথায় রাখতে হবে"})}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.strong,{children:"Group Related State"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.strong,{children:"Avoid Contradictions in State"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.strong,{children:"Avoid Redundant State"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.strong,{children:"Avoid Duplication is State"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.strong,{children:"Avoid Deeply Nested State"})}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"group-related-state-একইজাতীয়-বা-পারস্পারিক-সম্পর্কযুক্ত-স্টেটগুলোকে-একটা-স্টেটে-গ্রুপ-করে-নেয়া",children:"Group Related State (একইজাতীয় বা পারস্পারিক সম্পর্কযুক্ত স্টেটগুলোকে একটা স্টেটে গ্রুপ করে নেয়া)"}),"\n",(0,s.jsx)(t.p,{children:"যদি এমন হয় যে মাল্টিপল স্টেট কিন্তু একটা আরেকটার সাথে সম্পর্কযুক্ত,এবং একটা চেঞ্জ করলে অন্যটাও চেঞ্জ করার প্রয়োজন পরে সেই ক্ষেত্রে স্টেটগুলোকে একটা স্টেট হিসেবে গ্রুপ করে নেয়া উচিত। যেমন ঃ"}),"\n",(0,s.jsx)(t.pre,{"data-language":"jsx","data-theme":"default",hasCopyCode:!0,children:(0,s.jsxs)(t.code,{"data-language":"jsx","data-theme":"default",children:[(0,s.jsxs)(t.span,{className:"line",children:[(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" ["}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"x"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"setX"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"] "}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-function)"},children:"useState"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"0"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:");"})]}),"\n",(0,s.jsxs)(t.span,{className:"line",children:[(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" ["}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"y"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"setY"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"] "}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-function)"},children:"useState"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"0"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:");"})]})]})}),"\n",(0,s.jsxs)(t.p,{children:["এখানে একটা কাস্টম কার্সর বানানোর জন্য ",(0,s.jsx)(t.code,{children:"x"})," এবং ",(0,s.jsx)(t.code,{children:"y"})," নামে দুইটা স্টেট নেয়া হয়েছে, এবং মাউসমুভ করার সাথে সাথে স্টেটগুলো আপডেট হতে হবে, তার মানে মাউসমুভ হলেই আমাকে ",(0,s.jsx)(t.code,{children:"x"})," এবং ",(0,s.jsx)(t.code,{children:"y"})," দুইটা স্টেট পরিবর্তন করতে হবে। তাহলে আমরা এভাবে দুইটা স্টেট না নিয়ে বরং একটা স্টেট নিতে পারি ",(0,s.jsx)(t.code,{children:"position"}),"নামে এবং এর ভ্যালু হিসেবে ",(0,s.jsx)(t.code,{children:"x"})," এবং ",(0,s.jsx)(t.code,{children:"y"})," কে একটা অবজেক্ট আকারে রাখতে পারি।"]}),"\n",(0,s.jsx)(t.pre,{"data-language":"jsx","data-theme":"default",hasCopyCode:!0,children:(0,s.jsx)(t.code,{"data-language":"jsx","data-theme":"default",children:(0,s.jsxs)(t.span,{className:"line",children:[(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" ["}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"position"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"setPosition"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"] "}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-function)"},children:"useState"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"({ x"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"0"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" y"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"0"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" });"})]})})}),"\n",(0,s.jsx)(t.h3,{id:"avoid-contradictions-in-state-একই-সাথে-দুইটাই-কখনও-সত্য-অথবা-মিথ্যা-না-হলে-দুইটা-কে-একটা-স্টেট-হিসেবে-নেয়া",children:"Avoid contradictions in state (একই সাথে দুইটাই কখনও সত্য অথবা মিথ্যা না হলে দুইটা কে একটা স্টেট হিসেবে নেয়া)"}),"\n",(0,s.jsxs)(t.p,{children:["এমন অনেক সিনারিও আসতে পারে যেখানে হয়তো দুইটা স্টেট আছে যেখানে হয়তো দুইটা স্টেট আছে,কিন্তু স্টেট দুইটা কখনোই একইসাথে সত্য অথবা একই সাথে মিথ্যা হতে পারেনা। এসব স্টেটকে বলা হয় ",(0,s.jsx)(t.code,{children:"Contradiction in State"}),"। এমন হলে দুইটা স্টেট কখনোই নেয়া উচিত না,বরং একটা স্টেট দিয়েই দুইটাকেই ম্যনেজ করা উচিত।"]}),"\n",(0,s.jsx)(t.p,{children:"উদাহরণসরূপ একটা লাইটের কথা চিন্তা করুনঃ"}),"\n",(0,s.jsx)(t.p,{children:"একটা লাইট আছে, যার দুইটা স্টেট"}),"\n",(0,s.jsxs)(t.p,{children:["১। লাইট জালানো অবস্থা (",(0,s.jsx)(t.code,{children:"isOn"}),")"]}),"\n",(0,s.jsxs)(t.p,{children:["২। লাইট বন্ধ অবস্থা (",(0,s.jsx)(t.code,{children:"isOff"}),")"]}),"\n",(0,s.jsx)(t.pre,{"data-language":"jsx","data-theme":"default",hasCopyCode:!0,children:(0,s.jsxs)(t.code,{"data-language":"jsx","data-theme":"default",children:[(0,s.jsxs)(t.span,{className:"line",children:[(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" ["}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"isOn"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"setIsOn"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"] "}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-function)"},children:"useState"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"true"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:");"})]}),"\n",(0,s.jsxs)(t.span,{className:"line",children:[(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" ["}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"isOff"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"setIsOff"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"] "}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-function)"},children:"useState"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"true"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:");"})]})]})}),"\n",(0,s.jsxs)(t.p,{children:["এখানে এই দুইটা স্টেট কি কখনো একইসাথে দুইটাই ",(0,s.jsx)(t.code,{children:"true"})," অথবা ",(0,s.jsx)(t.code,{children:"false"})," হতে পারে? মানে একই সাথে লাইট জালানো বা বন্ধ করা থাকতে পারে ? না সেটা কখনই হতে পারেনা, এটাকেই বলা হয় ",(0,s.jsx)(t.code,{children:"Contradiction in State"}),"। এমন অবস্থায় আমাদের একটাই স্টেট নেয়া উচিত যেমনঃ"]}),"\n",(0,s.jsx)(t.pre,{"data-language":"jsx","data-theme":"default",hasCopyCode:!0,children:(0,s.jsx)(t.code,{"data-language":"jsx","data-theme":"default",children:(0,s.jsxs)(t.span,{className:"line",children:[(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" ["}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"lightStatus"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"setLigthStatus"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"] "}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-function)"},children:"useState"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"on"'}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:");"})]})})}),"\n",(0,s.jsx)(t.p,{children:"এভাবে আমরা একটা স্টেট দিয়েই লাইটের দুইটা অবস্থা ম্যানেজ করতে পারি।"}),"\n",(0,s.jsx)(t.h3,{id:"avoid-redundant-state-অপ্রয়োজনীয়-স্টেট-না-নেয়া-বা-পরিহার-করা",children:"Avoid redundant state (অপ্রয়োজনীয় স্টেট না নেয়া বা পরিহার করা)"}),"\n",(0,s.jsx)(t.p,{children:"যদি আমরা কোন স্টেটকে অন্য স্টেট থেকে কেলকুলেট করে নিয়ে ব্যাভারা করতে পারি তাহলে আমাদের নতুন স্টেট না নিয়ে সেই কেলকুলেটেড স্টেট দিয়েই কাজ করা উচিত।"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsxs)(t.strong,{children:["এটাকে ",(0,s.jsx)(t.code,{children:"Derived State"}),"ও বলা হয়ে থাকে"]})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Derived State"}),": যখন কোন ভ্যালু অন্য কোন স্টেট এর ভ্যালু থেকে ",(0,s.jsx)(t.code,{children:"calculate"})," করে ব্যাবহার করা যায়, তখন সেই ",(0,s.jsx)(t.code,{children:"Calculated"})," ভ্যারিয়েবল কে ",(0,s.jsx)(t.code,{children:"Derived State"})," বলা হয়"]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["ধরুন আমাদের এমন তিনটা স্টেট ম্যানেজ করা লাগবে,",(0,s.jsx)(t.code,{children:"firstName"}),", ",(0,s.jsx)(t.code,{children:"lastName"}),", ",(0,s.jsx)(t.code,{children:"fullName"}),"। এখেত্রে আমদের স্টেট গুলো হবে এমন,"]}),"\n",(0,s.jsx)(t.pre,{"data-language":"jsx","data-theme":"default",hasCopyCode:!0,children:(0,s.jsxs)(t.code,{"data-language":"jsx","data-theme":"default",children:[(0,s.jsxs)(t.span,{className:"line",children:[(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" ["}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"firstName"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"setFirstName"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"] "}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-function)"},children:"useState"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"Shahadat"'}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:");"})]}),"\n",(0,s.jsxs)(t.span,{className:"line",children:[(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" ["}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"lastName"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"setLastName"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"] "}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-function)"},children:"useState"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"Hussain"'}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:");"})]}),"\n",(0,s.jsxs)(t.span,{className:"line",children:[(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" ["}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"fullName"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"setFullName"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"] "}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-function)"},children:"useState"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"Shahadat Hussain"'}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:");"})]})]})}),"\n",(0,s.jsxs)(t.p,{children:["চিন্তা করে দেখেনতো, এখানে কি আমাদের ",(0,s.jsx)(t.code,{children:"fullName"})," স্টেট-এর কোন দরকার ছিল? আমরা চাইলেইতো ",(0,s.jsx)(t.code,{children:"firstName"}),",এবং ",(0,s.jsx)(t.code,{children:"lastName"})," থেকে ",(0,s.jsx)(t.code,{children:"fullName"})," টা বানিয়ে নিতে পারতাম এভাবে,"]}),"\n",(0,s.jsx)(t.pre,{"data-language":"jsx","data-theme":"default",hasCopyCode:!0,children:(0,s.jsx)(t.code,{"data-language":"jsx","data-theme":"default",children:(0,s.jsxs)(t.span,{className:"line",children:[(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"fullName"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" firstName "}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"+"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-string-expression)"},children:'" "'}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"+"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" lastName;"})]})})}),"\n",(0,s.jsx)(t.p,{children:"এক্ষেত্রে"}),"\n",(0,s.jsx)(t.pre,{"data-language":"jsx","data-theme":"default",hasCopyCode:!0,children:(0,s.jsx)(t.code,{"data-language":"jsx","data-theme":"default",children:(0,s.jsxs)(t.span,{className:"line",children:[(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" ["}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"fullName"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"setFullName"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"] "}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-function)"},children:"useState"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"Shahadat Hussain"'}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:");"})]})})}),"\n",(0,s.jsxs)(t.p,{children:["এই স্টেট টা ছিল ",(0,s.jsx)(t.code,{children:"Redundant"})," বা অপ্রয়োজনীয়। আমাদের এসব ",(0,s.jsx)(t.code,{children:"Redundant"})," স্টেটকে Avoid করতে হবে।"]}),"\n",(0,s.jsx)(t.h4,{id:"dont-mirror-props-in-state-প্রপ্স-মিরর-করা-এড়িয়ে-চলতে-হবে",children:"Don't mirror props in state (প্রপ্স মিরর করা এড়িয়ে চলতে হবে)"}),"\n",(0,s.jsx)(t.p,{children:"একটা স্টেটকে যখন প্যারেন্ট কম্পোনেন্ট এ ডিক্লেয়ার করে সেটার ভ্যালুটা চাইল্ড কম্পোনেন্টে পাস করা হয়, এবং চাইল্ড কম্পোনেন্ট সেই প্রপ্সটা নিয়ে আবার তার নিজস্ব স্টেট এর ভ্যালুকে ইনিশিয়ালাইজ করে,সেটা কে বলা হয় প্রপ্স মিরর করা।"}),"\n",(0,s.jsx)(t.p,{children:"এটা করা যাবেনা, কেননা যদি আপনি একবার কোন স্টেট ভ্যালু প্যারেন্ট থেকে চাইল্ডে পাস করেছেন এবং সেটা চাইল্ডের নিজস্ব স্টেট ভ্যরিয়েবল এর ইনিশিয়াল ভ্যালু হিসেবে ব্যাবহার করেছেন,"}),"\n",(0,s.jsxs)(t.p,{children:["তখন যদি আপনি চাইল্ড কম্পোনেন্ট থেকে স্টেট ভ্যালু চেঞ্জ করেত চান,তখন চাইল্ড থেকে সেটা পরিবর্তন করতে পারলেও, যদি প্যারেন্ট থেকে সেট স্টেট যেটা আপনি প্রপ্স হিসেবে চাইল্ডে পাঠিয়েছেন,সেটার কোন কন্ট্রোল থাকবেনা,এবং প্যারেন্ট থেকে তা পরিবর্তন করা যাবেনা। কেননা স্টেট এর ইনিশিয়াল ভ্যালু কম্পোনেন্টের প্রথম রেন্ডারেই ইনিশিয়ালাইজ হয়, পরে আর ইনিশিয়াল ভ্যালু চেঞ্জ হয়না। শুধু ",(0,s.jsx)(t.code,{children:"setter function"})," এর মাধ্যমেই সেই স্টেট এর ভ্যালু চেঞ্জ করা যায়।"]}),"\n",(0,s.jsx)(t.p,{children:"তাই এখেত্রে প্যারেন্ট কম্পোনেন্টে সেই স্টেটটা পরিবর্তন করলেও তা কিন্তু প্রপ্স হয়ে আর চাইল্ড কম্পোনেন্টে যাবেনা, কেননা প্রথম রেন্ডারেই চাইল্ডের স্টেটের ইনিশিয়াল ভ্যালু সেট হয়ে গেছে।"}),"\n",(0,s.jsx)(t.h3,{id:"avoid-duplication-in-state-ডুপ্লিকেট-স্টেট-নেয়া-যাবেনা",children:"Avoid duplication in state (ডুপ্লিকেট স্টেট নেয়া যাবেনা)"}),"\n",(0,s.jsx)(t.p,{children:"একি ভ্যালু যদি মাল্টিপল স্টেট ভ্যারিয়েবল ব্যাবহার করে সেটাকে ডুপ্লিকেট করা বলে। আমাদের এসব ডুপ্লিকেট স্টেট এর ব্যাপারে সতর্ক থাকতে হবে।"}),"\n",(0,s.jsxs)(t.p,{children:["অর্থাৎ যদি এমন হয় যে আমাদের কোন স্টেট ভ্যারিয়েবল এ কিছু ভ্যালু আছে,এবং সেই একই ভ্যালু দিয়ে আমরা আরও একটা স্টেট নিয়েছি, সেটাকে ডুপ্লিকেট করা বলা হয়, স্টেট ডুপ্লিকেট করা যাবেনা,প্রয়োজনে এক্ষেত্রে ",(0,s.jsx)(t.code,{children:"Derived State"})," ব্যাবহার করতে হবে।"]}),"\n",(0,s.jsx)(t.h3,{id:"avoid-deeply-nested-state-ডিপলি-নেস্টেড-অবজেক্ট-কে-স্টেট-হিসেবে-নেয়া-থেকে-বিরত-থাকতে-হবে",children:"Avoid deeply nested state (ডিপলি নেস্টেড অবজেক্ট কে স্টেট হিসেবে নেয়া থেকে বিরত থাকতে হবে)"}),"\n",(0,s.jsx)(t.p,{children:"যদি এমন হয় যে আমাদের এমন একটা স্টেট আছে যা একটা অবজেক্ট এবং তার প্রপারর্টি হিসেবে আরও একটা অবজেক্ট আছে, এবং সেই নেস্টেড অবজেক্ট এর-ও আরও নেস্টেড অনেক অবঞ্জেক্ট আছে, এভাবে অনেক লেয়ার ডীপ একটা নেশটেড অবজেক্ট । যা একটা কমপ্লেক্স স্ট্রাকচার।"}),"\n",(0,s.jsx)(t.p,{children:"এমন স্ট্রাকচার নিয়ে কাজ করলে স্টেট আপডেট করতে হলে সেটা কোডের কপ্লেক্সিটি বাড়াবে,বাগ হতে পারে, কোডটার রিডেবিলিটি নষ্ট হবে। তাই এমন অবজেক্টকে স্টেট হিসেবে নেয়া পরিহার করতে হবে।"}),"\n",(0,s.jsxs)(t.p,{children:["সেক্ষেত্রে সেই অবজেক্ট ডাটাকে ",(0,s.jsx)(t.code,{children:"normalize"})," বা ",(0,s.jsx)(t.code,{children:"flatten"})," করে নিয়ে তারপর স্টেট হিসেবে ব্যাবহার করতে হবে।"]})]})}let d={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}=Object.assign({},(0,o.a)(),e.components);return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)},pageOpts:{filePath:"pages/reactive-accilarator/React-js/module-3/choosing-the-state-structure.mdx",route:"/reactive-accilarator/React-js/module-3/choosing-the-state-structure",timestamp:1730010385e3,pageMap:[{kind:"Meta",data:{"reactive-accilarator":{title:"Reactive Accelerator",type:"page"}}},{kind:"Folder",name:"reactive-accilarator",route:"/reactive-accilarator",children:[{kind:"Folder",name:"React-js",route:"/reactive-accilarator/React-js",children:[{kind:"Meta",data:{"module-1":"Getting Started With React : Describing The UI","module-2":"Going Deep into React: Adding Interactivity","module-3":"React State Management Deep Dive","module-4":"React Escape Hatches"}},{kind:"Folder",name:"module-1",route:"/reactive-accilarator/React-js/module-1",children:[{kind:"MdxPage",name:"React-installation-and-development-environment-setup",route:"/reactive-accilarator/React-js/module-1/React-installation-and-development-environment-setup"},{kind:"Meta",data:{"introduction-to-react":"1.1 - Introduction to React","React-installation-and-development-environment-setup":"1.2 - React-installation-and-development-environment-setup","vertual-dom":"1.3 - How React Works: Virtual Dom","basics-of-react-component":"1.4 - Basics of React Component: Your First Component","component-export-import":"1.5 - Basics of React Component: Importing & Exporting Components","jsx-markup":"1.6 - Basics of JSX: React's Markup - Writing Markup with JSX","javascript-in-jsx":"1.7 - Basics of JSX: React's Markup - JavaScript in JSX with Curly Braces","understanding-props":"1.8 - Understanding Props - Passing Props to a Component","conditional-renderaing":"1.9 - Conditional Rendering","rendering-list":"1.10 - Rendering Lists","pure-components":"1.11 - Pure Components: Keeping Components Pure","your-ui-as-a-tree":"1.12 - Your UI as a Tree"}},{kind:"MdxPage",name:"basics-of-react-component",route:"/reactive-accilarator/React-js/module-1/basics-of-react-component"},{kind:"MdxPage",name:"component-export-import",route:"/reactive-accilarator/React-js/module-1/component-export-import"},{kind:"MdxPage",name:"conditional-renderaing",route:"/reactive-accilarator/React-js/module-1/conditional-renderaing"},{kind:"MdxPage",name:"introduction-to-react",route:"/reactive-accilarator/React-js/module-1/introduction-to-react"},{kind:"MdxPage",name:"javascript-in-jsx",route:"/reactive-accilarator/React-js/module-1/javascript-in-jsx"},{kind:"MdxPage",name:"jsx-markup",route:"/reactive-accilarator/React-js/module-1/jsx-markup"},{kind:"MdxPage",name:"pure-components",route:"/reactive-accilarator/React-js/module-1/pure-components"},{kind:"MdxPage",name:"rendering-list",route:"/reactive-accilarator/React-js/module-1/rendering-list"},{kind:"MdxPage",name:"understanding-props",route:"/reactive-accilarator/React-js/module-1/understanding-props"},{kind:"MdxPage",name:"vertual-dom",route:"/reactive-accilarator/React-js/module-1/vertual-dom"},{kind:"MdxPage",name:"your-ui-as-a-tree",route:"/reactive-accilarator/React-js/module-1/your-ui-as-a-tree"}]},{kind:"Folder",name:"module-2",route:"/reactive-accilarator/React-js/module-2",children:[{kind:"Meta",data:{"responding-to-event":"2.1 - Responding to Events - Adding Event Handlers","event-propagation":"2.2 - Responding to Events - Event Propagation","understanding-state":"2.3 - Understanding State - A Component's Memory","how-rendering-works":"2.4 - How Rendering Works","state-as-a-snapshot":"2.5 - State as a Snapshot","queueing-state":"2.6 - Queueing a Series of State Updates","updating-object-in-state":"2.7 - Updating Objects in a State","updateing-array-in-state":"2.8 - Updating Arrays in a State"}},{kind:"MdxPage",name:"event-propagation",route:"/reactive-accilarator/React-js/module-2/event-propagation"},{kind:"MdxPage",name:"how-rendering-works",route:"/reactive-accilarator/React-js/module-2/how-rendering-works"},{kind:"MdxPage",name:"queueing-state",route:"/reactive-accilarator/React-js/module-2/queueing-state"},{kind:"MdxPage",name:"responding-to-event",route:"/reactive-accilarator/React-js/module-2/responding-to-event"},{kind:"MdxPage",name:"state-as-a-snapshot",route:"/reactive-accilarator/React-js/module-2/state-as-a-snapshot"},{kind:"MdxPage",name:"understanding-state",route:"/reactive-accilarator/React-js/module-2/understanding-state"},{kind:"MdxPage",name:"updateing-array-in-state",route:"/reactive-accilarator/React-js/module-2/updateing-array-in-state"},{kind:"MdxPage",name:"updating-object-in-state",route:"/reactive-accilarator/React-js/module-2/updating-object-in-state"}]},{kind:"Folder",name:"module-3",route:"/reactive-accilarator/React-js/module-3",children:[{kind:"Meta",data:{"declaretive-imperative":"3.1 - Declarative vs Imperative UI","thinking-about-ui":"3.2 - Thinking About UI Declaratively in React","choosing-the-state-structure":"3.3 - Choosing the state Structure in React","lifting-state-up":"3.4 - Share State Between Components: Lifting State Up","preserving-and-reseting-state":"3.5 - Preserving and Reseting State : Default Behaviour","reseting-state-at-same-position":"3.6 - Resetting State at Same Position : Changing Default Behaviour","extracting-state-logic-into-reducer":"3.7 - Extracting State Logic into Reducers","passing-data-deeply-with-context":"3.8 - Passing Data Deeply With Context - Introduction to Context API","scaling-up-with-reducer-and-context":"3.9 - Scaling Up with Reducers and Context"}},{kind:"MdxPage",name:"choosing-the-state-structure",route:"/reactive-accilarator/React-js/module-3/choosing-the-state-structure"},{kind:"MdxPage",name:"declaretive-imperative",route:"/reactive-accilarator/React-js/module-3/declaretive-imperative"},{kind:"MdxPage",name:"extracting-state-logic-into-reducer",route:"/reactive-accilarator/React-js/module-3/extracting-state-logic-into-reducer"},{kind:"MdxPage",name:"lifting-state-up",route:"/reactive-accilarator/React-js/module-3/lifting-state-up"},{kind:"MdxPage",name:"passing-data-deeply-with-context",route:"/reactive-accilarator/React-js/module-3/passing-data-deeply-with-context"},{kind:"MdxPage",name:"preserving-and-reseting-state",route:"/reactive-accilarator/React-js/module-3/preserving-and-reseting-state"},{kind:"MdxPage",name:"reseting-state-at-same-position",route:"/reactive-accilarator/React-js/module-3/reseting-state-at-same-position"},{kind:"MdxPage",name:"scaling-up-with-reducer-and-context",route:"/reactive-accilarator/React-js/module-3/scaling-up-with-reducer-and-context"},{kind:"MdxPage",name:"thinking-about-ui",route:"/reactive-accilarator/React-js/module-3/thinking-about-ui"}]},{kind:"Folder",name:"module-4",route:"/reactive-accilarator/React-js/module-4",children:[{kind:"Meta",data:{"referencing-values-with-refs":"4.1 - Referenceing Values with Refs","manipulating-dom-with-refs":"4.2 - Manipulating DOM with Refs","forwarding-refs":"4.3 - Forwarding Refs : Accessing another component’s DOM nodes ",useImperativeHandle:"4.4 - UseImperativeHandle : Exposing the subset of the API with an Imperative Handle","flushing-state-updates-synchronously":"4.5 - Flushing State Updates Synchronously with flushSync"}},{kind:"MdxPage",name:"flushing-state-updates-synchronously",route:"/reactive-accilarator/React-js/module-4/flushing-state-updates-synchronously"},{kind:"MdxPage",name:"forwarding-refs",route:"/reactive-accilarator/React-js/module-4/forwarding-refs"},{kind:"MdxPage",name:"manipulating-dom-with-refs",route:"/reactive-accilarator/React-js/module-4/manipulating-dom-with-refs"},{kind:"MdxPage",name:"referencing-values-with-refs",route:"/reactive-accilarator/React-js/module-4/referencing-values-with-refs"},{kind:"MdxPage",name:"useImperativeHandle",route:"/reactive-accilarator/React-js/module-4/useImperativeHandle"}]}]},{kind:"Meta",data:{index:{title:"Getting Started"},git:"Git and Github Refresher","frontend-focus-topic":"Frontend Focus Topic","javascript-refresher":"Javascript Refresher","React-js":"React Js"}},{kind:"MdxPage",name:"frontend-focus-topic",route:"/reactive-accilarator/frontend-focus-topic"},{kind:"MdxPage",name:"git",route:"/reactive-accilarator/git"},{kind:"MdxPage",name:"index",route:"/reactive-accilarator"},{kind:"MdxPage",name:"javascript-refresher",route:"/reactive-accilarator/javascript-refresher"}]}],flexsearch:{codeblocks:!0},title:"Choosing the State Structure",headings:c},pageNextRoute:"/reactive-accilarator/React-js/module-3/choosing-the-state-structure",nextraLayout:r.ZP,themeConfig:i.Z};t.default=(0,n.j)(d)},5184:function(){}},function(e){e.O(0,[3383,2888,9774,179],function(){return e(e.s=2482)}),_N_E=e.O()}]);