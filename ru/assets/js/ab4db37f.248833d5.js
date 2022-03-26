"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[794],{9613:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>s});var r=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),m=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=m(e.components);return r.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,p=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=m(n),s=a,k=d["".concat(o,".").concat(s)]||d[s]||u[s]||p;return n?r.createElement(k,l(l({ref:t},c),{},{components:n})):r.createElement(k,l({ref:t},c))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=n.length,l=new Array(p);l[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var m=2;m<p;m++)l[m]=n[m];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6955:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>m,toc:()=>u});var r=n(2182),a=n(9028),p=(n(9496),n(9613)),l=["components"],i={id:"pnpm-cli",title:"pnpm CLI"},o=void 0,m={unversionedId:"pnpm-cli",id:"version-5.x/pnpm-cli",title:"pnpm CLI",description:"\u041e\u0442\u043b\u0438\u0447\u0438\u044f \u043e\u0442 npm",source:"@site/i18n/ru/docusaurus-plugin-content-docs/version-5.x/pnpm-cli.md",sourceDirName:".",slug:"/pnpm-cli",permalink:"/ru/5.x/pnpm-cli",editUrl:"https://crowdin.com/project/pnpm/ru",tags:[],version:"5.x",frontMatter:{id:"pnpm-cli",title:"pnpm CLI"},sidebar:"version-5.x/docs",previous:{title:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430",permalink:"/ru/5.x/installation"},next:{title:"pnpx CLI",permalink:"/ru/5.x/pnpx-cli"}},c={},u=[{value:"\u041e\u0442\u043b\u0438\u0447\u0438\u044f \u043e\u0442 npm",id:"\u043e\u0442\u043b\u0438\u0447\u0438\u044f-\u043e\u0442-npm",level:2},{value:"\u041e\u043f\u0446\u0438\u0438",id:"\u043e\u043f\u0446\u0438\u0438",level:2},{value:"-C &lt;\u043f\u0443\u0442\u044c&gt;, --dir &lt;\u043f\u0443\u0442\u044c&gt;",id:"-c-\u043f\u0443\u0442\u044c---dir-\u043f\u0443\u0442\u044c",level:3},{value:"-w, --workspace-root",id:"-w---workspace-root",level:3},{value:"\u041a\u043e\u043c\u0430\u043d\u0434\u044b",id:"\u043a\u043e\u043c\u0430\u043d\u0434\u044b",level:2}],d={toc:u};function s(e){var t=e.components,n=(0,a.Z)(e,l);return(0,p.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("h2",{id:"\u043e\u0442\u043b\u0438\u0447\u0438\u044f-\u043e\u0442-npm"},"\u041e\u0442\u043b\u0438\u0447\u0438\u044f \u043e\u0442 npm"),(0,p.kt)("p",null,"\u0412 \u043e\u0442\u043b\u0438\u0447\u0438\u0435 \u043e\u0442 npm, pnpm \u043f\u0440\u043e\u0432\u0435\u0440\u044f\u0435\u0442 \u0432\u0441\u0435 \u043e\u043f\u0446\u0438\u0438. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, ",(0,p.kt)("inlineCode",{parentName:"p"},"pnpm install --foo")," \u043f\u043e\u043a\u0430\u0436\u0435\u0442 \u043e\u0448\u0438\u0431\u043a\u0443, \u0442\u0430\u043a \u043a\u0430\u043a ",(0,p.kt)("inlineCode",{parentName:"p"},"--foo")," \u043d\u0435 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0434\u043e\u043f\u0443\u0441\u0442\u0438\u043c\u043e\u0439 \u043e\u043f\u0446\u0438\u0435\u0439 \u0434\u043b\u044f ",(0,p.kt)("inlineCode",{parentName:"p"},"pnpm install"),"."),(0,p.kt)("p",null,"\u041e\u0434\u043d\u0430\u043a\u043e \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 \u043c\u043e\u0433\u0443\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u0443\u044e \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f ",(0,p.kt)("inlineCode",{parentName:"p"},"npm_config_"),", \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u044f\u0435\u0442\u0441\u044f \u0438\u0437 \u043e\u043f\u0446\u0438\u0439 CLI. \u0412 \u044d\u0442\u043e\u043c \u0441\u043b\u0443\u0447\u0430\u0435 \u0443 \u0432\u0430\u0441 \u0435\u0441\u0442\u044c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0435 \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b:"),(0,p.kt)("ol",null,(0,p.kt)("li",{parentName:"ol"},"\u044f\u0432\u043d\u044b\u043c \u043e\u0431\u0440\u0430\u0437\u043e\u043c \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u0443\u044e \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f: ",(0,p.kt)("inlineCode",{parentName:"li"},"npm_config_foo=true pnpm install")),(0,p.kt)("li",{parentName:"ol"},"force the unknown option with ",(0,p.kt)("inlineCode",{parentName:"li"},"--config."),": ",(0,p.kt)("inlineCode",{parentName:"li"},"pnpm install --config.foo=true"))),(0,p.kt)("h2",{id:"\u043e\u043f\u0446\u0438\u0438"},"\u041e\u043f\u0446\u0438\u0438"),(0,p.kt)("h3",{id:"-c-\u043f\u0443\u0442\u044c---dir-\u043f\u0443\u0442\u044c"},"-C ","<","\u043f\u0443\u0442\u044c",">",", --dir ","<","\u043f\u0443\u0442\u044c",">"),(0,p.kt)("p",null,"\u0417\u0430\u043f\u0443\u0441\u043a, \u043a\u0430\u043a \u0435\u0441\u043b\u0438 \u0431\u044b pnpm \u0431\u044b\u043b \u0437\u0430\u043f\u0443\u0449\u0435\u043d \u0432 ",(0,p.kt)("inlineCode",{parentName:"p"},"<path>")," \u0432\u043c\u0435\u0441\u0442\u043e \u0442\u0435\u043a\u0443\u0449\u0435\u0433\u043e \u0440\u0430\u0431\u043e\u0447\u0435\u0433\u043e \u043a\u0430\u0442\u0430\u043b\u043e\u0433\u0430."),(0,p.kt)("h3",{id:"-w---workspace-root"},"-w, --workspace-root"),(0,p.kt)("p",null,"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u043e \u0432: v5.6.0"),(0,p.kt)("p",null,"\u0417\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c, \u043a\u0430\u043a \u0435\u0441\u043b\u0438 \u0431\u044b pnpm \u0431\u044b\u043b \u0437\u0430\u043f\u0443\u0449\u0435\u043d \u0432 \u043a\u043e\u0440\u043d\u0435 \u0440\u0430\u0431\u043e\u0447\u0435\u0439 \u043e\u0431\u043b\u0430\u0441\u0442\u0438 (\u0432\u043e\u0440\u043a\u0441\u043f\u0435\u0439\u0441\u0435), \u0430 \u043d\u0435 \u0432 \u0442\u0435\u043a\u0443\u0449\u0435\u043c \u0440\u0430\u0431\u043e\u0447\u0435\u043c \u043a\u0430\u0442\u0430\u043b\u043e\u0433\u0435."),(0,p.kt)("h2",{id:"\u043a\u043e\u043c\u0430\u043d\u0434\u044b"},"\u041a\u043e\u043c\u0430\u043d\u0434\u044b"),(0,p.kt)("p",null,"\u0414\u043b\u044f \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0439 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438 \u0441\u043c. \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u044e \u043f\u043e \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u044b\u043c \u043a\u043e\u043c\u0430\u043d\u0434\u0430\u043c CLI. \u0412\u043e\u0442 \u0441\u043f\u0438\u0441\u043e\u043a \u0443\u0434\u043e\u0431\u043d\u044b\u0445 \u044d\u043a\u0432\u0438\u0432\u0430\u043b\u0435\u043d\u0442\u043e\u0432 npm-\u043a\u043e\u043c\u0430\u043d\u0434 \u0434\u043b\u044f \u043d\u0430\u0447\u0430\u043b\u0430 \u0440\u0430\u0431\u043e\u0442\u044b:"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:null},"npm \u043a\u043e\u043c\u0430\u043d\u0434\u0430"),(0,p.kt)("th",{parentName:"tr",align:null},"\u044d\u043a\u0432\u0438\u0432\u0430\u043b\u0435\u043d\u0442 \u0432 pnpm"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("inlineCode",{parentName:"td"},"npm install")),(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("a",{parentName:"td",href:"/ru/5.x/cli/install"},(0,p.kt)("inlineCode",{parentName:"a"},"pnpm install")))),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("inlineCode",{parentName:"td"},"npm i <\u043f\u0430\u043a\u0435\u0442>")),(0,p.kt)("td",{parentName:"tr",align:null},"[",(0,p.kt)("inlineCode",{parentName:"td"},"pnpm add <\u043f\u0430\u043a\u0435\u0442>"),"]")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("inlineCode",{parentName:"td"},"npm run <\u043a\u043e\u043c\u0430\u043d\u0434\u0430>")),(0,p.kt)("td",{parentName:"tr",align:null},"[",(0,p.kt)("inlineCode",{parentName:"td"},"pnpm <\u043a\u043e\u043c\u0430\u043d\u0434\u0430>"),"]")))))}s.isMDXComponent=!0}}]);