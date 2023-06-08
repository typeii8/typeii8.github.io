"use strict";(self.webpackChunkzoe_blog=self.webpackChunkzoe_blog||[]).push([[7330],{3905:(n,t,e)=>{e.d(t,{Zo:()=>d,kt:()=>g});var r=e(7294);function i(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function o(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,r)}return e}function l(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?o(Object(e),!0).forEach((function(t){i(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):o(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function a(n,t){if(null==n)return{};var e,r,i=function(n,t){if(null==n)return{};var e,r,i={},o=Object.keys(n);for(r=0;r<o.length;r++)e=o[r],t.indexOf(e)>=0||(i[e]=n[e]);return i}(n,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)e=o[r],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(i[e]=n[e])}return i}var s=r.createContext({}),c=function(n){var t=r.useContext(s),e=t;return n&&(e="function"==typeof n?n(t):l(l({},t),n)),e},d=function(n){var t=c(n.components);return r.createElement(s.Provider,{value:t},n.children)},p="mdxType",u={inlineCode:"code",wrapper:function(n){var t=n.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(n,t){var e=n.components,i=n.mdxType,o=n.originalType,s=n.parentName,d=a(n,["components","mdxType","originalType","parentName"]),p=c(e),m=i,g=p["".concat(s,".").concat(m)]||p[m]||u[m]||o;return e?r.createElement(g,l(l({ref:t},d),{},{components:e})):r.createElement(g,l({ref:t},d))}));function g(n,t){var e=arguments,i=t&&t.mdxType;if("string"==typeof n||i){var o=e.length,l=new Array(o);l[0]=m;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=n,a[p]="string"==typeof n?n:i,l[1]=a;for(var c=2;c<o;c++)l[c]=e[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,e)}m.displayName="MDXCreateElement"},1579:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var r=e(7462),i=(e(7294),e(3905));const o={sidebar_position:2,id:"tailwindcss-lint",title:"TailwindCSS + Lint \u7684\u4f7f\u7528\u548c\u8a2d\u5b9a",tags:["TailwindCSS","Stylelint","CSS"],draft:!1},l="TailwindCSS x Stylelint x Prettier",a={unversionedId:"css-article/tailwindcss-lint",id:"css-article/tailwindcss-lint",title:"TailwindCSS + Lint \u7684\u4f7f\u7528\u548c\u8a2d\u5b9a",description:"\u5728\u4f7f\u7528 TailwindCSS \u9032\u884c\u958b\u767c\u6642\uff0c",source:"@site/docs/css-article/tailwindcss-lint.mdx",sourceDirName:"css-article",slug:"/css-article/tailwindcss-lint",permalink:"/docs/css-article/tailwindcss-lint",draft:!1,tags:[{label:"TailwindCSS",permalink:"/docs/tags/tailwind-css"},{label:"Stylelint",permalink:"/docs/tags/stylelint"},{label:"CSS",permalink:"/docs/tags/css"}],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,id:"tailwindcss-lint",title:"TailwindCSS + Lint \u7684\u4f7f\u7528\u548c\u8a2d\u5b9a",tags:["TailwindCSS","Stylelint","CSS"],draft:!1},sidebar:"tutorialSidebar",previous:{title:"Stylelint \u7684\u5c0e\u5165\u548c\u8a2d\u5b9a",permalink:"/docs/css-article/stylelint"}},s={},c=[{value:"\u76ee\u7684",id:"\u76ee\u7684",level:2},{value:"\u53c3\u8003\u8cc7\u6599",id:"\u53c3\u8003\u8cc7\u6599",level:2},{value:"\u5c08\u6848\u74b0\u5883",id:"\u5c08\u6848\u74b0\u5883",level:2},{value:"stylelint \u8a2d\u5b9a",id:"stylelint-\u8a2d\u5b9a",level:2}],d={toc:c},p="wrapper";function u(n){let{components:t,...e}=n;return(0,i.kt)(p,(0,r.Z)({},d,e,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"tailwindcss-x-stylelint-x-prettier"},"TailwindCSS x Stylelint x Prettier"),(0,i.kt)("p",null,"\u5728\u4f7f\u7528 TailwindCSS \u9032\u884c\u958b\u767c\u6642\uff0c"),(0,i.kt)("p",null,"\u5e38\u9700\u8981\u5728\u4e00\u500b DOM \u4e0a\u5957\u7528\u5f88\u591a CSS class \u5df2\u9054\u5230\u6240\u9700\u6548\u679c\uff0c"),(0,i.kt)("p",null,"\u5f80\u5f80\u5230\u4e86\u6700\u5f8c\uff0cCSS class \u6703\u4e0d\u5c0f\u5fc3\u5806\u758a\u6210\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<button\n  class="group relative w-full flex justify-center py-2 px-4 border\n    border-transparent text-sm font-medium rounded-md text-white\n    bg-primary hover:bg-primary-dark focus:outline-none\n    focus:ring-2 focus:ring-offset-2 focus:ring-primary"\n  @click="submit"\n>\n')),(0,i.kt)("p",null,"\u4e0a\u8ff0\u6709\u53ef\u80fd\u6703\u9020\u6210\u7684\u554f\u984c\u6709\uff1a"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u4e0d\u5c0f\u5fc3\u52a0\u4e86\u91cd\u8907\u7684\u5c6c\u6027"),(0,i.kt)("li",{parentName:"ol"},"\u95b1\u8b80\u67e5\u627e\u4e0d\u6613"),(0,i.kt)("li",{parentName:"ol"},"CSS class \u9806\u5e8f\u4e0d\u6613\u7dad\u6301")),(0,i.kt)("p",null,"\u5c0d\u6211\u4f86\u8aaa\uff0c\u5be6\u5728\u6eff\u96e3\u7dad\u8b77\uff0c\u5728\u7814\u7a76\u5f8c\u6c7a\u5b9a\u642d\u914d\u4f7f\u7528 Stylelint \u548c Prettier \u4f86\u6574\u7406\uff0c"),(0,i.kt)("p",null,"\u5957\u7528\u4ee5\u5f8c\u6703\u9577\u6210\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<button\n  class="group relative flex w-full justify-center rounded-md border border-transparent bg-primary py-2 px-4 text-sm font-medium text-white hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"\n  @click="submit"\n>\n')),(0,i.kt)("h2",{id:"\u76ee\u7684"},"\u76ee\u7684"),(0,i.kt)("p",null,"\u5728\u4f7f\u7528 TailwindCSS \u7684\u5c08\u6848\u5c0e\u5165 Stylelint \u548c Prettier\uff0c"),(0,i.kt)("p",null,"\u4e3b\u8981\u662f\u70ba\u4e86\u4f9d\u8cf4\u81ea\u52d5\u5316\u6574\u7406\u4f86\u89e3\u6c7a\u4ee5\u4e0b\u56f0\u64fe\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u56e0\u70ba\u773c\u82b1\u6c92\u770b\u5230\u6216\u591a\u4eba\u5354\u4f5c\u4e00\u6642\u758f\u5ffd\uff0c\u91cd\u8907\u5957\u7528\u6a23\u5f0f"),(0,i.kt)("li",{parentName:"ul"},"\u6839\u64da\u898f\u7bc4\u9032\u884c\u6709\u610f\u7fa9\u7684\u6392\u5e8f\uff0c\u6613\u65bc\u95b1\u8b80\u548c\u4fee\u6539")),(0,i.kt)("h2",{id:"\u53c3\u8003\u8cc7\u6599"},"\u53c3\u8003\u8cc7\u6599"),(0,i.kt)("p",null,"\u5b98\u65b9\u63d0\u4f9b\u4e86\u5b89\u88dd\u65b9\u6cd5\u548c\u4ecb\u7d39\u6587\u7ae0\uff0c\u6309\u5716\u7d22\u9a65\u4e00\u6b65\u4e00\u6b65\u5b89\u88dd\u5373\u53ef\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/tailwindlabs/prettier-plugin-tailwindcss"},"https://github.com/tailwindlabs/prettier-plugin-tailwindcss")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tailwindcss.com/docs/editor-setup#automatic-class-sorting-with-prettier"},"https://tailwindcss.com/docs/editor-setup#automatic-class-sorting-with-prettier")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tailwindcss.com/blog/automatic-class-sorting-with-prettier"},"https://tailwindcss.com/blog/automatic-class-sorting-with-prettier"))),(0,i.kt)("h2",{id:"\u5c08\u6848\u74b0\u5883"},"\u5c08\u6848\u74b0\u5883"),(0,i.kt)("p",null,"\u7248\u672c\u8fed\u4ee3\u66f4\u65b0\u5feb\u901f\uff0c\u5957\u4ef6\u548c stylelint \u898f\u5247\u4e5f\u6709\u5f88\u591a\u4e0d\u540c\u9078\u64c7\uff0c\u53ef\u4ee5\u6839\u64da\u9700\u6c42\u5b89\u88dd\u4e0d\u540c\u5957\u4ef6"),(0,i.kt)("p",null,"\u4ee5\u4e0b\u662f\u6211\u5728\u5c07\u5176\u5957\u7528\u9032\u5c08\u6848\u6642\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json"),"\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"devDependencies": {\n  "@rushstack/eslint-patch": "^1.1.4",\n  "@vue/eslint-config-prettier": "^7.0.0",\n  "eslint": "^8.22.0",\n  "eslint-config-lcs-vuelint": "^1.1.4",\n  "eslint-plugin-vue": "^9.4.0",\n  "stylelint": "^14.10.0",\n  "stylelint-config-standard": "^27.0.0",\n  "stylelint-config-standard-scss": "^5.0.0",\n  "stylelint-order": "^5.0.0",\n  "prettier": "^2.7.1",\n  "prettier-plugin-tailwindcss": "^0.1.13",\n}\n')),(0,i.kt)("h2",{id:"stylelint-\u8a2d\u5b9a"},"stylelint \u8a2d\u5b9a"),(0,i.kt)("p",null,"CSS class \u7684\u6392\u5e8f\u548c\u5176\u4ed6\u898f\u5247\u7b49\uff0c\u53ef\u900f\u904e ",(0,i.kt)("inlineCode",{parentName:"p"},".stylelintrc.json")," \u9032\u884c\u8a2d\u5b9a"),(0,i.kt)("p",null,"\u81f3\u65bc\u8981\u5982\u4f55\u898f\u7bc4\uff0c\u9700\u770b\u5c08\u6848\u74b0\u5883\u548c\u500b\u4eba\u958b\u767c\u7fd2\u6163\u800c\u5b9a"),(0,i.kt)("p",null,"\u500b\u4eba\u5728\u958b\u767c\u6642\uff0c\u6eff\u5728\u610f CSS class \u6392\u5e8f\uff0c\u7531\u5916\u800c\u5167\u7531\u5927\u5230\u5c0f\u7684\u898f\u5247\u8f03\u4e0d\u6703\u51fa\u73fe side effect"),(0,i.kt)("p",null,"\u95dc\u65bc TailwindCSS \u5c0d\u65bc\u6392\u5e8f\u7684\u76f8\u95dc\u898f\u7bc4\u53ef\u4ee5\u770b",(0,i.kt)("a",{parentName:"p",href:"https://tailwindcss.com/blog/automatic-class-sorting-with-prettier#how-classes-are-sorted"},"\u9019\u7bc7")),(0,i.kt)("p",null,"\u6700\u5f8c\uff0c\u4ee5\u4e0b\u662f\u6211\u81ea\u5df1\u5728\u67d0\u500b\u5c08\u6848\u4e0b\u7684\u8a2d\u5b9a\uff0c\u4f9b\u53c3\u8003\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "extends": ["stylelint-config-standard", "stylelint-config-standard-scss"],\n  "plugins": ["stylelint-order"],\n  "rules": {\n    "indentation": 2,\n    "color-hex-case": "upper",\n    "color-no-invalid-hex": true,\n    "color-hex-length": "long",\n    "color-no-hex": null,\n    "color-function-notation": "legacy",\n    "alpha-value-notation": "number",\n    "value-no-vendor-prefix": null,\n    "property-no-vendor-prefix": null,\n    "order/order": ["custom-properties", "declarations"],\n    "selector-class-pattern": null,\n    "keyframes-name-pattern": null,\n    "scss/dollar-variable-pattern": "^([a-z][a-z0-9]*)(_[a-z0-9]+)*$",\n    "scss/at-function-pattern": "^([a-z][a-z0-9]*)(_[a-z0-9]+)*$",\n    "scss/percent-placeholder-pattern": "^([a-z][a-z0-9]*)(_[a-z0-9]+)*$",\n    "order/properties-order": [\n      "content",\n      "position",\n      "inset",\n      "top",\n      "right",\n      "bottom",\n      "left",\n      "z-index",\n      "display",\n      "vertical-align",\n      "flex",\n      "flex-grow",\n      "flex-shrink",\n      "flex-basis",\n      "flex-direction",\n      "flex-flow",\n      "flex-wrap",\n      "grid",\n      "grid-area",\n      "grid-template",\n      "grid-template-areas",\n      "grid-template-rows",\n      "grid-template-columns",\n      "grid-row",\n      "grid-row-start",\n      "grid-row-end",\n      "grid-column",\n      "grid-column-start",\n      "grid-column-end",\n      "grid-auto-rows",\n      "grid-auto-columns",\n      "grid-auto-flow",\n      "grid-gap",\n      "grid-row-gap",\n      "grid-column-gap",\n      "gap",\n      "row-gap",\n      "column-gap",\n      "place-content",\n      "align-content",\n      "justify-content",\n      "place-items",\n      "align-items",\n      "justify-items",\n      "place-self",\n      "align-self",\n      "justify-self",\n      "order",\n      "float",\n      "clear",\n      "object-fit",\n      "object-position",\n      "overflow",\n      "overflow-x",\n      "overflow-y",\n      "overflow-scrolling",\n      "clip",\n\n      "box-sizing",\n      "width",\n      "min-width",\n      "max-width",\n      "height",\n      "min-height",\n      "max-height",\n      "margin",\n      "margin-inline",\n      "margin-block",\n      "margin-top",\n      "margin-right",\n      "margin-bottom",\n      "margin-left",\n      "padding",\n      "padding-inline",\n      "padding-block",\n      "padding-top",\n      "padding-right",\n      "padding-bottom",\n      "padding-left",\n      "border",\n      "border-spacing",\n      "border-collapse",\n      "border-width",\n      "border-style",\n      "border-color",\n      "border-top",\n      "border-top-width",\n      "border-top-style",\n      "border-top-color",\n      "border-right",\n      "border-right-width",\n      "border-right-style",\n      "border-right-color",\n      "border-bottom",\n      "border-bottom-width",\n      "border-bottom-style",\n      "border-bottom-color",\n      "border-left",\n      "border-left-width",\n      "border-left-style",\n      "border-left-color",\n      "border-radius",\n      "border-top-left-radius",\n      "border-top-right-radius",\n      "border-bottom-right-radius",\n      "border-bottom-left-radius",\n      "border-image",\n      "border-image-source",\n      "border-image-slice",\n      "border-image-width",\n      "border-image-outset",\n      "border-image-repeat",\n      "border-top-image",\n      "border-right-image",\n      "border-bottom-image",\n      "border-left-image",\n      "border-corner-image",\n      "border-top-left-image",\n      "border-top-right-image",\n      "border-bottom-right-image",\n      "border-bottom-left-image",\n\n      "background",\n      "background-color",\n      "background-image",\n      "background-attachment",\n      "background-position",\n      "background-position-x",\n      "background-position-y",\n      "background-clip",\n      "background-origin",\n      "background-size",\n      "background-repeat",\n      "color",\n      "box-decoration-break",\n      "box-shadow",\n      "outline",\n      "outline-width",\n      "outline-style",\n      "outline-color",\n      "outline-offset",\n      "table-layout",\n      "caption-side",\n      "empty-cells",\n      "list-style",\n      "list-style-position",\n      "list-style-type",\n      "list-style-image",\n\n      "font",\n      "font-weight",\n      "font-style",\n      "font-variant",\n      "font-size-adjust",\n      "font-stretch",\n      "font-size",\n      "font-family",\n      "src",\n      "line-height",\n      "letter-spacing",\n      "quotes",\n      "counter-increment",\n      "counter-reset",\n      "-ms-writing-mode",\n      "text-align",\n      "text-align-last",\n      "text-decoration",\n      "text-emphasis",\n      "text-emphasis-position",\n      "text-emphasis-style",\n      "text-emphasis-color",\n      "text-indent",\n      "text-justify",\n      "text-outline",\n      "text-transform",\n      "text-wrap",\n      "text-overflow",\n      "text-overflow-ellipsis",\n      "text-overflow-mode",\n      "text-shadow",\n      "white-space",\n      "word-spacing",\n      "word-wrap",\n      "word-break",\n      "overflow-wrap",\n      "tab-size",\n      "hyphens",\n      "interpolation-mode",\n\n      "opacity",\n      "visibility",\n      "filter",\n      "resize",\n      "cursor",\n      "pointer-events",\n      "user-select",\n\n      "unicode-bidi",\n      "direction",\n      "columns",\n      "column-span",\n      "column-width",\n      "column-count",\n      "column-fill",\n      "column-gap",\n      "column-rule",\n      "column-rule-width",\n      "column-rule-style",\n      "column-rule-color",\n      "break-before",\n      "break-inside",\n      "break-after",\n      "page-break-before",\n      "page-break-inside",\n      "page-break-after",\n      "orphans",\n      "widows",\n      "zoom",\n      "max-zoom",\n      "min-zoom",\n      "user-zoom",\n      "orientation",\n      "fill",\n      "stroke",\n\n      "transition",\n      "transition-delay",\n      "transition-timing-function",\n      "transition-duration",\n      "transition-property",\n      "transform",\n      "transform-origin",\n      "animation",\n      "animation-name",\n      "animation-duration",\n      "animation-play-state",\n      "animation-timing-function",\n      "animation-delay",\n      "animation-iteration-count",\n      "animation-direction",\n      "animation-fill-mode"\n    ]\n  }\n}\n')))}u.isMDXComponent=!0}}]);