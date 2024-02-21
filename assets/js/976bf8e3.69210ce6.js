"use strict";(self.webpackChunkzoe_blog=self.webpackChunkzoe_blog||[]).push([[2638],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},v=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(r),v=a,m=u["".concat(i,".").concat(v)]||u[v]||d[v]||l;return r?n.createElement(m,s(s({ref:t},c),{},{components:r})):n.createElement(m,s({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,s=new Array(l);s[0]=v;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[u]="string"==typeof e?e:a,s[1]=o;for(var p=2;p<l;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}v.displayName="MDXCreateElement"},2990:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const l={sidebar_position:2,id:"props-css-variables",title:"\u5728\u7236\u5b50\u5143\u4ef6\u9593\u50b3\u905e CSS variables",tags:["CSS","Vue3"],draft:!1,last_update:{date:new Date("2023-09-05T00:00:00.000Z")}},s="\u5728\u7236\u5b50\u5143\u4ef6\u9593\u50b3\u905e CSS variables",o={unversionedId:"vue/props-css-variables",id:"vue/props-css-variables",title:"\u5728\u7236\u5b50\u5143\u4ef6\u9593\u50b3\u905e CSS variables",description:"\u524d\u63d0",source:"@site/docs/vue/props-css-variables.mdx",sourceDirName:"vue",slug:"/vue/props-css-variables",permalink:"/docs/vue/props-css-variables",draft:!1,tags:[{label:"CSS",permalink:"/docs/tags/css"},{label:"Vue3",permalink:"/docs/tags/vue-3"}],version:"current",lastUpdatedAt:1693872e3,formattedLastUpdatedAt:"Sep 5, 2023",sidebarPosition:2,frontMatter:{sidebar_position:2,id:"props-css-variables",title:"\u5728\u7236\u5b50\u5143\u4ef6\u9593\u50b3\u905e CSS variables",tags:["CSS","Vue3"],draft:!1,last_update:{date:"2023-09-05T00:00:00.000Z"}},sidebar:"tutorialSidebar",previous:{title:"\u5728 Vue template \u5167\u751f\u6210\u63db\u884c\u7684\u65b9\u5f0f",permalink:"/docs/vue/newline-in-vue"},next:{title:"\u5728 <script setup> \u4e0b\u4f7f\u7528 <component :is>",permalink:"/docs/vue/makeraw"}},i={},p=[{value:"\u524d\u63d0",id:"\u524d\u63d0",level:2},{value:"\u9700\u6c42",id:"\u9700\u6c42",level:2},{value:"\u5617\u8a66\u5728 <code>&lt;style&gt;</code> \u4f7f\u7528 <code>v-bind</code>",id:"\u5617\u8a66\u5728-style-\u4f7f\u7528-v-bind",level:2},{value:"\u89e3\u6c7a\u65b9\u6848",id:"\u89e3\u6c7a\u65b9\u6848",level:2},{value:"\u5fc3\u5f97",id:"\u5fc3\u5f97",level:2},{value:"\u53c3\u8003\u8cc7\u6599",id:"\u53c3\u8003\u8cc7\u6599",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u5728\u7236\u5b50\u5143\u4ef6\u9593\u50b3\u905e-css-variables"},"\u5728\u7236\u5b50\u5143\u4ef6\u9593\u50b3\u905e CSS variables"),(0,a.kt)("h2",{id:"\u524d\u63d0"},"\u524d\u63d0"),(0,a.kt)("p",null,"\u70ba\u7d71\u4e00\u7ba1\u7406\u524d\u7aef\u5c08\u6848\u5167\u7684\u8272\u7cfb\u8272\u78bc\u548c\u540d\u7a31\uff0c\u5728\u5c08\u6848\u5167\u5275\u5efa\u4e00\u652f CSS \u5b58\u653e CSS variables\uff0c\u9700\u8981\u7528\u5230\u984f\u8272\u6642\u4e00\u5f8b\u6307\u5b9a CSS variables \u800c\u975e HEX \u8272\u78bc\u3002"),(0,a.kt)("p",null,"variable.css\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},":root {\n  --primary-100: #F5F3E6;\n  --primary-200: #ECE6CE;\n  ...\n}\n")),(0,a.kt)("h2",{id:"\u9700\u6c42"},"\u9700\u6c42"),(0,a.kt)("p",null,"\u6b32\u5728\u7236\u5143\u4ef6\u50b3\u5165\u6307\u5b9a\u4e4b CSS variable \u5230 \u5b50\u5143\u4ef6\uff0c\u9700\u4f7f\u7528\u9810\u5148\u5b9a\u7fa9\u597d\u7684 CSS variables\u3002"),(0,a.kt)("h2",{id:"\u5617\u8a66\u5728-style-\u4f7f\u7528-v-bind"},"\u5617\u8a66\u5728 ",(0,a.kt)("inlineCode",{parentName:"h2"},"<style>")," \u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"h2"},"v-bind")),(0,a.kt)("p",null,"\u539f\u672c\u60f3\u8981\u5617\u8a66\u4f7f\u7528 SFC \u63d0\u4f9b\u7684\u529f\u80fd\uff0c\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"<style>")," \u5167\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"v-bind")," \u4f86\u8655\u7406\uff0c\u7d50\u679c\u767c\u73fe\u900f\u904e\u9019\u7a2e\u65b9\u5f0f\u50b3\u9032\u4f86\u7684\u503c\u6703\u88ab\u52a0\u5de5\u8655\u7406\uff0c\u50b3\u9032\u5b50\u5143\u4ef6\u7684\u503c\u7121\u6cd5\u88ab\u7576\u4f5c CSS variables\u3002\u4f46\u662f\uff0c\u82e5\u50b3\u5165\u984f\u8272\u4f8b\u5982\uff1a ",(0,a.kt)("inlineCode",{parentName:"p"},"#FF0000")," \u6216 ",(0,a.kt)("inlineCode",{parentName:"p"},"green")," \uff0c\u5373\u53ef\u6b63\u5e38\u4f7f\u7528\u3002"),(0,a.kt)("p",null,"\u7236\u5143\u4ef6\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"<Header\n  :bg-color=\"'#FF0000'\"\n/>\n")),(0,a.kt)("p",null,"\u6216\u662f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"<Header\n  :bg-color=\"'green'\"\n/>\n")),(0,a.kt)("p",null,"\u5b50\u5143\u4ef6(Header.vue)\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'<script setup>\nconst props = defineProps({\n  bgColor: { type: String, required: false },\n})\n<\/script>\n\n<template>\n    <div class="header"></div>\n</template>\n\n<style scoped>\n.header {\n  --header-bg-color: v-bind(bgColor);\n\n  width: 200px;\n  height: 80px;\n  // --header-bg-color \u70ba\u6b32\u6307\u5b9a\u7684\u984f\u8272\uff0c#000000 \u70ba\u627e\u4e0d\u5230\u524d\u8005\u4e4b\u9810\u8a2d\u984f\u8272\n  background: var(--header-bg-color, #000000);\n}\n</style>\n')),(0,a.kt)("h2",{id:"\u89e3\u6c7a\u65b9\u6848"},"\u89e3\u6c7a\u65b9\u6848"),(0,a.kt)("p",null,"\u5728\u8ddf\u540c\u4e8b\u8a0e\u8ad6\u548c\u9664\u87f2\u5f8c\uff0c\u8abf\u6574\u51fa\u4e00\u500b\u9069\u5408\u76ee\u524d\u5c08\u6848\u548c\u9700\u6c42\u7684\u65b9\u5f0f\uff0c\u900f\u904e\u7d81\u5b9a\u8a72\u5143\u7d20\u7684 inline style\uff0c\u5373\u53ef\u6b63\u5e38\u50b3\u905e CSS variables\u3002"),(0,a.kt)("p",null,"\u7236\u5143\u4ef6\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"  <Header\n    :bg-color=\"'--primary-200'\"\n  />\n")),(0,a.kt)("p",null,"\u5b50\u5143\u4ef6(Header.vue)\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'<script setup>\nconst props = defineProps({\n  bgColor: { type: String, required: false, default: \'--secondary-900\' },\n})\n<\/script>\n\n<template>\n  <div class="header" :style="`--header-bg-color: var(${props.bgColor})`"></div>\n</template>\n\n<style scoped>\n.header {\n  width: 200px;\n  height: 80px;\n  // --header-bg-color \u70ba\u6b32\u6307\u5b9a\u7684\u984f\u8272\uff0c#000000 \u70ba\u627e\u4e0d\u5230\u524d\u8005\u4e4b\u9810\u8a2d\u984f\u8272\n  background: var(--header-bg-color, #000000);\n}\n</style>\n')),(0,a.kt)("h2",{id:"\u5fc3\u5f97"},"\u5fc3\u5f97"),(0,a.kt)("p",null,"\u5728\u67e5\u76f8\u95dc\u8cc7\u6599\u6642\uff0c\u5b98\u65b9\u6587\u4ef6\u6216\u662f\u8a0e\u8ad6\u4e32\u591a\u662f\u5efa\u8b70\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"<style>")," \u5167 ",(0,a.kt)("inlineCode",{parentName:"p"},"v-bind")," \u4f86\u8655\u7406 Vue3 + props + CSS \u7684\u76f8\u95dc\u554f\u984c\u3002\u800c\u5728\u9019\u6b21\u7684\u958b\u767c\u4e2d\uff0c\u525b\u597d\u9700\u8981\u4f7f\u7528 CSS variables\uff0c\u4e26\u975e\u76f4\u63a5\u6307\u5b9a\u8272\u78bc\uff0c\u6240\u4ee5\u78b0\u5230\u4e86\u4e00\u4e9b\u554f\u984c\uff0c\u7121\u6cd5\u76f4\u63a5\u7121\u8166\u5957\u7528\u5b98\u65b9\u505a\u6cd5\uff0c\u9700\u8981\u8f49\u500b\u5f4e\u624d\u80fd\u62b5\u9054\u7d42\u9ede\u3002"),(0,a.kt)("h2",{id:"\u53c3\u8003\u8cc7\u6599"},"\u53c3\u8003\u8cc7\u6599"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://vuejs.org/guide/components/props.html"},"https://vuejs.org/guide/components/props.html")," "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://vuejs.org/api/sfc-css-features.html#v-bind-in-css"},"https://vuejs.org/api/sfc-css-features.html#v-bind-in-css")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://vuejs.org/guide/essentials/class-and-style.html"},"https://vuejs.org/guide/essentials/class-and-style.html")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties"},"https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://beginnersoftwaredeveloper.com/learn-to-use-vue-css-variables-with-vue-examples/"},"https://beginnersoftwaredeveloper.com/learn-to-use-vue-css-variables-with-vue-examples/"))))}d.isMDXComponent=!0}}]);