"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7634],{9613:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var o=t(9496);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)t=s[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)t=s[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=o.createContext({}),u=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=u(e.components);return o.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},p=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=u(t),m=r,v=p["".concat(l,".").concat(m)]||p[m]||c[m]||s;return t?o.createElement(v,a(a({ref:n},d),{},{components:t})):o.createElement(v,a({ref:n},d))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,a=new Array(s);a[0]=p;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var u=2;u<s;u++)a[u]=t[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}p.displayName="MDXCreateElement"},2416:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>c});var o=t(2182),r=t(9028),s=(t(9496),t(9613)),a=["components"],i={id:"motivation",title:"Motivation"},l=void 0,u={unversionedId:"motivation",id:"version-5.x/motivation",title:"Motivation",description:"\xc9conomiser de l'espace disque et booster la vitesse d'installation",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-5.x/motivation.md",sourceDirName:".",slug:"/motivation",permalink:"/fr/5.x/motivation",editUrl:"https://crowdin.com/project/pnpm/fr",tags:[],version:"5.x",frontMatter:{id:"motivation",title:"Motivation"},sidebar:"version-5.x/docs",next:{title:"Installation",permalink:"/fr/5.x/installation"}},d={},c=[{value:"\xc9conomiser de l&#39;espace disque et booster la vitesse d&#39;installation",id:"\xe9conomiser-de-lespace-disque-et-booster-la-vitesse-dinstallation",level:2},{value:"Cr\xe9ation d&#39;un dossier node_modules non plat",id:"cr\xe9ation-dun-dossier-node_modules-non-plat",level:2}],p={toc:c};function m(e){var n=e.components,t=(0,r.Z)(e,a);return(0,s.kt)("wrapper",(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"\xe9conomiser-de-lespace-disque-et-booster-la-vitesse-dinstallation"},"\xc9conomiser de l'espace disque et booster la vitesse d'installation"),(0,s.kt)("p",null,"Lorsque vous utilisez npm ou Yarn, si vous avez 100 projets utilisant une d\xe9pendance, vous aurez 100 copies de cette d\xe9pendance enregistr\xe9es sur le disque. Avec pnpm, la d\xe9pendance sera stock\xe9e dans un stockage adressable au contenu, donc:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Si vous d\xe9pendez de diff\xe9rentes versions de la d\xe9pendance, seuls les fichiers qui diff\xe8rent sont ajout\xe9s au stockage. Par exemple, si elle a 100 fichiers, et qu'une nouvelle version a un changement dans un seul de ces fichiers, ",(0,s.kt)("inlineCode",{parentName:"li"},"pnpm update")," ajoutera seulement 1 nouveau fichier au stockage, au lieu de cloner la d\xe9pendance toute enti\xe8re juste pour un seul changement."),(0,s.kt)("li",{parentName:"ol"},"Tous les fichiers sont enregistr\xe9s en un seul endroit sur le disque. Lorsque des packages sont install\xe9s, leurs fichiers sont li\xe9s directement \xe0 partir de cet emplacement unique, ne consommant aucun espace disque suppl\xe9mentaire. Cela vous permet de partager les d\xe9pendances de m\xeame version entre les projets.")),(0,s.kt)("p",null,"En cons\xe9quence, vous \xe9conomisez beaucoup d'espace sur votre disque proportionnellement au nombre de projets et de d\xe9pendances, et vous avez des installations beaucoup plus rapides !"),(0,s.kt)("h2",{id:"cr\xe9ation-dun-dossier-node_modules-non-plat"},"Cr\xe9ation d'un dossier node_modules non plat"),(0,s.kt)("p",null,"Lors de l'installation de d\xe9pendances avec npm, tous les packages sont hiss\xe9s \xe0 la racine du dossier des modules. Par cons\xe9quent, le code source a acc\xe8s aux d\xe9pendances qui ne sont pas ajout\xe9es en tant que d\xe9pendances au projet."),(0,s.kt)("p",null,"pnpm utilise des liens symboliques pour n'ajouter que les d\xe9pendances directes du projet \xe0 la racine du dossier des modules. Si vous souhaitez avoir plus de d\xe9tails sur la structure unique de ",(0,s.kt)("inlineCode",{parentName:"p"},"node_modules")," que pnpm cr\xe9e et pourquoi elle fonctionne bien avec l'environnement de Node.js, lisez:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/blog/2020/05/27/flat-node-modules-is-not-the-only-way"},"Flat node_modules n'est pas le seul moyen")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/fr/5.x/symlinked-node-modules-structure"},"Structure node_modules en lien symbolique"))))}m.isMDXComponent=!0}}]);