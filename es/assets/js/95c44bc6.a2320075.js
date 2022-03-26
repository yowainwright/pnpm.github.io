"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4779],{9613:(e,n,r)=>{r.d(n,{Zo:()=>l,kt:()=>m});var o=r(9496);function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,o,t=function(e,n){if(null==e)return{};var r,o,t={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var u=o.createContext({}),s=function(e){var n=o.useContext(u),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},l=function(e){var n=s(e.components);return o.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var r=e.components,t=e.mdxType,a=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=s(r),m=t,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||a;return r?o.createElement(f,i(i({ref:n},l),{},{components:r})):o.createElement(f,i({ref:n},l))}));function m(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var a=r.length,i=new Array(a);i[0]=d;var c={};for(var u in n)hasOwnProperty.call(n,u)&&(c[u]=n[u]);c.originalType=e,c.mdxType="string"==typeof e?e:t,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6091:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>u,default:()=>m,frontMatter:()=>c,metadata:()=>s,toc:()=>p});var o=r(2182),t=r(9028),a=(r(9496),r(9613)),i=["components"],c={id:"production",title:"Producci\xf3n"},u=void 0,s={unversionedId:"production",id:"version-6.x/production",title:"Producci\xf3n",description:"Hay dos formas de iniciar su paquete en un entorno de producci\xf3n con pnpm. Uno de ellos es hacer commit del archivo de bloqueo. A continuaci\xf3n, en su entorno de producci\xf3n, ejecute pnpm install -esto construir\xe1 el \xe1rbol de dependencia utilizando el archivo de bloqueo, lo que significa que las versiones de dependencia ser\xe1n coherentes con la forma en que fueron cuando se hizo commit del archivo de bloqueo. Esta es la forma m\xe1s efectiva (y la que recomendamos) para asegurar que sus persiste \xe1rbol de dependencias a trav\xe9s de entornos.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.x/production.md",sourceDirName:".",slug:"/production",permalink:"/es/production",editUrl:"https://crowdin.com/project/pnpm/es-ES",tags:[],version:"6.x",frontMatter:{id:"production",title:"Producci\xf3n"}},l={},p=[],d={toc:p};function m(e){var n=e.components,r=(0,t.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},d,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Hay dos formas de iniciar su paquete en un entorno de producci\xf3n con pnpm. Uno de ellos es hacer commit del archivo de bloqueo. A continuaci\xf3n, en su entorno de producci\xf3n, ejecute ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm install")," -esto construir\xe1 el \xe1rbol de dependencia utilizando el archivo de bloqueo, lo que significa que las versiones de dependencia ser\xe1n coherentes con la forma en que fueron cuando se hizo commit del archivo de bloqueo. Esta es la forma m\xe1s efectiva (y la que recomendamos) para asegurar que sus persiste \xe1rbol de dependencias a trav\xe9s de entornos."),(0,a.kt)("p",null,"El otro m\xe9todo es hacer commit del archivo de bloqueo y copiar el almac\xe9n de paquetes a su entorno de producci\xf3n (puede cambiar donde con la ",(0,a.kt)("a",{parentName:"p",href:"npmrc#store-dir"},"opci\xf3n de ubicaci\xf3n del almac\xe9n"),"). Luego, puede ejecutar ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm install --offline")," y pnpm usar\xe1 los paquetes de la tienda global, por lo que no realizar\xe1 ninguna solicitud al registro. Esto es recomendado ",(0,a.kt)("strong",{parentName:"p"},"SOLAMENTE")," para entornos donde el acceso externo al registro no est\xe1 disponible por cualquier motivo."))}m.isMDXComponent=!0}}]);