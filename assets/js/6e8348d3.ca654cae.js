"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9432],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var l=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},i=Object.keys(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=l.createContext({}),p=function(e){var t=l.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return l.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},m=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(n),k=a,c=m["".concat(s,".").concat(k)]||m[k]||d[k]||i;return n?l.createElement(c,r(r({ref:t},u),{},{components:n})):l.createElement(c,r({ref:t},u))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,r[1]=o;for(var p=2;p<i;p++)r[p]=n[p];return l.createElement.apply(null,r)}return l.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2492:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>k,frontMatter:()=>o,metadata:()=>p,toc:()=>d});var l=n(2182),a=n(9028),i=(n(9496),n(9613)),r=["components"],o={id:"npmrc",title:".npmrc"},s=void 0,p={unversionedId:"npmrc",id:"version-5.x/npmrc",title:".npmrc",description:"pnpm gets its configuration from the command line, environment variables, and",source:"@site/versioned_docs/version-5.x/npmrc.md",sourceDirName:".",slug:"/npmrc",permalink:"/5.x/npmrc",editUrl:"https://github.com/pnpm/pnpm.github.io/edit/main/versioned_docs/version-5.x/npmrc.md",tags:[],version:"5.x",lastUpdatedBy:"Zoltan Kochan",lastUpdatedAt:1629887240,formattedLastUpdatedAt:"8/25/2021",frontMatter:{id:"npmrc",title:".npmrc"},sidebar:"version-5.x/docs",previous:{title:"package.json",permalink:"/5.x/package_json"},next:{title:"pnpm-workspace.yaml",permalink:"/5.x/pnpm-workspace_yaml"}},u={},d=[{value:"Dependency Hoisting Settings",id:"dependency-hoisting-settings",level:2},{value:"hoist",id:"hoist",level:3},{value:"hoist-pattern",id:"hoist-pattern",level:3},{value:"public-hoist-pattern",id:"public-hoist-pattern",level:3},{value:"shamefully-hoist",id:"shamefully-hoist",level:3},{value:"Node-Modules Settings",id:"node-modules-settings",level:2},{value:"store-dir",id:"store-dir",level:3},{value:"modules-dir",id:"modules-dir",level:3},{value:"node-linker",id:"node-linker",level:3},{value:"symlink",id:"symlink",level:3},{value:"enable-modules-dir",id:"enable-modules-dir",level:3},{value:"virtual-store-dir",id:"virtual-store-dir",level:3},{value:"package-import-method",id:"package-import-method",level:3},{value:"Lockfile Settings",id:"lockfile-settings",level:2},{value:"lockfile",id:"lockfile",level:3},{value:"prefer-frozen-lockfile",id:"prefer-frozen-lockfile",level:3},{value:"Registry &amp; Authentication Settings",id:"registry--authentication-settings",level:2},{value:"registry",id:"registry",level:3},{value:"&lt;scope&gt;:registry",id:"scoperegistry",level:4},{value:"&lt;URL&gt;:_authToken",id:"url_authtoken",level:3},{value:"&lt;URL&gt;:always-auth",id:"urlalways-auth",level:3},{value:"Request Settings",id:"request-settings",level:2},{value:"ca",id:"ca",level:3},{value:"cafile",id:"cafile",level:3},{value:"cert",id:"cert",level:3},{value:"https-proxy",id:"https-proxy",level:3},{value:"key",id:"key",level:3},{value:"local-address",id:"local-address",level:3},{value:"proxy",id:"proxy",level:3},{value:"noproxy",id:"noproxy",level:3},{value:"strict-ssl",id:"strict-ssl",level:3},{value:"network-concurrency",id:"network-concurrency",level:3},{value:"fetch-retries",id:"fetch-retries",level:3},{value:"fetch-retry-factor",id:"fetch-retry-factor",level:3},{value:"fetch-retry-mintimeout",id:"fetch-retry-mintimeout",level:3},{value:"fetch-retry-maxtimeout",id:"fetch-retry-maxtimeout",level:3},{value:"CLI Settings",id:"cli-settings",level:2},{value:"no-color",id:"no-color",level:3},{value:"loglevel",id:"loglevel",level:3},{value:"strict-peer-dependencies",id:"strict-peer-dependencies",level:3},{value:"use-beta-cli",id:"use-beta-cli",level:3},{value:"recursive-install",id:"recursive-install",level:3},{value:"engine-strict",id:"engine-strict",level:3},{value:"npm-path",id:"npm-path",level:3},{value:"Build Settings",id:"build-settings",level:2},{value:"child-concurrency",id:"child-concurrency",level:3},{value:"side-effects-cache",id:"side-effects-cache",level:3},{value:"side-effects-cache-readonly",id:"side-effects-cache-readonly",level:3},{value:"unsafe-perm",id:"unsafe-perm",level:3},{value:"Other Settings",id:"other-settings",level:2},{value:"use-running-store-server",id:"use-running-store-server",level:3},{value:"save-prefix",id:"save-prefix",level:3},{value:"tag",id:"tag",level:3},{value:"global-dir",id:"global-dir",level:3}],m={toc:d};function k(e){var t=e.components,n=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,l.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"pnpm gets its configuration from the command line, environment variables, and\n",(0,i.kt)("inlineCode",{parentName:"p"},".npmrc")," files."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm config")," command can be used to update and edit the contents of the\nuser and global ",(0,i.kt)("inlineCode",{parentName:"p"},".npmrc")," files."),(0,i.kt)("p",null,"The four relevant files are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"per-project configuration file (",(0,i.kt)("inlineCode",{parentName:"li"},"/path/to/my/project/.npmrc"),")"),(0,i.kt)("li",{parentName:"ul"},"per-workspace configuration file (the directory that contains the\n",(0,i.kt)("inlineCode",{parentName:"li"},"pnpm-workspace.yaml")," file)"),(0,i.kt)("li",{parentName:"ul"},"per-user configuration file (",(0,i.kt)("inlineCode",{parentName:"li"},"~/.npmrc"),")"),(0,i.kt)("li",{parentName:"ul"},"global configuration file (",(0,i.kt)("inlineCode",{parentName:"li"},"/etc/npmrc"),")")),(0,i.kt)("p",null,"All ",(0,i.kt)("inlineCode",{parentName:"p"},".npmrc")," files are an ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/INI_file"},"INI-formatted")," list of ",(0,i.kt)("inlineCode",{parentName:"p"},"key = value")," parameters."),(0,i.kt)("h2",{id:"dependency-hoisting-settings"},"Dependency Hoisting Settings"),(0,i.kt)("h3",{id:"hoist"},"hoist"),(0,i.kt)("p",null,"Added in: v4.0.0"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Default: ",(0,i.kt)("strong",{parentName:"li"},"true")),(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("strong",{parentName:"li"},"boolean"))),(0,i.kt)("p",null,"When ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),", all dependencies are hoisted to ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules/.pnpm"),". This makes\nunlisted dependencies accessible to all packages inside ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules"),"."),(0,i.kt)("h3",{id:"hoist-pattern"},"hoist-pattern"),(0,i.kt)("p",null,"Added in: v4.0.0"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Default: ",(0,i.kt)("strong",{parentName:"li"},"['","*","']")),(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("strong",{parentName:"li"},"string[]"))),(0,i.kt)("p",null,"Tells pnpm which packages should be hoisted to ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules/.pnpm"),". By\ndefault, all packages are hoisted - however, if you know that only some flawed\npackages have phantom dependencies, you can use this option to exclusively hoist\nthe phantom dependencies (recommended)."),(0,i.kt)("p",null,"For instance:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"hoist-pattern[]=*eslint*\nhoist-pattern[]=*babel*\n")),(0,i.kt)("h3",{id:"public-hoist-pattern"},"public-hoist-pattern"),(0,i.kt)("p",null,"Added in: v5.2.0"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Default: ",(0,i.kt)("strong",{parentName:"li"},"['","*","types","*","', '","*","eslint","*","', '@prettier/plugin-","*","', '","*","prettier-plugin-","*","']")),(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("strong",{parentName:"li"},"string[]"))),(0,i.kt)("p",null,"Unlike ",(0,i.kt)("inlineCode",{parentName:"p"},"hoist-pattern"),", which hoists dependencies to a hidden modules directory\ninside the virtual store, ",(0,i.kt)("inlineCode",{parentName:"p"},"public-hoist-pattern")," hoists dependencies matching\nthe pattern to the root modules directory. Hoisting to the root modules\ndirectory means that application code will have access to phantom dependencies,\neven if they modify the resolution strategy improperly."),(0,i.kt)("p",null,"This setting is useful when dealing with some flawed pluggable tools that don't\nresolve dependencies properly."),(0,i.kt)("p",null,"For instance:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"public-hoist-pattern[]=*plugin*\n")),(0,i.kt)("p",null,"Note: Setting ",(0,i.kt)("inlineCode",{parentName:"p"},"shamefully-hoist")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," is the same as setting\n",(0,i.kt)("inlineCode",{parentName:"p"},"public-hoist-pattern")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"*"),"."),(0,i.kt)("h3",{id:"shamefully-hoist"},"shamefully-hoist"),(0,i.kt)("p",null,"Added in: v1.34.0 as ",(0,i.kt)("inlineCode",{parentName:"p"},"shamefully-flatten"),", renamed in v4.0.0"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Default: ",(0,i.kt)("strong",{parentName:"li"},"false")),(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("strong",{parentName:"li"},"Boolean"))),(0,i.kt)("p",null,"By default, pnpm creates a semistrict ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules"),", meaning dependencies have\naccess to undeclared dependencies but modules outside of ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules")," do not.\nWith this layout, most of the packages in the ecosystem work with no issues.\nHowever, if some tooling only works when the hoisted dependencies are in the\nroot of ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules"),", you can set this to ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," to hoist them for you."),(0,i.kt)("h2",{id:"node-modules-settings"},"Node-Modules Settings"),(0,i.kt)("h3",{id:"store-dir"},"store-dir"),(0,i.kt)("p",null,"Added in: v4.2.0 as ",(0,i.kt)("inlineCode",{parentName:"p"},"store")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Default: ",(0,i.kt)("strong",{parentName:"li"},"~/.pnpm-store")),(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("strong",{parentName:"li"},"path"))),(0,i.kt)("p",null,"The location where all the packages are saved on the disk."),(0,i.kt)("p",null,"The store should be always on the same disk on which installation is happening,\nso there will be one store per disk. If there is a home directory on the current\ndisk, then the store is created in ",(0,i.kt)("inlineCode",{parentName:"p"},"<home dir>/.pnpm-store"),". If there is no\nhome on the disk, then the store is created at the root of the filesystem. For\nexample, if installation is happening on a filesystem mounted at ",(0,i.kt)("inlineCode",{parentName:"p"},"/mnt"),",\nthen the store will be created at ",(0,i.kt)("inlineCode",{parentName:"p"},"/mnt/.pnpm-store"),". The same goes for Windows\nsystems."),(0,i.kt)("p",null,"It is possible to set a store from a different disk but in that case pnpm will\ncopy packages from the store instead of hard-linking them, as hard links are\nonly possible on the same filesystem."),(0,i.kt)("h3",{id:"modules-dir"},"modules-dir"),(0,i.kt)("p",null,"Added in: v4.14.0"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Default: ",(0,i.kt)("strong",{parentName:"li"},"node_modules")),(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("strong",{parentName:"li"},"path"))),(0,i.kt)("p",null,"The directory in which dependencies will be installed (instead of\n",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules"),")."),(0,i.kt)("h3",{id:"node-linker"},"node-linker"),(0,i.kt)("p",null,"Added in: v5.9.0"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Default: ",(0,i.kt)("strong",{parentName:"li"},"undefined")),(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("strong",{parentName:"li"},"undefined"),", ",(0,i.kt)("strong",{parentName:"li"},"pnp"))),(0,i.kt)("p",null,"Defines what linker should be used for installing Node packages.\nBy default, pnpm creates a linked modules directory, but the Plug'n'Play\nbuild and resolution strategy is supported as well. Plug'n'Play is an innovative\nstrategy for Node that is ",(0,i.kt)("a",{parentName:"p",href:"https://yarnpkg.com/features/pnp"},"used by Yarn"),"."),(0,i.kt)("p",null,"It is recommended to also set ",(0,i.kt)("inlineCode",{parentName:"p"},"symlink")," setting to ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," when using ",(0,i.kt)("inlineCode",{parentName:"p"},"pnp")," as\nyour linker."),(0,i.kt)("h3",{id:"symlink"},"symlink"),(0,i.kt)("p",null,"Added in: v5.9.0"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Default: ",(0,i.kt)("strong",{parentName:"li"},"true")),(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("strong",{parentName:"li"},"Boolean"))),(0,i.kt)("p",null,"When ",(0,i.kt)("inlineCode",{parentName:"p"},"symlink")," is set to ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),", pnpm creates a virtual store directory without\nany symlinks. It is a useful setting together with ",(0,i.kt)("inlineCode",{parentName:"p"},"node-linker=pnp"),"."),(0,i.kt)("h3",{id:"enable-modules-dir"},"enable-modules-dir"),(0,i.kt)("p",null,"Added in: v5.15.0"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Default: ",(0,i.kt)("strong",{parentName:"li"},"false")),(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("strong",{parentName:"li"},"Boolean"))),(0,i.kt)("p",null,"When ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),", pnpm will not write any files to the modules directory\n(",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules"),"). This is useful for when the modules directory is mounted with\nfilesystem in userspace (FUSE). There is an experimental CLI that allows you to\nmount a modules directory with FUSE: ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@pnpm/mount-modules"},"@pnpm/mount-modules"),"."),(0,i.kt)("h3",{id:"virtual-store-dir"},"virtual-store-dir"),(0,i.kt)("p",null,"Added in: v4.1.0"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Default: ",(0,i.kt)("strong",{parentName:"li"},"node_modules/.pnpm")),(0,i.kt)("li",{parentName:"ul"},"Types: ",(0,i.kt)("strong",{parentName:"li"},"path"))),(0,i.kt)("p",null,"The directory with links to the store. All direct and indirect dependencies of\nthe project are linked into this directory."),(0,i.kt)("p",null,"This is a useful setting that can solve issues with long paths on Windows. If\nyou have some dependencies with very long paths, you can select a virtual store\nin the root of your drive (for instance ",(0,i.kt)("inlineCode",{parentName:"p"},"C:\\my-project-store"),")."),(0,i.kt)("p",null,"Or you can set the virtual store to ",(0,i.kt)("inlineCode",{parentName:"p"},".pnpm")," and add it to ",(0,i.kt)("inlineCode",{parentName:"p"},".gitignore"),". This\nwill make stacktraces cleaner as paths to dependencies will be one directory\nhigher."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"NOTE:")," the virtual store cannot be shared between several projects. Every\nproject should have its own virtual store (except for in workspaces where the\nroot is shared)."),(0,i.kt)("h3",{id:"package-import-method"},"package-import-method"),(0,i.kt)("p",null,"Added in: v1.25.0"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Default: ",(0,i.kt)("strong",{parentName:"li"},"auto")),(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("strong",{parentName:"li"},"auto"),", ",(0,i.kt)("strong",{parentName:"li"},"hardlink"),", ",(0,i.kt)("strong",{parentName:"li"},"copy"),", ",(0,i.kt)("strong",{parentName:"li"},"clone"))),(0,i.kt)("p",null,"Controls the way packages are imported from the store."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"auto")," - try to clone packages from the store. If cloning is not supported\nthen hardlink packages from the store. If neither cloning nor linking is\npossible, fall back to copying"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"hardlink")," - hard link packages from the store"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"copy")," - copy packages from the store"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"clone")," - clone (AKA copy-on-write or reference link) packages from the store")),(0,i.kt)("h2",{id:"lockfile-settings"},"Lockfile Settings"),(0,i.kt)("h3",{id:"lockfile"},"lockfile"),(0,i.kt)("p",null,"Added in: v1.32.0 as ",(0,i.kt)("inlineCode",{parentName:"p"},"shrinkwrap")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Default: ",(0,i.kt)("strong",{parentName:"li"},"true")),(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("strong",{parentName:"li"},"Boolean"))),(0,i.kt)("p",null,"When set to ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),", pnpm won't read or generate a ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm-lock.yaml")," file."),(0,i.kt)("h3",{id:"prefer-frozen-lockfile"},"prefer-frozen-lockfile"),(0,i.kt)("p",null,"Added in: v1.37.1 as ",(0,i.kt)("inlineCode",{parentName:"p"},"prefer-frozen-shrinkwrap")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Default: ",(0,i.kt)("strong",{parentName:"li"},"true")," (from v1.38.0)"),(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("strong",{parentName:"li"},"Boolean"))),(0,i.kt)("p",null,"When set to ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," and the available ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm-lock.yaml")," satisfies the\n",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," dependencies directive, a headless installation is performed. A\nheadless installation skips all dependency resolution as it does not need to\nmodify the lockfile."),(0,i.kt)("h2",{id:"registry--authentication-settings"},"Registry & Authentication Settings"),(0,i.kt)("h3",{id:"registry"},"registry"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Default: ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"https://registry.npmjs.org/"},"https://registry.npmjs.org/"))),(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("strong",{parentName:"li"},"url"))),(0,i.kt)("p",null,"The base URL of the npm package registry (trailing slash included)."),(0,i.kt)("h4",{id:"scoperegistry"},"<","scope",">",":registry"),(0,i.kt)("p",null,"The npm registry that should be used for packages of the specified scope. For\nexample, setting ",(0,i.kt)("inlineCode",{parentName:"p"},"@babel:registry=https://example.com/packages/npm/"),"\nwill enforce that when you use ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm add @babel/core"),", or any ",(0,i.kt)("inlineCode",{parentName:"p"},"@babel")," scoped\npackage, the package will be fetched from ",(0,i.kt)("inlineCode",{parentName:"p"},"https://example.com/packages/npm"),"\ninstead of the default registry."),(0,i.kt)("h3",{id:"url_authtoken"},"<","URL",">",":_authToken"),(0,i.kt)("p",null,"Define the authentication bearer token to use when accessing the specified\nregistry. For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"//registry.npmjs.org/:_authToken=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx \n")),(0,i.kt)("p",null,"You may also use an environment variable. For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"//registry.npmjs.org/:_authToken=${NPM_TOKEN}\n")),(0,i.kt)("h3",{id:"urlalways-auth"},"<","URL",">",":always-auth"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Default: ",(0,i.kt)("strong",{parentName:"li"},"false")),(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("strong",{parentName:"li"},"Boolean"))),(0,i.kt)("p",null,"Force pnpm to always require authentication (even for GET requests) when\naccessing the specified registry. For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"@babel:registry=https://gitlab.com/api/v4/packages/npm/\n//gitlab.com/api/v4/packages/npm/:always-auth=true\n\nregistry=https://registry.npmjs.org/\n//registry.npmjs.org/:always-auth=true\n")),(0,i.kt)("h2",{id:"request-settings"},"Request Settings"),(0,i.kt)("h3",{id:"ca"},"ca"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Default: ",(0,i.kt)("strong",{parentName:"li"},"The npm CA certificate")),(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("strong",{parentName:"li"},"String, Array or null"))),(0,i.kt)("p",null,'The Certificate Authority signing certificate that is trusted for SSL\nconnections to the registry. Values should be in PEM format (AKA\n"Base-64 encoded X.509 (.CER)"). For example:'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'ca="-----BEGIN CERTIFICATE-----\\nXXXX\\nXXXX\\n-----END CERTIFICATE-----"\n')),(0,i.kt)("p",null,"Set to null to only allow known registrars, or to a specific CA cert to trust\nonly that specific signing authority."),(0,i.kt)("p",null,"Multiple CAs can be trusted by specifying an array of certificates:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'ca[]="..."\nca[]="..."\n')),(0,i.kt)("p",null,"See also the ",(0,i.kt)("inlineCode",{parentName:"p"},"strict-ssl")," config."),(0,i.kt)("h3",{id:"cafile"},"cafile"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Default: ",(0,i.kt)("strong",{parentName:"li"},"null")),(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("strong",{parentName:"li"},"path"))),(0,i.kt)("p",null,"A path to a file containing one or multiple Certificate Authority signing\ncertificates. Similar to the ",(0,i.kt)("inlineCode",{parentName:"p"},"ca")," setting, but allows for multiple CAs, as well\nas for the CA information to be stored in a file instead of being specified via\nCLI."),(0,i.kt)("h3",{id:"cert"},"cert"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Default: ",(0,i.kt)("strong",{parentName:"li"},"null")),(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("strong",{parentName:"li"},"String"))),(0,i.kt)("p",null,'A client certificate to pass when accessing the registry. Values should be in\nPEM format (AKA "Base-64 encoded X.509 (.CER)"). For example:'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-test"},'cert="-----BEGIN CERTIFICATE-----\\nXXXX\\nXXXX\\n-----END CERTIFICATE-----"\n')),(0,i.kt)("p",null,"It is not the path to a certificate file (and there is no ",(0,i.kt)("inlineCode",{parentName:"p"},"certfile")," option)."),(0,i.kt)("h3",{id:"https-proxy"},"https-proxy"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Default: ",(0,i.kt)("strong",{parentName:"li"},"null")),(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("strong",{parentName:"li"},"url"))),(0,i.kt)("p",null,"A proxy to use for outgoing HTTPS requests. If the ",(0,i.kt)("inlineCode",{parentName:"p"},"HTTPS_PROXY"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"https_proxy"),",\n",(0,i.kt)("inlineCode",{parentName:"p"},"HTTP_PROXY")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"http_proxy")," environment variables are set, their values will be\nused instead."),(0,i.kt)("h3",{id:"key"},"key"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Default: ",(0,i.kt)("strong",{parentName:"li"},"null")),(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("strong",{parentName:"li"},"String"))),(0,i.kt)("p",null,'A client key to pass when accessing the registry. Values should be in PEM format\n(AKA "Base-64 encoded X.509 (.CER)"). For example:'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'key="-----BEGIN PRIVATE KEY-----\\nXXXX\\nXXXX\\n-----END PRIVATE KEY-----"\n')),(0,i.kt)("p",null,"It is not the path to a key file (and there is no ",(0,i.kt)("inlineCode",{parentName:"p"},"keyfile")," option)."),(0,i.kt)("h3",{id:"local-address"},"local-address"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Default: ",(0,i.kt)("strong",{parentName:"li"},"undefined")),(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("strong",{parentName:"li"},"IP Address"))),(0,i.kt)("p",null,"The IP address of the local interface to use when making connections to the npm\nregistry. Must be IPv4 in versions of Node prior to 12.x."),(0,i.kt)("h3",{id:"proxy"},"proxy"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Default: ",(0,i.kt)("strong",{parentName:"li"},"null")),(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("strong",{parentName:"li"},"url"))),(0,i.kt)("p",null,"A proxy to use for outgoing http requests. If the HTTP_PROXY or http_proxy\nenvironment variables are set, proxy settings will be honored by the underlying\nrequest library."),(0,i.kt)("h3",{id:"noproxy"},"noproxy"),(0,i.kt)("p",null,"Added in: v5.18.8"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Default: ",(0,i.kt)("strong",{parentName:"li"},"null")),(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("strong",{parentName:"li"},"String"))),(0,i.kt)("p",null,"A comma-separated string of domain extensions that a proxy should not be used for."),(0,i.kt)("h3",{id:"strict-ssl"},"strict-ssl"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Default: ",(0,i.kt)("strong",{parentName:"li"},"true")),(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("strong",{parentName:"li"},"Boolean"))),(0,i.kt)("p",null,"Whether or not to do SSL key validation when making requests to the registry via\nHTTPS."),(0,i.kt)("p",null,"See also the ",(0,i.kt)("inlineCode",{parentName:"p"},"ca")," option."),(0,i.kt)("h3",{id:"network-concurrency"},"network-concurrency"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Default: ",(0,i.kt)("strong",{parentName:"li"},"16")),(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("strong",{parentName:"li"},"Number"))),(0,i.kt)("p",null,"Controls the maximum number of HTTP(S) requests to process simultaneously."),(0,i.kt)("h3",{id:"fetch-retries"},"fetch-retries"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Default: ",(0,i.kt)("strong",{parentName:"li"},"2")),(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("strong",{parentName:"li"},"Number"))),(0,i.kt)("p",null,"How many times to retry if pnpm fails to fetch from the registry."),(0,i.kt)("h3",{id:"fetch-retry-factor"},"fetch-retry-factor"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Default: ",(0,i.kt)("strong",{parentName:"li"},"10")),(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("strong",{parentName:"li"},"Number"))),(0,i.kt)("p",null,"The exponential factor for retry backoff."),(0,i.kt)("h3",{id:"fetch-retry-mintimeout"},"fetch-retry-mintimeout"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Default: ",(0,i.kt)("strong",{parentName:"li"},"10000 (10 seconds)")),(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("strong",{parentName:"li"},"Number"))),(0,i.kt)("p",null,"The minimum (base) timeout for retrying requests."),(0,i.kt)("h3",{id:"fetch-retry-maxtimeout"},"fetch-retry-maxtimeout"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Default: ",(0,i.kt)("strong",{parentName:"li"},"60000 (1 minute)")),(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("strong",{parentName:"li"},"Number"))),(0,i.kt)("p",null,"The maximum fallback timeout to ensure the retry factor does not make requests\ntoo long."),(0,i.kt)("h2",{id:"cli-settings"},"CLI Settings"),(0,i.kt)("h3",{id:"no-color"},"[no-]","color"),(0,i.kt)("p",null,"Added in: v4.1.0"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Default: ",(0,i.kt)("strong",{parentName:"li"},"auto")),(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("strong",{parentName:"li"},"auto"),", ",(0,i.kt)("strong",{parentName:"li"},"always"),", ",(0,i.kt)("strong",{parentName:"li"},"never"))),(0,i.kt)("p",null,"Controls colors in the output."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"auto")," - output uses colors when the standard output is a terminal or TTY."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"always")," - ignore the difference between terminals and pipes. You\u2019ll rarely\nwant this; in most scenarios, if you want color codes in your redirected\noutput, you can instead pass a ",(0,i.kt)("inlineCode",{parentName:"li"},"--color")," flag to the pnpm command to force it\nto use color codes. The default setting is almost always what you\u2019ll want."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"never")," - turns off colors. This is the setting used by ",(0,i.kt)("inlineCode",{parentName:"li"},"--no-color"),".")),(0,i.kt)("h3",{id:"loglevel"},"loglevel"),(0,i.kt)("p",null,"Added in: v4.13.0"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Default: ",(0,i.kt)("strong",{parentName:"li"},"info")),(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("strong",{parentName:"li"},"debug"),", ",(0,i.kt)("strong",{parentName:"li"},"info"),", ",(0,i.kt)("strong",{parentName:"li"},"warn"),", ",(0,i.kt)("strong",{parentName:"li"},"error"))),(0,i.kt)("p",null,"Any logs at or higher than the given level will be shown.\nYou can instead pass ",(0,i.kt)("inlineCode",{parentName:"p"},"--silent")," to turn off all output logs."),(0,i.kt)("h3",{id:"strict-peer-dependencies"},"strict-peer-dependencies"),(0,i.kt)("p",null,"Added in: v2.15.0"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Default: ",(0,i.kt)("strong",{parentName:"li"},"false")),(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("strong",{parentName:"li"},"Boolean"))),(0,i.kt)("p",null,"If this is enabled, commands will fail if there is a missing or invalid peer\ndependency in the tree."),(0,i.kt)("h3",{id:"use-beta-cli"},"use-beta-cli"),(0,i.kt)("p",null,"Added in: v3.6.0"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Default: ",(0,i.kt)("strong",{parentName:"li"},"false")),(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("strong",{parentName:"li"},"Boolean"))),(0,i.kt)("p",null,"Experimental option that enables beta features of the CLI. This means that you\nmay get some changes to the CLI functionality that are breaking changes, or\npotentially bugs."),(0,i.kt)("h3",{id:"recursive-install"},"recursive-install"),(0,i.kt)("p",null,"Added in: v5.4.0"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Default: ",(0,i.kt)("strong",{parentName:"li"},"true")),(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("strong",{parentName:"li"},"Boolean"))),(0,i.kt)("p",null,"If this is enabled, the primary behaviour of ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm install")," becomes that of\n",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm install -r"),", meaning the install is performed on all workspace or\nsubdirectory packages."),(0,i.kt)("p",null,"Else, ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm install")," will exclusively build the package in the current\ndirectory."),(0,i.kt)("h3",{id:"engine-strict"},"engine-strict"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Default: ",(0,i.kt)("strong",{parentName:"li"},"false")),(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("strong",{parentName:"li"},"Boolean"))),(0,i.kt)("p",null,"If this is enabled, pnpm will not install any package that claims to not be\ncompatible with the current Node version."),(0,i.kt)("p",null,"Regardless of this configuration, installation will always fail if a project\n(not a dependency) specifies an incompatible version in its ",(0,i.kt)("inlineCode",{parentName:"p"},"engines")," field."),(0,i.kt)("h3",{id:"npm-path"},"npm-path"),(0,i.kt)("p",null,"Added in: v4.8.0"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("strong",{parentName:"li"},"path"))),(0,i.kt)("p",null,"The location of the npm binary that pnpm uses for some actions, like publishing."),(0,i.kt)("h2",{id:"build-settings"},"Build Settings"),(0,i.kt)("h3",{id:"child-concurrency"},"child-concurrency"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Default: ",(0,i.kt)("strong",{parentName:"li"},"5")),(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("strong",{parentName:"li"},"Number"))),(0,i.kt)("p",null,"The maximum number of child processes to allocate simultaneously to build\nnode_modules."),(0,i.kt)("h3",{id:"side-effects-cache"},"side-effects-cache"),(0,i.kt)("p",null,"Added in: v1.31.0"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Default: ",(0,i.kt)("strong",{parentName:"li"},"false")),(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("strong",{parentName:"li"},"Boolean")),(0,i.kt)("li",{parentName:"ul"},"Stability: ",(0,i.kt)("strong",{parentName:"li"},"Experimental"))),(0,i.kt)("p",null,"Use and cache the results of (pre/post)install hooks."),(0,i.kt)("h3",{id:"side-effects-cache-readonly"},"side-effects-cache-readonly"),(0,i.kt)("p",null,"Added in: v1.31.0"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Default: ",(0,i.kt)("strong",{parentName:"li"},"false")),(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("strong",{parentName:"li"},"Boolean")),(0,i.kt)("li",{parentName:"ul"},"Stability: ",(0,i.kt)("strong",{parentName:"li"},"Experimental"))),(0,i.kt)("p",null,"Only use the side effects cache if present, do not create it for new packages."),(0,i.kt)("h3",{id:"unsafe-perm"},"unsafe-perm"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Default: ",(0,i.kt)("strong",{parentName:"li"},"false")," IF running as root, ELSE ",(0,i.kt)("strong",{parentName:"li"},"true")),(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("strong",{parentName:"li"},"Boolean"))),(0,i.kt)("p",null,"Set to true to enable UID/GID switching when running package scripts.\nIf set explicitly to false, then installing as a non-root user will fail."),(0,i.kt)("h2",{id:"other-settings"},"Other Settings"),(0,i.kt)("h3",{id:"use-running-store-server"},"use-running-store-server"),(0,i.kt)("p",null,"Added in: v2.5.0"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Default: ",(0,i.kt)("strong",{parentName:"li"},"false")),(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("strong",{parentName:"li"},"Boolean"))),(0,i.kt)("p",null,"Only allows installation with a store server. If no store server is running,\ninstallation will fail."),(0,i.kt)("h3",{id:"save-prefix"},"save-prefix"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Default: ",(0,i.kt)("strong",{parentName:"li"},"'^'")),(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("strong",{parentName:"li"},"String"))),(0,i.kt)("p",null,"Configure how versions of packages installed to a ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," file get\nprefixed."),(0,i.kt)("p",null,"For example, if a package has version ",(0,i.kt)("inlineCode",{parentName:"p"},"1.2.3"),", by default its version is set to\n",(0,i.kt)("inlineCode",{parentName:"p"},"^1.2.3")," which allows minor upgrades for that package, but after\n",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm config set save-prefix='~'")," it would be set to ",(0,i.kt)("inlineCode",{parentName:"p"},"~1.2.3")," which only allows\npatch upgrades."),(0,i.kt)("p",null,"This setting is ignored when the added package has a range specified. For\ninstance, ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm add foo@2")," will set the version of ",(0,i.kt)("inlineCode",{parentName:"p"},"foo")," in ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," to\n",(0,i.kt)("inlineCode",{parentName:"p"},"2"),", regardless of the value of ",(0,i.kt)("inlineCode",{parentName:"p"},"save-prefix"),"."),(0,i.kt)("h3",{id:"tag"},"tag"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Default: ",(0,i.kt)("strong",{parentName:"li"},"latest")),(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("strong",{parentName:"li"},"String"))),(0,i.kt)("p",null,"If you ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm add")," a package and you don't provide a specific version, then it\nwill install the package at the version registered under the tag from this\nsetting."),(0,i.kt)("p",null,"This also sets the tag that is added to the ",(0,i.kt)("inlineCode",{parentName:"p"},"package@version")," specified by the\n",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm tag")," command if no explicit tag is given."),(0,i.kt)("h3",{id:"global-dir"},"global-dir"),(0,i.kt)("p",null,"Added in: v4.2.0"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Default: ",(0,i.kt)("strong",{parentName:"li"},"<","path to node",">","/pnpm-global")),(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("strong",{parentName:"li"},"path"))),(0,i.kt)("p",null,"Specify a custom directory to store global packages."))}k.isMDXComponent=!0}}]);