"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2140],{9613:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(9496);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),s=c(n),m=l,k=s["".concat(p,".").concat(m)]||s[m]||u[m]||a;return n?r.createElement(k,o(o({ref:t},d),{},{components:n})):r.createElement(k,o({ref:t},d))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,o=new Array(a);o[0]=s;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},6312:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var r=n(2182),l=n(9028),a=(n(9496),n(9613)),o=["components"],i={id:"outdated",title:"pnpm outdated"},p=void 0,c={unversionedId:"cli/outdated",id:"cli/outdated",title:"pnpm outdated",description:"\u68c0\u67e5\u8fc7\u671f\u7684  packages \u3002 \u6b64\u547d\u4ee4\u53ef\u4ee5\u901a\u8fc7\u63d0\u4f9b\u53c2\u6570\u6765\u9650\u5236\u4e3a\u5df2\u5b89\u88c5  packages \u7684\u4e00\u4e2a\u5b50\u96c6(\u652f\u6301  patterns )\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/cli/outdated.md",sourceDirName:"cli",slug:"/cli/outdated",permalink:"/zh/next/cli/outdated",editUrl:"https://crowdin.com/project/pnpm/zh-CN",tags:[],version:"current",frontMatter:{id:"outdated",title:"pnpm outdated"},sidebar:"docs",previous:{title:"pnpm list",permalink:"/zh/next/cli/list"},next:{title:"pnpm why",permalink:"/zh/next/cli/why"}},d={},u=[{value:"\u914d\u7f6e\u9879",id:"\u914d\u7f6e\u9879",level:2},{value:"--recursive, -r",id:"--recursive--r",level:3},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",level:3},{value:"--global",id:"--global",level:3},{value:"--long",id:"--long",level:3},{value:"--no-table",id:"--no-table",level:3},{value:"--compatible",id:"--compatible",level:3},{value:"--dev, -D",id:"--dev--d",level:3},{value:"--prod, -P",id:"--prod--p",level:3},{value:"--no-optional",id:"--no-optional",level:3}],s={toc:u};function m(e){var t=e.components,n=(0,l.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u68c0\u67e5\u8fc7\u671f\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"packages"),"\u3002 \u6b64\u547d\u4ee4\u53ef\u4ee5\u901a\u8fc7\u63d0\u4f9b\u53c2\u6570\u6765\u9650\u5236\u4e3a\u5df2\u5b89\u88c5 ",(0,a.kt)("inlineCode",{parentName:"p"},"packages"),"\u7684\u4e00\u4e2a\u5b50\u96c6(\u652f\u6301 ",(0,a.kt)("inlineCode",{parentName:"p"},"patterns"),")\u3002"),(0,a.kt)("p",null,"\u793a\u4f8b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm outdated\npnpm outdated "*gulp-*" @babel/core\n')),(0,a.kt)("h2",{id:"\u914d\u7f6e\u9879"},"\u914d\u7f6e\u9879"),(0,a.kt)("h3",{id:"--recursive--r"},"--recursive, -r"),(0,a.kt)("p",null,"\u5728\u53d1\u73b0\u7684\u5b50\u76ee\u5f55\u6240\u6709",(0,a.kt)("inlineCode",{parentName:"p"},"package")," \u4e2d\uff0c\u6216\u8005\u5982\u679c\u5728\u4e00\u4e2a\u5de5\u4f5c\u7a7a\u95f4\u6267\u884c\u65f6\uff0c\u5728\u5de5\u4f5c\u7a7a\u95f4\u7684\u6240\u6709",(0,a.kt)("inlineCode",{parentName:"p"},"package"),"\u4e2d\u68c0\u67e5\u8fc7\u671f\u4f9d\u8d56\u3002"),(0,a.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/zh/next/filtering"},"\u9605\u8bfb\u66f4\u591a\u6709\u5173 filter \u7684\u5185\u5bb9\u3002")),(0,a.kt)("h3",{id:"--global"},"--global"),(0,a.kt)("p",null,"\u5217\u51fa\u8fc7\u671f\u7684\u5168\u5c40",(0,a.kt)("inlineCode",{parentName:"p"},"package"),"\u3002"),(0,a.kt)("h3",{id:"--long"},"--long"),(0,a.kt)("p",null,"\u6253\u5370\u8be6\u7ec6\u4fe1\u606f\u3002"),(0,a.kt)("h3",{id:"--no-table"},"--no-table"),(0,a.kt)("p",null,"\u4ee5\u5217\u8868\u683c\u5f0f\u6253\u5370\u8fc7\u671f\u7684\u4f9d\u8d56\u9879\uff0c\u800c\u4e0d\u662f\u9ed8\u8ba4\u7684\u8868\u683c\u683c\u5f0f\u3002 \u9002\u5408\u5c0f\u7684\u63a7\u5236\u53f0\u3002"),(0,a.kt)("h3",{id:"--compatible"},"--compatible"),(0,a.kt)("p",null,"\u4ec5\u6253\u5370\u6ee1\u8db3 ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json "),"\u89c4\u8303\u7684\u7248\u672c\u3002"),(0,a.kt)("h3",{id:"--dev--d"},"--dev, -D"),(0,a.kt)("p",null,"\u4ec5\u68c0\u67e5 ",(0,a.kt)("inlineCode",{parentName:"p"},"devDependencies"),"\u3002"),(0,a.kt)("h3",{id:"--prod--p"},"--prod, -P"),(0,a.kt)("p",null,"\u4ec5\u68c0\u67e5",(0,a.kt)("inlineCode",{parentName:"p"},"dependencies"),"\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"optionalDependencies"),"\u3002"),(0,a.kt)("h3",{id:"--no-optional"},"--no-optional"),(0,a.kt)("p",null,"\u4e0d\u53bb\u68c0\u67e5 ",(0,a.kt)("inlineCode",{parentName:"p"},"optionalDependencies"),"\u3002"))}m.isMDXComponent=!0}}]);