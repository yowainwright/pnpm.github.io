"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5258],{9613:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(9496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),i=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=i(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=i(r),f=o,d=s["".concat(l,".").concat(f)]||s[f]||m[f]||a;return r?n.createElement(d,c(c({ref:t},u),{},{components:r})):n.createElement(d,c({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=s;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,c[1]=p;for(var i=2;i<a;i++)c[i]=r[i];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},9545:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>f,frontMatter:()=>p,metadata:()=>i,toc:()=>m});var n=r(2182),o=r(9028),a=(r(9496),r(9613)),c=["components"],p={title:"pnpm\uc744 \uc0ac\uc6a9\ud55c \ub178\ub4dc \ubaa8\ub4c8 \uad6c\uc131 \uc635\uc158",author:"Zoltan Kochan",authorURL:"http://twitter.com/zoltankochan",authorImageURL:"https://gravatar.com/avatar/1f59f040fb37d5799e3879fa678c2373?s=48"},l=void 0,i={permalink:"/ko/blog/2020/10/17/node-modules-configuration-options-with-pnpm",editUrl:"https://crowdin.com/project/pnpm/ko",source:"@site/i18n/ko/docusaurus-plugin-content-blog/2020-10-17-node-modules-configuration-options-with-pnpm.md",title:"pnpm\uc744 \uc0ac\uc6a9\ud55c \ub178\ub4dc \ubaa8\ub4c8 \uad6c\uc131 \uc635\uc158",description:"nodemodules \ub514\ub809\ud1a0\ub9ac\ub97c \ub9cc\ub4dc\ub294 \ubc29\ubc95\uc5d0\ub294 \uc5ec\ub7ec \uac00\uc9c0\uac00 \uc788\uc2b5\ub2c8\ub2e4. \uc5ec\ub7ec\ubd84\uc758 \ubaa9\ud45c\ub294 \uac00\uc7a5 \uc5c4\uaca9\ud55c \uac83\uc744 \ub9cc\ub4dc\ub294 \uac83\uc774\uc9c0\ub9cc \uadf8\uac83\uc774 \uac00\ub2a5\ud558\uc9c0 \uc54a\ub2e4\uba74, \ub290\uc2a8\ud55c nodemodules\uc744 \ub9cc\ub4dc\ub294 \uc635\uc158\ub3c4 \uc788\uc2b5\ub2c8\ub2e4.",date:"2020-10-17T00:00:00.000Z",formattedDate:"2020\ub144 10\uc6d4 17\uc77c",tags:[],readingTime:3.78,truncated:!0,authors:[{name:"Zoltan Kochan",url:"http://twitter.com/zoltankochan",imageURL:"https://gravatar.com/avatar/1f59f040fb37d5799e3879fa678c2373?s=48"}],frontMatter:{title:"pnpm\uc744 \uc0ac\uc6a9\ud55c \ub178\ub4dc \ubaa8\ub4c8 \uad6c\uc131 \uc635\uc158",author:"Zoltan Kochan",authorURL:"http://twitter.com/zoltankochan",authorImageURL:"https://gravatar.com/avatar/1f59f040fb37d5799e3879fa678c2373?s=48"},prevItem:{title:"pnpm\uc758 2021\ub144",permalink:"/ko/blog/2021/12/29/yearly-update"},nextItem:{title:"\ud3c9\ud0c4\ud55c node_modules\uac00 \uc720\uc77c\ud55c \ubc29\ubc95\uc740 \uc544\ub2d9\ub2c8\ub2e4.",permalink:"/ko/blog/2020/05/27/flat-node-modules-is-not-the-only-way"}},u={authorsImageUrls:[void 0]},m=[],s={toc:m};function f(e){var t=e.components,r=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"node_modules \ub514\ub809\ud1a0\ub9ac\ub97c \ub9cc\ub4dc\ub294 \ubc29\ubc95\uc5d0\ub294 \uc5ec\ub7ec \uac00\uc9c0\uac00 \uc788\uc2b5\ub2c8\ub2e4. \uc5ec\ub7ec\ubd84\uc758 \ubaa9\ud45c\ub294 \uac00\uc7a5 \uc5c4\uaca9\ud55c \uac83\uc744 \ub9cc\ub4dc\ub294 \uac83\uc774\uc9c0\ub9cc \uadf8\uac83\uc774 \uac00\ub2a5\ud558\uc9c0 \uc54a\ub2e4\uba74, \ub290\uc2a8\ud55c node_modules\uc744 \ub9cc\ub4dc\ub294 \uc635\uc158\ub3c4 \uc788\uc2b5\ub2c8\ub2e4."))}f.isMDXComponent=!0}}]);