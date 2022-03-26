"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3121],{9613:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),s=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,k=m["".concat(o,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(k,l(l({ref:t},c),{},{components:n})):r.createElement(k,l({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},767:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>p,metadata:()=>s,toc:()=>u});var r=n(2182),a=n(9028),i=(n(9496),n(9613)),l=["components"],p={id:"run",title:"pnpm run"},o=void 0,s={unversionedId:"cli/run",id:"version-7.x/cli/run",title:"pnpm run",description:"\u30a8\u30a4\u30ea\u30a2\u30b9: run-script",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-7.x/cli/run.md",sourceDirName:"cli",slug:"/cli/run",permalink:"/ja/7.x/cli/run",editUrl:"https://crowdin.com/project/pnpm/ja",tags:[],version:"7.x",frontMatter:{id:"run",title:"pnpm run"},sidebar:"version-7.x/docs",previous:{title:"pnpm why",permalink:"/ja/7.x/cli/why"},next:{title:"pnpm test",permalink:"/ja/7.x/cli/test"}},c={},u=[{value:"\u4f8b",id:"\u4f8b",level:2},{value:"\u8a73\u7d30\u60c5\u5831",id:"\u8a73\u7d30\u60c5\u5831",level:2},{value:"<code>npm run</code> \u3068\u306e\u9055\u3044",id:"npm-run-\u3068\u306e\u9055\u3044",level:2},{value:"Options",id:"options",level:2},{value:"script-shell",id:"script-shell",level:3},{value:"shell-emulator",id:"shell-emulator",level:3},{value:"--recursive, -r",id:"--recursive--r",level:3},{value:"--if-present",id:"--if-present",level:3},{value:"--parallel",id:"--parallel",level:3},{value:"--stream",id:"--stream",level:3},{value:"--aggregate-output",id:"--aggregate-output",level:3},{value:"enable-pre-post-scripts",id:"enable-pre-post-scripts",level:3},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",level:3}],m={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u30a8\u30a4\u30ea\u30a2\u30b9: ",(0,i.kt)("inlineCode",{parentName:"p"},"run-script")),(0,i.kt)("p",null,"\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u30de\u30cb\u30d5\u30a7\u30b9\u30c8\u30d5\u30a1\u30a4\u30eb\u3067\u5b9a\u7fa9\u3055\u308c\u305f\u30b9\u30af\u30ea\u30d7\u30c8\u3092\u5b9f\u884c\u3057\u307e\u3059\u3002"),(0,i.kt)("h2",{id:"\u4f8b"},"\u4f8b"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," \u306b\u6b21\u306e\u3088\u3046\u306b ",(0,i.kt)("inlineCode",{parentName:"p"},"watch")," \u3068\u3044\u3046\u30b9\u30af\u30ea\u30d7\u30c8\u304c\u5b9a\u7fa9\u3055\u308c\u3066\u3044\u308b\u3068\u3057\u307e\u3057\u3087\u3046\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"scripts": {\n    "watch": "build-command --watch"\n}\n')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"pnpm run watch")," \u3092\u4f7f\u3063\u3066\u3053\u306e\u30b9\u30af\u30ea\u30d7\u30c8\u3092\u5b9f\u884c\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059! \u30b7\u30f3\u30d7\u30eb\u3067\u3059\u3088\u306d\uff1f \u30ad\u30fc\u3092\u306a\u308b\u3079\u304f\u6253\u3061\u305f\u304f\u306a\u3044\u4eba\u306e\u305f\u3081\u306b\u3001\u5168\u3066\u306e\u30b9\u30af\u30ea\u30d7\u30c8\u306f pnpm \u30b3\u30de\u30f3\u30c9\u306e\u30a8\u30a4\u30ea\u30a2\u30b9\u3068\u3057\u3066\u8a2d\u5b9a\u3055\u308c\u307e\u3059\u3002\u3064\u307e\u308a\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm watch")," \u306f\u305f\u3060\u306e ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm run watch")," \u306e\u7701\u7565\u3067\u3059(\u30b9\u30af\u30ea\u30d7\u30c8\u306e\u540d\u524d\u304c pnpm \u30b3\u30de\u30f3\u30c9\u3068\u88ab\u3063\u3066\u3044\u306a\u3044\u9650\u308a)\u3002"),(0,i.kt)("h2",{id:"\u8a73\u7d30\u60c5\u5831"},"\u8a73\u7d30\u60c5\u5831"),(0,i.kt)("p",null,"\u30b7\u30a7\u30eb\u306e\u65e2\u5b58\u306e ",(0,i.kt)("inlineCode",{parentName:"p"},"PATH")," \u306b\u52a0\u3048\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm run")," \u306f ",(0,i.kt)("inlineCode",{parentName:"p"},"scripts")," \u306b\u5bfe\u3057\u3001 ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules/.bin")," \u3092 ",(0,i.kt)("inlineCode",{parentName:"p"},"PATH")," \u306b\u8ffd\u52a0\u3057\u307e\u3059\u3002 \u3053\u308c\u306f\u3001\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308c\u3070\u3001\u305d\u308c\u3092\u30b9\u30af\u30ea\u30d7\u30c8\u5185\u3067\u901a\u5e38\u306e\u30b3\u30de\u30f3\u30c9\u306e\u3088\u3046\u306b\u4f7f\u3048\u308b\u3053\u3068\u3092\u610f\u5473\u3057\u307e\u3059\u3002 \u4f8b\u3048\u3070\u3001 ",(0,i.kt)("inlineCode",{parentName:"p"},"eslint")," \u304c\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u3066\u3044\u308b\u5834\u5408:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"lint": "eslint src --fix"\n')),(0,i.kt)("p",null,"\u307e\u305f\u3001 ",(0,i.kt)("inlineCode",{parentName:"p"},"eslint")," \u304c\u30b7\u30a7\u30eb\u306b\u30b0\u30ed\u30fc\u30d0\u30eb\u306b\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u3066\u3044\u306a\u304f\u3066\u3082\u3001\u5b9f\u884c\u3055\u308c\u307e\u3059\u3002"),(0,i.kt)("p",null,"For workspaces, ",(0,i.kt)("inlineCode",{parentName:"p"},"<workspace root>/node_modules/.bin")," is also added to the ",(0,i.kt)("inlineCode",{parentName:"p"},"PATH"),", so if a tool is installed in the workspace root, it may be called in any workspace package's ",(0,i.kt)("inlineCode",{parentName:"p"},"scripts"),"."),(0,i.kt)("h2",{id:"npm-run-\u3068\u306e\u9055\u3044"},(0,i.kt)("inlineCode",{parentName:"h2"},"npm run")," \u3068\u306e\u9055\u3044"),(0,i.kt)("p",null,"By default, pnpm doesn't run arbitrary ",(0,i.kt)("inlineCode",{parentName:"p"},"pre")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"post")," hooks for user-defined scripts (such as ",(0,i.kt)("inlineCode",{parentName:"p"},"prestart"),"). This behavior, inherited from npm, caused scripts to be implicit rather than explicit, obfuscating the execution flow. It also led to surprising executions with ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm serve")," also running ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm preserve"),"."),(0,i.kt)("p",null,"If for some reason you need the pre/post scripts behavior of npm, use the ",(0,i.kt)("inlineCode",{parentName:"p"},"enable-pre-post-scripts")," option."),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("h3",{id:"script-shell"},"script-shell"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u30c7\u30d5\u30a9\u30eb\u30c8: ",(0,i.kt)("strong",{parentName:"li"},"null")),(0,i.kt)("li",{parentName:"ul"},"\u30bf\u30a4\u30d7: ",(0,i.kt)("strong",{parentName:"li"},"path"))),(0,i.kt)("p",null,"The shell to use for scripts run with the ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm run")," command."),(0,i.kt)("p",null,"For instance, to force usage of Git Bash on Windows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'pnpm config set script-shell "C:\\\\Program Files\\\\git\\\\bin\\\\bash.exe"\n')),(0,i.kt)("h3",{id:"shell-emulator"},"shell-emulator"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u30c7\u30d5\u30a9\u30eb\u30c8: ",(0,i.kt)("strong",{parentName:"li"},"false")),(0,i.kt)("li",{parentName:"ul"},"\u30bf\u30a4\u30d7: ",(0,i.kt)("strong",{parentName:"li"},"Boolean"))),(0,i.kt)("p",null,"When ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),", pnpm will use a JavaScript implementation of a ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@yarnpkg/shell"},"bash-like shell")," to execute scripts."),(0,i.kt)("p",null,"This option simplifies cross-platform scripting. For instance, by default, the next script will fail on non-POSIX-compliant systems:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"scripts": {\n  "test": "NODE_ENV=test node test.js"\n}\n')),(0,i.kt)("p",null,"But if the ",(0,i.kt)("inlineCode",{parentName:"p"},"shell-emulator")," setting is set to ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),", it will work on all platforms."),(0,i.kt)("h3",{id:"--recursive--r"},"--recursive, -r"),(0,i.kt)("p",null,"This runs an arbitrary command from each package's \"scripts\" object. If a package doesn't have the command, it is skipped. If none of the packages have the command, the command fails."),(0,i.kt)("h3",{id:"--if-present"},"--if-present"),(0,i.kt)("p",null,"You can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"--if-present")," flag to avoid exiting with a non-zero exit code when the script is undefined. This lets you run potentially undefined scripts without breaking the execution chain."),(0,i.kt)("h3",{id:"--parallel"},"--parallel"),(0,i.kt)("p",null,"Completely disregard concurrency and topological sorting, running a given script immediately in all matching packages with prefixed streaming output. This is the preferred flag for long-running processes over many packages, for instance, a lengthy build process."),(0,i.kt)("h3",{id:"--stream"},"--stream"),(0,i.kt)("p",null,"Stream output from child processes immediately, prefixed with the originating package directory. This allows output from different packages to be interleaved."),(0,i.kt)("h3",{id:"--aggregate-output"},"--aggregate-output"),(0,i.kt)("p",null,"Aggregate output from child processes that are run in parallel, and only print output when the child process is finished. It makes reading large logs after running ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm -r <command>")," with ",(0,i.kt)("inlineCode",{parentName:"p"},"--parallel")," or with ",(0,i.kt)("inlineCode",{parentName:"p"},"--workspace-concurrency=<number>")," much easier (especially on CI). Only ",(0,i.kt)("inlineCode",{parentName:"p"},"--reporter=append-only")," is supported."),(0,i.kt)("h3",{id:"enable-pre-post-scripts"},"enable-pre-post-scripts"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u30c7\u30d5\u30a9\u30eb\u30c8: ",(0,i.kt)("strong",{parentName:"li"},"false")),(0,i.kt)("li",{parentName:"ul"},"\u30bf\u30a4\u30d7: ",(0,i.kt)("strong",{parentName:"li"},"Boolean"))),(0,i.kt)("p",null,"When ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),", pnpm will run any pre/post scripts automatically. So running ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm foo")," will be like running ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm prefoo && pnpm foo && pnpm postfoo"),"."),(0,i.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/ja/7.x/filtering"},"\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u30d5\u30a3\u30eb\u30bf\u30ea\u30f3\u30b0\u306b\u95a2\u3059\u308b\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002")))}d.isMDXComponent=!0}}]);