(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5621],{8057:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/reactive-accilarator/React-js/module-2/queueing-state",function(){return t(5331)}])},6828:function(e,s,t){"use strict";var n=t(2676),r=t(3909);s.Z={logo:(0,n.jsxs)("span",{style:{color:"",fontSize:"30px"},children:["Devripon",(0,n.jsx)("span",{style:{color:"red",fontSize:"50px"},children:"."}),(0,n.jsx)("span",{style:{color:"red",fontSize:"30px",fontWeight:"bolder"}})]}),project:{link:"https://github.com/Deveripon/reactive-accelarator"},docsRepositoryBase:"https://github.com/Deveripon/reactive-accelarator/tree/main/",useNextSeoProps(){let{asPath:e}=(0,r.useRouter)();if("/"!==e)return{titleTemplate:"%s – Reactive Accelarator"}},head:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,n.jsx)("meta",{property:"og:title",content:"রিয়াক্টিভ এক্সিলারেটর"}),(0,n.jsx)("meta",{property:"og:description",content:"রিয়াক্ট ও নেক্সট জে এস এর বাংলায় লিখা ডকুমেন্টেশন যা একজন ডেভেলপারকে রিয়াক্ট ও নেক্সট জে এস নিজের ভাষায় আরও সহজ করে বুঝতে সাহায্য করবে।"})]}),banner:{key:"2.0-release",text:(0,n.jsx)("a",{href:"https://github.com/deveripon/",target:"_blank",children:"\uD83C\uDF89 follow my github →"}),dismissible:!0},toc:{backToTop:!0},sidebar:{defaultMenuCollapseLevel:2},footer:{text:(0,n.jsxs)("span",{children:["copyright ",new Date().getFullYear()," \xa9"," ",(0,n.jsx)("a",{href:"https://github.com/deveripon",target:"_blank",children:"devripon"}),"."]})}}},5331:function(e,s,t){"use strict";t.r(s),t.d(s,{__toc:function(){return l}});var n=t(2676),r=t(6957),i=t(4857),a=t(6828);t(5078);var o=t(3772);let l=[{depth:3,value:"React batches multiple state updates (রিয়াক্ট মাল্টিপল স্টেট আপডেট গুলোকে ব্যাচ করে):",id:"react-batches-multiple-state-updates-রিয়াক্ট-মাল্টিপল-স্টেট-আপডেট-গুলোকে-ব্যাচ-করে"},{depth:3,value:"Updating the same state multiple times before the next render",id:"updating-the-same-state-multiple-times-before-the-next-render"}];function c(e){let s=Object.assign({p:"p",strong:"strong",code:"code",h3:"h3",pre:"pre",span:"span",ol:"ol",li:"li",hr:"hr",ul:"ul"},(0,o.a)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.p,{children:(0,n.jsxs)(s.strong,{children:["রিয়াক্ট প্রতিটা রেন্ডারে মাল্টিপল স্টেট আপডেটকে ",(0,n.jsx)(s.code,{children:"Queue"})," হিসেবে নেয় এবং একসাথে ব্যাচ করে আপডেট করে । এজন্য বলা হয় ",(0,n.jsx)(s.code,{children:"React Queueing a Series of State Updates"})," চলুন এ-ব্যাপেরে বিস্তারিত বুঝিঃ"]})}),"\n",(0,n.jsx)(s.h3,{id:"react-batches-multiple-state-updates-রিয়াক্ট-মাল্টিপল-স্টেট-আপডেট-গুলোকে-ব্যাচ-করে",children:"React batches multiple state updates (রিয়াক্ট মাল্টিপল স্টেট আপডেট গুলোকে ব্যাচ করে):"}),"\n",(0,n.jsx)(s.p,{children:"চলুন একটা কোডের মাধ্যমে বুঝিঃ"}),"\n",(0,n.jsx)(s.p,{children:"চিন্তা করুন আপনি হোটেলে এসেছেন এবং হোটেলের ওয়েটারকে হয়তো কোন একটা ডিস অর্ডার করেছেন, এবং কিছুক্ষণ পর ওয়েটার আপনাকে আপনার ডিসের অবস্থা জানাবে বা পরিবেশন করবে ।"}),"\n",(0,n.jsx)(s.p,{children:"চলুন এবার একটু কোডের দিকে তাকাই,"}),"\n",(0,n.jsx)(s.pre,{"data-language":"jsx","data-theme":"default",filename:"App.jsx",hasCopyCode:!0,children:(0,n.jsxs)(s.code,{"data-line-numbers":"","data-language":"jsx","data-theme":"default","data-line-numbers-max-digits":"2",children:[(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" { useState } "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"react"'}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,n.jsx)(s.span,{className:"line",children:" "}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"App"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"() {"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" ["}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"disStatus"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"setDishStatus"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"] "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"useState"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"মাত্র অর্ডার রিসিভ করা হয়েছে এবং রান্নার জন্য পাঠানো হয়েছে"'})]}),"\n",(0,n.jsx)(s.span,{className:"line",children:(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    );"})}),"\n",(0,n.jsx)(s.span,{className:"line",children:" "}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" ("})]}),"\n",(0,n.jsx)(s.span,{className:"line",children:(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"        <>"})}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"            <"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"h1"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:">{disStatus}</"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"h1"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"            <"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"button"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"                "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"onClick"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"{() "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"                    "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"setDishStatus"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"আপনার ডিশটি রান্না করা হচ্ছে"'}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:");"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"                    "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"setDishStatus"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"আপনার ডিসটি রান্না করা হয়ে গেছে"'}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:");"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"                    "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"setDishStatus"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"                        "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"আপনার ডিসটি পরিবেশন করা হয়েছে , ইনজয় দ্যা ডিস"'})]}),"\n",(0,n.jsx)(s.span,{className:"line",children:(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"                    );"})}),"\n",(0,n.jsx)(s.span,{className:"line",children:(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"                }}>"})}),"\n",(0,n.jsx)(s.span,{className:"line",children:(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"                আমাদের ডিসের কি অবস্থা ?"})}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"            </"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"button"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,n.jsx)(s.span,{className:"line",children:(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"        </>"})}),"\n",(0,n.jsx)(s.span,{className:"line",children:(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    );"})}),"\n",(0,n.jsx)(s.span,{className:"line",children:(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"}"})})]})}),"\n",(0,n.jsxs)(s.p,{children:["আপনি যখন ওর্ডার দিয়েছেন তখন আপনার ডিশের স্টেট হলো ",(0,n.jsx)(s.code,{children:"মাত্র অর্ডার রিসিভ করা হয়েছে এবং রান্নার জন্য পাঠানো হয়েছে"})," যা এই কোডে রিয়াক্টের ইনিশিয়াল স্টেট।"]}),"\n",(0,n.jsxs)(s.p,{children:["এরপর আপনি আপনার ডিসের অবস্থা জানার জন্য ",(0,n.jsx)(s.code,{children:"আমাদের ডিসের কি অবস্থা ?"})," ",(0,n.jsx)(s.code,{children:"button"})," এ ক্লিক করলেন ।"]}),"\n",(0,n.jsx)(s.p,{children:"আপনি যখন বাটনে ক্লিক করলেন তখন বাটনের হেন্ডেলার ফাংশনের ভিতরে তিনটি ধাপে আপনার ডিসের স্ট্যাটাস চেঞ্জ হচ্ছে বা স্টেট আপডেট হচ্ছে।"}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["প্রথম স্টেট আপডেটে ডিসের স্ট্যাটাস ",(0,n.jsx)(s.code,{children:"disStatus"})," করা হয়েছে ",(0,n.jsx)(s.code,{children:"আপনার ডিশটি রান্না করা হচ্ছে"})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["দ্বিতীয় স্টেট আপডেটে ডিসের স্ট্যাটাস ",(0,n.jsx)(s.code,{children:"disStatus"})," করা হয়েছে ",(0,n.jsx)(s.code,{children:"আপনার ডিসটি রান্না করা হয়ে গেছে"})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["তৃতীয় স্টেট আপডেটে ডিসের স্ট্যাটাস ",(0,n.jsx)(s.code,{children:"disStatus"})," করা হয়েছে ",(0,n.jsx)(s.code,{children:"আপনার ডিসটি পরিবেশন করা হয়েছে , ইনজয় দ্যা ডিস"})]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"এখন কি মনে হচ্ছে, আপনি কয়টি স্ট্যাটাস দেখতে পাবেন স্ক্রিনে ? পরপর তিনটি স্ট্যাটাস ই কি দেখতে পাওয়ার কথা যেহেতু এখানে তিনবার স্টেট চেঞ্জ হয়েছে তাহলে তিনবার কম্পোনেন্ট রি-রেন্ডার হবে এবং তিনবার এ তিনটি স্ট্যাটাস দেখতে পাওয়া যাবে ।"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsxs)(s.strong,{children:["না এখানে তা দেখতে পাবেন না । এখানে আপনি একটা স্ট্যাটাস এ দেখতে পাবেন এবং তা হলো ফাইনাল স্ট্যাটাস ",(0,n.jsx)(s.code,{children:"আপনার ডিসটি পরিবেশন করা হয়েছে , ইনজয় দ্যা ডিস"})]})}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.p,{children:"এবার চলুন বুঝি এমন কেন হলো বা রিয়াক্ট কিভাবে এই কাজটা করলোঃ"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"রিয়াক্ট স্টেটগুলোকে ব্যাচ আপডেট করে:"})," তারমানে হলো কোন একটা ",(0,n.jsx)(s.code,{children:"event handler function"})," এর ভিতর যদি স্টেট আপডেট হয় এবং যদি সেই ইভেন্ট হেন্ডেলারের ভিতর মাল্টিপল স্টেট আপডেট থাকে, যেমনঃ"]}),"\n"]}),"\n",(0,n.jsx)(s.pre,{"data-language":"jsx","data-theme":"default",hasCopyCode:!0,children:(0,n.jsxs)(s.code,{"data-language":"jsx","data-theme":"default",children:[(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"App"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"() {"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    <"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"button"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"onClick"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"{() "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"            "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"setDishStatus"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"আপনার ডিশটি রান্না করা হচ্ছে"'}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:");"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"            "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"setDishStatus"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"আপনার ডিসটি রান্না করা হয়ে গেছে"'}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:");"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"            "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"setDishStatus"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"আপনার ডিসটি পরিবেশন করা হয়েছে , ইনজয় দ্যা ডিস"'}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:");"})]}),"\n",(0,n.jsx)(s.span,{className:"line",children:(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"        }}>"})}),"\n",(0,n.jsx)(s.span,{className:"line",children:(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"        আমাদের ডিসের কি অবস্থা ?"})}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    </"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"button"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:">;"})]}),"\n",(0,n.jsx)(s.span,{className:"line",children:(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"}"})})]})}),"\n",(0,n.jsxs)(s.p,{children:["এই কোডে তিনবার ",(0,n.jsx)(s.code,{children:"setDishStatus"})," করা হয়েছে । তাহলে ",(0,n.jsxs)(s.strong,{children:["রিয়াক্ট শুধু প্রথম ",(0,n.jsx)(s.code,{children:"setter function"})," পেয়েই সাথে সাথে রি-রেন্ডার ট্রিগার করেনা বরং ওই ",(0,n.jsx)(s.code,{children:"event handler function"})," এর ভিতরের সমস্ত কোড এক্সিকিউট হউয়ার পর ট্রিগার হয় ।"]})," এবং তখন ওই ",(0,n.jsx)(s.code,{children:"event handler function"})," এর ভিতরের সমস্ত স্টেট আপডেটকে ব্যাচ করে নিয়ে যায় এবং একটা স্টেটের কিউ ম্যেনেজ করে। এবং তারপর কিউ থেকে প্রতিটা স্টেট এক এক করে চেঞ্জ করে। এবং পরের রেন্ডারে সমস্ত আউটপুট একসাথে পাওয়া যায়।"]}),"\n",(0,n.jsx)(s.p,{children:"এখন প্রশ্ন জাগতে পারে যে,যদি তাই হয় তাহলেতো আমরা প্রথম উদাহরণের কোডের আউটপুট হিসেবে তিনটা স্টেট চেঞ্জের আউটপুট ই পেতাম।"}),"\n",(0,n.jsx)(s.p,{children:"তাহলে চলুন এটাও আরেকটু ভালোভাবে বুঝিঃ"}),"\n",(0,n.jsx)(s.h3,{id:"updating-the-same-state-multiple-times-before-the-next-render",children:"Updating the same state multiple times before the next render"}),"\n",(0,n.jsx)(s.p,{children:"রিয়াক্ট এর স্টেট আপডেট করা জন্য যেই ফাংশনে আপরা স্টেট চেঞ্জ করি সেখানে দুইটা উপায়ে করা যায়ঃ"}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"Replace the value of state with setter function"}),":"]}),"\n"]}),"\n",(0,n.jsx)(s.pre,{"data-language":"jsx","data-theme":"default",hasCopyCode:!0,children:(0,n.jsxs)(s.code,{"data-language":"jsx","data-theme":"default",children:[(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"App"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"() {"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" ["}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"disStatus"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"setDishStatus"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"] "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"useState"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"মাত্র অর্ডার রিসিভ করা হয়েছে এবং রান্নার জন্য পাঠানো হয়েছে"'})]}),"\n",(0,n.jsx)(s.span,{className:"line",children:(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    );"})}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    <"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"button"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"onClick"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"{() "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"            "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"setDishStatus"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"আপনার ডিশটি রান্না করা হচ্ছে"'}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:");"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"            "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"setDishStatus"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"আপনার ডিসটি রান্না করা হয়ে গেছে"'}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:");"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"            "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"setDishStatus"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"আপনার ডিসটি পরিবেশন করা হয়েছে , ইনজয় দ্যা ডিস"'}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:");"})]}),"\n",(0,n.jsx)(s.span,{className:"line",children:(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"        }}>"})}),"\n",(0,n.jsx)(s.span,{className:"line",children:(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"        আমাদের ডিসের কি অবস্থা ?"})}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    </"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"button"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:">;"})]}),"\n",(0,n.jsx)(s.span,{className:"line",children:(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"}"})})]})}),"\n",(0,n.jsxs)(s.p,{children:["আমরা যখন এইভাবে স্টেট আপডেট করছি তখন আসলে স্টেট এর পূর্বের ভ্যালুটাকে রিপ্লেস করে দিয়ে নতুন ভ্যালু দিচ্ছি। তাই উপরের উদাহরণে যখন লাস্ট ",(0,n.jsx)(s.code,{children:"setter function"})," কল হয়েছে তখন ",(0,n.jsx)(s.code,{children:"disStatus"})," রিপ্লেস হয়ে গিয়েছে। তাই আমরা আউটপুটে শুধু ",(0,n.jsx)(s.code,{children:"আপনার ডিসটি পরিবেশন করা হয়েছে , ইনজয় দ্যা ডিস"})," এটাই দেখতে পেয়েছি।"]}),"\n",(0,n.jsxs)(s.ol,{start:"2",children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"Update the value of state with updater function"}),":"]}),"\n"]}),"\n",(0,n.jsx)(s.pre,{"data-language":"jsx","data-theme":"default",hasCopyCode:!0,children:(0,n.jsxs)(s.code,{"data-language":"jsx","data-theme":"default",children:[(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"App"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"() {"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" ["}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"disStatus"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"setDishStatus"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"] "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"useState"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"মাত্র অর্ডার রিসিভ করা হয়েছে এবং রান্নার জন্য পাঠানো হয়েছে"'})]}),"\n",(0,n.jsx)(s.span,{className:"line",children:(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    );"})}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    <"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"button"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"onClick"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"{() "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"            "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"setDishStatus"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"((d) "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"`"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"${"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"d"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"}"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:" , আপনার ডিশটি রান্না করা হচ্ছে `"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:");"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"            "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"setDishStatus"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"((d) "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"`"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"${"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"d"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"}"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:" , আপনার ডিসটি রান্না করা হয়ে গেছে `"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:");"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"            "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"setDishStatus"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"                (d) "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"`"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"${"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"d"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"}"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:" , আপনার ডিসটি পরিবেশন করা হয়েছে , ইনজয় দ্যা ডিস `"})]}),"\n",(0,n.jsx)(s.span,{className:"line",children:(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"            );"})}),"\n",(0,n.jsx)(s.span,{className:"line",children:(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"        }}>"})}),"\n",(0,n.jsx)(s.span,{className:"line",children:(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"        আমাদের ডিসের কি অবস্থা ?"})}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    </"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"button"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:">;"})]}),"\n",(0,n.jsx)(s.span,{className:"line",children:(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"}"})})]})}),"\n",(0,n.jsxs)(s.p,{children:["এখানে আমরা ",(0,n.jsx)(s.code,{children:"setDishStatus"})," এর ভিতরে একটা ",(0,n.jsx)(s.code,{children:"anonymous Arrow"})," ফাংশনের সিনট্যাক্স ব্যাবহার করেছি, যা প্যারামিটারে আগের স্টেট ভ্যালুটা রিসিভ করে। এবং তারপর তার সাথে নতুন ভ্যালু যোগ করে ভ্যালু আপডেট করে।"]}),"\n",(0,n.jsx)(s.p,{children:"এভাবে করলে প্রতিটা স্টেট আপডেট করার সময় আগের স্টেটের ভ্যালুটা পাওয়া যায়,এবং সেই ভ্যালু দিয়ে নতুন ভ্যালু আপডেট করা যায়।"}),"\n",(0,n.jsxs)(s.p,{children:["উপরের ",(0,n.jsx)(s.code,{children:"updater function"})," এর উপায়ে যদি আমরা স্টেট আপডেট করি তাহলে আমরা তিনটা চেঞ্জ ভেলুই ফাইনালি দেখতে পাবো এভাবেঃ ",(0,n.jsx)(s.code,{children:"মাত্র অর্ডার রিসিভ করা হয়েছে এবং রান্নার জন্য পাঠানো হয়েছে,আপনার ডিশটি রান্না করা হচ্ছে,আপনার ডিসটি রান্না করা হয়ে গেছে,আপনার ডিসটি পরিবেশন করা হয়েছে , ইনজয় দ্যা ডিস"})]})]})}let d={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,o.a)(),e.components);return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(c,{...e})}):c(e)},pageOpts:{filePath:"pages/reactive-accilarator/React-js/module-2/queueing-state.mdx",route:"/reactive-accilarator/React-js/module-2/queueing-state",timestamp:1730010385e3,pageMap:[{kind:"Meta",data:{"reactive-accilarator":{title:"Reactive Accelerator",type:"page"}}},{kind:"Folder",name:"reactive-accilarator",route:"/reactive-accilarator",children:[{kind:"Folder",name:"React-js",route:"/reactive-accilarator/React-js",children:[{kind:"Meta",data:{"module-1":"Getting Started With React : Describing The UI","module-2":"Going Deep into React: Adding Interactivity","module-3":"React State Management Deep Dive","module-4":"React Escape Hatches"}},{kind:"Folder",name:"module-1",route:"/reactive-accilarator/React-js/module-1",children:[{kind:"MdxPage",name:"React-installation-and-development-environment-setup",route:"/reactive-accilarator/React-js/module-1/React-installation-and-development-environment-setup"},{kind:"Meta",data:{"introduction-to-react":"1.1 - Introduction to React","React-installation-and-development-environment-setup":"1.2 - React-installation-and-development-environment-setup","vertual-dom":"1.3 - How React Works: Virtual Dom","basics-of-react-component":"1.4 - Basics of React Component: Your First Component","component-export-import":"1.5 - Basics of React Component: Importing & Exporting Components","jsx-markup":"1.6 - Basics of JSX: React's Markup - Writing Markup with JSX","javascript-in-jsx":"1.7 - Basics of JSX: React's Markup - JavaScript in JSX with Curly Braces","understanding-props":"1.8 - Understanding Props - Passing Props to a Component","conditional-renderaing":"1.9 - Conditional Rendering","rendering-list":"1.10 - Rendering Lists","pure-components":"1.11 - Pure Components: Keeping Components Pure","your-ui-as-a-tree":"1.12 - Your UI as a Tree"}},{kind:"MdxPage",name:"basics-of-react-component",route:"/reactive-accilarator/React-js/module-1/basics-of-react-component"},{kind:"MdxPage",name:"component-export-import",route:"/reactive-accilarator/React-js/module-1/component-export-import"},{kind:"MdxPage",name:"conditional-renderaing",route:"/reactive-accilarator/React-js/module-1/conditional-renderaing"},{kind:"MdxPage",name:"introduction-to-react",route:"/reactive-accilarator/React-js/module-1/introduction-to-react"},{kind:"MdxPage",name:"javascript-in-jsx",route:"/reactive-accilarator/React-js/module-1/javascript-in-jsx"},{kind:"MdxPage",name:"jsx-markup",route:"/reactive-accilarator/React-js/module-1/jsx-markup"},{kind:"MdxPage",name:"pure-components",route:"/reactive-accilarator/React-js/module-1/pure-components"},{kind:"MdxPage",name:"rendering-list",route:"/reactive-accilarator/React-js/module-1/rendering-list"},{kind:"MdxPage",name:"understanding-props",route:"/reactive-accilarator/React-js/module-1/understanding-props"},{kind:"MdxPage",name:"vertual-dom",route:"/reactive-accilarator/React-js/module-1/vertual-dom"},{kind:"MdxPage",name:"your-ui-as-a-tree",route:"/reactive-accilarator/React-js/module-1/your-ui-as-a-tree"}]},{kind:"Folder",name:"module-2",route:"/reactive-accilarator/React-js/module-2",children:[{kind:"Meta",data:{"responding-to-event":"2.1 - Responding to Events - Adding Event Handlers","event-propagation":"2.2 - Responding to Events - Event Propagation","understanding-state":"2.3 - Understanding State - A Component's Memory","how-rendering-works":"2.4 - How Rendering Works","state-as-a-snapshot":"2.5 - State as a Snapshot","queueing-state":"2.6 - Queueing a Series of State Updates","updating-object-in-state":"2.7 - Updating Objects in a State","updateing-array-in-state":"2.8 - Updating Arrays in a State"}},{kind:"MdxPage",name:"event-propagation",route:"/reactive-accilarator/React-js/module-2/event-propagation"},{kind:"MdxPage",name:"how-rendering-works",route:"/reactive-accilarator/React-js/module-2/how-rendering-works"},{kind:"MdxPage",name:"queueing-state",route:"/reactive-accilarator/React-js/module-2/queueing-state"},{kind:"MdxPage",name:"responding-to-event",route:"/reactive-accilarator/React-js/module-2/responding-to-event"},{kind:"MdxPage",name:"state-as-a-snapshot",route:"/reactive-accilarator/React-js/module-2/state-as-a-snapshot"},{kind:"MdxPage",name:"understanding-state",route:"/reactive-accilarator/React-js/module-2/understanding-state"},{kind:"MdxPage",name:"updateing-array-in-state",route:"/reactive-accilarator/React-js/module-2/updateing-array-in-state"},{kind:"MdxPage",name:"updating-object-in-state",route:"/reactive-accilarator/React-js/module-2/updating-object-in-state"}]},{kind:"Folder",name:"module-3",route:"/reactive-accilarator/React-js/module-3",children:[{kind:"Meta",data:{"declaretive-imperative":"3.1 - Declarative vs Imperative UI","thinking-about-ui":"3.2 - Thinking About UI Declaratively in React","choosing-the-state-structure":"3.3 - Choosing the state Structure in React","lifting-state-up":"3.4 - Share State Between Components: Lifting State Up","preserving-and-reseting-state":"3.5 - Preserving and Reseting State : Default Behaviour","reseting-state-at-same-position":"3.6 - Resetting State at Same Position : Changing Default Behaviour","extracting-state-logic-into-reducer":"3.7 - Extracting State Logic into Reducers","passing-data-deeply-with-context":"3.8 - Passing Data Deeply With Context - Introduction to Context API","scaling-up-with-reducer-and-context":"3.9 - Scaling Up with Reducers and Context"}},{kind:"MdxPage",name:"choosing-the-state-structure",route:"/reactive-accilarator/React-js/module-3/choosing-the-state-structure"},{kind:"MdxPage",name:"declaretive-imperative",route:"/reactive-accilarator/React-js/module-3/declaretive-imperative"},{kind:"MdxPage",name:"extracting-state-logic-into-reducer",route:"/reactive-accilarator/React-js/module-3/extracting-state-logic-into-reducer"},{kind:"MdxPage",name:"lifting-state-up",route:"/reactive-accilarator/React-js/module-3/lifting-state-up"},{kind:"MdxPage",name:"passing-data-deeply-with-context",route:"/reactive-accilarator/React-js/module-3/passing-data-deeply-with-context"},{kind:"MdxPage",name:"preserving-and-reseting-state",route:"/reactive-accilarator/React-js/module-3/preserving-and-reseting-state"},{kind:"MdxPage",name:"reseting-state-at-same-position",route:"/reactive-accilarator/React-js/module-3/reseting-state-at-same-position"},{kind:"MdxPage",name:"scaling-up-with-reducer-and-context",route:"/reactive-accilarator/React-js/module-3/scaling-up-with-reducer-and-context"},{kind:"MdxPage",name:"thinking-about-ui",route:"/reactive-accilarator/React-js/module-3/thinking-about-ui"}]},{kind:"Folder",name:"module-4",route:"/reactive-accilarator/React-js/module-4",children:[{kind:"Meta",data:{"referencing-values-with-refs":"4.1 - Referenceing Values with Refs","manipulating-dom-with-refs":"4.2 - Manipulating DOM with Refs","forwarding-refs":"4.3 - Forwarding Refs : Accessing another component’s DOM nodes ",useImperativeHandle:"4.4 - UseImperativeHandle : Exposing the subset of the API with an Imperative Handle","flushing-state-updates-synchronously":"4.5 - Flushing State Updates Synchronously with flushSync"}},{kind:"MdxPage",name:"flushing-state-updates-synchronously",route:"/reactive-accilarator/React-js/module-4/flushing-state-updates-synchronously"},{kind:"MdxPage",name:"forwarding-refs",route:"/reactive-accilarator/React-js/module-4/forwarding-refs"},{kind:"MdxPage",name:"manipulating-dom-with-refs",route:"/reactive-accilarator/React-js/module-4/manipulating-dom-with-refs"},{kind:"MdxPage",name:"referencing-values-with-refs",route:"/reactive-accilarator/React-js/module-4/referencing-values-with-refs"},{kind:"MdxPage",name:"useImperativeHandle",route:"/reactive-accilarator/React-js/module-4/useImperativeHandle"}]}]},{kind:"Meta",data:{index:{title:"Getting Started"},git:"Git and Github Refresher","frontend-focus-topic":"Frontend Focus Topic","javascript-refresher":"Javascript Refresher","React-js":"React Js"}},{kind:"MdxPage",name:"frontend-focus-topic",route:"/reactive-accilarator/frontend-focus-topic"},{kind:"MdxPage",name:"git",route:"/reactive-accilarator/git"},{kind:"MdxPage",name:"index",route:"/reactive-accilarator"},{kind:"MdxPage",name:"javascript-refresher",route:"/reactive-accilarator/javascript-refresher"}]}],flexsearch:{codeblocks:!0},title:"Queueing State",headings:l},pageNextRoute:"/reactive-accilarator/React-js/module-2/queueing-state",nextraLayout:i.ZP,themeConfig:a.Z};s.default=(0,r.j)(d)},5184:function(){}},function(e){e.O(0,[3383,2888,9774,179],function(){return e(e.s=8057)}),_N_E=e.O()}]);