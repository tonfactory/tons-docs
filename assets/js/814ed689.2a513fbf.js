"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[52],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>w});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),s=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=s(a),u=r,w=p["".concat(d,".").concat(u)]||p[u]||m[u]||l;return a?n.createElement(w,o(o({ref:t},c),{},{components:a})):n.createElement(w,o({ref:t},c))}));function w(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=u;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[p]="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},1314:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const l={sidebar_position:7},o="Wallet",i={unversionedId:"wallet",id:"wallet",title:"Wallet",description:"Wallet entity is a record in a keystore file that has all required information to interact with a specific TON blockchain smart contract.",source:"@site/docs/wallet.md",sourceDirName:".",slug:"/wallet",permalink:"/tons-docs/wallet",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"documentation",previous:{title:"Whitelist",permalink:"/tons-docs/whitelist"},next:{title:"Transfer",permalink:"/tons-docs/transfer"}},d={},s=[{value:"tons-gui",id:"tons-gui",level:2},{value:"tons-interactive",id:"tons-interactive",level:2},{value:"tons",id:"tons",level:2}],c={toc:s},p="wrapper";function m(e){let{components:t,...l}=e;return(0,r.kt)(p,(0,n.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"wallet"},"Wallet"),(0,r.kt)("p",null,"Wallet entity is a record in a keystore file that has all required information to interact with a specific TON blockchain smart contract.  "),(0,r.kt)("h2",{id:"tons-gui"},"tons-gui"),(0,r.kt)("p",null,"Create a single wallet"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"tons-gui",src:a(9461).Z,width:"1984",height:"892"})," "),(0,r.kt)("p",null,"Or create multiple wallets"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"tons-gui",src:a(9090).Z,width:"1984",height:"982"})," "),(0,r.kt)("p",null,"Later you can edit and view wallet's information"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"tons-gui",src:a(4516).Z,width:"1984",height:"1408"})," "),(0,r.kt)("h2",{id:"tons-interactive"},"tons-interactive"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Import wallet")," from tonkeeper by mnemonics (",(0,r.kt)("strong",{parentName:"li"},"0:00"),") ",(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Create batch")," of wallets by prefix (",(0,r.kt)("strong",{parentName:"li"},"0:32"),") ",(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Create batch")," of wallets by pattern (",(0,r.kt)("strong",{parentName:"li"},"1:05"),") ",(0,r.kt)("br",null)," "),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Get verbose information")," of a wallet (",(0,r.kt)("strong",{parentName:"li"},"1:50"),")")),(0,r.kt)("video",{controls:!0,width:"100%",height:"auto"},(0,r.kt)("source",{src:"https://tonfactory.github.io/tons-docs/vid/tons-interactive-wallet.mov",type:"video/mp4"})),(0,r.kt)("h2",{id:"tons"},"tons"),(0,r.kt)("p",null,"Wallets support same CRUD operations"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'$ tons wallet create myMain \\\n        --version v3r2 \\\n        --workchain 0 \\\n        --subwallet-id 698983191 \\\n        --comment "My main secure wallet" \\\n        --save-to-whitelist myMain\n\n$ tons wallet edit myMain --name myMainOld\n\n$ tons wallet delete myMain\nAre you sure you want to delete v2wallet wallet? [y/N]: y\n\n$ tons wallet get myMain\nRaw address: 0:4fe5a10f96614daf8792dc3270db2742e17fe13ae9b0668a827098075524078d\nNonbounceable address: UQBP5aEPlmFNr4eS3DJw2ydC4X_hOumwZoqCcJgHVSQHjchT\nBounceable address: EQBP5aEPlmFNr4eS3DJw2ydC4X_hOumwZoqCcJgHVSQHjZWW\nVersion: v3r2\nWorkchain: 0\nSubwallet id: 698983191\nComment: My main secure wallet\n--- Verbose wallet information ---\naddress: EQBP5aEPlmFNr4eS3DJw2ydC4X_hOumwZoqCcJgHVSQHjZWW\ncontract_type: None\nseqno: 1\nstate: Active\nbalance: 0.394748632\nlast_activity: 2022-10-07 08:58:00\ncode: te6cckEBAQEAcQAA3v8AIN0gggFMl7ohggEznLqxn3Gw7UTQ0x/THzHXC//jBOCk8mCDCNcYINMf0x/TH/gjE7vyY+1E0NMf0x/T/9FRMrryoVFEuvKiBPkBVBBV+RDyo/gAkyDXSpbTB9QC+wDo0QGkyMsfyx/L/8ntVBC9ba0=\ndata: te6cckEBAQEAKgAAUAAAAAEpqaMXz1s51azqoYZWn7ZR2NlTfwg7FABigSY991WpcgOjOlg2uqR/\n')),(0,r.kt)("p",null,"List all wallets (can be redirected to .md file)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ tons wallet list -v -c nanoton\n| Name        | Version | WC |                     Address                      | Comment            | State  |            Balance |\n|:------------|:-------:|:--:|:------------------------------------------------:|:-------------------|:------:|-------------------:|\n| dev         |   v3r2  | 0  | Eaddraddraddraddraddraddraddraddraddraddraddradd | Development wallet | Active |      182.349713128 |\n| masterchain |   v3r2  | -1 | Eaddraddraddraddraddraddraddraddraddraddraddradd | None               | Active |        0.328599221 |\n| newTest     |   v3r2  | 0  | Eaddraddraddraddraddraddraddraddraddraddraddradd |                    | Active |        0.095227164 |\n| testmsg     |   v3r2  | 0  | Eaddraddraddraddraddraddraddraddraddraddraddradd | None               | Active |        0.394748632 |\n| v2wallet    |   v2r2  | -1 | Eaddraddraddraddraddraddraddraddraddraddraddradd | None               | Uninit |                0.0 |\n| Total       |         |    |                                                  |                    |        | 183.16828814499996 |\n\n$ tons wallet list -v > wallet_info.md\n")),(0,r.kt)("p",null,"Import wallet from mnemonic"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'$ tons wallet import-from-mnemonics importedWallet v4r2 0 "your 24 mnemo ... words" \\\n         --subwallet-id 698983191 \\\n         --comment "My imported wallet" \\\n         --save-to-whitelist myImportedWallet\n')),(0,r.kt)("p",null,"Init wallet (address must have some coins to be initialized)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ tons wallet init myMain\n")),(0,r.kt)("p",null,"Reveal a wallet mnemonics"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ tons wallet reveal myMain\nPassword []: \nguitar border swap border actor history universe wrist width mask unveil again dentist tilt theory risk electric flash hat sentence essence able dice mammal\n")),(0,r.kt)("p",null,"Export wallet to .addr and .pk files (e.g. to use in toncli development tool)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ tons wallet to-addr-pk myMain ./destination/path/\n")))}m.isMDXComponent=!0},9090:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/create_multiple_wallets-0c4a8c8bf3e61b44a315f87d2b4e90b5.png"},9461:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/create_single_wallet-eb3cda54f2989ee1d479e0983f82c0ad.png"},4516:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/edit_wallet-07b865fab1e6c9b16c55a1db62c5f21b.png"}}]);