"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1161],{9613:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>c});var a=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),m=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=m(e.components);return a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=m(n),c=r,k=d["".concat(o,".").concat(c)]||d[c]||u[c]||l;return n?a.createElement(k,p(p({ref:t},s),{},{components:n})):a.createElement(k,p({ref:t},s))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,p=new Array(l);p[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,p[1]=i;for(var m=2;m<l;m++)p[m]=n[m];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9595:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>m,toc:()=>u});var a=n(2182),r=n(9028),l=(n(9496),n(9613)),p=["components"],i={id:"installation",title:"\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"},o=void 0,m={unversionedId:"installation",id:"version-7.x/installation",title:"\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",description:"\u30b9\u30bf\u30f3\u30c9\u30a2\u30ed\u30f3\u30b9\u30af\u30ea\u30d7\u30c8\u3092\u4f7f\u7528",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-7.x/installation.md",sourceDirName:".",slug:"/installation",permalink:"/ja/7.x/installation",editUrl:"https://crowdin.com/project/pnpm/ja",tags:[],version:"7.x",frontMatter:{id:"installation",title:"\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"},sidebar:"version-7.x/docs",previous:{title:"\u30e2\u30c1\u30d9\u30fc\u30b7\u30e7\u30f3",permalink:"/ja/7.x/motivation"},next:{title:"pnpm CLI",permalink:"/ja/7.x/pnpm-cli"}},s={},u=[{value:"\u30b9\u30bf\u30f3\u30c9\u30a2\u30ed\u30f3\u30b9\u30af\u30ea\u30d7\u30c8\u3092\u4f7f\u7528",id:"\u30b9\u30bf\u30f3\u30c9\u30a2\u30ed\u30f3\u30b9\u30af\u30ea\u30d7\u30c8\u3092\u4f7f\u7528",level:2},{value:"Corepack\u306e\u4f7f\u7528",id:"corepack\u306e\u4f7f\u7528",level:2},{value:"npm \u3092\u4f7f\u7528",id:"npm-\u3092\u4f7f\u7528",level:2},{value:"Homebrew \u3092\u4f7f\u7528",id:"homebrew-\u3092\u4f7f\u7528",level:2},{value:"Scoop \u3092\u4f7f\u7528",id:"scoop-\u3092\u4f7f\u7528",level:2},{value:"\u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9",id:"\u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9",level:2},{value:"\u4e92\u63db\u6027",id:"\u4e92\u63db\u6027",level:2},{value:"\u30c8\u30e9\u30d6\u30eb\u30b7\u30e5\u30fc\u30c6\u30a3\u30f3\u30b0",id:"\u30c8\u30e9\u30d6\u30eb\u30b7\u30e5\u30fc\u30c6\u30a3\u30f3\u30b0",level:2},{value:"pnpm\u3092\u30a2\u30f3\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b",id:"pnpm\u3092\u30a2\u30f3\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b",level:2}],d={toc:u};function c(e){var t=e.components,n=(0,r.Z)(e,p);return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u30b9\u30bf\u30f3\u30c9\u30a2\u30ed\u30f3\u30b9\u30af\u30ea\u30d7\u30c8\u3092\u4f7f\u7528"},"\u30b9\u30bf\u30f3\u30c9\u30a2\u30ed\u30f3\u30b9\u30af\u30ea\u30d7\u30c8\u3092\u4f7f\u7528"),(0,l.kt)("p",null,"POSIX\u30b7\u30b9\u30c6\u30e0\u3067\u306f\u3001Node.js\u304c\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u3066\u3044\u306a\u3044\u5834\u5408\u3067\u3082\u3001\u6b21\u306e\u30b9\u30af\u30ea\u30d7\u30c8\u3092\u4f7f\u7528\u3057\u3066pnpm\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3067\u304d\u307e\u3059\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"curl -fsSL https://get.pnpm.io/install.sh | PNPM_VERSION=7.0.0-beta.2 sh -\n")),(0,l.kt)("p",null,"curl\u304c\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u3066\u3044\u306a\u3044\u5834\u5408\u306f\u3001wget\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"wget -qO- https://get.pnpm.io/install.sh | PNPM_VERSION=7.0.0-beta.2 sh -\n")),(0,l.kt)("p",null,"Windows (PowerShell) \u306e\u5834\u5408\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},"$env:PNPM_VERSION='7.0.0-beta.2' ; iwr https://get.pnpm.io/install.ps1 -useb | iex\n")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/ja/7.x/cli/env"},"pnpm env")," \u30b3\u30de\u30f3\u30c9\u3092\u4f7f\u7528\u3057\u3066 Node.js \u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002"),(0,l.kt)("h2",{id:"corepack\u306e\u4f7f\u7528"},"Corepack\u306e\u4f7f\u7528"),(0,l.kt)("p",null,"Node.js\u3067\u306fv16.13\u4ee5\u964d\u3001\u30d1\u30c3\u30b1\u30fc\u30b8\u30de\u30cd\u30fc\u30b8\u30e3\u30fc\u3092\u7ba1\u7406\u3059\u308b\u305f\u3081\u306b ",(0,l.kt)("a",{parentName:"p",href:"https://nodejs.org/api/corepack.html"},"Corepack"),"\u306e\u63d0\u4f9b\u3092\u59cb\u3081\u307e\u3057\u305f\u3002 \u3053\u308c\u306f\u5b9f\u9a13\u7684\u306a\u6a5f\u80fd\u3067\u3042\u308b\u305f\u3081\u3001\u6b21\u306e\u30b3\u30de\u30f3\u30c9\u3092\u5b9f\u884c\u3057\u3066\u6709\u52b9\u306b\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"corepack enable\n")),(0,l.kt)("p",null,"\u3053\u308c\u306b\u3088\u308a\u3001\u30b7\u30b9\u30c6\u30e0\u306bpnpm\u304c\u81ea\u52d5\u7684\u306b\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u307e\u3059\u3002 \u305f\u3060\u3057\u3001\u304a\u305d\u3089\u304fpnpm\u306e\u6700\u65b0\u30d0\u30fc\u30b8\u30e7\u30f3\u3067\u306f\u306a\u3044\u3067\u3057\u3087\u3046\u3002 \u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9\u3059\u308b\u306b\u306f\u3001\u6700\u65b0\u306epnpm\u30d0\u30fc\u30b8\u30e7\u30f3\u3092\u78ba\u8a8d\u3057\u3066\u4ee5\u4e0b\u3092\u5b9f\u884c\u3057\u307e\u3059\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"corepack prepare pnpm@7.0.0-beta.2 --activate\n")),(0,l.kt)("h2",{id:"npm-\u3092\u4f7f\u7528"},"npm \u3092\u4f7f\u7528"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"npm install -g pnpm@next-7\n")),(0,l.kt)("h2",{id:"homebrew-\u3092\u4f7f\u7528"},"Homebrew \u3092\u4f7f\u7528"),(0,l.kt)("p",null,"\u30d1\u30c3\u30b1\u30fc\u30b8\u30de\u30cd\u30fc\u30b8\u30e3\u30fc\u304c\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u3066\u3044\u308b\u5834\u5408\u306f\u3001\u6b21\u306e\u30b3\u30de\u30f3\u30c9\u3092\u4f7f\u7528\u3057\u3066pnpm\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3067\u304d\u307e\u3059\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"brew install pnpm\n")),(0,l.kt)("h2",{id:"scoop-\u3092\u4f7f\u7528"},"Scoop \u3092\u4f7f\u7528"),(0,l.kt)("p",null,"Scoop \u304c\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u3066\u3044\u308b\u5834\u5408\u306f\u3001\u6b21\u306e\u30b3\u30de\u30f3\u30c9\u3092\u4f7f\u7528\u3057\u3066pnpm\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3067\u304d\u307e\u3059\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"scoop install nodejs-lts pnpm\n")),(0,l.kt)("h2",{id:"\u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9"},"\u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9"),(0,l.kt)("p",null,"Once you have installed pnpm, there is no need to use other package managers to update it. You can upgrade pnpm using itself, like so:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm add -g pnpm\n")),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Do you wanna use pnpm on CI servers? See: ",(0,l.kt)("a",{parentName:"p",href:"/ja/7.x/continuous-integration"},"Continuous Integration"),"."))),(0,l.kt)("h2",{id:"\u4e92\u63db\u6027"},"\u4e92\u63db\u6027"),(0,l.kt)("p",null,"Here is a list of past pnpm versions with respective Node.js version support."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Node.js"),(0,l.kt)("th",{parentName:"tr",align:null},"pnpm 4"),(0,l.kt)("th",{parentName:"tr",align:null},"pnpm 5"),(0,l.kt)("th",{parentName:"tr",align:null},"pnpm 6"),(0,l.kt)("th",{parentName:"tr",align:null},"pnpm 7"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Node.js 10"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Node.js 12"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Node.js 14"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Node.js 16"),(0,l.kt)("td",{parentName:"tr",align:null},"?\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"?\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Node.js 18"),(0,l.kt)("td",{parentName:"tr",align:null},"?\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"?\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")))),(0,l.kt)("h2",{id:"\u30c8\u30e9\u30d6\u30eb\u30b7\u30e5\u30fc\u30c6\u30a3\u30f3\u30b0"},"\u30c8\u30e9\u30d6\u30eb\u30b7\u30e5\u30fc\u30c6\u30a3\u30f3\u30b0"),(0,l.kt)("p",null,"pnpm \u304c\u58ca\u308c\u3066\u3044\u3066\u3001\u518d\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u3066\u3082\u4fee\u6b63\u3067\u304d\u306a\u3044\u5834\u5408\u306f\u3001PATH \u304b\u3089\u624b\u52d5\u3067\u524a\u9664\u3059\u308b\u5fc5\u8981\u304c\u3042\u308b\u304b\u3082\u3057\u308c\u307e\u305b\u3093\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"pnpm install")," \u3092\u5b9f\u884c\u3057\u3066\u3044\u308b\u3068\u304d\u306b\u3001\u6b21\u306e\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3057\u305f\u3068\u3057\u307e\u3057\u3087\u3046\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"C:\\src>pnpm install\ninternal/modules/cjs/loader.js:883\n  throw err;\n  ^\n\n\n\nError: Cannot find module 'C:\\Users\\Bence\\AppData\\Roaming\\npm\\pnpm-global\\4\\node_modules\\pnpm\\bin\\pnpm.js'\n\u2190[90m    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:880:15)\u2190[39m\n\u2190[90m    at Function.Module._load (internal/modules/cjs/loader.js:725:27)\u2190[39m\n\u2190[90m    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:72:12)\u2190[39m\n\u2190[90m    at internal/main/run_main_module.js:17:47\u2190[39m {\n  code: \u2190[32m'MODULE_NOT_FOUND'\u2190[39m,\n  requireStack: []\n}\n")),(0,l.kt)("p",null,"\u307e\u305a\u3001 ",(0,l.kt)("inlineCode",{parentName:"p"},"which pnpm")," \u3092\u5b9f\u884c\u3057\u3066\u3001pnpm \u304c\u3069\u3053\u306b\u3042\u308b\u304b\u63a2\u3057\u3066\u304f\u3060\u3055\u3044\u3002 Windows \u3092\u4f7f\u7528\u3057\u3066\u3044\u308b\u5834\u5408\u306f\u3001Git Bash \u3067\u4ee5\u4e0b\u306e\u30b3\u30de\u30f3\u30c9\u3092\u5b9f\u884c\u3057\u307e\u3059\u3002 \u4f8b\u3048\u3070\u6b21\u306e\u3088\u3046\u306b\u3001 pnpm \u30b3\u30de\u30f3\u30c9\u306e\u5834\u6240\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"$ which pnpm\n/c/Program Files/nodejs/pnpm\n")),(0,l.kt)("p",null,"\u3053\u308c\u3067\u3001 pnpm \u306e CLI \u304c\u3069\u3053\u306b\u3042\u308b\u304b\u304c\u5206\u304b\u308a\u307e\u3057\u305f\u3002\u305d\u306e\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u3092\u958b\u304d\u3001 pnpm \u95a2\u9023\u30d5\u30a1\u30a4\u30eb (",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm.cmd"),"\u3001 ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpx.cmd"),"\u3001 ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm")," \u306a\u3069) \u3092\u524a\u9664\u3057\u307e\u3059\u3002 \u5b8c\u4e86\u3057\u305f\u3089\u3001pnpm \u3092\u518d\u5ea6\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u3068\u3001\u671f\u5f85\u3069\u304a\u308a\u306b\u52d5\u4f5c\u3059\u308b\u306f\u305a\u3067\u3059\u3002"),(0,l.kt)("h2",{id:"pnpm\u3092\u30a2\u30f3\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b"},"pnpm\u3092\u30a2\u30f3\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b"),(0,l.kt)("p",null,"pnpm \u306e CLI \u3092\u30b7\u30b9\u30c6\u30e0\u304b\u3089\u30a2\u30f3\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u3066\u30c7\u30a3\u30b9\u30af\u306b\u3042\u308b\u95a2\u9023\u3057\u305f\u30d5\u30a1\u30a4\u30eb\u3092\u524a\u9664\u3059\u308b\u5fc5\u8981\u304c\u3042\u308b\u5834\u5408\u306f\u3001",(0,l.kt)("a",{parentName:"p",href:"/ja/7.x/uninstall"},"pnpm \u306e\u30a2\u30f3\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb")," \u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"))}c.isMDXComponent=!0}}]);