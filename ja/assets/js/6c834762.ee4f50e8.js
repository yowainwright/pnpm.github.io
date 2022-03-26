"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9406],{9613:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var a=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),c=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},m=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),d=c(n),u=r,k=d["".concat(o,".").concat(u)]||d[u]||s[u]||l;return n?a.createElement(k,p(p({ref:t},m),{},{components:n})):a.createElement(k,p({ref:t},m))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,p=new Array(l);p[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,p[1]=i;for(var c=2;c<l;c++)p[c]=n[c];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7684:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var a=n(2182),r=n(9028),l=(n(9496),n(9613)),p=["components"],i={id:"filtering",title:"\u30d5\u30a3\u30eb\u30bf\u30ea\u30f3\u30b0"},o=void 0,c={unversionedId:"filtering",id:"version-5.x/filtering",title:"\u30d5\u30a3\u30eb\u30bf\u30ea\u30f3\u30b0",description:"\u8ffd\u52a0\u3055\u308c\u305f\u30d0\u30fc\u30b8\u30e7\u30f3\uff1av2.13.0",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-5.x/filtering.md",sourceDirName:".",slug:"/filtering",permalink:"/ja/5.x/filtering",editUrl:"https://crowdin.com/project/pnpm/ja",tags:[],version:"5.x",frontMatter:{id:"filtering",title:"\u30d5\u30a3\u30eb\u30bf\u30ea\u30f3\u30b0"},sidebar:"version-5.x/docs",previous:{title:"\u8a2d\u5b9a",permalink:"/ja/5.x/configuring"},next:{title:"pnpm add <pkg>",permalink:"/ja/5.x/cli/add"}},m={},s=[{value:"--filter &lt;package_name&gt;",id:"--filter-package_name",level:2},{value:"--filter &lt;package_name&gt;...",id:"--filter-package_name-1",level:2},{value:"--filter &lt;package_name&gt;^...",id:"--filter-package_name-2",level:2},{value:"--filter ...&lt;package_name&gt;",id:"--filter-package_name-3",level:2},{value:"--filter &quot;...^&lt;package_name&gt;&quot;",id:"--filter-package_name-4",level:2},{value:"--filter ./&lt;directory&gt;",id:"--filter-directory",level:2},{value:"--filter {&lt;directory&gt;}",id:"--filter-directory-1",level:2},{value:"--filter &quot;<since>&quot;",id:"--filter-since",level:2},{value:"\u8907\u6570\u306e\u30d5\u30a3\u30eb\u30bf\u30fc\u3092\u6307\u5b9a\u3059\u308b",id:"\u8907\u6570\u306e\u30d5\u30a3\u30eb\u30bf\u30fc\u3092\u6307\u5b9a\u3059\u308b",level:2},{value:"\u9664\u5916",id:"\u9664\u5916",level:2},{value:"--test-pattern &lt;glob&gt;",id:"--test-pattern-glob",level:2}],d={toc:s};function u(e){var t=e.components,n=(0,r.Z)(e,p);return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u8ffd\u52a0\u3055\u308c\u305f\u30d0\u30fc\u30b8\u30e7\u30f3\uff1av2.13.0"),(0,l.kt)("p",null,"\u30d5\u30a3\u30eb\u30bf\u30ea\u30f3\u30b0\u3092\u4f7f\u7528\u3059\u308b\u3068\u3001\u30b3\u30de\u30f3\u30c9\u3092\u306e\u7279\u5b9a\u306e\u4e00\u90e8\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u306b\u5236\u9650\u3067\u304d\u307e\u3059\u3002"),(0,l.kt)("p",null,"pnpm \u306f\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u540d\u524d\u307e\u305f\u306f\u30ea\u30ec\u30fc\u30b7\u30e7\u30f3\u3067\u9078\u629e\u3059\u308b\u305f\u3081\u306e\u8c4a\u5bcc\u306a\u30bb\u30ec\u30af\u30bf\u69cb\u6587\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u3059\u3002"),(0,l.kt)("p",null,"\u30bb\u30ec\u30af\u30bf\u30fc\u306f ",(0,l.kt)("inlineCode",{parentName:"p"},"--filter")," \u30d5\u30e9\u30b0\u3067\u6307\u5b9a\u3067\u304d\u307e\u3059:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm <command> --filter <package_selector>\n")),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},(0,l.kt)("a",{parentName:"p",href:"https://medium.com/pnpm/pnpm-vs-lerna-filtering-in-a-multi-package-repository-1f68bc644d6a"},"Lerna \u306e\u30d5\u30a3\u30eb\u30bf\u30ea\u30f3\u30b0\u3068 pnpm \u306e\u30d5\u30a3\u30eb\u30bf\u30ea\u30f3\u30b0\u3092\u6bd4\u8f03\u3059\u308b\u8a18\u4e8b (\u82f1\u8a9e)")))),(0,l.kt)("h2",{id:"--filter-package_name"},"--filter ","<","package_name>"),(0,l.kt)("p",null,"\u8ffd\u52a0\u3055\u308c\u305f\u30d0\u30fc\u30b8\u30e7\u30f3\uff1av2.13.0"),(0,l.kt)("p",null,"\u5b8c\u5168\u306b\u4e00\u81f4\u3059\u308b\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u9078\u629e\u3059\u308b\u306b\u306f\u3001\u305d\u306e\u540d\u524d (",(0,l.kt)("inlineCode",{parentName:"p"},"@scope/pkg"),") \u3092\u6307\u5b9a\u3057\u3066\u304f\u3060\u3055\u3044\u3002 \u3082\u3057\u304f\u306f\u3001\u30d1\u30bf\u30fc\u30f3\u3092\u4f7f\u7528\u3057\u3066\u30d1\u30c3\u30b1\u30fc\u30b8\u3059\u3079\u3066\u3092\u9078\u629e\u3067\u304d\u307e\u3059 (",(0,l.kt)("inlineCode",{parentName:"p"},"@scope/*"),") \u3002"),(0,l.kt)("p",null,"\u4f8b:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm test --filter "@babel/core"\npnpm test --filter "@babel/*"\npnpm test --filter "*core"\n')),(0,l.kt)("h2",{id:"--filter-package_name-1"},"--filter ","<","package_name>..."),(0,l.kt)("p",null,"\u8ffd\u52a0\u3055\u308c\u305f\u30d0\u30fc\u30b8\u30e7\u30f3\uff1av2.13.0"),(0,l.kt)("p",null,"\u30d1\u30c3\u30b1\u30fc\u30b8\u3068\u305d\u306e (\u76f4\u63a5\u304a\u3088\u3073\u9593\u63a5\u306e) \u4f9d\u5b58\u95a2\u4fc2\u3092\u9078\u629e\u3059\u308b\u306b\u306f\u3001\u30d1\u30c3\u30b1\u30fc\u30b8\u540d\u306e\u672b\u5c3e\u306b\u4e09\u70b9\u30ea\u30fc\u30c0\u30fc\u3092\u4ed8\u3051\u307e\u3059\uff1a ",(0,l.kt)("inlineCode",{parentName:"p"},"<package_name>..."),"\u3002 \u4f8b\u3048\u3070\u6b21\u306e\u30b3\u30de\u30f3\u30c9\u306f\u3001 ",(0,l.kt)("inlineCode",{parentName:"p"},"foo")," \u3068\u305d\u306e\u3059\u3079\u3066\u306e\u4f9d\u5b58\u95a2\u4fc2\u3092\u30c6\u30b9\u30c8\u3057\u307e\u3059\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm test --filter foo...\n")),(0,l.kt)("p",null,"\u30d1\u30bf\u30fc\u30f3\u3092\u4f7f\u7528\u3057\u3066\u30eb\u30fc\u30c8\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u6307\u5b9a\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm test --filter "@babel/preset-*..."\n')),(0,l.kt)("h2",{id:"--filter-package_name-2"},"--filter ","<","package_name>^..."),(0,l.kt)("p",null,"\u8ffd\u52a0\u3055\u308c\u305f\u30d0\u30fc\u30b8\u30e7\u30f3\uff1av4.4.0"),(0,l.kt)("p",null,"\u30eb\u30fc\u30c8\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u9664\u3044\u305f\u3001\u30d1\u30c3\u30b1\u30fc\u30b8\u306e (\u76f4\u63a5\u3068\u9593\u63a5\u306e\u4e21\u65b9\u306e) \u4f9d\u5b58\u95a2\u4fc2\u306e\u307f\u3092\u9078\u629e\u3059\u308b\u306b\u306f\u3001\u30d1\u30c3\u30b1\u30fc\u30b8\u540d\u306e\u5f8c\u308d\u3001\u524d\u8ff0\u306e\u4e09\u70b9\u30ea\u30fc\u30c0\u306e\u524d\u306b\u30ad\u30e3\u30ec\u30c3\u30c8\u3092\u4ed8\u4e0e\u3057\u307e\u3059\u3002 \u4f8b\u3048\u3070\u6b21\u306e\u30b3\u30de\u30f3\u30c9\u306f\u3001 ",(0,l.kt)("inlineCode",{parentName:"p"},"foo")," \u81ea\u8eab\u3092\u9664\u3044\u305f\u3059\u3079\u3066\u306e ",(0,l.kt)("inlineCode",{parentName:"p"},"foo")," \u4f9d\u5b58\u95a2\u4fc2\u306b\u3064\u3044\u3066\u30c6\u30b9\u30c8\u3092\u5b9f\u884c\u3057\u307e\u3059\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm test --filter "foo^..."\n')),(0,l.kt)("h2",{id:"--filter-package_name-3"},"--filter ...","<","package_name>"),(0,l.kt)("p",null,"\u8ffd\u52a0\u3055\u308c\u305f\u30d0\u30fc\u30b8\u30e7\u30f3\uff1av2.14.0"),(0,l.kt)("p",null,"\u30d1\u30c3\u30b1\u30fc\u30b8\u3068\u305d\u306e (\u76f4\u63a5\u304a\u3088\u3073\u9593\u63a5\u306e) \u4f9d\u5b58\u3092\u9078\u629e\u3059\u308b\u306b\u306f\u3001\u30d1\u30c3\u30b1\u30fc\u30b8\u540d\u306e\u524d\u306b\u4e09\u70b9\u30ea\u30fc\u30c0\u30fc\u3092\u4ed8\u4e0e\u3057\u307e\u3059\u3002 ",(0,l.kt)("inlineCode",{parentName:"p"},"...<package_name>"),"\u3002 \u4f8b\u3048\u3070\u6b21\u306e\u30b3\u30de\u30f3\u30c9\u306f\u3001 ",(0,l.kt)("inlineCode",{parentName:"p"},"foo")," \u3068\u305d\u308c\u306b\u4f9d\u5b58\u3059\u308b\u3059\u3079\u3066\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u30c6\u30b9\u30c8\u3092\u5b9f\u884c\u3057\u307e\u3059\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm test --filter ...foo\n")),(0,l.kt)("h2",{id:"--filter-package_name-4"},'--filter "...^',"<",'package_name>"'),(0,l.kt)("p",null,"\u8ffd\u52a0\u3055\u308c\u305f\u30d0\u30fc\u30b8\u30e7\u30f3\uff1av4.4.0"),(0,l.kt)("p",null,"\u30d1\u30c3\u30b1\u30fc\u30b8\u306e (\u76f4\u63a5\u304a\u3088\u3073\u9593\u63a5\u306e) \u4f9d\u5b58\u306e\u307f\u3092\u9078\u629e\u3059\u308b\u306b\u306f\u3001\u30d1\u30c3\u30b1\u30fc\u30b8\u540d\u306e\u524d\u306b\u4e09\u70b9\u30ea\u30fc\u30c0\u30fc\u3068\u305d\u308c\u306b\u7d9a\u304f\u30ad\u30e3\u30ec\u30c3\u30c8\u3092\u4ed8\u3051\u307e\u3059\u3002 \u4f8b\u3048\u3070\u6b21\u306e\u30b3\u30de\u30f3\u30c9\u306f\u3001 ",(0,l.kt)("inlineCode",{parentName:"p"},"foo")," \u81ea\u8eab\u3092\u9664\u3044\u305f\u3059\u3079\u3066\u306e ",(0,l.kt)("inlineCode",{parentName:"p"},"foo")," \u306b\u4f9d\u5b58\u3059\u308b\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u30c6\u30b9\u30c8\u3092\u5b9f\u884c\u3057\u307e\u3059\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},'pnpm test --filter "...^foo"\n')),(0,l.kt)("h2",{id:"--filter-directory"},"--filter ./","<","directory>"),(0,l.kt)("p",null,"\u8ffd\u52a0\u3055\u308c\u305f\u30d0\u30fc\u30b8\u30e7\u30f3\uff1av2.15.0"),(0,l.kt)("p",null,"To only select packages under the specified directory, you may specify any absolute path, typically in POSIX format."),(0,l.kt)("h2",{id:"--filter-directory-1"},"--filter {","<","directory>}"),(0,l.kt)("p",null,"\u8ffd\u52a0\u3055\u308c\u305f\u30d0\u30fc\u30b8\u30e7\u30f3\uff1av4.7.0"),(0,l.kt)("p",null,"\u6307\u5b9a\u3057\u305f\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306e\u4e0b\u306b\u3042\u308b\u3059\u3079\u3066\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u542b\u3081\u307e\u3059\u3002"),(0,l.kt)("p",null,"\u3053\u308c\u306f\u3001\u4e09\u70b9\u30ea\u30fc\u30c0\u30fc\u304a\u3088\u3073\u30ad\u30e3\u30ec\u30c3\u30c8\u6f14\u7b97\u5b50\u3068\u3068\u3082\u306b\u4f7f\u7528\u3057\u3066\u3001\u4f9d\u5b58 / \u88ab\u4f9d\u5b58\u95a2\u4fc2\u3092\u6307\u5b9a\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm <cmd> --filter ...{<directory>}\npnpm <cmd> --filter {<directory>}...\npnpm <cmd> --filter ...{<directory>}...\n")),(0,l.kt)("p",null,"\u307e\u305f\u3001 ",(0,l.kt)("inlineCode",{parentName:"p"},"[<since>]")," \u3068\u7d44\u307f\u5408\u308f\u305b\u3066\u4f7f\u7528\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002 \u305f\u3068\u3048\u3070\u3001\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u5185\u306e\u5909\u66f4\u306e\u3042\u3063\u305f\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u307f\u3092\u3059\u3079\u3066\u9078\u629e\u3059\u308b\u306b\u306f\u3001\u6b21\u306e\u3088\u3046\u306b\u3057\u307e\u3059\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm <cmd> --filter "{packages}[origin/master]"\npnpm <cmd> --filter "...{packages}[origin/master]"\npnpm <cmd> --filter "{packages}[origin/master]..."\npnpm <cmd> --filter "...{packages}[origin/master]..."\n')),(0,l.kt)("p",null,"\u307e\u305f\u3001\u6307\u5b9a\u3055\u308c\u305f\u30d1\u30bf\u30fc\u30f3\u306b\u4e00\u81f4\u3059\u308b\u540d\u524d\u3092\u6301\u3064\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u304b\u3089\u3059\u3079\u3066\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u9078\u629e\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},'pnpm <cmd> --filter "@babel/*{components}"\npnpm <cmd> --filter "@babel/*{components}[origin/master]"\npnpm <cmd> --filter "...@babel/*{components}[origin/master]"\n')),(0,l.kt)("h2",{id:"--filter-since"},'--filter "',"[<","since>]",'"'),(0,l.kt)("p",null,"\u8ffd\u52a0\u3055\u308c\u305f\u30d0\u30fc\u30b8\u30e7\u30f3\uff1av4.6.0"),(0,l.kt)("p",null,"\u6307\u5b9a\u3055\u308c\u305f\u30b3\u30df\u30c3\u30c8 / \u30d6\u30e9\u30f3\u30c1\u4ee5\u964d\u306b\u5909\u66f4\u3055\u308c\u305f\u3059\u3079\u3066\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u9078\u629e\u3057\u307e\u3059\u3002 \u4f9d\u5b58 / \u88ab\u4f9d\u5b58\u95a2\u4fc2\u3092\u542b\u3081\u308b\u305f\u3081\u306b\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"...")," \u63a5\u982d\u8f9e / \u63a5\u5c3e\u8f9e\u3092\u4ed8\u3051\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,l.kt)("p",null,"\u4f8b\u3048\u3070\u3001\u6b21\u306e\u30b3\u30de\u30f3\u30c9\u306f\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"master")," \u4ee5\u964d\u306e\u3059\u3079\u3066\u306e\u5909\u66f4\u3055\u308c\u305f\u30d1\u30c3\u30b1\u30fc\u30b8\u3068\u305d\u306e\u4f9d\u5b58\u30d1\u30c3\u30b1\u30fc\u30b8\u3067\u30c6\u30b9\u30c8\u3092\u5b9f\u884c\u3057\u307e\u3059\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm test --filter "...[origin/master]"\n')),(0,l.kt)("h2",{id:"\u8907\u6570\u306e\u30d5\u30a3\u30eb\u30bf\u30fc\u3092\u6307\u5b9a\u3059\u308b"},"\u8907\u6570\u306e\u30d5\u30a3\u30eb\u30bf\u30fc\u3092\u6307\u5b9a\u3059\u308b"),(0,l.kt)("p",null,"\u30d5\u30a3\u30eb\u30bf\u30ea\u30f3\u30b0\u3092\u3059\u308b\u969b\u306f\u3001\u5c11\u306a\u304f\u3068\u3082 1 \u3064\u306e\u30d5\u30a3\u30eb\u30bf\u30fc\u306b\u4e00\u81f4\u3059\u308b\u3059\u3079\u3066\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u304c\u53d6\u5f97\u3055\u308c\u307e\u3059\u3002 \u5fc5\u8981\u306a\u6570\u3060\u3051\u30d5\u30a3\u30eb\u30bf\u30fc\u3092\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm test --filter ...foo --filter bar --filter baz...\n")),(0,l.kt)("h2",{id:"\u9664\u5916"},"\u9664\u5916"),(0,l.kt)("p",null,"Added in: v5.8.0"),(0,l.kt)("p",null,'\u3044\u305a\u308c\u306e\u30d5\u30a3\u30eb\u30bf\u30bb\u30ec\u30af\u30bf\u3082\u3001\u5148\u982d\u306b "!" \u304c\u3042\u308b\u5834\u5408\u306f\u9664\u5916\u6f14\u7b97\u5b50\u3068\u3057\u3066\u6a5f\u80fd\u3057\u307e\u3059\u3002 zsh\uff08\u304a\u3088\u3073\u304a\u305d\u3089\u304f\u4ed6\u306e\u30b7\u30a7\u30eb\uff09\u3067\u306f\u3001"!" \u306f\u30a8\u30b9\u30b1\u30fc\u30d7\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\uff1a ',(0,l.kt)("inlineCode",{parentName:"p"},"\\!"),"\u3002"),(0,l.kt)("p",null,"\u6b21\u306e\u4f8b\u306f\u3001 ",(0,l.kt)("inlineCode",{parentName:"p"},"foo")," \u3092\u9664\u304f\u3059\u3079\u3066\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3067\u30b3\u30de\u30f3\u30c9\u304c\u5b9f\u884c\u3055\u308c\u307e\u3059\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm <cmd> --filter=!foo\n")),(0,l.kt)("p",null,"\u305d\u3057\u3066\u3001\u6b21\u306e\u4f8b\u306f ",(0,l.kt)("inlineCode",{parentName:"p"},"lib")," \u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306e\u4e0b\u306b\u306a\u3044\u3059\u3079\u3066\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3067\u30b3\u30de\u30f3\u30c9\u3092\u5b9f\u884c\u3057\u307e\u3059:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm <cmd> --filter=!./lib\n")),(0,l.kt)("h2",{id:"--test-pattern-glob"},"--test-pattern ","<","glob>"),(0,l.kt)("p",null,"Added in: v5.14.0"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"test-pattern")," allows detecting whether the modified files are related to tests. If they are, the dependent packages of such modified packages are not included."),(0,l.kt)("p",null,'This option is useful with the "changed since" filter. For instance, the next command will run tests in all changed packages, and if the changes are in the source code of the package, tests will run in the dependent packages as well:'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm --filter="...[origin/master]" --test-pattern="test/*" test\n')))}u.isMDXComponent=!0}}]);