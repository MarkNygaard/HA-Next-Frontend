if(!self.define){let e,s={};const a=(a,n)=>(a=new URL(a+".js",n).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,i)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let t={};const r=e=>a(e,c),f={module:{uri:c},exports:t,require:r};s[c]=Promise.all(n.map((e=>f[e]||r(e)))).then((e=>(i(...e),t)))}}define(["./workbox-2780d724"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/BxJ5Lu3Nn780CqXQ4itOQ/_buildManifest.js",revision:"a3f13e0f98596afa2432a99fbab37342"},{url:"/_next/static/BxJ5Lu3Nn780CqXQ4itOQ/_middlewareManifest.js",revision:"60ed9523f510025b6e688aada2df4cec"},{url:"/_next/static/BxJ5Lu3Nn780CqXQ4itOQ/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/0c428ae2-ac66f65bad535f60.js",revision:"ac66f65bad535f60"},{url:"/_next/static/chunks/1a48c3c1-78aea1e65f869990.js",revision:"78aea1e65f869990"},{url:"/_next/static/chunks/1bfc9850-f5a158a2aa932116.js",revision:"f5a158a2aa932116"},{url:"/_next/static/chunks/252f366e-3f0dafa433072ea0.js",revision:"3f0dafa433072ea0"},{url:"/_next/static/chunks/260-4f78f3c8d374c930.js",revision:"4f78f3c8d374c930"},{url:"/_next/static/chunks/29107295-a2d0c8e72019a3ed.js",revision:"a2d0c8e72019a3ed"},{url:"/_next/static/chunks/545f34e4-884a9da9bdc5e2a3.js",revision:"884a9da9bdc5e2a3"},{url:"/_next/static/chunks/67-73c77f12156f72b9.js",revision:"73c77f12156f72b9"},{url:"/_next/static/chunks/837-8869ef183bdf11ce.js",revision:"8869ef183bdf11ce"},{url:"/_next/static/chunks/9-b0fe475ee59092a3.js",revision:"b0fe475ee59092a3"},{url:"/_next/static/chunks/95b64a6e-982097c34ec99c51.js",revision:"982097c34ec99c51"},{url:"/_next/static/chunks/993-40655186a666e1ad.js",revision:"40655186a666e1ad"},{url:"/_next/static/chunks/d0447323-f46bd94a64e88550.js",revision:"f46bd94a64e88550"},{url:"/_next/static/chunks/d64684d8-0408bc6d6c2e38e1.js",revision:"0408bc6d6c2e38e1"},{url:"/_next/static/chunks/d7eeaac4-50337f303c7d5252.js",revision:"50337f303c7d5252"},{url:"/_next/static/chunks/framework-91d7f78b5b4003c8.js",revision:"91d7f78b5b4003c8"},{url:"/_next/static/chunks/main-0905f1e41eacb3c3.js",revision:"0905f1e41eacb3c3"},{url:"/_next/static/chunks/pages/_app-965d14a9ba5b4fe4.js",revision:"965d14a9ba5b4fe4"},{url:"/_next/static/chunks/pages/_error-2280fa386d040b66.js",revision:"2280fa386d040b66"},{url:"/_next/static/chunks/pages/auth-f91db61356325b6c.js",revision:"f91db61356325b6c"},{url:"/_next/static/chunks/pages/clean-c524e262e6b25506.js",revision:"c524e262e6b25506"},{url:"/_next/static/chunks/pages/entities-95007d4f5c2eb2a5.js",revision:"95007d4f5c2eb2a5"},{url:"/_next/static/chunks/pages/index-e154f5fde5b2a7d4.js",revision:"e154f5fde5b2a7d4"},{url:"/_next/static/chunks/pages/settings-e7f14eab890aa6ce.js",revision:"e7f14eab890aa6ce"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"99442aec5788bccac9b2f0ead2afdd6b"},{url:"/_next/static/chunks/webpack-378e68e29c265886.js",revision:"378e68e29c265886"},{url:"/_next/static/css/326d0d9060e5a9db.css",revision:"326d0d9060e5a9db"},{url:"/apple-icon-180.png",revision:"52f6e91f66a299dbface0befa2675cbc"},{url:"/apple-splash-1125-2436.jpg",revision:"5ff864005a30acd7fa9456bfedf33ec4"},{url:"/apple-splash-1136-640.jpg",revision:"b047f4f74129226bb4a02dfe0e1e9d2a"},{url:"/apple-splash-1170-2532.jpg",revision:"6b01934f0d28a370b3b549aad9b2e773"},{url:"/apple-splash-1242-2208.jpg",revision:"2f802032ee72016a23319a0ac3520e68"},{url:"/apple-splash-1242-2688.jpg",revision:"08420f9f8fb14540fd95955d2b682365"},{url:"/apple-splash-1284-2778.jpg",revision:"b3527ea94b662110dc4b609026102c32"},{url:"/apple-splash-1334-750.jpg",revision:"a0940c8d12522de0cc74c64752fca06c"},{url:"/apple-splash-1536-2048.jpg",revision:"d3b850d6b6a4bf76c91e35573c4b1071"},{url:"/apple-splash-1620-2160.jpg",revision:"c365fbf4bc96941e94edbc4a23c70404"},{url:"/apple-splash-1668-2224.jpg",revision:"7e877e8187de17af57243fa769ad1d00"},{url:"/apple-splash-1668-2388.jpg",revision:"0d7eb05942010b8f05bc685b568e157f"},{url:"/apple-splash-1792-828.jpg",revision:"7caa8b58721095ccefdaf655657c0d54"},{url:"/apple-splash-2048-1536.jpg",revision:"f11a9006bb54cb38ff2b0f47625e869c"},{url:"/apple-splash-2048-2732.jpg",revision:"d62b5d8d6389f5f18bf4f318801901ec"},{url:"/apple-splash-2160-1620.jpg",revision:"86ab4a9fa7fc21f88081a6945384a215"},{url:"/apple-splash-2208-1242.jpg",revision:"cc270e5616f8f9e0d5ce632be8809d36"},{url:"/apple-splash-2224-1668.jpg",revision:"b44f6bfd4d38bcf7c52a2d4b8e429aab"},{url:"/apple-splash-2388-1668.jpg",revision:"a991f342cde8c701f3471b68705425fd"},{url:"/apple-splash-2436-1125.jpg",revision:"213982f62d464fe9aba521e9c7a57b49"},{url:"/apple-splash-2532-1170.jpg",revision:"b05d80ba8242066be7a753267b692b55"},{url:"/apple-splash-2688-1242.jpg",revision:"5f295b5936a8d59c669f6fc86e2e1169"},{url:"/apple-splash-2732-2048.jpg",revision:"3431803dc3ebfae1a6fca7ab1482a94a"},{url:"/apple-splash-2778-1284.jpg",revision:"c39823a4f38082a91fbc1db08effa5a6"},{url:"/apple-splash-640-1136.jpg",revision:"def0a2839ab829c11459e9d960566791"},{url:"/apple-splash-750-1334.jpg",revision:"50870f788acdf3a52b2d679ce49814f9"},{url:"/apple-splash-828-1792.jpg",revision:"7c15f25784be25c16462a6684df05745"},{url:"/favicon-196.png",revision:"ed3065b415b7aacd1138a67d7606a12d"},{url:"/favicon.svg",revision:"01d527ad0b4769027b78331db004c472"},{url:"/manifest-icon-192.maskable.png",revision:"8e9405a945186e085e80c7928564dd98"},{url:"/manifest-icon-512.maskable.png",revision:"7917f606d6223373190e89adb4109eac"},{url:"/manifest.json",revision:"d15251c1e150c560356f9c3168ca67c6"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
