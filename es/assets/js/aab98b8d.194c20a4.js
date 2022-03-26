"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3357],{9613:(e,a,t)=>{t.d(a,{Zo:()=>s,kt:()=>u});var n=t(9496);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function p(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=n.createContext({}),d=function(e){var a=n.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},s=function(e){var a=d(e.components);return n.createElement(o.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=d(t),u=r,k=m["".concat(o,".").concat(u)]||m[u]||c[u]||l;return t?n.createElement(k,i(i({ref:a},s),{},{components:t})):n.createElement(k,i({ref:a},s))}));function u(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=m;var p={};for(var o in a)hasOwnProperty.call(a,o)&&(p[o]=a[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var d=2;d<l;d++)i[d]=t[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},1673:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>p,metadata:()=>d,toc:()=>c});var n=t(2182),r=t(9028),l=(t(9496),t(9613)),i=["components"],p={id:"add",title:"pnpm add <pkg>"},o=void 0,d={unversionedId:"cli/add",id:"version-5.x/cli/add",title:"pnpm add <pkg>",description:"Instalar el paquete y cualquier paquete que dependa de el. Por defecto, cualquier nuevo paquete se instala como una dependencia de producci\xf3n.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-5.x/cli/add.md",sourceDirName:"cli",slug:"/cli/add",permalink:"/es/5.x/cli/add",editUrl:"https://crowdin.com/project/pnpm/es-ES",tags:[],version:"5.x",frontMatter:{id:"add",title:"pnpm add <pkg>"},sidebar:"version-5.x/docs",previous:{title:"Filtering",permalink:"/es/5.x/filtering"},next:{title:"pnpm install",permalink:"/es/5.x/cli/install"}},s={},c=[{value:"TL;DR",id:"tldr",level:2},{value:"Ubicaciones de paquetes soportados",id:"ubicaciones-de-paquetes-soportados",level:2},{value:"Instalar desde el registro de npm",id:"instalar-desde-el-registro-de-npm",level:3},{value:"Instalar desde el espacio de trabajo",id:"instalar-desde-el-espacio-de-trabajo",level:3},{value:"Instalar desde el sistema de archivos local",id:"instalar-desde-el-sistema-de-archivos-local",level:3},{value:"Instalar desde tarball remoto",id:"instalar-desde-tarball-remoto",level:3},{value:"Instalar desde el registro de npm",id:"instalar-desde-el-registro-de-npm-1",level:3},{value:"Options",id:"options",level:2},{value:"--save-prod, -P",id:"--save-prod--p",level:3},{value:"--save-dev, -D",id:"--save-dev--d",level:3},{value:"--save-optional, -O",id:"--save-optional--o",level:3},{value:"--save-exact, -E",id:"--save-exact--e",level:3},{value:"--save-peer",id:"--save-peer",level:3},{value:"--ignore-workspace-root-check, -W",id:"--ignore-workspace-root-check--w",level:3},{value:"--global",id:"--global",level:3},{value:"--workspace",id:"--workspace",level:3},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",level:3}],m={toc:c};function u(e){var a=e.components,t=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Instalar el paquete y cualquier paquete que dependa de el. Por defecto, cualquier nuevo paquete se instala como una dependencia de producci\xf3n."),(0,l.kt)("h2",{id:"tldr"},"TL;DR"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Comando"),(0,l.kt)("th",{parentName:"tr",align:null},"Significado"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"pnpm add sax")),(0,l.kt)("td",{parentName:"tr",align:null},"Se guarda en ",(0,l.kt)("inlineCode",{parentName:"td"},"dependencies"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"pnpm add -D sax")),(0,l.kt)("td",{parentName:"tr",align:null},"Se guarda en ",(0,l.kt)("inlineCode",{parentName:"td"},"devDependencies"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"pnpm add -O sax")),(0,l.kt)("td",{parentName:"tr",align:null},"Se guarda en ",(0,l.kt)("inlineCode",{parentName:"td"},"optionalDependencies"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"pnpm add sax@next")),(0,l.kt)("td",{parentName:"tr",align:null},"Se instala desde el tag ",(0,l.kt)("inlineCode",{parentName:"td"},"next"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"pnpm add sax@3.0.0")),(0,l.kt)("td",{parentName:"tr",align:null},"Especificar versi\xf3n ",(0,l.kt)("inlineCode",{parentName:"td"},"3.0.0"))))),(0,l.kt)("h2",{id:"ubicaciones-de-paquetes-soportados"},"Ubicaciones de paquetes soportados"),(0,l.kt)("h3",{id:"instalar-desde-el-registro-de-npm"},"Instalar desde el registro de npm"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"pnpm add package-name")," will install the latest version of ",(0,l.kt)("inlineCode",{parentName:"p"},"package-name")," from the ",(0,l.kt)("a",{parentName:"p",href:"https://www.npmjs.com/"},"npm registry")," by default. To install a package from another registry, you can use the tarball link (see ",(0,l.kt)("a",{parentName:"p",href:"#install-from-remote-tarball"},"the corresponding guide"),")."),(0,l.kt)("p",null,"You may also install packages by:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"etiqueta: ",(0,l.kt)("inlineCode",{parentName:"li"},"pnpm add express@nightly")),(0,l.kt)("li",{parentName:"ul"},"versi\xf3n: ",(0,l.kt)("inlineCode",{parentName:"li"},"pnpm add express@1.0.0")),(0,l.kt)("li",{parentName:"ul"},"rango de versiones: ",(0,l.kt)("inlineCode",{parentName:"li"},'pnpm add express@2 react@">=0.1.0 <0.2.0"'))),(0,l.kt)("h3",{id:"instalar-desde-el-espacio-de-trabajo"},"Instalar desde el espacio de trabajo"),(0,l.kt)("p",null,"Note that when adding dependencies and working within a ",(0,l.kt)("a",{parentName:"p",href:"/es/5.x/workspaces"},"workspace"),", packages will be installed from the configured sources, depending on whether or not ",(0,l.kt)("a",{parentName:"p",href:"/es/5.x/workspaces#link-workspace-packages"},(0,l.kt)("inlineCode",{parentName:"a"},"link-workspace-packages"))," is set, and use of the ",(0,l.kt)("a",{parentName:"p",href:"/es/5.x/workspaces#workspace-ranges-workspace"},(0,l.kt)("inlineCode",{parentName:"a"},"workspace: range protocol")),"."),(0,l.kt)("h3",{id:"instalar-desde-el-sistema-de-archivos-local"},"Instalar desde el sistema de archivos local"),(0,l.kt)("p",null,"There are two ways to install from the local file system:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"desde un archivo tarball (",(0,l.kt)("inlineCode",{parentName:"li"},".tar"),", ",(0,l.kt)("inlineCode",{parentName:"li"},".tar.gz"),"o ",(0,l.kt)("inlineCode",{parentName:"li"},".tgz"),")"),(0,l.kt)("li",{parentName:"ol"},"de un directorio")),(0,l.kt)("p",null,"Examples:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm add ./package.tar.gz\npnpm add ./some-directory\n")),(0,l.kt)("p",null,"When you install from a directory, a symlink will be created in the current project's ",(0,l.kt)("inlineCode",{parentName:"p"},"node_modules"),", so it is the same as running ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm link"),"."),(0,l.kt)("h3",{id:"instalar-desde-tarball-remoto"},"Instalar desde tarball remoto"),(0,l.kt)("p",null,'The argument must be a fetchable URL starting with "http://" or "https://".'),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm add https://github.com/indexzero/forever/tarball/v0.5.6\n")),(0,l.kt)("h3",{id:"instalar-desde-el-registro-de-npm-1"},"Instalar desde el registro de npm"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm add <git remote url>\n")),(0,l.kt)("p",null,"Installs the package from the hosted Git provider, cloning it with Git. You can use a protocol for certain Git providers. For example, ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm add github:user/repo")),(0,l.kt)("p",null,"You may install from Git by:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\xfaltimo commit del master: ",(0,l.kt)("inlineCode",{parentName:"li"},"pnpm add kevva/is-positive")),(0,l.kt)("li",{parentName:"ul"},"commit: ",(0,l.kt)("inlineCode",{parentName:"li"},"pnpm add kevva/is-positive#97edff6f525f192a3f83cea1944765f769ae2678")),(0,l.kt)("li",{parentName:"ul"},"branch: ",(0,l.kt)("inlineCode",{parentName:"li"},"pnpm add kevva/is-positive#master")),(0,l.kt)("li",{parentName:"ul"},"rango de versiones: ",(0,l.kt)("inlineCode",{parentName:"li"},"pnpm add kevva/is-positive#semver:^2.0.0"))),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)("h3",{id:"--save-prod--p"},"--save-prod, -P"),(0,l.kt)("p",null,"Install the specified packages as regular ",(0,l.kt)("inlineCode",{parentName:"p"},"dependencies"),"."),(0,l.kt)("h3",{id:"--save-dev--d"},"--save-dev, -D"),(0,l.kt)("p",null,"Install the specified packages as ",(0,l.kt)("inlineCode",{parentName:"p"},"devDependencies"),"."),(0,l.kt)("h3",{id:"--save-optional--o"},"--save-optional, -O"),(0,l.kt)("p",null,"Install the specified packages as ",(0,l.kt)("inlineCode",{parentName:"p"},"optionalDependencies"),"."),(0,l.kt)("h3",{id:"--save-exact--e"},"--save-exact, -E"),(0,l.kt)("p",null,"Saved dependencies will be configured with an exact version rather than using pnpm's default semver range operator."),(0,l.kt)("h3",{id:"--save-peer"},"--save-peer"),(0,l.kt)("p",null,"A\xf1adido en: v3.2.0"),(0,l.kt)("p",null,"Using ",(0,l.kt)("inlineCode",{parentName:"p"},"--save-peer")," will add one or more packages to ",(0,l.kt)("inlineCode",{parentName:"p"},"peerDependencies")," and install them as dev dependencies."),(0,l.kt)("h3",{id:"--ignore-workspace-root-check--w"},"--ignore-workspace-root-check, -W"),(0,l.kt)("p",null,"Added in: v3.6.0"),(0,l.kt)("p",null,"Adding a new dependency to the root workspace package fails, unless the ",(0,l.kt)("inlineCode",{parentName:"p"},"--ignore-workspace-root-check")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"-W")," flag is used."),(0,l.kt)("p",null,"For instance, ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm add debug -W"),"."),(0,l.kt)("h3",{id:"--global"},"--global"),(0,l.kt)("p",null,"Install a package globally."),(0,l.kt)("h3",{id:"--workspace"},"--workspace"),(0,l.kt)("p",null,"A\xf1adido en: v4.4.0"),(0,l.kt)("p",null,"Only adds the new dependency if it is found in the workspace."),(0,l.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/es/5.x/filtering"},"Read more about filtering.")))}u.isMDXComponent=!0}}]);