"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8065],{9613:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var a=t(9496);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},p=Object.keys(e);for(a=0;a<p.length;a++)t=p[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)t=p[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=a.createContext({}),c=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=c(e.components);return a.createElement(o.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,p=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(t),m=r,y=u["".concat(o,".").concat(m)]||u[m]||s[m]||p;return t?a.createElement(y,i(i({ref:n},d),{},{components:t})):a.createElement(y,i({ref:n},d))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var p=t.length,i=new Array(p);i[0]=u;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<p;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},2724:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>s});var a=t(2182),r=t(9028),p=(t(9496),t(9613)),i=["components"],l={id:"dlx",title:"pnpm dlx"},o=void 0,c={unversionedId:"cli/dlx",id:"version-7.x/cli/dlx",title:"pnpm dlx",description:"Mengambil paket dari registri tanpa menginstalnya sebagai dependensi, meng-hotloadnya, dan menjalankan perintah biner apapun yang dieksposnya.",source:"@site/i18n/id/docusaurus-plugin-content-docs/version-7.x/cli/dlx.md",sourceDirName:"cli",slug:"/cli/dlx",permalink:"/id/7.x/cli/dlx",editUrl:"https://crowdin.com/project/pnpm/id",tags:[],version:"7.x",frontMatter:{id:"dlx",title:"pnpm dlx"},sidebar:"version-7.x/docs",previous:{title:"pnpm exec",permalink:"/id/7.x/cli/exec"},next:{title:"pnpm create",permalink:"/id/7.x/cli/create"}},d={},s=[{value:"Options",id:"options",level:2},{value:"--paket &lt;nama&gt;",id:"--paket-nama",level:3},{value:"--silent, -s",id:"--silent--s",level:3}],u={toc:s};function m(e){var n=e.components,t=(0,r.Z)(e,i);return(0,p.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"Mengambil paket dari registri tanpa menginstalnya sebagai dependensi, meng-hotloadnya, dan menjalankan perintah biner apapun yang dieksposnya."),(0,p.kt)("p",null,"For example, to use ",(0,p.kt)("inlineCode",{parentName:"p"},"create-react-app")," anywhere to bootstrap a react app without needing to install it under another project, you can run:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"pnpm dlx create-react-app ./my-app\n")),(0,p.kt)("p",null,"Ini akan mengambil ",(0,p.kt)("inlineCode",{parentName:"p"},"create-react-app")," dari registri dan menjalankannya dengan argumen yang diberikan."),(0,p.kt)("p",null,"You may also specify which exact version of the package you'd like to use:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"pnpm dlx create-react-app@next ./my-app\n")),(0,p.kt)("h2",{id:"options"},"Options"),(0,p.kt)("h3",{id:"--paket-nama"},"--paket ","<","nama",">"),(0,p.kt)("p",null,"Paket yang perlu diinstal sebelum menjalankan perintah."),(0,p.kt)("p",null,"Example:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"pnpm --package=@pnpm/meta-updater dlx meta-updater --help\npnpm --package=@pnpm/meta-updater@0 dlx meta-updater --help\n")),(0,p.kt)("p",null,"Multiple packages can be provided for installation:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"pnpm --package=yo --package=generator-webapp dlx yo webapp --skip-install\n")),(0,p.kt)("h3",{id:"--silent--s"},"--silent, -s"),(0,p.kt)("p",null,"Hanya output dari perintah yang dieksekusi yang dicetak."))}m.isMDXComponent=!0}}]);