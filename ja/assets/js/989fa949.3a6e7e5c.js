"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2603],{9613:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>v});var r=n(9496);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),s=u(n),v=i,m=s["".concat(p,".").concat(v)]||s[v]||c[v]||o;return n?r.createElement(m,l(l({ref:t},d),{},{components:n})):r.createElement(m,l({ref:t},d))}));function v(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=s;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:i,l[1]=a;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},4766:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>v,frontMatter:()=>a,metadata:()=>u,toc:()=>c});var r=n(2182),i=n(9028),o=(n(9496),n(9613)),l=["components"],a={id:"audit",title:"pnpm audit"},p=void 0,u={unversionedId:"cli/audit",id:"version-5.x/cli/audit",title:"pnpm audit",description:"Added in: 4.3.0",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-5.x/cli/audit.md",sourceDirName:"cli",slug:"/cli/audit",permalink:"/ja/5.x/cli/audit",editUrl:"https://crowdin.com/project/pnpm/ja",tags:[],version:"5.x",frontMatter:{id:"audit",title:"pnpm audit"},sidebar:"version-5.x/docs",previous:{title:"pnpm install-test",permalink:"/ja/5.x/cli/install-test"},next:{title:"pnpm list",permalink:"/ja/5.x/cli/list"}},d={},c=[{value:"Options",id:"options",level:2},{value:"--audit-level &lt;severity&gt;",id:"--audit-level-severity",level:3},{value:"--json",id:"--json",level:3},{value:"--dev, -D",id:"--dev--d",level:3},{value:"--prod, -P",id:"--prod--p",level:3},{value:"--no-optional",id:"--no-optional",level:3}],s={toc:c};function v(e){var t=e.components,n=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Added in: 4.3.0"),(0,o.kt)("p",null,"\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u305f\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u65e2\u77e5\u306e\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u554f\u984c\u3092\u30c1\u30a7\u30c3\u30af\u3057\u307e\u3059\u3002"),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("h3",{id:"--audit-level-severity"},"--audit-level ","<","severity",">"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u30bf\u30a4\u30d7: ",(0,o.kt)("strong",{parentName:"li"},"low"),", ",(0,o.kt)("strong",{parentName:"li"},"moderate"),", ",(0,o.kt)("strong",{parentName:"li"},"high"),", ",(0,o.kt)("strong",{parentName:"li"},"critical")),(0,o.kt)("li",{parentName:"ul"},"\u30c7\u30d5\u30a9\u30eb\u30c8: ",(0,o.kt)("strong",{parentName:"li"},"low"))),(0,o.kt)("p",null,"Only print advisories with severity greater than or equal to ",(0,o.kt)("inlineCode",{parentName:"p"},"<severity>"),"."),(0,o.kt)("h3",{id:"--json"},"--json"),(0,o.kt)("p",null,"Output audit report in JSON format."),(0,o.kt)("h3",{id:"--dev--d"},"--dev, -D"),(0,o.kt)("p",null,"Only audit dev dependencies."),(0,o.kt)("h3",{id:"--prod--p"},"--prod, -P"),(0,o.kt)("p",null,"Only audit production dependencies."),(0,o.kt)("h3",{id:"--no-optional"},"--no-optional"),(0,o.kt)("p",null,"Don't audit ",(0,o.kt)("inlineCode",{parentName:"p"},"optionalDependencies"),"."))}v.isMDXComponent=!0}}]);