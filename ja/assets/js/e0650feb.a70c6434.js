"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5118],{9613:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(9496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),i=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=i(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=i(r),f=o,d=s["".concat(l,".").concat(f)]||s[f]||m[f]||a;return r?n.createElement(d,c(c({ref:t},u),{},{components:r})):n.createElement(d,c({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=s;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,c[1]=p;for(var i=2;i<a;i++)c[i]=r[i];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},9648:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>f,frontMatter:()=>p,metadata:()=>i,toc:()=>m});var n=r(2182),o=r(9028),a=(r(9496),r(9613)),c=["components"],p={title:"\u30d5\u30e9\u30c3\u30c8\u306a node_modules \u304c\u552f\u4e00\u306e\u65b9\u6cd5\u3067\u306f\u3042\u308a\u307e\u305b\u3093",author:"Zoltan Kochan",authorURL:"http://twitter.com/zoltankochan",authorImageURL:"https://gravatar.com/avatar/1f59f040fb37d5799e3879fa678c2373?s=48"},l=void 0,i={permalink:"/ja/blog/2020/05/27/flat-node-modules-is-not-the-only-way",editUrl:"https://crowdin.com/project/pnpm/ja",source:"@site/i18n/ja/docusaurus-plugin-content-blog/2020-05-27-flat-node-modules-is-not-the-only-way.md",title:"\u30d5\u30e9\u30c3\u30c8\u306a node_modules \u304c\u552f\u4e00\u306e\u65b9\u6cd5\u3067\u306f\u3042\u308a\u307e\u305b\u3093",description:"pnpm \u306e\u65b0\u898f\u30e6\u30fc\u30b6\u30fc\u304b\u3089\u3001pnpm \u304c\u751f\u6210\u3059\u308b node_modules \u306e\u5947\u5999\u306a\u69cb\u9020\u306b\u3064\u3044\u3066\u3088\u304f\u805e\u304b\u308c\u307e\u3059\u3002 \u306a\u305c\u5e73\u5766\u306a\u69cb\u9020\u3092\u4f7f\u7528\u3057\u306a\u3044\u306e\u3067\u3057\u3087\u3046\u304b\u3002 \u4f9d\u5b58\u306e\u3055\u3089\u306b\u305d\u306e\u4f9d\u5b58\u306f\u3069\u3053\u306b\u3042\u308b\u306e\u3067\u3057\u3087\u3046\u304b\u3002",date:"2020-05-27T00:00:00.000Z",formattedDate:"2020\u5e745\u670827\u65e5",tags:[],readingTime:5.5,truncated:!0,authors:[{name:"Zoltan Kochan",url:"http://twitter.com/zoltankochan",imageURL:"https://gravatar.com/avatar/1f59f040fb37d5799e3879fa678c2373?s=48"}],frontMatter:{title:"\u30d5\u30e9\u30c3\u30c8\u306a node_modules \u304c\u552f\u4e00\u306e\u65b9\u6cd5\u3067\u306f\u3042\u308a\u307e\u305b\u3093",author:"Zoltan Kochan",authorURL:"http://twitter.com/zoltankochan",authorImageURL:"https://gravatar.com/avatar/1f59f040fb37d5799e3879fa678c2373?s=48"},prevItem:{title:"pnpm \u3067\u306e\u30ce\u30fc\u30c9\u30e2\u30b8\u30e5\u30fc\u30eb\u306b\u95a2\u3059\u308b\u30aa\u30d7\u30b7\u30e7\u30f3\u8a2d\u5b9a",permalink:"/ja/blog/2020/10/17/node-modules-configuration-options-with-pnpm"}},u={authorsImageUrls:[void 0]},m=[],s={toc:m};function f(e){var t=e.components,r=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"pnpm \u306e\u65b0\u898f\u30e6\u30fc\u30b6\u30fc\u304b\u3089\u3001pnpm \u304c\u751f\u6210\u3059\u308b ",(0,a.kt)("inlineCode",{parentName:"p"},"node_modules")," \u306e\u5947\u5999\u306a\u69cb\u9020\u306b\u3064\u3044\u3066\u3088\u304f\u805e\u304b\u308c\u307e\u3059\u3002 \u306a\u305c\u5e73\u5766\u306a\u69cb\u9020\u3092\u4f7f\u7528\u3057\u306a\u3044\u306e\u3067\u3057\u3087\u3046\u304b\u3002 \u4f9d\u5b58\u306e\u3055\u3089\u306b\u305d\u306e\u4f9d\u5b58\u306f\u3069\u3053\u306b\u3042\u308b\u306e\u3067\u3057\u3087\u3046\u304b\u3002"))}f.isMDXComponent=!0}}]);