"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6619],{9613:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(9496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=l(r),f=a,d=m["".concat(i,".").concat(f)]||m[f]||s[f]||c;return r?n.createElement(d,o(o({ref:t},u),{},{components:r})):n.createElement(d,o({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,o=new Array(c);o[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var l=2;l<c;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3850:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>f,frontMatter:()=>p,metadata:()=>l,toc:()=>s});var n=r(2182),a=r(9028),c=(r(9496),r(9613)),o=["components"],p={id:"create",title:"pnpm create"},i=void 0,l={unversionedId:"cli/create",id:"cli/create",title:"pnpm create",description:"Create a project from a create-* starter kit.",source:"@site/i18n/tr/docusaurus-plugin-content-docs/current/cli/create.md",sourceDirName:"cli",slug:"/cli/create",permalink:"/tr/next/cli/create",editUrl:"https://crowdin.com/project/pnpm/tr",tags:[],version:"current",frontMatter:{id:"create",title:"pnpm create"},sidebar:"docs",previous:{title:"pnpm dlx",permalink:"/tr/next/cli/dlx"},next:{title:"pnpm start",permalink:"/tr/next/cli/start"}},u={},s=[{value:"Examples",id:"examples",level:2}],m={toc:s};function f(e){var t=e.components,r=(0,a.Z)(e,o);return(0,c.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"Create a project from a ",(0,c.kt)("inlineCode",{parentName:"p"},"create-*")," starter kit."),(0,c.kt)("h2",{id:"examples"},"Examples"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"pnpm create react-app my-app\n")))}f.isMDXComponent=!0}}]);