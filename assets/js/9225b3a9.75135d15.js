"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[446],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>u});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=r.createContext({}),p=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=p(t.components);return r.createElement(s.Provider,{value:e},t.children)},c="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},k=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,s=t.parentName,d=l(t,["components","mdxType","originalType","parentName"]),c=p(n),k=a,u=c["".concat(s,".").concat(k)]||c[k]||m[k]||o;return n?r.createElement(u,i(i({ref:e},d),{},{components:n})):r.createElement(u,i({ref:e},d))}));function u(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,i=new Array(o);i[0]=k;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l[c]="string"==typeof t?t:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},5142:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:4},i="Config",l={unversionedId:"config",id:"config",title:"Config",description:"tons-interactive",source:"@site/docs/config.md",sourceDirName:".",slug:"/config",permalink:"/tons-docs/config",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"documentation",previous:{title:"Quick start",permalink:"/tons-docs/quick-start"},next:{title:"Keystore",permalink:"/tons-docs/keystore"}},s={},p=[{value:"tons-interactive",id:"tons-interactive",level:2},{value:"YubiKey",id:"yubikey",level:4},{value:"tons",id:"tons",level:2},{value:"YubiKey",id:"yubikey-1",level:4}],d={toc:p},c="wrapper";function m(t){let{components:e,...n}=t;return(0,a.kt)(c,(0,r.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"config"},"Config"),(0,a.kt)("h2",{id:"tons-interactive"},"tons-interactive"),(0,a.kt)("p",null,"To set up your config using ",(0,a.kt)("strong",{parentName:"p"},"tons-interactive")," interface just go to ",(0,a.kt)("strong",{parentName:"p"},"Config")," menu from the main menu of the\napplication."),(0,a.kt)("video",{controls:!0,width:"100%",height:"auto"},(0,a.kt)("source",{src:"https://tonfactory.github.io/tons-docs/vid/tons-interactive-config.mov",type:"video/mp4"})),(0,a.kt)("h4",{id:"yubikey"},"YubiKey"),(0,a.kt)("p",null,"To use your YubiKey device with yubikey type keystores, first set it up.\nGo to ",(0,a.kt)("strong",{parentName:"p"},"Config")," > ",(0,a.kt)("strong",{parentName:"p"},"Yubikey")," menu and follow the instructions.\nThen ",(0,a.kt)("a",{parentName:"p",href:"/keystore#yubikey-type-keystore"},"create")," (or restore from unencrypted backup) new yubikey type keystore.  "),(0,a.kt)("video",{controls:!0,width:"100%",height:"auto"},(0,a.kt)("source",{src:"https://tonfactory.github.io/tons-docs/vid/tons-interactive-config-yubikey.mov",type:"video/mp4"})),(0,a.kt)("h2",{id:"tons"},"tons"),(0,a.kt)("p",null,"Every time ",(0,a.kt)("strong",{parentName:"p"},"tons")," reads settings in the way where a next config alters previous one"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("em",{parentName:"li"},"global"),": ",(0,a.kt)("inlineCode",{parentName:"li"},"~/.config/tons/")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("em",{parentName:"li"},"local"),": ",(0,a.kt)("inlineCode",{parentName:"li"},"./.tons/"),(0,a.kt)("em",{parentName:"li"},"Note: to init tons locally run 'tons init' command")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("em",{parentName:"li"},"env"),": ",(0,a.kt)("inlineCode",{parentName:"li"},"export TONS_CONFIG_PATH=~/your/own/path/.tons/"))),(0,a.kt)("p",null,"All config.yaml parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"tons.workdir"),(0,a.kt)("td",{parentName:"tr",align:"left"},"directory where whitelist and keystores are stored")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"tons.keystore_name"),(0,a.kt)("td",{parentName:"tr",align:"left"},"name of the keystore a person wants to use in tons")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"tons.provider"),(0,a.kt)("td",{parentName:"tr",align:"left"},"provider to access the TON blockchain")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"tons.default_wallet_version"),(0,a.kt)("td",{parentName:"tr",align:"left"},"the version that will be used by default during tons wallet create cmd")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"tons.warn_if_outdated"),(0,a.kt)("td",{parentName:"tr",align:"left"},"every start checks whether there is a new version of tons application")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"tons.sort_whitelist"),(0,a.kt)("td",{parentName:"tr",align:"left"},"show sorted list of whitelist contacts")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"tons.sort_keystore"),(0,a.kt)("td",{parentName:"tr",align:"left"},"show sorted list of wallet in keystore")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"provider.dapp.api_key"),(0,a.kt)("td",{parentName:"tr",align:"left"},"api key for the dapp (can be retrieved in the ",(0,a.kt)("a",{parentName:"td",href:"https://t.me/tontech_dapp_bot"},"tontech bot"),")")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"provider.dapp.testnet_api_key"),(0,a.kt)("td",{parentName:"tr",align:"left"},"api key for the dapp (can be retrieved in the ",(0,a.kt)("a",{parentName:"td",href:"https://t.me/tontech_dapp_testnet_bot"},"tontech testnet bot"),")")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"provider.dapp.network"),(0,a.kt)("td",{parentName:"tr",align:"left"},"TON network to use (mainnet/testnet)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"dns.max_expiring_in"),(0,a.kt)("td",{parentName:"tr",align:"left"},'months until dns record will be expired. It is used in "DNS > Refresh all" cmd')),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"dns.refresh_send_amount"),(0,a.kt)("td",{parentName:"tr",align:"left"},"amount to send to refresh dns ownership")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"dns.refresh_not_yet_owned_send_amount"),(0,a.kt)("td",{parentName:"tr",align:"left"},"amount to send to refresh dns ownership of the not taken dns record")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"jetton.gas_amount"),(0,a.kt)("td",{parentName:"tr",align:"left"},"fees amount in TON coins to send during jetton transfers")))),(0,a.kt)("p",null,"List parameters of all configs (global/local/env)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ tons config --list\n...\n~/local/path/.tons/config.yaml  tons.keystore_name=dev.keystore\n...\n~/.config/.tons/config.yaml tons.keystore_name=global.keystore\n")),(0,a.kt)("p",null,"List all values of final altered config"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ tons config --current-setup\ntons.workdir=/Users/username/.config/.tons\ntons.keystore_name=dev.keystore\ntons.provider=dapp\ntons.default_wallet_version=v3r2\ntons.warn_if_outdated=True\nprovider.dapp.api_key=YOUR_API_KEY\nprovider.dapp.network=testnet\n")),(0,a.kt)("p",null,"Change the network"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"tons config --network testnet\n")),(0,a.kt)("p",null,"Set value of a parameter"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"tons config --global tons.keystore_name myKeystore2\n")),(0,a.kt)("p",null,"Unset value of a parameter"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"tons config --local tons.keystore_name --unset\n")),(0,a.kt)("p",null,"Get value of a parameter"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ tons config tons.keystore_name\ndev.keystore\n")),(0,a.kt)("h4",{id:"yubikey-1"},"YubiKey"),(0,a.kt)("p",null,"The best way to set up your device is by using tons-interactive > ",(0,a.kt)("strong",{parentName:"p"},"Config")," > ",(0,a.kt)("strong",{parentName:"p"},"YubiKey"),"."),(0,a.kt)("p",null,"But you can also run ",(0,a.kt)("a",{parentName:"p",href:"https://docs.yubico.com/software/yubikey/tools/ykman/webdocs.pdf"},"ykman")," package."),(0,a.kt)("p",null,"For example, to generate a private key in the required slot run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ ykman piv keys generate 0x87 - -m ${YOUR_MANAGEMENT_KEY} -P ${YOUR_PIN} --pin-policy ONCE --touch-policy ALWAYS -a RSA2048\n")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"IMPORTANT: slot id 0x87, pin-policy ONCE and key type RSA2048 are required.")))}m.isMDXComponent=!0}}]);