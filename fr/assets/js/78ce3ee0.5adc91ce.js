"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6598],{9613:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var r=t(9496);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},p=Object.keys(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,p=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=s(t),m=o,f=d["".concat(l,".").concat(m)]||d[m]||c[m]||p;return t?r.createElement(f,i(i({ref:n},u),{},{components:t})):r.createElement(f,i({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var p=t.length,i=new Array(p);i[0]=d;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var s=2;s<p;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6834:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=t(2182),o=t(9028),p=(t(9496),t(9613)),i=["components"],a={id:"fetch",title:"pnpm fetch"},l=void 0,s={unversionedId:"cli/fetch",id:"version-7.x/cli/fetch",title:"pnpm fetch",description:"R\xe9cup\xe8re les paquets d'un fichier de verrouillage dans le magasin virtuel, le manifeste des paquets est ignor\xe9.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-7.x/cli/fetch.md",sourceDirName:"cli",slug:"/cli/fetch",permalink:"/fr/7.x/cli/fetch",editUrl:"https://crowdin.com/project/pnpm/fr",tags:[],version:"7.x",frontMatter:{id:"fetch",title:"pnpm fetch"},sidebar:"version-7.x/docs",previous:{title:"pnpm prune",permalink:"/fr/7.x/cli/prune"},next:{title:"pnpm install-test",permalink:"/fr/7.x/cli/install-test"}},u={},c=[{value:"Sc\xe9nario d&#39;utilisation",id:"sc\xe9nario-dutilisation",level:2},{value:"Options",id:"options",level:2},{value:"--dev",id:"--dev",level:3},{value:"--prod",id:"--prod",level:3}],d={toc:c};function m(e){var n=e.components,t=(0,o.Z)(e,i);return(0,p.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"R\xe9cup\xe8re les paquets d'un fichier de verrouillage dans le magasin virtuel, le manifeste des paquets est ignor\xe9."),(0,p.kt)("h2",{id:"sc\xe9nario-dutilisation"},"Sc\xe9nario d'utilisation"),(0,p.kt)("p",null,"Cette commande est sp\xe9cifiquement con\xe7ue pour booster la construction d'une image docker."),(0,p.kt)("p",null,"Vous avez peut-\xeatre lu le ",(0,p.kt)("a",{parentName:"p",href:"https://nodejs.org/en/docs/guides/nodejs-docker-webapp/"},"guide officiel")," pour \xe9crire un Dockerfile pour une application Node.js, si vous ne l'avez pas encore lu, vous pouvez le lire en premier."),(0,p.kt)("p",null,"\xc0 partir de ce guide, nous apprenons \xe0 \xe9crire un Dockerfile optimis\xe9 pour les projets utilisant pnpm, qui ressemblera \xe0"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-Dockerfile"},'FROM node:14\n\nRUN curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm\n\n# Fichiers requis par pnpm install\nCOPY .npmrc package.json pnpm-lock.yaml .pnpmfile.cjs ./\n\nRUN pnpm install --frozen-lockfile --prod\n\n# Source de l\'application group\xe9e\nCOPY . .\n\nEXPOSE 8080\nCMD [ "node", "server.js" ]\n')),(0,p.kt)("p",null,"Tant qu'il n'y a pas de changement \xe0 ",(0,p.kt)("inlineCode",{parentName:"p"},".npmrc"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"paquet. son"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"pnpm-lock.yaml"),", ",(0,p.kt)("inlineCode",{parentName:"p"},".pnpmfile. js"),", le cache de construction de docker est toujours valide jusqu'\xe0 la couche de ",(0,p.kt)("inlineCode",{parentName:"p"},"RUN pnpm install --frozen-lockfile --prod"),", qui co\xfbtent la plupart du temps lors de la construction d'une image de docker."),(0,p.kt)("p",null,"Cependant, la modification du ",(0,p.kt)("inlineCode",{parentName:"p"},"package.json")," peut se produire beaucoup plus fr\xe9quemment que nous nous attendions, car il ne contient pas seulement des d\xe9pendances, mais peut \xe9galement contenir le num\xe9ro de version, des scripts et une configuration arbitraire pour tout autre outil."),(0,p.kt)("p",null,"Il est \xe9galement difficile de maintenir un Dockerfile qui construit un projet monorepo, il peut ressembler"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-Dockerfile"},'FROM node:14\n\nRUN curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm\n\n# Files required by pnpm install\nCOPY .npmrc package.json pnpm-lock.yaml .pnpmfile.cjs ./\n\n# for each sub-package, we have to add one extra step to copy its manifest\n# to the right place, as docker have no way to filter out only package.json with\n# single instruction\nCOPY packages/foo/package.json packages/foo/\nCOPY packages/bar/package.json packages/bar/\n\nRUN pnpm install --frozen-lockfile --prod\n\n# Bundle app source\nCOPY . .\n\nEXPOSE 8080\nCMD [ "node", "server.js" ]\n\n')),(0,p.kt)("p",null,"Comme vous pouvez le constater, le Dockerfile doit \xeatre mis \xe0 jour lorsque vous ajoutez ou supprimez des sous-paquets."),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"pnpm fetch")," r\xe9soudra parfaitement le probl\xe8me ci-dessus en fournissant la possibilit\xe9 de r\xe9cup\xe9rer un paquet dans un magasin virtuel avec des informations provenant uniquement d'un fichier de verrouillage."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-Dockerfile"},'FROM node:14\n\nRUN curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm\n\n# pnpm fetch ne n\xe9cessite que lockfile\nCOPY pnpm-lock.yaml ./\n\nRUN pnpm fetch --prod\n\n\nADD . ./\nRUN pnpm install -r --offline --prod\n\n\nEXPOSE 8080\nCMD [ "node", "server.js" ]\n')),(0,p.kt)("p",null,"Cela fonctionne aussi bien pour un projet simple que pour un projet monorepo, ",(0,p.kt)("inlineCode",{parentName:"p"},"--offline")," impose \xe0 pnpm \xe0 ne pas communiquer avec le registre des paquets car tous les paquets n\xe9cessaires seront d\xe9j\xe0 pr\xe9sent\xe9s dans le magasin virtuel."),(0,p.kt)("p",null,"Tant que le fichier de verrouillage n'est pas modifi\xe9, le cache de construction est valide jusqu'\xe0 la couche ",(0,p.kt)("inlineCode",{parentName:"p"},"RUN pnpm install -r --offline --prod"),", qui vous fera gagner beaucoup de temps."),(0,p.kt)("h2",{id:"options"},"Options"),(0,p.kt)("h3",{id:"--dev"},"--dev"),(0,p.kt)("p",null,"Seuls les paquets de d\xe9veloppement seront r\xe9cup\xe9r\xe9s"),(0,p.kt)("h3",{id:"--prod"},"--prod"),(0,p.kt)("p",null,"Les paquets de d\xe9veloppement ne seront pas r\xe9cup\xe9r\xe9s"))}m.isMDXComponent=!0}}]);