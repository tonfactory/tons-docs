"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[239],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>k});var r=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var l=r.createContext({}),c=function(t){var e=r.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=c(t.components);return r.createElement(l.Provider,{value:e},t.children)},p="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,l=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),p=c(n),d=o,k=p["".concat(l,".").concat(d)]||p[d]||m[d]||a;return n?r.createElement(k,i(i({ref:e},u),{},{components:n})):r.createElement(k,i({ref:e},u))}));function k(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s[p]="string"==typeof t?t:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4181:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:2},i="Quick start",s={unversionedId:"quick-start",id:"quick-start",title:"Quick start",description:"tons-gui",source:"@site/docs/quick-start.md",sourceDirName:".",slug:"/quick-start",permalink:"/tons-docs/quick-start",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"documentation",previous:{title:"Installation",permalink:"/tons-docs/installation"},next:{title:"Shortcuts",permalink:"/tons-docs/shortcuts"}},l={},c=[{value:"tons-gui",id:"tons-gui",level:2},{value:"tons-interactive",id:"tons-interactive",level:2},{value:"tons",id:"tons",level:2}],u={toc:c},p="wrapper";function m(t){let{components:e,...n}=t;return(0,o.kt)(p,(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"quick-start"},"Quick start"),(0,o.kt)("h2",{id:"tons-gui"},"tons-gui"),(0,o.kt)("video",{controls:!0,width:"100%",height:"auto"},(0,o.kt)("source",{src:"https://tonfactory.github.io/tons-docs/vid/tons-gui-quick-start.mov",type:"video/mp4"})),(0,o.kt)("h2",{id:"tons-interactive"},"tons-interactive"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create new keystore (",(0,o.kt)("strong",{parentName:"li"},"0:00"),") ",(0,o.kt)("br",null)),(0,o.kt)("li",{parentName:"ol"},"Import existing wallet from mnemonics (",(0,o.kt)("strong",{parentName:"li"},"0:24"),") ",(0,o.kt)("br",null)),(0,o.kt)("li",{parentName:"ol"},"Add whitelist contact (",(0,o.kt)("strong",{parentName:"li"},"1:07"),") ",(0,o.kt)("br",null)," "),(0,o.kt)("li",{parentName:"ol"},"Transfer TON coins (",(0,o.kt)("strong",{parentName:"li"},"1:36"),")")),(0,o.kt)("video",{controls:!0,width:"100%",height:"auto"},(0,o.kt)("source",{src:"https://tonfactory.github.io/tons-docs/vid/tons-interactive-quick-start.mov",type:"video/mp4"})),(0,o.kt)("h2",{id:"tons"},"tons"),(0,o.kt)("p",null,"[OPTIONAL]"," Create .tons folder in the current directory, otherwise it will use global directory (see ",(0,o.kt)("a",{parentName:"p",href:"/config"},"Config")," for more details)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"tons init\n")),(0,o.kt)("p",null,"Create a keystore"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"tons keystore new myFirstKeystore --password MY_SECRET\n")),(0,o.kt)("p",null,"Set it as a current keystore"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"tons config tons.keystore_name myFirstKeystore\n")),(0,o.kt)("p",null,"Import existing wallet from mnemonics (you can find your wallet version in you application settings. Usually it is v4r2)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'tons wallet import-from-mnemonics pocketMoney v4r2 0 "YOUR MNEMONIC WORDS HERE" --save-to-whitelist myPocketMoney\n')),(0,o.kt)("p",null,"You can check that it has been create by the list command"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"tons wallet list\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"| Name        | Version | WC |                     Address                      | Comment | State  | Balance |\n|:------------|:-------:|:--:|:------------------------------------------------:|:--------|:------:|--------:|\n| pocketMoney |   v3r2  | 0  | EQCHt-689LLEeFw2hkOT8ZNE8dmuMJeTcnISScGujIk-Sx2W | None    | Active |     1.0 |\n| Total       |         |    |                                                  |         |        |     1.0 |\n")),(0,o.kt)("p",null,"Add a whitelist contact"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"tons whitelist add myBestFriend EQAqJuYmOYI_0C23atgYhQOcL4IHznWbCwUY0u4KOU3yRVEm\n")),(0,o.kt)("p",null,"Transfer coins from the wallet to the contact"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'tons wallet transfer pocketMoney myBestFriend 0.1 --message "Happy birthday!" --wait\n')))}m.isMDXComponent=!0}}]);