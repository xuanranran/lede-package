if(!self.define){let s,e={};const i=(i,n)=>(i=new URL(i+".js",n).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(n,r)=>{const l=s||("document"in self?document.currentScript.src:"")||location.href;if(e[l])return;let o={};const t=s=>i(s,l),u={module:{uri:l},exports:o,require:t};e[l]=Promise.all(n.map((s=>u[s]||t(s)))).then((s=>(r(...s),o)))}}define(["./workbox-e1498109"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/Config-ZpS3fA2-.js",revision:null},{url:"assets/Connections-D3RMb6aT.js",revision:null},{url:"assets/global-nqLeOnSw.js",revision:null},{url:"assets/index-2v-8vYjb.js",revision:null},{url:"assets/index-D_QrDGkm.css",revision:null},{url:"assets/index-DFdYbS8M.js",revision:null},{url:"assets/Logs-CaF931ab.js",revision:null},{url:"assets/Overview-BryyoI6R.js",revision:null},{url:"assets/Proxies-BdOZrsWs.js",revision:null},{url:"assets/Rules-WyUUmyBi.js",revision:null},{url:"assets/Setup-ClxIAPtG.js",revision:null},{url:"index.html",revision:"4d0786ff8212d43080ac619099bc48e5"},{url:"registerSW.js",revision:"402b66900e731ca748771b6fc5e7a068"},{url:"favicon.svg",revision:"f5b3372f312fbbe60a6ed8c03741ff80"},{url:"pwa-192x192.png",revision:"c45f48fc59b5bf47e6cbf1626aff51fc"},{url:"pwa-512x512.png",revision:"a311504ae6a46bd29b5678a410aaafc6"},{url:"manifest.webmanifest",revision:"4d78c8bc6207146065400ff644fe5a13"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));