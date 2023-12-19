"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[128],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8495:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:1,slug:"/"},i="Introduction",s={unversionedId:"introduction",id:"introduction",title:"Introduction",description:"tons is an Open Source cross-platform wallet application",source:"@site/docs/introduction.md",sourceDirName:".",slug:"/",permalink:"/tons-docs/",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/"},sidebar:"documentation",next:{title:"Installation",permalink:"/tons-docs/installation"}},l={},c=[{value:"User interfaces",id:"user-interfaces",level:2},{value:"tons-interactive",id:"tons-interactive",level:3},{value:"tons",id:"tons",level:3},{value:"tons-gui",id:"tons-gui",level:3}],p={toc:c},u="wrapper";function m(e){let{components:t,...o}=e;return(0,a.kt)(u,(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"tons")," is an Open Source cross-platform wallet application\nand command-line interface to maintain any type of wallet on the TON network\non desktops and servers. Works with Windows/Mac/Linux."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"tons")," has different UI versions, thanks to which, any user will find a suitable interface:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#tons-interactive"},"tons-interactive")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#tons"},"tons")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#tons-gui"},"tons-gui"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"tons")," uses specific filesystem architecture that is maintained by the application."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},".tons\n\u251c\u2500\u2500 config.yaml\n\u251c\u2500\u2500 whitelist.json\n\u251c\u2500\u2500 keystores\n\u2502   \u251c\u2500\u2500 *.keystore\n")),(0,a.kt)("p",null,"Read more about architecture entities: ",(0,a.kt)("a",{parentName:"p",href:"/config"},"Config"),", ",(0,a.kt)("a",{parentName:"p",href:"/keystore"},"Keystore"),", ",(0,a.kt)("a",{parentName:"p",href:"/whitelist"},"Whitelist"),"."),(0,a.kt)("h2",{id:"user-interfaces"},"User interfaces"),(0,a.kt)("h3",{id:"tons-interactive"},"tons-interactive"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"tons-interactive")," is a convenient interface to control your assets through terminal."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ tons-interactive\n[\u2713] Pick command: Keystores\n[\u2713] Pick command: Open keystore\n[\u2713] Choose keystore to use: \ud83d\udd12 personal.keystore\n[?] Pick command [personal.keystore]: List wallets\n > List wallets\n   Transfer\n   Advanced Transfer\n   Whitelist\n   Tonconnect v2\n   DNS\n   Jetton\n   ...\n")),(0,a.kt)("h3",{id:"tons"},"tons"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"tons")," is a batch mode interface that allows you to write automatic scripts."),(0,a.kt)("p",null,"To get all available subcommands and flags run a command with an '-h' flag"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ tons -h\nUsage: tons [OPTIONS] COMMAND [ARGS]...\n\nOptions:\n  --version      Show the version and exit.\n  -c, --config   Use specific config.yaml file\n  -h, --help     Show this message and exit.\n\nCommands:\n  config      Control config parameters (check README.md for all fields...\n  contract    Operate with contracts\n  dev         Development tools\n  dns         Operate with DNS\n  init        Initialize .tons workdir in a current directory\n  keystore    Operate with keystores\n  tonconnect  Operate with TonConnect\n  wallet      Operate with wallets\n  whitelist   Operate with whitelist contacts\n")),(0,a.kt)("p",null,"Example: get list of all wallets from a keystore"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ tons wallet list -v\n| Name  | Version | WC |                     Address                      | Comment | State  | Balance |\n|:------|:-------:|:--:|:------------------------------------------------:|:--------|:------:|--------:|\n| dev   |   v3r2  | 0  | EQBxWbjry61lk0dU_8viG9M_e5x9VGOJaI9ZhOrn6vcIp7Sm | None    | Active |    13.1 |\n| prod  |   v4r2  | 0  | EQCkNipaz2C3Md-tXVBcD3E4yv8EKqMzZ41QQtsM4IdFnKP5 | None    | Uninit |     0.0 |\n| Total |         |    |                                                  |         |        |    13.1 |\n")),(0,a.kt)("h3",{id:"tons-gui"},"tons-gui"),(0,a.kt)("p",null,"Graphic user interface version is being developed.\nHere's a glimpse of the interface."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"tons-gui",src:n(3151).Z,width:"2680",height:"1710"})))}m.isMDXComponent=!0},3151:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/gui-797c01820e1ed143ca7ff93360c9c6b3.png"}}]);