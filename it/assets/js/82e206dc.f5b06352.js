"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4706],{9613:(e,n,i)=>{i.d(n,{Zo:()=>c,kt:()=>m});var t=i(9496);function a(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function o(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,t)}return i}function l(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?o(Object(i),!0).forEach((function(n){a(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function r(e,n){if(null==e)return{};var i,t,a=function(e,n){if(null==e)return{};var i,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)i=o[t],n.indexOf(i)>=0||(a[i]=e[i]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)i=o[t],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var s=t.createContext({}),d=function(e){var n=t.useContext(s),i=n;return e&&(i="function"==typeof e?e(n):l(l({},n),e)),i},c=function(e){var n=d(e.components);return t.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var i=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),u=d(i),m=a,v=u["".concat(s,".").concat(m)]||u[m]||p[m]||o;return i?t.createElement(v,l(l({ref:n},c),{},{components:i})):t.createElement(v,l({ref:n},c))}));function m(e,n){var i=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=i.length,l=new Array(o);l[0]=u;var r={};for(var s in n)hasOwnProperty.call(n,s)&&(r[s]=n[s]);r.originalType=e,r.mdxType="string"==typeof e?e:a,l[1]=r;for(var d=2;d<o;d++)l[d]=i[d];return t.createElement.apply(null,l)}return t.createElement.apply(null,i)}u.displayName="MDXCreateElement"},1700:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>r,metadata:()=>d,toc:()=>p});var t=i(2182),a=i(9028),o=(i(9496),i(9613)),l=["components"],r={id:"motivation",title:"Motivazione"},s=void 0,d={unversionedId:"motivation",id:"version-6.x/motivation",title:"Motivazione",description:"Risparmio dello spazio su disco ed aumento della velocit\xe0 di installazione",source:"@site/i18n/it/docusaurus-plugin-content-docs/version-6.x/motivation.md",sourceDirName:".",slug:"/motivation",permalink:"/it/motivation",editUrl:"https://crowdin.com/project/pnpm/it",tags:[],version:"6.x",frontMatter:{id:"motivation",title:"Motivazione"},sidebar:"version-6.x/docs",next:{title:"Installazione",permalink:"/it/installation"}},c={},p=[{value:"Risparmio dello spazio su disco ed aumento della velocit\xe0 di installazione",id:"risparmio-dello-spazio-su-disco-ed-aumento-della-velocit\xe0-di-installazione",level:2},{value:"Creazione di una cartella node_modules non flat",id:"creazione-di-una-cartella-node_modules-non-flat",level:2}],u={toc:p};function m(e){var n=e.components,r=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,t.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"risparmio-dello-spazio-su-disco-ed-aumento-della-velocit\xe0-di-installazione"},"Risparmio dello spazio su disco ed aumento della velocit\xe0 di installazione"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://twitter.com/HemSays/status/1434921646083563525/photo/1"},(0,o.kt)("img",{src:i(3005).Z,width:"2500",height:"1406"}))),(0,o.kt)("p",null,"Quando si usa npm o Yarn, se hai 100 progetti che usano una dipendenza, avrai 100 copie di quella dipendenza salvata su disco. Con pnpm, la dipendenza sar\xe0 memorizzata in un archivio indirizzabile al contenuto, quindi:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Se dipendi da versioni diverse della dipendenza, solo i file diversi sono aggiunti all'archivio. Ad esempio, se una dipendenza ha 100 file e una nuova versione ha cambiamenti in un solo file, ",(0,o.kt)("inlineCode",{parentName:"li"},"pnpm update")," aggiunger\xe0 solamente un nuovo file all'interno dell'archivio, invece di clonare l'intera dipendenza solo per una modifica singola."),(0,o.kt)("li",{parentName:"ol"},"Tutti i file sono salvati in un'unica posizione sul disco. Quando i pacchetti vengono installati, i loro file sono collegati fisicamente da quella singola posizione, senza consumare spazio su disco aggiuntivo. Ci\xf2 consente di condividere dipendenze della stessa versione tra progetti.")),(0,o.kt)("p",null,"Di conseguenza, \xe8 possibile risparmiare molto spazio su disco proporzionalmente al numero di progetti e dipendenze, e avrai installazioni molto pi\xf9 veloci!"),(0,o.kt)("h2",{id:"creazione-di-una-cartella-node_modules-non-flat"},"Creazione di una cartella node_modules non flat"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://twitter.com/xiaokedada/status/1471691763102679041/photo/1"},(0,o.kt)("img",{src:i(7194).Z,width:"2920",height:"1392"}))),(0,o.kt)("p",null,"Quando si installano le dipendenze con npm o Yarn Classic, tutti i pacchetti vengono agganciati alla radice della cartella dei moduli. Di conseguenza, il codice sorgente ha accesso a dipendenze non aggiunte come dipendenze al progetto."),(0,o.kt)("p",null,"Per impostazione predefinita, pnpm utilizza collegamenti simbolici per aggiungere solo le dipendenze dirette del progetto nella root della cartella dei moduli. Se desideri maggiori dettagli sulla struttura unica di ",(0,o.kt)("inlineCode",{parentName:"p"},"node_modules")," che pnpm crea e perch\xe9 funziona bene con l'ecosistema Node.js, leggi:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/blog/2020/05/27/flat-node-modules-is-not-the-only-way"},"La node_modules flat non \xe8 l'unico modo")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/it/symlinked-node-modules-structure"},"Struttura node_modules con collegamenti simbolici"))),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Se i tuoi strumenti non funzionano bene con i collegamenti simbolici, puoi comunque utilizzare pnpm e impostare l'impostazione ",(0,o.kt)("a",{parentName:"p",href:"npmrc#node-linker"},"node-linker")," su ",(0,o.kt)("inlineCode",{parentName:"p"},"hoisted"),". Questo indicher\xe0 a pnpm di creare una cartella node_modules simile a quelle create da npm e Yarn Classic."))))}m.isMDXComponent=!0},3005:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/cafs-illustration-7be6bd97e43ba11a031b099869321deb.jpg"},7194:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/node-modules-structure-8ab301ddaed3b7530858b233f5b3be57.jpg"}}]);