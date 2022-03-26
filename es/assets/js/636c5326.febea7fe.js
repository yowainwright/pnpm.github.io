"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7577],{9613:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5090:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>p,metadata:()=>s,toc:()=>d});var r=n(2182),a=n(9028),o=(n(9496),n(9613)),i=["components"],p={id:"store",title:"pnpm store"},l=void 0,s={unversionedId:"cli/store",id:"cli/store",title:"pnpm store",description:"Gesti\xf3n del almac\xe9n de paquetes.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/cli/store.md",sourceDirName:"cli",slug:"/cli/store",permalink:"/es/next/cli/store",editUrl:"https://crowdin.com/project/pnpm/es-ES",tags:[],version:"current",frontMatter:{id:"store",title:"pnpm store"},sidebar:"docs",previous:{title:"pnpm server",permalink:"/es/next/cli/server"},next:{title:"pnpm root",permalink:"/es/next/cli/root"}},c={},d=[{value:"Commands",id:"commands",level:2},{value:"status",id:"status",level:3},{value:"add",id:"add",level:3},{value:"prune",id:"prune",level:3},{value:"path",id:"path",level:3}],u={toc:d};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Gesti\xf3n del almac\xe9n de paquetes."),(0,o.kt)("h2",{id:"commands"},"Commands"),(0,o.kt)("h3",{id:"status"},"status"),(0,o.kt)("p",null,"Checks for modified packages in the store."),(0,o.kt)("p",null,"Devuelve el c\xf3digo de salida 0 si el contenido del paquete es el mismo que en el momento de desempaquetar."),(0,o.kt)("h3",{id:"add"},"add"),(0,o.kt)("p",null,"Funcionalmente equivalente a ",(0,o.kt)("a",{parentName:"p",href:"/es/next/cli/add"},(0,o.kt)("inlineCode",{parentName:"a"},"pnpm a\xf1adir")),", excepto esto a\xf1ade nuevos paquetes a la tienda directamente sin modificar ning\xfan proyecto o archivos fuera de la tienda."),(0,o.kt)("h3",{id:"prune"},"prune"),(0,o.kt)("p",null,"Removes ",(0,o.kt)("em",{parentName:"p"},"unreferenced packages")," from the store."),(0,o.kt)("p",null,"Unreferenced packages are packages that are not used by any projects on the system. Packages can become unreferenced after most installation operations, for instance when dependencies are made redundant."),(0,o.kt)("p",null,"For example, during ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm install"),", package ",(0,o.kt)("inlineCode",{parentName:"p"},"foo@1.0.0")," is updated to ",(0,o.kt)("inlineCode",{parentName:"p"},"foo@1.0.1"),". pnpm will keep ",(0,o.kt)("inlineCode",{parentName:"p"},"foo@1.0.0")," in the store, as it does not automatically remove packages. If package ",(0,o.kt)("inlineCode",{parentName:"p"},"foo@1.0.0")," is not used by any other project on the system, it becomes unreferenced. Running ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm store prune")," would remove ",(0,o.kt)("inlineCode",{parentName:"p"},"foo@1.0.0")," from the store."),(0,o.kt)("p",null,"Running ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm store prune")," is not harmful and has no side effects on your projects. If future installations require removed packages, pnpm will download them again."),(0,o.kt)("p",null,"It is best practice to run ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm store prune")," occasionally to clean up the store, but not too frequently. Sometimes, unreferenced packages become required again. This could occur when switching branches and installing older dependencies, in which case pnpm would need to re-download all removed packages, briefly slowing down the installation process."),(0,o.kt)("p",null,"Please note that this command is prohibited when a ",(0,o.kt)("a",{parentName:"p",href:"/es/next/cli/server"},"store server")," is running."),(0,o.kt)("h3",{id:"path"},"path"),(0,o.kt)("p",null,"Returns the path to the active store directory."))}m.isMDXComponent=!0}}]);