"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2308],{9613:(e,a,t)=>{t.d(a,{Zo:()=>s,kt:()=>u});var n=t(9496);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=n.createContext({}),d=function(e){var a=n.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},s=function(e){var a=d(e.components);return n.createElement(p.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=d(t),u=r,k=m["".concat(p,".").concat(u)]||m[u]||c[u]||l;return t?n.createElement(k,i(i({ref:a},s),{},{components:t})):n.createElement(k,i({ref:a},s))}));function u(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=m;var o={};for(var p in a)hasOwnProperty.call(a,p)&&(o[p]=a[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var d=2;d<l;d++)i[d]=t[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8809:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>p,default:()=>u,frontMatter:()=>o,metadata:()=>d,toc:()=>c});var n=t(2182),r=t(9028),l=(t(9496),t(9613)),i=["components"],o={id:"add",title:"pnpm add <pkg>"},p=void 0,d={unversionedId:"cli/add",id:"version-7.x/cli/add",title:"pnpm add <pkg>",description:"Instala um pacote e todos os outros pacotes dos quais ele depende. Por padr\xe3o, qualquer novo pacote \xe9 instalado como uma depend\xeancia de produ\xe7\xe3o.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-7.x/cli/add.md",sourceDirName:"cli",slug:"/cli/add",permalink:"/pt/7.x/cli/add",editUrl:"https://crowdin.com/project/pnpm/pt-BR",tags:[],version:"7.x",frontMatter:{id:"add",title:"pnpm add <pkg>"},sidebar:"version-7.x/docs",previous:{title:"Scripts",permalink:"/pt/7.x/scripts"},next:{title:"pnpm install",permalink:"/pt/7.x/cli/install"}},s={},c=[{value:"TL;DR",id:"tldr",level:2},{value:"Locais de pacotes suportados",id:"locais-de-pacotes-suportados",level:2},{value:"Instala do registro do npm",id:"instala-do-registro-do-npm",level:3},{value:"Instalar a partir do workspace",id:"instalar-a-partir-do-workspace",level:3},{value:"Instalar de um sistema de arquivos local",id:"instalar-de-um-sistema-de-arquivos-local",level:3},{value:"Instalar a partir de um arquivo tarball remoto",id:"instalar-a-partir-de-um-arquivo-tarball-remoto",level:3},{value:"Instalar de um reposit\xf3rio Git",id:"instalar-de-um-reposit\xf3rio-git",level:3},{value:"Options",id:"options",level:2},{value:"--save-prod, -P",id:"--save-prod--p",level:3},{value:"--save-dev, -D",id:"--save-dev--d",level:3},{value:"--save-optional, -O",id:"--save-optional--o",level:3},{value:"--save-exact, -E",id:"--save-exact--e",level:3},{value:"--save-peer",id:"--save-peer",level:3},{value:"--ignore-workspace-root-check",id:"--ignore-workspace-root-check",level:3},{value:"--global, -g",id:"--global--g",level:3},{value:"--workspace",id:"--workspace",level:3},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",level:3}],m={toc:c};function u(e){var a=e.components,t=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Instala um pacote e todos os outros pacotes dos quais ele depende. Por padr\xe3o, qualquer novo pacote \xe9 instalado como uma depend\xeancia de produ\xe7\xe3o."),(0,l.kt)("h2",{id:"tldr"},"TL;DR"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Command"),(0,l.kt)("th",{parentName:"tr",align:null},"Meaning"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"pnpm add sax")),(0,l.kt)("td",{parentName:"tr",align:null},"Salva em ",(0,l.kt)("inlineCode",{parentName:"td"},"dependencies"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"pnpm add -D sax")),(0,l.kt)("td",{parentName:"tr",align:null},"Sava em ",(0,l.kt)("inlineCode",{parentName:"td"},"devDependencies"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"pnpm add -O sax")),(0,l.kt)("td",{parentName:"tr",align:null},"Salva em ",(0,l.kt)("inlineCode",{parentName:"td"},"optionalDependencies"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"pnpm add -g sax")),(0,l.kt)("td",{parentName:"tr",align:null},"Install package globally")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"pnpm add sax@next")),(0,l.kt)("td",{parentName:"tr",align:null},"Instala a partir da tag ",(0,l.kt)("inlineCode",{parentName:"td"},"next"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"pnpm add sax@3.0.0")),(0,l.kt)("td",{parentName:"tr",align:null},"Especifica a vers\xe3o ",(0,l.kt)("inlineCode",{parentName:"td"},"3.0.0"))))),(0,l.kt)("h2",{id:"locais-de-pacotes-suportados"},"Locais de pacotes suportados"),(0,l.kt)("h3",{id:"instala-do-registro-do-npm"},"Instala do registro do npm"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"pnpm add package-name")," will install the latest version of ",(0,l.kt)("inlineCode",{parentName:"p"},"package-name")," from the ",(0,l.kt)("a",{parentName:"p",href:"https://www.npmjs.com/"},"npm registry")," by default."),(0,l.kt)("p",null,"Se for executado de um workspace, o comando verificar\xe1 se algum outro projeto do workspace utiliza o pacote especificado. Se sim, uma vers\xe3o j\xe1 usada ser\xe1 instalada."),(0,l.kt)("p",null,"You may also install packages by:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"tag: ",(0,l.kt)("inlineCode",{parentName:"li"},"pnpm add express@nightly")),(0,l.kt)("li",{parentName:"ul"},"vers\xe3o: ",(0,l.kt)("inlineCode",{parentName:"li"},"pnpm add express@1.0.0")),(0,l.kt)("li",{parentName:"ul"},"intervalo de vers\xe3o: ",(0,l.kt)("inlineCode",{parentName:"li"},'pnpm add express@2 react@">=0.1.0 <0.2.0"'))),(0,l.kt)("h3",{id:"instalar-a-partir-do-workspace"},"Instalar a partir do workspace"),(0,l.kt)("p",null,"Note that when adding dependencies and working within a ",(0,l.kt)("a",{parentName:"p",href:"/pt/7.x/workspaces"},"workspace"),", packages will be installed from the configured sources, depending on whether or not ",(0,l.kt)("a",{parentName:"p",href:"/pt/7.x/workspaces#link-workspace-packages"},(0,l.kt)("inlineCode",{parentName:"a"},"link-workspace-packages"))," is set, and use of the ",(0,l.kt)("a",{parentName:"p",href:"/pt/7.x/workspaces#workspace-ranges-workspace"},(0,l.kt)("inlineCode",{parentName:"a"},"workspace: range protocol")),"."),(0,l.kt)("h3",{id:"instalar-de-um-sistema-de-arquivos-local"},"Instalar de um sistema de arquivos local"),(0,l.kt)("p",null,"There are two ways to install from the local file system:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"usando um arquivo tarball (",(0,l.kt)("inlineCode",{parentName:"li"},".tar"),", ",(0,l.kt)("inlineCode",{parentName:"li"},".tar.gz"),", or ",(0,l.kt)("inlineCode",{parentName:"li"},".tgz"),")"),(0,l.kt)("li",{parentName:"ol"},"de um diret\xf3rio")),(0,l.kt)("p",null,"Examples:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm add ./package.tar.gz\npnpm add ./some-directory\n")),(0,l.kt)("p",null,"When you install from a directory, a symlink will be created in the current project's ",(0,l.kt)("inlineCode",{parentName:"p"},"node_modules"),", so it is the same as running ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm link"),"."),(0,l.kt)("h3",{id:"instalar-a-partir-de-um-arquivo-tarball-remoto"},"Instalar a partir de um arquivo tarball remoto"),(0,l.kt)("p",null,'The argument must be a fetchable URL starting with "http://" or "https://".'),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm add https://github.com/indexzero/forever/tarball/v0.5.6\n")),(0,l.kt)("h3",{id:"instalar-de-um-reposit\xf3rio-git"},"Instalar de um reposit\xf3rio Git"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm add <git remote url>\n")),(0,l.kt)("p",null,"Installs the package from the hosted Git provider, cloning it with Git. You can use a protocol for certain Git providers. For example, ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm add github:user/repo")),(0,l.kt)("p",null,"You may install from Git by:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"ultimo commit na master: ",(0,l.kt)("inlineCode",{parentName:"li"},"pnpm add kevva/is-positive")),(0,l.kt)("li",{parentName:"ul"},"commit: ",(0,l.kt)("inlineCode",{parentName:"li"},"pnpm add kevva/is-positive#97edff6f525f192a3f83cea1944765f769ae2678")),(0,l.kt)("li",{parentName:"ul"},"branch: ",(0,l.kt)("inlineCode",{parentName:"li"},"pnpm add kevva/is-positive#master")),(0,l.kt)("li",{parentName:"ul"},"intervalo de vers\xe3o: ",(0,l.kt)("inlineCode",{parentName:"li"},"pnpm add kevva/is-positive#semver:^2.0.0"))),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)("h3",{id:"--save-prod--p"},"--save-prod, -P"),(0,l.kt)("p",null,"Install the specified packages as regular ",(0,l.kt)("inlineCode",{parentName:"p"},"dependencies"),"."),(0,l.kt)("h3",{id:"--save-dev--d"},"--save-dev, -D"),(0,l.kt)("p",null,"Install the specified packages as ",(0,l.kt)("inlineCode",{parentName:"p"},"devDependencies"),"."),(0,l.kt)("h3",{id:"--save-optional--o"},"--save-optional, -O"),(0,l.kt)("p",null,"Install the specified packages as ",(0,l.kt)("inlineCode",{parentName:"p"},"optionalDependencies"),"."),(0,l.kt)("h3",{id:"--save-exact--e"},"--save-exact, -E"),(0,l.kt)("p",null,"Saved dependencies will be configured with an exact version rather than using pnpm's default semver range operator."),(0,l.kt)("h3",{id:"--save-peer"},"--save-peer"),(0,l.kt)("p",null,"Using ",(0,l.kt)("inlineCode",{parentName:"p"},"--save-peer")," will add one or more packages to ",(0,l.kt)("inlineCode",{parentName:"p"},"peerDependencies")," and install them as dev dependencies."),(0,l.kt)("h3",{id:"--ignore-workspace-root-check"},"--ignore-workspace-root-check"),(0,l.kt)("p",null,"Adding a new dependency to the root workspace package fails, unless the ",(0,l.kt)("inlineCode",{parentName:"p"},"--ignore-workspace-root-check")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"-w")," flag is used."),(0,l.kt)("p",null,"For instance, ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm add debug -w"),"."),(0,l.kt)("h3",{id:"--global--g"},"--global, -g"),(0,l.kt)("p",null,"Install a package globally."),(0,l.kt)("h3",{id:"--workspace"},"--workspace"),(0,l.kt)("p",null,"Only adds the new dependency if it is found in the workspace."),(0,l.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/pt/7.x/filtering"},"Read more about filtering.")))}u.isMDXComponent=!0}}]);