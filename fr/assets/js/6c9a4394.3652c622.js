"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8387],{9613:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(9496);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var a=r.createContext({}),l=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(a.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,p=e.originalType,a=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=l(n),m=i,f=d["".concat(a,".").concat(m)]||d[m]||u[m]||p;return n?r.createElement(f,c(c({ref:t},s),{},{components:n})):r.createElement(f,c({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var p=n.length,c=new Array(p);c[0]=d;var o={};for(var a in t)hasOwnProperty.call(t,a)&&(o[a]=t[a]);o.originalType=e,o.mdxType="string"==typeof e?e:i,c[1]=o;for(var l=2;l<p;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7142:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=n(2182),i=n(9028),p=(n(9496),n(9613)),c=["components"],o={id:"scripts",title:"Scripts"},a=void 0,l={unversionedId:"scripts",id:"scripts",title:"Scripts",description:"Comment pnpm g\xe8re le champ scripts du package.json.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/scripts.md",sourceDirName:".",slug:"/scripts",permalink:"/fr/next/scripts",editUrl:"https://crowdin.com/project/pnpm/fr",tags:[],version:"current",frontMatter:{id:"scripts",title:"Scripts"},sidebar:"docs",previous:{title:"Filtrage",permalink:"/fr/next/filtering"},next:{title:"pnpm add <pkg>",permalink:"/fr/next/cli/add"}},s={},u=[{value:"Scripts du cycle de vie",id:"scripts-du-cycle-de-vie",level:2},{value:"<code>pnpm:devPreinstall</code>",id:"pnpmdevpreinstall",level:3}],d={toc:u};function m(e){var t=e.components,n=(0,i.Z)(e,c);return(0,p.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"Comment pnpm g\xe8re le champ ",(0,p.kt)("inlineCode",{parentName:"p"},"scripts")," du ",(0,p.kt)("inlineCode",{parentName:"p"},"package.json"),"."),(0,p.kt)("h2",{id:"scripts-du-cycle-de-vie"},"Scripts du cycle de vie"),(0,p.kt)("h3",{id:"pnpmdevpreinstall"},(0,p.kt)("inlineCode",{parentName:"h3"},"pnpm:devPreinstall")),(0,p.kt)("p",null,"Fonctionne uniquement sur ",(0,p.kt)("inlineCode",{parentName:"p"},"pnpm install")," local."),(0,p.kt)("p",null,"S'ex\xe9cute avant l'installation de toute d\xe9pendance."),(0,p.kt)("p",null,"Ce script est ex\xe9cut\xe9 uniquement lorsqu'il est d\xe9fini dans le ",(0,p.kt)("inlineCode",{parentName:"p"},"package.json")," du projet racine."))}m.isMDXComponent=!0}}]);