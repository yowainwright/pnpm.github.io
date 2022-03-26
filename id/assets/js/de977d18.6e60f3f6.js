"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6784],{9613:(e,a,n)=>{n.d(a,{Zo:()=>s,kt:()=>u});var t=n(9496);function i(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function p(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function r(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?p(Object(n),!0).forEach((function(a){i(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function d(e,a){if(null==e)return{};var n,t,i=function(e,a){if(null==e)return{};var n,t,i={},p=Object.keys(e);for(t=0;t<p.length;t++)n=p[t],a.indexOf(n)>=0||(i[n]=e[n]);return i}(e,a);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(t=0;t<p.length;t++)n=p[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=t.createContext({}),o=function(e){var a=t.useContext(l),n=a;return e&&(n="function"==typeof e?e(a):r(r({},a),e)),n},s=function(e){var a=o(e.components);return t.createElement(l.Provider,{value:a},e.children)},k={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},m=t.forwardRef((function(e,a){var n=e.components,i=e.mdxType,p=e.originalType,l=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),m=o(n),u=i,g=m["".concat(l,".").concat(u)]||m[u]||k[u]||p;return n?t.createElement(g,r(r({ref:a},s),{},{components:n})):t.createElement(g,r({ref:a},s))}));function u(e,a){var n=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var p=n.length,r=new Array(p);r[0]=m;var d={};for(var l in a)hasOwnProperty.call(a,l)&&(d[l]=a[l]);d.originalType=e,d.mdxType="string"==typeof e?e:i,r[1]=d;for(var o=2;o<p;o++)r[o]=n[o];return t.createElement.apply(null,r)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8712:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>d,metadata:()=>o,toc:()=>k});var t=n(2182),i=n(9028),p=(n(9496),n(9613)),r=["components"],d={id:"faq",title:"Pertanyaan yang Sering Diajukan"},l=void 0,o={unversionedId:"faq",id:"version-6.x/faq",title:"Pertanyaan yang Sering Diajukan",description:"Mengapa folder node_modules saya menggunakan ruang penyimpanan jika paket disimpan di store global?",source:"@site/i18n/id/docusaurus-plugin-content-docs/version-6.x/faq.md",sourceDirName:".",slug:"/faq",permalink:"/id/faq",editUrl:"https://crowdin.com/project/pnpm/id",tags:[],version:"6.x",frontMatter:{id:"faq",title:"Pertanyaan yang Sering Diajukan"}},s={},k=[{value:"Mengapa folder <code>node_modules</code> saya menggunakan ruang penyimpanan jika paket disimpan di store global?",id:"mengapa-folder-node_modules-saya-menggunakan-ruang-penyimpanan-jika-paket-disimpan-di-store-global",level:2},{value:"Apakah hard link bekerja pada Windows?",id:"apakah-hard-link-bekerja-pada-windows",level:2},{value:"Tetapi pendekatan <code>node_modules</code> bersarang tidak kompatibel dengan Windows?",id:"tetapi-pendekatan-node_modules-bersarang-tidak-kompatibel-dengan-windows",level:2},{value:"Bagaimana dengan symlink melingkar?",id:"bagaimana-dengan-symlink-melingkar",level:2},{value:"Kenapa lebih banyak menggunakan hard link? Kenapa tidak menggunakan symlink langsung ke store global?",id:"kenapa-lebih-banyak-menggunakan-hard-link-kenapa-tidak-menggunakan-symlink-langsung-ke-store-global",level:2},{value:"Apakah pnpm berfungsi di banyak drive atau di banyak filesystem?",id:"apakah-pnpm-berfungsi-di-banyak-drive-atau-di-banyak-filesystem",level:2},{value:"Jalur store ditentukan",id:"jalur-store-ditentukan",level:3},{value:"Jalur store TIDAK ditentukan",id:"jalur-store-tidak-ditentukan",level:3},{value:"What does <code>pnpm</code> stand for?",id:"what-does-pnpm-stand-for",level:2},{value:"<code>pnpm</code> does not work with &lt;YOUR-PROJECT-HERE&gt;?",id:"pnpm-does-not-work-with-your-project-here",level:2},{value:"Solusi 1",id:"solusi-1",level:3},{value:"Solusi 2",id:"solusi-2",level:3},{value:"Solusi 3",id:"solusi-3",level:3}],m={toc:k};function u(e){var a=e.components,n=(0,i.Z)(e,r);return(0,p.kt)("wrapper",(0,t.Z)({},m,n,{components:a,mdxType:"MDXLayout"}),(0,p.kt)("h2",{id:"mengapa-folder-node_modules-saya-menggunakan-ruang-penyimpanan-jika-paket-disimpan-di-store-global"},"Mengapa folder ",(0,p.kt)("inlineCode",{parentName:"h2"},"node_modules")," saya menggunakan ruang penyimpanan jika paket disimpan di store global?"),(0,p.kt)("p",null,"pnpm membuat ",(0,p.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Hard_link"},"hard link (tautan keras)")," dari store global ke folder ",(0,p.kt)("inlineCode",{parentName:"p"},"node_modules")," proyek. Hard link mengarah ke tempat yang sama pada penyimpanan dimana berkas asli berada. Ambil contoh, jika Anda memiliki ",(0,p.kt)("inlineCode",{parentName:"p"},"foo")," di proyek Anda sebagai dependensi dan itu menempati ruang 1MB, maka itu akan terlihat seperti menempati 1MB ruang di folder ",(0,p.kt)("inlineCode",{parentName:"p"},"node_modules")," proyek dan jumlah ruang yang sama di store global. Namun, 1MB itu adalah ",(0,p.kt)("em",{parentName:"p"},"ruang yang sama")," pada penyimpanan yang dialamatkan dari dua lokasi berbeda. Jadi total ",(0,p.kt)("inlineCode",{parentName:"p"},"foo")," menempati 1MB, bukan 2MB."),(0,p.kt)("p",null,"Untuk lebih lanjut tentang hal ini:"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://unix.stackexchange.com/questions/88423/why-do-hard-links-seem-to-take-the-same-space-as-the-originals"},"Mengapa hard link tampaknya mengambil ruang yang sama dengan aslinya?")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://gist.github.com/zkochan/106cfef49f8476b753a9cbbf9c65aff1"},"Sebuah utas dari ruang obrolan pnpm")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://github.com/pnpm/pnpm/issues/794"},"Sebuah issue di repositori pnpm"))),(0,p.kt)("h2",{id:"apakah-hard-link-bekerja-pada-windows"},"Apakah hard link bekerja pada Windows?"),(0,p.kt)("p",null,"Singkatnya ya. Menggunakan symbolic link (tautan simbolis) pada Windows bisa dikatakan bermasalah, namun pnpm punya solusinya. Untuk Windows, kami menggunakan ",(0,p.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/windows/win32/fileio/hard-links-and-junctions"},"junction")," sebagai gantinya."),(0,p.kt)("h2",{id:"tetapi-pendekatan-node_modules-bersarang-tidak-kompatibel-dengan-windows"},"Tetapi pendekatan ",(0,p.kt)("inlineCode",{parentName:"h2"},"node_modules")," bersarang tidak kompatibel dengan Windows?"),(0,p.kt)("p",null,"Versi awal npm memiliki masalah karena menyarangkan semua ",(0,p.kt)("inlineCode",{parentName:"p"},"node_modules")," (lihat ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/nodejs/node-v0.x-archive/issues/6960"},"issue ini"),". Namun, pnpm tidak membuat folder yang dalam, ia menyimpan semua paket secara datar dan menggunakan symbolic link untuk membuat struktur pohon dependensi."),(0,p.kt)("h2",{id:"bagaimana-dengan-symlink-melingkar"},"Bagaimana dengan symlink melingkar?"),(0,p.kt)("p",null,"Meskipun pnpm menggunakan penautan untuk meletakkan dependensi ke dalam folder ",(0,p.kt)("inlineCode",{parentName:"p"},"node_modules"),", symlink melingkar dihindari karena paket induk ditempatkan ke folder ",(0,p.kt)("inlineCode",{parentName:"p"},"node_modules")," yang sama di mana dependensinya berada. Jadi, dependensi milik ",(0,p.kt)("inlineCode",{parentName:"p"},"foo")," tidak akan ada di ",(0,p.kt)("inlineCode",{parentName:"p"},"foo/node_modules"),", tetapi dependensi-dependensi itu berada di ",(0,p.kt)("inlineCode",{parentName:"p"},"node_modules")," bersamaa dengan ",(0,p.kt)("inlineCode",{parentName:"p"},"foo")," itu sendiri."),(0,p.kt)("h2",{id:"kenapa-lebih-banyak-menggunakan-hard-link-kenapa-tidak-menggunakan-symlink-langsung-ke-store-global"},"Kenapa lebih banyak menggunakan hard link? Kenapa tidak menggunakan symlink langsung ke store global?"),(0,p.kt)("p",null,"Satu paket bisa saja memiliki seperangkat dependensi yang berbeda pada satu mesin."),(0,p.kt)("p",null,"Dalam proyek ",(0,p.kt)("strong",{parentName:"p"},"A")," ",(0,p.kt)("inlineCode",{parentName:"p"},"foo@1.0.0")," dapat memiliki dependensi yang diselesaikan menjadi ",(0,p.kt)("inlineCode",{parentName:"p"},"bar@1.0.0"),", tetapi dalam proyek ",(0,p.kt)("strong",{parentName:"p"},"B")," dependensi yang sama dari ",(0,p.kt)("inlineCode",{parentName:"p"},"foo")," mungkin diselesaikan menjadi ",(0,p.kt)("inlineCode",{parentName:"p"},"bar@1.1.0"),"; jadi, pnpm menggunakan hard link untuk ",(0,p.kt)("inlineCode",{parentName:"p"},"foo@1.0.0")," ke setiap proyek di mana ia digunakan, untuk membuat seperangkat dependensi yang berbeda."),(0,p.kt)("p",null,"Melakukan symlink langsung ke store global akan bekerja dengan tanda Node ",(0,p.kt)("inlineCode",{parentName:"p"},"--preserve-symlinks"),". Namun, pendekatan itu datang dengan sejumlah masalah besar. Jadi kami memutuskan untuk tetap menggunakan hard link. Untuk detail lebih lanjut tentang mengapa keputusan ini dibuat, lihat ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/nodejs/node-eps/issues/46"},"issue ini"),"."),(0,p.kt)("h2",{id:"apakah-pnpm-berfungsi-di-banyak-drive-atau-di-banyak-filesystem"},"Apakah pnpm berfungsi di banyak drive atau di banyak filesystem?"),(0,p.kt)("p",null,"Store paket harus berada di drive dan filesystem yang sama dengan instalasi. Jika tidak, paket akan disalin, tidak ditautkan. Hal ini karena keterbatasan dalam cara kerja hard link, di mana berkas pada satu filesystem tidak dapat dialamatkan di lokasi lain di filesystem yang berbeda. Lihat ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/pnpm/pnpm/issues/712"},"issue #712")," untuk lebih jelasnya."),(0,p.kt)("p",null,"pnpm berfungsi secara berbeda dalam 2 kasus di bawah ini:"),(0,p.kt)("h3",{id:"jalur-store-ditentukan"},"Jalur store ditentukan"),(0,p.kt)("p",null,"Jika jalur store ditentukan melalui ",(0,p.kt)("a",{parentName:"p",href:"/id/configuring"},"konfigurasi store"),", maka penyalinan akan dilakukan antara store dan proyek apa pun yang berada di disk yang berbeda."),(0,p.kt)("p",null,"Jika Anda menjalankan ",(0,p.kt)("inlineCode",{parentName:"p"},"pnpm install")," pada disk ",(0,p.kt)("inlineCode",{parentName:"p"},"A"),", maka store pnpm harus pada disk ",(0,p.kt)("inlineCode",{parentName:"p"},"A"),". Jika pnpm store terletak di disk ",(0,p.kt)("inlineCode",{parentName:"p"},"B"),", maka semua paket yang diperlukan akan disalin langsung ke lokasi proyek alih-alih ditautkan. Ini sangat menghambat manfaat penyimpanan dan kinerja dari pnpm."),(0,p.kt)("h3",{id:"jalur-store-tidak-ditentukan"},"Jalur store TIDAK ditentukan"),(0,p.kt)("p",null,"Jika jalur store tidak diatur, maka beberapa store akan dibuat (satu per drive atau filesystem)."),(0,p.kt)("p",null,"Jika instalasi dijalankan pada disk ",(0,p.kt)("inlineCode",{parentName:"p"},"A"),", penyimpanan akan dibuat pada ",(0,p.kt)("inlineCode",{parentName:"p"},".pnpm-store")," di bawah akar filesystem disk ",(0,p.kt)("inlineCode",{parentName:"p"},"A"),".  Jika nantinya instalasi dijalankan pada disk ",(0,p.kt)("inlineCode",{parentName:"p"},"B"),", toko independen akan dibuat pada ",(0,p.kt)("inlineCode",{parentName:"p"},"B")," di ",(0,p.kt)("inlineCode",{parentName:"p"},".pnpm-store"),". Proyek masih akan mempertahankan manfaat pnpm, tetapi setiap drive mungkin memiliki paket yang berlebihan."),(0,p.kt)("h2",{id:"what-does-pnpm-stand-for"},"What does ",(0,p.kt)("inlineCode",{parentName:"h2"},"pnpm")," stand for?"),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"pnpm")," stands for ",(0,p.kt)("inlineCode",{parentName:"p"},"performant npm"),". ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/rstacruz/"},"@rstacruz")," came up with the name."),(0,p.kt)("h2",{id:"pnpm-does-not-work-with-your-project-here"},(0,p.kt)("inlineCode",{parentName:"h2"},"pnpm")," does not work with ","<","YOUR-PROJECT-HERE>?"),(0,p.kt)("p",null,"In most cases it means that one of the dependencies require packages not declared in ",(0,p.kt)("inlineCode",{parentName:"p"},"package.json"),". It is a common mistake caused by flat ",(0,p.kt)("inlineCode",{parentName:"p"},"node_modules"),". If this happens, this is an error in the dependency and the dependency should be fixed. That might take time though, so pnpm supports workarounds to make the buggy packages work."),(0,p.kt)("h3",{id:"solusi-1"},"Solusi 1"),(0,p.kt)("p",null,"In the following example, a dependency does ",(0,p.kt)("strong",{parentName:"p"},"not")," have the ",(0,p.kt)("inlineCode",{parentName:"p"},"iterall")," module in its own list of deps."),(0,p.kt)("p",null,"The easiest solution to resolve missing dependencies of the buggy packages is to ",(0,p.kt)("strong",{parentName:"p"},"add ",(0,p.kt)("inlineCode",{parentName:"strong"},"iterall")," as a dependency to our project's ",(0,p.kt)("inlineCode",{parentName:"strong"},"package.json")),"."),(0,p.kt)("p",null,"You can do so, by installing it via ",(0,p.kt)("inlineCode",{parentName:"p"},"pnpm add iterall"),", and will be automatically added to your project's ",(0,p.kt)("inlineCode",{parentName:"p"},"package.json"),"."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-json"},'  "dependencies": {\n    ...\n    "iterall": "^1.2.2",\n    ...\n  }\n')),(0,p.kt)("h3",{id:"solusi-2"},"Solusi 2"),(0,p.kt)("p",null,"One of the solutions is to use ",(0,p.kt)("a",{parentName:"p",href:"/id/pnpmfile#hooks"},"hooks")," for adding the missing dependencies to the package's ",(0,p.kt)("inlineCode",{parentName:"p"},"package.json"),"."),(0,p.kt)("p",null,"An example was ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/pnpm/pnpm/issues/1043"},"Webpack Dashboard")," which wasn't working with ",(0,p.kt)("inlineCode",{parentName:"p"},"pnpm"),". It has since been resolved such that it works with ",(0,p.kt)("inlineCode",{parentName:"p"},"pnpm")," now."),(0,p.kt)("p",null,"It used to throw an error:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-console"},"Error: Cannot find module 'babel-traverse'\n  at /node_modules/inspectpack@2.2.3/node_modules/inspectpack/lib/actions/parse\n")),(0,p.kt)("p",null,"The problem was that ",(0,p.kt)("inlineCode",{parentName:"p"},"babel-traverse")," was used in ",(0,p.kt)("inlineCode",{parentName:"p"},"inspectpack")," which was used by ",(0,p.kt)("inlineCode",{parentName:"p"},"webpack-dashboard"),", but ",(0,p.kt)("inlineCode",{parentName:"p"},"babel-traverse")," wasn't specified in ",(0,p.kt)("inlineCode",{parentName:"p"},"inspectpack"),"'s ",(0,p.kt)("inlineCode",{parentName:"p"},"package.json"),". It still worked with ",(0,p.kt)("inlineCode",{parentName:"p"},"npm")," and ",(0,p.kt)("inlineCode",{parentName:"p"},"yarn")," because they create flat ",(0,p.kt)("inlineCode",{parentName:"p"},"node_modules"),"."),(0,p.kt)("p",null,"Solusinya adalah membuat ",(0,p.kt)("inlineCode",{parentName:"p"},".pnpmfile.cjs")," dengan konten berikut:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  hooks: {\n    readPackage: (pkg) => {\n      if (pkg.name === \"inspectpack\") {\n        pkg.dependencies['babel-traverse'] = '^6.26.0';\n      }\n      return pkg;\n    }\n  }\n};\n")),(0,p.kt)("p",null,"Setelah membuat ",(0,p.kt)("inlineCode",{parentName:"p"},".pnpmfile.cjs"),", hapus ",(0,p.kt)("inlineCode",{parentName:"p"},"pnpm-lock.yaml")," (tidak perlu menghapus ",(0,p.kt)("inlineCode",{parentName:"p"},"node_modules"),"), karena hooks pnpm hanya memengaruhi resolusi modul. Then, rebuild the dependencies & it should be working."),(0,p.kt)("h3",{id:"solusi-3"},"Solusi 3"),(0,p.kt)("p",null,"In case there are too many issues, you can use the ",(0,p.kt)("inlineCode",{parentName:"p"},"shamefully-hoist")," option. This creates a flat ",(0,p.kt)("inlineCode",{parentName:"p"},"node_modules")," structure similar to the one created by ",(0,p.kt)("inlineCode",{parentName:"p"},"npm")," or ",(0,p.kt)("inlineCode",{parentName:"p"},"yarn"),", which is not recommended as avoiding this structure is the primary purpose of pnpm's ",(0,p.kt)("inlineCode",{parentName:"p"},"node_modules")," approach."),(0,p.kt)("p",null,"To use it, try ",(0,p.kt)("inlineCode",{parentName:"p"},"pnpm install --shamefully-hoist"),"."))}u.isMDXComponent=!0}}]);