(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3125],{3325:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/reactive-accilarator/React-js/module-4/effect-react-to-reactive-values",function(){return a(4033)}])},6828:function(e,t,a){"use strict";var r=a(2676),n=a(3909);t.Z={logo:(0,r.jsxs)("span",{style:{color:"",fontSize:"30px"},children:["Devripon",(0,r.jsx)("span",{style:{color:"red",fontSize:"50px"},children:"."}),(0,r.jsx)("span",{style:{color:"red",fontSize:"30px",fontWeight:"bolder"}})]}),project:{link:"https://github.com/Deveripon/reactive-accelarator"},docsRepositoryBase:"https://github.com/Deveripon/reactive-accelarator/tree/main/",useNextSeoProps(){let{asPath:e}=(0,n.useRouter)();if("/"!==e)return{titleTemplate:"%s – Reactive Accelarator"}},head:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,r.jsx)("meta",{property:"og:title",content:"রিয়াক্টিভ এক্সিলারেটর"}),(0,r.jsx)("meta",{property:"og:description",content:"রিয়াক্ট ও নেক্সট জে এস এর বাংলায় লিখা ডকুমেন্টেশন যা একজন ডেভেলপারকে রিয়াক্ট ও নেক্সট জে এস নিজের ভাষায় আরও সহজ করে বুঝতে সাহায্য করবে।"})]}),banner:{key:"2.0-release",text:(0,r.jsx)("a",{href:"https://github.com/deveripon/",target:"_blank",children:"\uD83C\uDF89 follow my github →"}),dismissible:!0},toc:{backToTop:!0},sidebar:{defaultMenuCollapseLevel:0},footer:{text:(0,r.jsxs)("span",{children:["copyright ",new Date().getFullYear()," \xa9"," ",(0,r.jsx)("a",{href:"https://github.com/deveripon",target:"_blank",children:"devripon"}),"."]})}}},4033:function(e,t,a){"use strict";a.r(t),a.d(t,{__toc:function(){return c}});var r=a(2676),n=a(6957),i=a(4857),o=a(6828);a(5078);var s=a(3772);let c=[{depth:3,value:'Effects "react" to reactive values (রিয়াক্টিভ ভ্যালুগুলোতে ইফেক্ট রিয়াক্ট করে)',id:"effects-react-to-reactive-values-রিয়াক্টিভ-ভ্যালুগুলোতে-ইফেক্ট-রিয়াক্ট-করে"},{depth:3,value:"What an Effect with empty dependencies means (ইফেক্টের ইম্পটি ডিপেন্ডেন্সি মানে কি?)",id:"what-an-effect-with-empty-dependencies-means-ইফেক্টের-ইম্পটি-ডিপেন্ডেন্সি-মানে-কি"},{depth:3,value:"All variables declared in the component body are reactive (কম্পোনেন্টের ভিতরে যে সকল ভ্যারিয়েবল ডিক্লেয়ার করা হয়,তা সব রিয়াক্টিভ ভ্যালু)",id:"all-variables-declared-in-the-component-body-are-reactive-কম্পোনেন্টের-ভিতরে-যে-সকল-ভ্যারিয়েবল-ডিক্লেয়ার-করা-হয়তা-সব-রিয়াক্টিভ-ভ্যালু"},{depth:3,value:"React verifies that you specified every reactive value as a dependency (রিয়াক্ট ভেরিফাই করা যে প্রতিটা রিয়াক্টিভ ভ্যালু ইফেক্টের ডিপেন্ডেন্সিতে এড করা হয়েছে।)",id:"react-verifies-that-you-specified-every-reactive-value-as-a-dependency-রিয়াক্ট-ভেরিফাই-করা-যে-প্রতিটা-রিয়াক্টিভ-ভ্যালু-ইফেক্টের-ডিপেন্ডেন্সিতে-এড-করা-হয়েছে"}];function l(e){let t=Object.assign({h3:"h3",pre:"pre",code:"code",span:"span",p:"p",strong:"strong"},(0,s.a)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h3,{id:"effects-react-to-reactive-values-রিয়াক্টিভ-ভ্যালুগুলোতে-ইফেক্ট-রিয়াক্ট-করে",children:'Effects "react" to reactive values (রিয়াক্টিভ ভ্যালুগুলোতে ইফেক্ট রিয়াক্ট করে)'}),"\n",(0,r.jsx)(t.pre,{"data-language":"jsx","data-theme":"default",hasCopyCode:!0,children:(0,r.jsxs)(t.code,{"data-language":"jsx","data-theme":"default",children:[(0,r.jsxs)(t.span,{className:"line",children:[(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"serverUrl"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"https://localhost:1234"'}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,r.jsx)(t.span,{className:"line",children:" "}),"\n",(0,r.jsxs)(t.span,{className:"line",children:[(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-function)"},children:"ChatRoom"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"({ roomId }) {"})]}),"\n",(0,r.jsxs)(t.span,{className:"line",children:[(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-function)"},children:"useEffect"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"(() "}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(t.span,{className:"line",children:[(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"connection"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-function)"},children:"createConnection"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"(serverUrl"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" roomId);"})]}),"\n",(0,r.jsxs)(t.span,{className:"line",children:[(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"connection"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-function)"},children:".connect"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"();"})]}),"\n",(0,r.jsxs)(t.span,{className:"line",children:[(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" () "}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(t.span,{className:"line",children:[(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"            "}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"connection"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-function)"},children:".disconnect"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"();"})]}),"\n",(0,r.jsx)(t.span,{className:"line",children:(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"        };"})}),"\n",(0,r.jsxs)(t.span,{className:"line",children:[(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"    }"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" [roomId]);"})]}),"\n",(0,r.jsxs)(t.span,{className:"line",children:[(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-comment)"},children:"// ..."})]}),"\n",(0,r.jsx)(t.span,{className:"line",children:(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"}"})})]})}),"\n",(0,r.jsxs)(t.p,{children:["উপরের উদাহরণ অনুযায়ী ইফেক্টে দুইটা ভ্যারিয়েবল ব্যাবহার করা হয়েছে, কিন্তু ইফেক্টের ডিপেন্ডেন্সি হিসেবে ব্যাবহার করা হয়েছে একটা ভ্যারিয়েবল ",(0,r.jsx)(t.code,{children:"roomId"}),", এটা কেন? কেন ",(0,r.jsx)(t.code,{children:"serverUrl"})," ইফেক্টের ডিপেন্ডেন্সিতে ব্যাবহার করা হলোনা ?"]}),"\n",(0,r.jsxs)(t.p,{children:["এর কারণ হলো ",(0,r.jsx)(t.code,{children:"serverUrl"})," হলো একটা স্ট্যাটিক ভ্যালু এবং এটা কম্পোনেন্টের বাহিরে ডিক্লেয়ার করা হয়েছে, তাই এটা কখনই কোন রি-রেন্ডারে চেঞ্জ হবেনা। যেই ভ্যারিয়েবলগুলো কম্পোনেন্টের বাহিরে ডিক্লেয়ার করা হয় এবং যেগুলো কখনো চেঞ্জ হওয়ার সম্ভাবনা নেই,সেগুলো রিয়াক্টিভ ভ্যালু না। আর ইফেক্টের ডিপেন্ডেন্সিতে শুধুমাত্র রিয়াক্টিভ ভ্যালুগুলোই ব্যাবহার করতে হয়।"]}),"\n",(0,r.jsxs)(t.p,{children:["অন্যদিকে ",(0,r.jsx)(t.code,{children:"roomId"})," ভ্যারিয়েবলটা প্রপে এসেছে, প্রপ,স্টেট এগুলা রি-রেন্ডারে চেঞ্জ হতে পারে,তাই এগুলো রিয়াক্টিভ ভ্যালু কেননা এগুলা রিয়াক্টের কম্পোনেন্ট এর ভিতরে ডিক্লেয়ার করা হয়েছে তাই এগুলো রেন্ডারিং এ কেলকুলেট হবে, আর তাই এসব ভ্যালু রিয়াক্টিভ।"]}),"\n",(0,r.jsxs)(t.p,{children:["যদি ",(0,r.jsx)(t.code,{children:"serverUrl"})," ভ্যারিয়েবলটা প্রপ হিসেবে আসতো, তাহলে এটাও রিয়াক্টিভ ভ্যালু হতো। রিয়াক্টিভ ভ্যালু যেগুলো ইফেক্টের মধ্যে ব্যাবহার করা হয়েছে,সেগুলো অবশ্যই ইফেক্টের ডিপেন্ডেন্সিতে এড করা লাগবে।"]}),"\n",(0,r.jsx)(t.h3,{id:"what-an-effect-with-empty-dependencies-means-ইফেক্টের-ইম্পটি-ডিপেন্ডেন্সি-মানে-কি",children:"What an Effect with empty dependencies means (ইফেক্টের ইম্পটি ডিপেন্ডেন্সি মানে কি?)"}),"\n",(0,r.jsx)(t.pre,{"data-language":"jsx","data-theme":"default",hasCopyCode:!0,children:(0,r.jsxs)(t.code,{"data-language":"jsx","data-theme":"default",children:[(0,r.jsxs)(t.span,{className:"line",children:[(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"serverUrl"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"https://localhost:1234"'}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,r.jsxs)(t.span,{className:"line",children:[(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"roomId"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"general"'}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,r.jsx)(t.span,{className:"line",children:" "}),"\n",(0,r.jsxs)(t.span,{className:"line",children:[(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-function)"},children:"ChatRoom"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"() {"})]}),"\n",(0,r.jsxs)(t.span,{className:"line",children:[(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-function)"},children:"useEffect"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"(() "}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(t.span,{className:"line",children:[(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"connection"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-function)"},children:"createConnection"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"(serverUrl"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" roomId);"})]}),"\n",(0,r.jsxs)(t.span,{className:"line",children:[(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"connection"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-function)"},children:".connect"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"();"})]}),"\n",(0,r.jsxs)(t.span,{className:"line",children:[(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" () "}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(t.span,{className:"line",children:[(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"            "}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"connection"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-function)"},children:".disconnect"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"();"})]}),"\n",(0,r.jsx)(t.span,{className:"line",children:(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"        };"})}),"\n",(0,r.jsxs)(t.span,{className:"line",children:[(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"    }"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" []); "}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-comment)"},children:"// ✅ All dependencies declared"})]}),"\n",(0,r.jsxs)(t.span,{className:"line",children:[(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-comment)"},children:"// ..."})]}),"\n",(0,r.jsx)(t.span,{className:"line",children:(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"}"})})]})}),"\n",(0,r.jsx)(t.p,{children:"যদি এমন হয় যে আমদের ইফেক্ট শুধুমাত্র একবার রান করবে একবার চ্যাট রুমের সাথে কানেক্ট হবে যখন কম্পোনেন্ট মাউন্ট হবে, পরে আর কখনোই ইফেক্ট রান করার প্রয়োজন নেই, এবং শুধুমাত্র কম্পোনেন্ট আনমাউন্ট হলে কানেকশন স্টপ হবে, তাহলে আমরা ডিপেন্ডেন্সি ভ্যারিয়েবল গুলো কপোনেন্টের বাহিরে নিয়ে স্ট্যাটিক ভ্যালু হিসেবে রাখতে পারি। এবং এতে যেহেতু কোন রিয়াক্টিভ ভ্যালু ইফেক্টের ভিতরে ব্যাবহার করা হয়নি,তাই এখানে ডিপেন্ডেন্সি ইম্পটি থাকতে পারে।"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsxs)(t.strong,{children:["আসলে আমাদের কম্পোনেন্টের মাউন্ট -আনমাউন্ট নিয়ে চিন্তা করার কোন দরকার এ নেই, আমরা শুধুমাত্র এফেক্টের স্টার্ট আর স্টপ লিখবো ইফেক্টের ভিতরে, বাকিটা রিয়াক্ট নিজে বুঝে নিবে। যদি কোন ডিপেন্ডেন্সি দেয়ার প্রয়োজন হয়,সেটা আমদের ",(0,r.jsx)(t.code,{children:"eslint"})," সাজেশন দিবে।"]})}),"\n",(0,r.jsx)(t.h3,{id:"all-variables-declared-in-the-component-body-are-reactive-কম্পোনেন্টের-ভিতরে-যে-সকল-ভ্যারিয়েবল-ডিক্লেয়ার-করা-হয়তা-সব-রিয়াক্টিভ-ভ্যালু",children:"All variables declared in the component body are reactive (কম্পোনেন্টের ভিতরে যে সকল ভ্যারিয়েবল ডিক্লেয়ার করা হয়,তা সব রিয়াক্টিভ ভ্যালু)"}),"\n",(0,r.jsxs)(t.p,{children:["শুধুমাত্র প্রপ আর স্টেট ই রিয়াক্টিভ ভ্যালু নয়, আমাদের কম্পোনেন্টের ভিতরে ডিক্লেয়ার করা ভ্যারিয়েবলগুলোও রিয়াক্টিভ, কেননা যদি এমন হয় যে আমাদের কম্পোনেন্টের ভিতরে কোন ভ্যালু আমরা কনটেক্সট থেকে রিড করেছি এবং তা কম্পোনেন্টের ভিতরে ডিক্লেয়ার করেছি,সেটাও রিয়াক্টিভ ভ্যালু হতে হবে। ",(0,r.jsx)(t.strong,{children:"আমরা কম্পোনেন্টের ভিতরে শুধু সেই ভ্যারিয়েবল ই রাখবো যেগুলো কম্পোনেন্টের রেন্ডারিং এর সাথে সম্পর্কযুক্ত। এমন কোন ভ্যারিয়েবল যা আমাদের কম্পোনেন্টের রেন্ডারিং সাথে সম্পর্ক নেই, এবং া কখনো পরিবর্তন হউয়ার সম্ভাবনা নেই, সেগুলো আমরা সবসময় কম্পোনেন্ট এর বাইরে ডিক্লেয়ার করবো।"})]}),"\n",(0,r.jsx)(t.h3,{id:"react-verifies-that-you-specified-every-reactive-value-as-a-dependency-রিয়াক্ট-ভেরিফাই-করা-যে-প্রতিটা-রিয়াক্টিভ-ভ্যালু-ইফেক্টের-ডিপেন্ডেন্সিতে-এড-করা-হয়েছে",children:"React verifies that you specified every reactive value as a dependency (রিয়াক্ট ভেরিফাই করা যে প্রতিটা রিয়াক্টিভ ভ্যালু ইফেক্টের ডিপেন্ডেন্সিতে এড করা হয়েছে।)"}),"\n",(0,r.jsxs)(t.p,{children:["আমরা প্রজেক্ট সেটআপ করার সময় রিয়াক্টের জন্য যেই ",(0,r.jsx)(t.code,{children:"linter"})," টা সেটআপ করি,সে সবসময় আমাদের ওয়ার্ন করে যাতে সকল রিয়াক্টিভ ভ্যালু যা ইফেক্টের ভিতরে ব্যাবহার করা হয়েছে সেগুলো যাতে ইফেন্টের ডিপেন্ডেন্সিতে এড করা হয়।"]}),"\n",(0,r.jsxs)(t.p,{children:["যদি কোন রিয়াক্টিভ ভ্যালু আমরা ইফেক্টের ভিতরে ব্যাবহার করি কিন্তু ডিপেন্ডেন্সিতে এড না করি, তাহলে ",(0,r.jsx)(t.code,{children:"linter"})," আমাদের ওয়ার্নিং দিবে, আমরা কখনোই সেই ওয়ার্নিং টাকে সাপ্রেস করবোনা, বরং যেসব ভ্যালু ডিপেন্ডেন্সিতে এড করার জন্য ",(0,r.jsx)(t.code,{children:"linter"})," সাজেস্ট করবে সেগুলো আমরা ডিপেন্ডেন্সিতে এড করে নিবো।"]}),"\n",(0,r.jsxs)(t.p,{children:["আর যদি আমরা চাই যে, আমাদের কম্পোনেন্ট ",(0,r.jsx)(t.code,{children:"re-Syncronize"})," না করুক,তাহলে আমরা রিয়াক্টিভ ভ্যালুগুলো কম্পোনেন্ট এর বাহিরে স্ট্যাটিক ভ্যালু হসেবে রাখতে পারি,যেগুলো কখনই চেঞ্জ হবেনা, এবং ইফেক্ট ",(0,r.jsx)(t.code,{children:"re-Syncronize"})," হবেনা।"]})]})}let d={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}=Object.assign({},(0,s.a)(),e.components);return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)},pageOpts:{filePath:"pages/reactive-accilarator/React-js/module-4/effect-react-to-reactive-values.mdx",route:"/reactive-accilarator/React-js/module-4/effect-react-to-reactive-values",timestamp:1731392824e3,pageMap:[{kind:"Meta",data:{"reactive-accilarator":{title:"Reactive Accelerator",type:"page"}}},{kind:"Folder",name:"reactive-accilarator",route:"/reactive-accilarator",children:[{kind:"Folder",name:"Firebase",route:"/reactive-accilarator/Firebase",children:[{kind:"MdxPage",name:"Authentication-authorization",route:"/reactive-accilarator/Firebase/Authentication-authorization"},{kind:"Meta",data:{"Authentication-authorization":"Firebase : Authentication & Authorization"}}]},{kind:"MdxPage",name:"Firebase",route:"/reactive-accilarator/Firebase"},{kind:"Folder",name:"React-js",route:"/reactive-accilarator/React-js",children:[{kind:"Meta",data:{"module-1":"Getting Started With React : Describing The UI","module-2":"Going Deep into React: Adding Interactivity","module-3":"React State Management Deep Dive","module-4":"React Escape Hatches","module-5":"React Beyond Basics: Advanced Concepts"}},{kind:"Folder",name:"module-1",route:"/reactive-accilarator/React-js/module-1",children:[{kind:"MdxPage",name:"React-installation-and-development-environment-setup",route:"/reactive-accilarator/React-js/module-1/React-installation-and-development-environment-setup"},{kind:"Meta",data:{"introduction-to-react":"1.1 - Introduction to React","React-installation-and-development-environment-setup":"1.2 - React-installation-and-development-environment-setup","vertual-dom":"1.3 - How React Works: Virtual Dom","basics-of-react-component":"1.4 - Basics of React Component: Your First Component","component-export-import":"1.5 - Basics of React Component: Importing & Exporting Components","jsx-markup":"1.6 - Basics of JSX: React's Markup - Writing Markup with JSX","javascript-in-jsx":"1.7 - Basics of JSX: React's Markup - JavaScript in JSX with Curly Braces","understanding-props":"1.8 - Understanding Props - Passing Props to a Component","conditional-renderaing":"1.9 - Conditional Rendering","rendering-list":"1.10 - Rendering Lists","pure-components":"1.11 - Pure Components: Keeping Components Pure","your-ui-as-a-tree":"1.12 - Your UI as a Tree"}},{kind:"MdxPage",name:"basics-of-react-component",route:"/reactive-accilarator/React-js/module-1/basics-of-react-component"},{kind:"MdxPage",name:"component-export-import",route:"/reactive-accilarator/React-js/module-1/component-export-import"},{kind:"MdxPage",name:"conditional-renderaing",route:"/reactive-accilarator/React-js/module-1/conditional-renderaing"},{kind:"MdxPage",name:"introduction-to-react",route:"/reactive-accilarator/React-js/module-1/introduction-to-react"},{kind:"MdxPage",name:"javascript-in-jsx",route:"/reactive-accilarator/React-js/module-1/javascript-in-jsx"},{kind:"MdxPage",name:"jsx-markup",route:"/reactive-accilarator/React-js/module-1/jsx-markup"},{kind:"MdxPage",name:"pure-components",route:"/reactive-accilarator/React-js/module-1/pure-components"},{kind:"MdxPage",name:"rendering-list",route:"/reactive-accilarator/React-js/module-1/rendering-list"},{kind:"MdxPage",name:"understanding-props",route:"/reactive-accilarator/React-js/module-1/understanding-props"},{kind:"MdxPage",name:"vertual-dom",route:"/reactive-accilarator/React-js/module-1/vertual-dom"},{kind:"MdxPage",name:"your-ui-as-a-tree",route:"/reactive-accilarator/React-js/module-1/your-ui-as-a-tree"}]},{kind:"Folder",name:"module-2",route:"/reactive-accilarator/React-js/module-2",children:[{kind:"Meta",data:{"responding-to-event":"2.1 - Responding to Events - Adding Event Handlers","event-propagation":"2.2 - Responding to Events - Event Propagation","understanding-state":"2.3 - Understanding State - A Component's Memory","how-rendering-works":"2.4 - How Rendering Works","state-as-a-snapshot":"2.5 - State as a Snapshot","queueing-state":"2.6 - Queueing a Series of State Updates","updating-object-in-state":"2.7 - Updating Objects in a State","updateing-array-in-state":"2.8 - Updating Arrays in a State"}},{kind:"MdxPage",name:"event-propagation",route:"/reactive-accilarator/React-js/module-2/event-propagation"},{kind:"MdxPage",name:"how-rendering-works",route:"/reactive-accilarator/React-js/module-2/how-rendering-works"},{kind:"MdxPage",name:"queueing-state",route:"/reactive-accilarator/React-js/module-2/queueing-state"},{kind:"MdxPage",name:"responding-to-event",route:"/reactive-accilarator/React-js/module-2/responding-to-event"},{kind:"MdxPage",name:"state-as-a-snapshot",route:"/reactive-accilarator/React-js/module-2/state-as-a-snapshot"},{kind:"MdxPage",name:"understanding-state",route:"/reactive-accilarator/React-js/module-2/understanding-state"},{kind:"MdxPage",name:"updateing-array-in-state",route:"/reactive-accilarator/React-js/module-2/updateing-array-in-state"},{kind:"MdxPage",name:"updating-object-in-state",route:"/reactive-accilarator/React-js/module-2/updating-object-in-state"}]},{kind:"Folder",name:"module-3",route:"/reactive-accilarator/React-js/module-3",children:[{kind:"Meta",data:{"declaretive-imperative":"3.1 - Declarative vs Imperative UI","thinking-about-ui":"3.2 - Thinking About UI Declaratively in React","choosing-the-state-structure":"3.3 - Choosing the state Structure in React","lifting-state-up":"3.4 - Share State Between Components: Lifting State Up","preserving-and-reseting-state":"3.5 - Preserving and Reseting State : Default Behaviour","reseting-state-at-same-position":"3.6 - Resetting State at Same Position : Changing Default Behaviour","extracting-state-logic-into-reducer":"3.7 - Extracting State Logic into Reducers","passing-data-deeply-with-context":"3.8 - Passing Data Deeply With Context - Introduction to Context API","scaling-up-with-reducer-and-context":"3.9 - Scaling Up with Reducers and Context"}},{kind:"MdxPage",name:"choosing-the-state-structure",route:"/reactive-accilarator/React-js/module-3/choosing-the-state-structure"},{kind:"MdxPage",name:"declaretive-imperative",route:"/reactive-accilarator/React-js/module-3/declaretive-imperative"},{kind:"MdxPage",name:"extracting-state-logic-into-reducer",route:"/reactive-accilarator/React-js/module-3/extracting-state-logic-into-reducer"},{kind:"MdxPage",name:"lifting-state-up",route:"/reactive-accilarator/React-js/module-3/lifting-state-up"},{kind:"MdxPage",name:"passing-data-deeply-with-context",route:"/reactive-accilarator/React-js/module-3/passing-data-deeply-with-context"},{kind:"MdxPage",name:"preserving-and-reseting-state",route:"/reactive-accilarator/React-js/module-3/preserving-and-reseting-state"},{kind:"MdxPage",name:"reseting-state-at-same-position",route:"/reactive-accilarator/React-js/module-3/reseting-state-at-same-position"},{kind:"MdxPage",name:"scaling-up-with-reducer-and-context",route:"/reactive-accilarator/React-js/module-3/scaling-up-with-reducer-and-context"},{kind:"MdxPage",name:"thinking-about-ui",route:"/reactive-accilarator/React-js/module-3/thinking-about-ui"}]},{kind:"Folder",name:"module-4",route:"/reactive-accilarator/React-js/module-4",children:[{kind:"Meta",data:{"referencing-values-with-refs":"4.1 - Referenceing Values with Refs","manipulating-dom-with-refs":"4.2 - Manipulating DOM with Refs","forwarding-refs":"4.3 - Forwarding Refs : Accessing another component’s DOM nodes ",useImperativeHandle:"4.4 - UseImperativeHandle : Exposing the subset of the API with an Imperative Handle","flushing-state-updates-synchronously":"4.5 - Flushing State Updates Synchronously with flushSync","syncronising-with-effets-overview":"4.6 - Synchronising with Effects: Overview and How To Write Effects","handling-effects-firing-twice":"4.7 - Handling Effects Firing Twice in Development","fatching-data":"4.8 - Synchronising with Effects: Fatching Data","you-might-not-need-an-effect":"4.9 - You Might Not Need an Effect","the-lifecycle-of-an-effect":"4.10 - The Lifecycle of an Effect","effect-react-to-reactive-values":"4.11 - Effect React To Reactive Values","seperating-events-from-effects":"4.12 - Separating Events from Effects","removing-effect-dependecies":"4.13 - Removing Effect Dependencies","reusing-logic-with-custom-hook":"4.14 - Reusing Logic with Custom Hook","performance-optimization":"4.15 - Performance Optimization"}},{kind:"MdxPage",name:"effect-react-to-reactive-values",route:"/reactive-accilarator/React-js/module-4/effect-react-to-reactive-values"},{kind:"MdxPage",name:"fatching-data",route:"/reactive-accilarator/React-js/module-4/fatching-data"},{kind:"MdxPage",name:"flushing-state-updates-synchronously",route:"/reactive-accilarator/React-js/module-4/flushing-state-updates-synchronously"},{kind:"MdxPage",name:"forwarding-refs",route:"/reactive-accilarator/React-js/module-4/forwarding-refs"},{kind:"MdxPage",name:"handling-effects-firing-twice",route:"/reactive-accilarator/React-js/module-4/handling-effects-firing-twice"},{kind:"MdxPage",name:"manipulating-dom-with-refs",route:"/reactive-accilarator/React-js/module-4/manipulating-dom-with-refs"},{kind:"MdxPage",name:"performance-optimization",route:"/reactive-accilarator/React-js/module-4/performance-optimization"},{kind:"MdxPage",name:"referencing-values-with-refs",route:"/reactive-accilarator/React-js/module-4/referencing-values-with-refs"},{kind:"MdxPage",name:"removing-effect-dependecies",route:"/reactive-accilarator/React-js/module-4/removing-effect-dependecies"},{kind:"MdxPage",name:"reusing-logic-with-custom-hook",route:"/reactive-accilarator/React-js/module-4/reusing-logic-with-custom-hook"},{kind:"MdxPage",name:"seperating-events-from-effects",route:"/reactive-accilarator/React-js/module-4/seperating-events-from-effects"},{kind:"MdxPage",name:"syncronising-with-effets-overview",route:"/reactive-accilarator/React-js/module-4/syncronising-with-effets-overview"},{kind:"MdxPage",name:"the-lifecycle-of-an-effect",route:"/reactive-accilarator/React-js/module-4/the-lifecycle-of-an-effect"},{kind:"MdxPage",name:"useImperativeHandle",route:"/reactive-accilarator/React-js/module-4/useImperativeHandle"},{kind:"MdxPage",name:"you-might-not-need-an-effect",route:"/reactive-accilarator/React-js/module-4/you-might-not-need-an-effect"}]},{kind:"Folder",name:"module-5",route:"/reactive-accilarator/React-js/module-5",children:[{kind:"Meta",data:{"react-suspense-and-error-bounderies":"React Suspense and Error Bounderies","react-lazy-load":"React Lazy Load"}},{kind:"MdxPage",name:"react-lazy-load",route:"/reactive-accilarator/React-js/module-5/react-lazy-load"},{kind:"MdxPage",name:"react-suspense-and-error-bounderies",route:"/reactive-accilarator/React-js/module-5/react-suspense-and-error-bounderies"}]}]},{kind:"Folder",name:"Tanstack-query",route:"/reactive-accilarator/Tanstack-query",children:[{kind:"MdxPage",name:"installation",route:"/reactive-accilarator/Tanstack-query/installation"},{kind:"Meta",data:{installation:"Installation"}}]},{kind:"Meta",data:{index:{title:"Getting Started"},git:"Git and Github Refresher","frontend-focus-topic":"Frontend Focus Topic","javascript-refresher":"Javascript Refresher","React-js":"React Js","react-router-dom":"React Router Dom",Firebase:"Firebase","tanstack-query":"Tanstack Query / React Query","react-hook-form":"React Hook Form","framer-motion":"Framer Motion",redux:"Redux"}},{kind:"MdxPage",name:"framer-motion",route:"/reactive-accilarator/framer-motion"},{kind:"MdxPage",name:"frontend-focus-topic",route:"/reactive-accilarator/frontend-focus-topic"},{kind:"MdxPage",name:"git",route:"/reactive-accilarator/git"},{kind:"MdxPage",name:"index",route:"/reactive-accilarator"},{kind:"MdxPage",name:"javascript-refresher",route:"/reactive-accilarator/javascript-refresher"},{kind:"MdxPage",name:"react-hook-form",route:"/reactive-accilarator/react-hook-form"},{kind:"MdxPage",name:"react-router-dom",route:"/reactive-accilarator/react-router-dom"},{kind:"MdxPage",name:"redux",route:"/reactive-accilarator/redux"},{kind:"MdxPage",name:"tanstack-query",route:"/reactive-accilarator/tanstack-query"}]}],flexsearch:{codeblocks:!0},title:"Effect React to Reactive Values",headings:c},pageNextRoute:"/reactive-accilarator/React-js/module-4/effect-react-to-reactive-values",nextraLayout:i.ZP,themeConfig:o.Z};t.default=(0,n.j)(d)},5184:function(){}},function(e){e.O(0,[3383,2888,9774,179],function(){return e(e.s=3325)}),_N_E=e.O()}]);