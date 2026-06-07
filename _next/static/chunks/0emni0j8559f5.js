(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,95468,e=>{"use strict";let r=(0,e.i(75254).default)("circle-check",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);e.s(["CheckCircle2",0,r],95468)},95057,(e,r,a)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0});var t={formatUrl:function(){return o},formatWithValidation:function(){return d},urlObjectKeys:function(){return l}};for(var i in t)Object.defineProperty(a,i,{enumerable:!0,get:t[i]});let n=e.r(90809)._(e.r(98183)),s=/https?|ftp|gopher|file/;function o(e){let{auth:r,hostname:a}=e,t=e.protocol||"",i=e.pathname||"",o=e.hash||"",l=e.query||"",d=!1;r=r?encodeURIComponent(r).replace(/%3A/i,":")+"@":"",e.host?d=r+e.host:a&&(d=r+(~a.indexOf(":")?`[${a}]`:a),e.port&&(d+=":"+e.port)),l&&"object"==typeof l&&(l=String(n.urlQueryToSearchParams(l)));let c=e.search||l&&`?${l}`||"";return t&&!t.endsWith(":")&&(t+=":"),e.slashes||(!t||s.test(t))&&!1!==d?(d="//"+(d||""),i&&"/"!==i[0]&&(i="/"+i)):d||(d=""),o&&"#"!==o[0]&&(o="#"+o),c&&"?"!==c[0]&&(c="?"+c),i=i.replace(/[?#]/g,encodeURIComponent),c=c.replace("#","%23"),`${t}${d}${i}${c}${o}`}let l=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function d(e){return o(e)}},18581,(e,r,a)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0}),Object.defineProperty(a,"useMergedRef",{enumerable:!0,get:function(){return i}});let t=e.r(71645);function i(e,r){let a=(0,t.useRef)(null),i=(0,t.useRef)(null);return(0,t.useCallback)(t=>{if(null===t){let e=a.current;e&&(a.current=null,e());let r=i.current;r&&(i.current=null,r())}else e&&(a.current=n(e,t)),r&&(i.current=n(r,t))},[e,r])}function n(e,r){if("function"!=typeof e)return e.current=r,()=>{e.current=null};{let a=e(r);return"function"==typeof a?a:()=>e(null)}}("function"==typeof a.default||"object"==typeof a.default&&null!==a.default)&&void 0===a.default.__esModule&&(Object.defineProperty(a.default,"__esModule",{value:!0}),Object.assign(a.default,a),r.exports=a.default)},73668,(e,r,a)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0}),Object.defineProperty(a,"isLocalURL",{enumerable:!0,get:function(){return n}});let t=e.r(18967),i=e.r(52817);function n(e){if(!(0,t.isAbsoluteUrl)(e))return!0;try{let r=(0,t.getLocationOrigin)(),a=new URL(e,r);return a.origin===r&&(0,i.hasBasePath)(a.pathname)}catch(e){return!1}}},84508,(e,r,a)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0}),Object.defineProperty(a,"errorOnce",{enumerable:!0,get:function(){return t}});let t=e=>{}},22016,(e,r,a)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0});var t={default:function(){return b},useLinkStatus:function(){return k}};for(var i in t)Object.defineProperty(a,i,{enumerable:!0,get:t[i]});let n=e.r(90809),s=e.r(43476),o=n._(e.r(71645)),l=e.r(95057),d=e.r(8372),c=e.r(18581),p=e.r(18967),m=e.r(5550);e.r(33525);let u=e.r(88540),h=e.r(91949),g=e.r(73668),f=e.r(9396);function b(r){var a,t;let i,n,b,[k,w]=(0,o.useOptimistic)(h.IDLE_LINK_STATUS),j=(0,o.useRef)(null),{href:y,as:v,children:N,prefetch:z=null,passHref:C,replace:P,shallow:M,scroll:S,onClick:D,onMouseEnter:F,onTouchStart:L,legacyBehavior:A=!1,onNavigate:T,transitionTypes:_,ref:E,unstable_dynamicOnHover:O,...U}=r;i=N,A&&("string"==typeof i||"number"==typeof i)&&(i=(0,s.jsx)("a",{children:i}));let R=o.default.useContext(d.AppRouterContext),K=!1!==z,B=!1!==z?null===(t=z)||"auto"===t?f.FetchStrategy.PPR:f.FetchStrategy.Full:f.FetchStrategy.PPR,$="string"==typeof(a=v||y)?a:(0,l.formatUrl)(a);if(A){if(i?.$$typeof===Symbol.for("react.lazy"))throw Object.defineProperty(Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."),"__NEXT_ERROR_CODE",{value:"E863",enumerable:!1,configurable:!0});n=o.default.Children.only(i)}let H=A?n&&"object"==typeof n&&n.ref:E,I=o.default.useCallback(e=>(null!==R&&(j.current=(0,h.mountLinkInstance)(e,$,R,B,K,w)),()=>{j.current&&((0,h.unmountLinkForCurrentNavigation)(j.current),j.current=null),(0,h.unmountPrefetchableInstance)(e)}),[K,$,R,B,w]),W={ref:(0,c.useMergedRef)(I,H),onClick(r){A||"function"!=typeof D||D(r),A&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(r),!R||r.defaultPrevented||function(r,a,t,i,n,s,l){if("u">typeof window){let d,{nodeName:c}=r.currentTarget;if("A"===c.toUpperCase()&&((d=r.currentTarget.getAttribute("target"))&&"_self"!==d||r.metaKey||r.ctrlKey||r.shiftKey||r.altKey||r.nativeEvent&&2===r.nativeEvent.which)||r.currentTarget.hasAttribute("download"))return;if(!(0,g.isLocalURL)(a)){i&&(r.preventDefault(),location.replace(a));return}if(r.preventDefault(),s){let e=!1;if(s({preventDefault:()=>{e=!0}}),e)return}let{dispatchNavigateAction:p}=e.r(99781);o.default.startTransition(()=>{p(a,i?"replace":"push",!1===n?u.ScrollBehavior.NoScroll:u.ScrollBehavior.Default,t.current,l)})}}(r,$,j,P,S,T,_)},onMouseEnter(e){A||"function"!=typeof F||F(e),A&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),R&&K&&(0,h.onNavigationIntent)(e.currentTarget,!0===O)},onTouchStart:function(e){A||"function"!=typeof L||L(e),A&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),R&&K&&(0,h.onNavigationIntent)(e.currentTarget,!0===O)}};return(0,p.isAbsoluteUrl)($)?W.href=$:A&&!C&&("a"!==n.type||"href"in n.props)||(W.href=(0,m.addBasePath)($)),b=A?o.default.cloneElement(n,W):(0,s.jsx)("a",{...U,...W,children:i}),(0,s.jsx)(x.Provider,{value:k,children:b})}e.r(84508);let x=(0,o.createContext)(h.IDLE_LINK_STATUS),k=()=>(0,o.useContext)(x);("function"==typeof a.default||"object"==typeof a.default&&null!==a.default)&&void 0===a.default.__esModule&&(Object.defineProperty(a.default,"__esModule",{value:!0}),Object.assign(a.default,a),r.exports=a.default)},75254,e=>{"use strict";var r=e.i(71645);let a=(...e)=>e.filter((e,r,a)=>!!e&&""!==e.trim()&&a.indexOf(e)===r).join(" ").trim(),t=e=>{let r=e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,a)=>a?a.toUpperCase():r.toLowerCase());return r.charAt(0).toUpperCase()+r.slice(1)};var i={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let n=(0,r.createContext)({}),s=(0,r.forwardRef)(({color:e,size:t,strokeWidth:s,absoluteStrokeWidth:o,className:l="",children:d,iconNode:c,...p},m)=>{let{size:u=24,strokeWidth:h=2,absoluteStrokeWidth:g=!1,color:f="currentColor",className:b=""}=(0,r.useContext)(n)??{},x=o??g?24*Number(s??h)/Number(t??u):s??h;return(0,r.createElement)("svg",{ref:m,...i,width:t??u??i.width,height:t??u??i.height,stroke:e??f,strokeWidth:x,className:a("lucide",b,l),...!d&&!(e=>{for(let r in e)if(r.startsWith("aria-")||"role"===r||"title"===r)return!0;return!1})(p)&&{"aria-hidden":"true"},...p},[...c.map(([e,a])=>(0,r.createElement)(e,a)),...Array.isArray(d)?d:[d]])});e.s(["default",0,(e,i)=>{let n=(0,r.forwardRef)(({className:n,...o},l)=>(0,r.createElement)(s,{ref:l,iconNode:i,className:a(`lucide-${t(e).replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,`lucide-${e}`,n),...o}));return n.displayName=t(e),n}],75254)},73375,e=>{"use strict";let r=(0,e.i(75254).default)("chevron-left",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);e.s(["ChevronLeft",0,r],73375)},40160,e=>{"use strict";let r=(0,e.i(75254).default)("download",[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]]);e.s(["Download",0,r],40160)},81418,e=>{"use strict";let r=(0,e.i(75254).default)("shield-check",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);e.s(["ShieldCheck",0,r],81418)},39616,e=>{"use strict";let r=(0,e.i(75254).default)("settings",[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);e.s(["Settings",0,r],39616)},83086,e=>{"use strict";let r=(0,e.i(75254).default)("sparkles",[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]]);e.s(["Sparkles",0,r],83086)},78583,e=>{"use strict";let r=(0,e.i(75254).default)("file-text",[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);e.s(["FileText",0,r],78583)},78894,e=>{"use strict";let r=(0,e.i(75254).default)("triangle-alert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);e.s(["AlertTriangle",0,r],78894)},69074,e=>{"use strict";let r=(0,e.i(75254).default)("upload",[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]]);e.s(["Upload",0,r],69074)},16715,e=>{"use strict";let r=(0,e.i(75254).default)("refresh-cw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);e.s(["RefreshCw",0,r],16715)},78185,e=>{"use strict";var r=e.i(43476),a=e.i(71645),t=e.i(22016),i=e.i(73375),n=e.i(78583),s=e.i(69074),o=e.i(95468),l=e.i(40160),d=e.i(39616),c=e.i(78894),p=e.i(83086),m=e.i(81418),u=e.i(16715);e.s(["default",0,function(){let[e,h]=(0,a.useState)(!1),[g,f]=(0,a.useState)(!1),[b,x]=(0,a.useState)(null),[k,w]=(0,a.useState)(!1),j=(0,a.useRef)(null),[y,v]=(0,a.useState)("medium"),[N,z]=(0,a.useState)(!1),[C,P]=(0,a.useState)(0),[M,S]=(0,a.useState)(0),[D,F]=(0,a.useState)(0),[L,A]=(0,a.useState)(""),[T,_]=(0,a.useState)(""),[E,O]=(0,a.useState)(null);(0,a.useEffect)(()=>{let e=!0;return(async()=>{try{if(window.pdfjsLib&&window.PDFLib){e&&h(!0);return}let r=(e,r)=>new Promise((a,t)=>{if(document.getElementById(r)){let e=document.getElementById(r);"true"===e.dataset.loaded?a():(e.addEventListener("load",()=>a()),e.addEventListener("error",e=>t(e)));return}let i=document.createElement("script");i.src=e,i.id=r,i.async=!0,i.onload=()=>{i.dataset.loaded="true",a()},i.onerror=e=>t(e),document.head.appendChild(i)});await r("https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js","pdfjs-script"),await r("https://unpkg.com/pdf-lib@1.17.1/dist/pdf-lib.min.js","pdflib-script"),window.pdfjsLib&&(window.pdfjsLib.GlobalWorkerOptions.workerSrc="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js"),e&&h(!0)}catch(r){console.error("Failed to load libraries:",r),e&&f(!0)}})(),()=>{e=!1}},[]);let U=e=>{if(0===e)return"0 Bytes";let r=Math.floor(Math.log(e)/Math.log(1024));return parseFloat((e/Math.pow(1024,r)).toFixed(2))+" "+["Bytes","KB","MB","GB"][r]},R=e=>{e.preventDefault(),e.stopPropagation(),"dragenter"===e.type||"dragover"===e.type?w(!0):"dragleave"===e.type&&w(!1)},K=(e,r)=>new Promise((a,t)=>{e.toBlob(async e=>{e?a(await e.arrayBuffer()):t(Error("Canvas conversion failed"))},"image/jpeg",r)}),B=async()=>{if(b){z(!0),_(""),P(0),S(0),F(0),A("Membaca file PDF...");try{let e=window.pdfjsLib,r=window.PDFLib;if(!e||!r)throw Error("Pustaka pemrosesan PDF belum selesai dimuat. Harap tunggu beberapa saat.");let a=await b.arrayBuffer(),t=await e.getDocument({data:new Uint8Array(a)}).promise,i=t.numPages;S(i);let n=await r.PDFDocument.create(),s=1.3,o=.6;"high"===y?(s=.95,o=.42):"medium"===y?(s=1.3,o=.63):"low"===y&&(s=1.7,o=.82);for(let e=1;e<=i;e++){A(`Merender & mengompresi halaman ${e} dari ${i}...`),P(e),F(Math.round(e/i*100));let r=await t.getPage(e),a=r.getViewport({scale:s}),l=document.createElement("canvas");l.width=a.width,l.height=a.height;let d=l.getContext("2d");if(!d)throw Error("Gagal menginisialisasi Canvas Context untuk merender halaman.");await r.render({canvasContext:d,viewport:a}).promise;let c=await K(l,o),p=await n.embedJpg(c);n.addPage([a.width,a.height]).drawImage(p,{x:0,y:0,width:a.width,height:a.height}),await new Promise(e=>setTimeout(e,80))}A("Menyusun file PDF akhir...");let l=await n.save(),d=new Blob([l],{type:"application/pdf"}),c=URL.createObjectURL(d),p=b.size,m=d.size,u=Math.max(0,parseFloat(((p-m)/p*100).toFixed(1)));O({originalSize:p,compressedSize:m,reductionPercentage:u,downloadUrl:c}),A("Kompresi berhasil dilakukan!")}catch(e){console.error(e),"PasswordException"===e.name?_("PDF ini dilindungi sandi (password-protected). Harap hapus sandi terlebih dahulu."):_(e.message||"Terjadi kesalahan saat memproses kompresi PDF.")}finally{z(!1)}}},$=()=>{x(null),O(null),_(""),F(0),P(0),S(0),j.current&&(j.current.value="")};return(0,r.jsxs)("div",{className:"app-detail-container",children:[(0,r.jsxs)("main",{className:"content-wrapper",children:[(0,r.jsxs)(t.default,{href:"/",className:"back-link",children:[(0,r.jsx)(i.ChevronLeft,{size:20}),(0,r.jsx)("span",{children:"Kembali ke Beranda"})]}),(0,r.jsxs)("header",{className:"app-hero",children:[(0,r.jsx)("div",{className:"app-icon-large",children:(0,r.jsx)(n.FileText,{size:48})}),(0,r.jsxs)("h1",{className:"app-title",children:["Kompres ",(0,r.jsx)("span",{className:"text-gradient",children:"PDF Online"})]}),(0,r.jsx)("p",{className:"app-subtitle",children:"Perkecil ukuran pdf administrasi guru secara cepat & aman. 100% berjalan langsung di browser tanpa upload data ke server."})]}),!e&&!g&&(0,r.jsxs)("div",{className:"loading-card",children:[(0,r.jsx)(u.RefreshCw,{size:24,className:"spin-icon"}),(0,r.jsx)("p",{children:"Menyiapkan modul kompresi lokal (PDF-Lib & PDF.js)..."})]}),g&&(0,r.jsxs)("div",{className:"error-card",children:[(0,r.jsx)(c.AlertTriangle,{size:24}),(0,r.jsx)("p",{children:"Gagal memuat pustaka kompresi. Harap periksa koneksi internet Anda dan muat ulang halaman."})]}),e&&(0,r.jsxs)("section",{className:"main-section",children:[!E&&!N&&(0,r.jsxs)("div",{className:"upload-container",children:[(0,r.jsxs)("div",{className:`drop-zone ${k?"active":""} ${b?"has-file":""}`,onDragEnter:R,onDragOver:R,onDragLeave:R,onDrop:e=>{if(e.preventDefault(),e.stopPropagation(),w(!1),e.dataTransfer.files&&e.dataTransfer.files[0]){let r=e.dataTransfer.files[0];"application/pdf"===r.type||r.name.endsWith(".pdf")?(x(r),_(""),O(null)):_("Hanya file PDF (.pdf) yang diperbolehkan.")}},onClick:b?void 0:()=>{j.current?.click()},children:[(0,r.jsx)("input",{ref:j,type:"file",accept:".pdf",onChange:e=>{e.target.files&&e.target.files[0]&&(x(e.target.files[0]),_(""),O(null))},style:{display:"none"}}),b?(0,r.jsxs)("div",{className:"selected-file-card",children:[(0,r.jsxs)("div",{className:"file-info-header",children:[(0,r.jsx)(n.FileText,{size:36,className:"file-icon-pdf"}),(0,r.jsxs)("div",{className:"file-details",children:[(0,r.jsx)("h4",{className:"file-name",children:b.name}),(0,r.jsx)("span",{className:"file-size",children:U(b.size)})]})]}),(0,r.jsx)("button",{className:"btn-cancel",onClick:$,children:"Ganti File"})]}):(0,r.jsxs)("div",{className:"drop-zone-content",children:[(0,r.jsx)("div",{className:"upload-icon-wrapper",children:(0,r.jsx)(s.Upload,{size:32})}),(0,r.jsx)("h3",{children:"Tarik & Lepas File PDF disini"}),(0,r.jsx)("p",{className:"drop-desc",children:"Atau klik untuk menjelajahi berkas komputer Anda"}),(0,r.jsx)("span",{className:"file-limit",children:"Hanya mendukung format .pdf"})]})]}),T&&(0,r.jsxs)("div",{className:"error-alert",children:[(0,r.jsx)(c.AlertTriangle,{size:18}),(0,r.jsx)("span",{children:T})]}),b&&(0,r.jsxs)("div",{className:"settings-card",children:[(0,r.jsxs)("div",{className:"settings-header",children:[(0,r.jsx)(d.Settings,{size:20}),(0,r.jsx)("h3",{children:"Tingkat Kompresi"})]}),(0,r.jsxs)("div",{className:"compression-options",children:[(0,r.jsxs)("label",{className:`option-label ${"high"===y?"selected":""}`,children:[(0,r.jsx)("input",{type:"radio",name:"compression",value:"high",checked:"high"===y,onChange:()=>v("high")}),(0,r.jsxs)("div",{className:"option-info",children:[(0,r.jsx)("span",{className:"option-title",children:"High Compression"}),(0,r.jsx)("span",{className:"option-desc",children:"Ukuran file terkecil, resolusi gambar disesuaikan secara agresif (Cocok untuk dokumen teks scan)."})]})]}),(0,r.jsxs)("label",{className:`option-label ${"medium"===y?"selected":""}`,children:[(0,r.jsx)("input",{type:"radio",name:"compression",value:"medium",checked:"medium"===y,onChange:()=>v("medium")}),(0,r.jsxs)("div",{className:"option-info",children:[(0,r.jsx)("span",{className:"option-title",children:"Medium Compression"}),(0,r.jsx)("span",{className:"option-desc",children:"Rekomendasi. Kualitas visual dokumen tetap terjaga dengan ukuran file jauh lebih kecil."})]})]}),(0,r.jsxs)("label",{className:`option-label ${"low"===y?"selected":""}`,children:[(0,r.jsx)("input",{type:"radio",name:"compression",value:"low",checked:"low"===y,onChange:()=>v("low")}),(0,r.jsxs)("div",{className:"option-info",children:[(0,r.jsx)("span",{className:"option-title",children:"Low Compression"}),(0,r.jsx)("span",{className:"option-desc",children:"Kualitas visual terbaik, kompresi ringan hanya untuk mereduksi metadata berat."})]})]})]}),(0,r.jsxs)("button",{className:"btn-primary-action",onClick:B,children:[(0,r.jsx)(p.Sparkles,{size:18}),(0,r.jsx)("span",{children:"Mulai Kompresi PDF"})]})]})]}),N&&(0,r.jsxs)("div",{className:"processing-card",children:[(0,r.jsx)("div",{className:"progress-spinner",children:(0,r.jsx)(u.RefreshCw,{size:40,className:"spin-icon text-gradient-color"})}),(0,r.jsx)("h2",{children:"Mengompresi PDF..."}),(0,r.jsx)("p",{className:"status-text",children:L}),M>0&&(0,r.jsxs)("div",{className:"progress-container",children:[(0,r.jsx)("div",{className:"progress-bar-wrapper",children:(0,r.jsx)("div",{className:"progress-bar-fill",style:{width:`${D}%`}})}),(0,r.jsxs)("div",{className:"progress-stats",children:[(0,r.jsxs)("span",{children:["Progres: ",D,"%"]}),(0,r.jsxs)("span",{children:["Halaman: ",C," / ",M]})]})]})]}),E&&(0,r.jsxs)("div",{className:"success-card",children:[(0,r.jsx)("div",{className:"success-icon-wrapper",children:(0,r.jsx)(o.CheckCircle2,{size:48,className:"text-success"})}),(0,r.jsx)("h2",{children:"PDF Berhasil Dikompres!"}),(0,r.jsx)("p",{className:"success-desc",children:"Kompresi telah selesai dikerjakan secara lokal. Klik tombol di bawah untuk mengunduh file baru Anda."}),(0,r.jsxs)("div",{className:"results-grid",children:[(0,r.jsxs)("div",{className:"metric-box",children:[(0,r.jsx)("span",{className:"metric-label",children:"Ukuran Awal"}),(0,r.jsx)("span",{className:"metric-value",children:U(E.originalSize)})]}),(0,r.jsxs)("div",{className:"metric-box highlighted",children:[(0,r.jsx)("span",{className:"metric-label",children:"Ukuran Akhir"}),(0,r.jsx)("span",{className:"metric-value",children:U(E.compressedSize)})]}),(0,r.jsxs)("div",{className:"metric-box reduction-box",children:[(0,r.jsx)("span",{className:"metric-label",children:"Hemat Ukuran"}),(0,r.jsxs)("span",{className:"metric-value text-gradient",children:["-",E.reductionPercentage,"%"]})]})]}),(0,r.jsxs)("div",{className:"action-buttons",children:[(0,r.jsxs)("a",{href:E.downloadUrl,download:`compressed_${b?.name||"document.pdf"}`,className:"btn-primary-action",children:[(0,r.jsx)(l.Download,{size:20}),(0,r.jsx)("span",{children:"Unduh PDF Hasil Kompresi"})]}),(0,r.jsx)("button",{className:"btn-secondary",onClick:$,children:"Kompres File Lain"})]})]})]}),(0,r.jsxs)("section",{className:"features-info-section",children:[(0,r.jsxs)("div",{className:"section-title-wrapper",children:[(0,r.jsx)("h2",{children:"Pemrosesan 100% Aman & Lokal"}),(0,r.jsx)("p",{children:"Kami sangat peduli dengan kerahasiaan berkas pendaftaran dan administrasi Anda."})]}),(0,r.jsxs)("div",{className:"features-grid",children:[(0,r.jsxs)("div",{className:"feature-item-card",children:[(0,r.jsx)("div",{className:"feature-icon-wrapper blue-theme",children:(0,r.jsx)(m.ShieldCheck,{size:24})}),(0,r.jsx)("h3",{children:"Tanpa Upload ke Server"}),(0,r.jsx)("p",{children:"File PDF diproses sepenuhnya di browser Anda. Dokumen, teks, dan data penting lainnya tidak pernah dikirim ke server kami, aman dari kebocoran data."})]}),(0,r.jsxs)("div",{className:"feature-item-card",children:[(0,r.jsx)("div",{className:"feature-icon-wrapper green-theme",children:(0,r.jsx)(p.Sparkles,{size:24})}),(0,r.jsx)("h3",{children:"Mudah & Instan"}),(0,r.jsx)("p",{children:"Cukup pilih file, tentukan tingkat kompresi, dan biarkan sistem merender halaman dalam hitungan detik. Menghemat kuota internet dan waktu Anda."})]}),(0,r.jsxs)("div",{className:"feature-item-card",children:[(0,r.jsx)("div",{className:"feature-icon-wrapper red-theme",children:(0,r.jsx)(n.FileText,{size:24})}),(0,r.jsx)("h3",{children:"Optimal untuk Administrasi"}),(0,r.jsx)("p",{children:"Cocok untuk memangkas ukuran PDF scan berat seperti Portofolio Guru, RPP, Sertifikat Diklat, Surat Keputusan (SK), maupun berkas ijazah."})]})]})]}),(0,r.jsx)("footer",{className:"detail-footer",children:(0,r.jsxs)("span",{children:["© ",new Date().getFullYear()," Examonlan App Hub. Cepat, Aman & Terpercaya."]})})]}),(0,r.jsx)("style",{dangerouslySetInnerHTML:{__html:`
        .app-detail-container {
          min-height: 100vh;
          width: 100%;
          background: #060608;
          color: white;
          overflow-x: hidden;
          font-family: 'Inter', sans-serif;
          background-image: 
            radial-gradient(circle at 0% 0%, rgba(2, 132, 199, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 100% 100%, rgba(2, 132, 199, 0.05) 0%, transparent 50%);
        }

        .content-wrapper {
          max-width: 900px;
          margin: 0 auto;
          padding: 2rem 1.5rem 6rem;
        }

        .back-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: #9494a0;
          text-decoration: none;
          font-weight: 600;
          font-size: 0.95rem;
          margin-bottom: 3rem;
          transition: all 0.2s ease;
        }

        .back-link:hover {
          color: #38bdf8;
          transform: translateX(-4px);
        }

        .app-hero {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
          margin-bottom: 3.5rem;
        }

        .app-icon-large {
          width: 100px;
          height: 100px;
          background: linear-gradient(135deg, #0284c7, #0369a1);
          border-radius: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          box-shadow: 0 20px 40px rgba(2, 132, 199, 0.3);
          margin-bottom: 1rem;
        }

        .app-title {
          font-size: clamp(2.5rem, 6vw, 3.5rem);
          font-weight: 900;
          letter-spacing: -0.02em;
          margin: 0;
          line-height: 1.1;
        }

        .text-gradient {
          background: linear-gradient(to right, #38bdf8, #bae6fd);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .text-gradient-color {
          color: #38bdf8;
        }

        .app-subtitle {
          font-size: 1.2rem;
          color: #9494a0;
          max-width: 700px;
          line-height: 1.6;
          margin: 0;
        }

        /* Loading & Error states */
        .loading-card, .error-card {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 24px;
          padding: 3rem 2rem;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 1.25rem;
          margin-bottom: 4rem;
          color: #9494a0;
        }

        .error-card {
          border-color: rgba(239, 68, 68, 0.2);
          background: rgba(239, 68, 68, 0.02);
          color: #f87171;
        }

        .spin-icon {
          animation: spin 1.5s linear infinite;
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        /* Main Section */
        .main-section {
          margin-bottom: 5rem;
        }

        /* Upload Container */
        .upload-container {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        /* Drop Zone */
        .drop-zone {
          background: rgba(255, 255, 255, 0.01);
          border: 2px dashed rgba(255, 255, 255, 0.1);
          border-radius: 28px;
          padding: 4rem 2rem;
          text-align: center;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
        }

        .drop-zone:hover, .drop-zone.active {
          border-color: #38bdf8;
          background: rgba(2, 132, 199, 0.03);
          box-shadow: 0 0 30px rgba(2, 132, 199, 0.1);
        }

        .drop-zone.has-file {
          cursor: default;
          border-style: solid;
          background: rgba(255, 255, 255, 0.02);
          padding: 2.5rem 2rem;
        }

        .drop-zone-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }

        .upload-icon-wrapper {
          width: 64px;
          height: 64px;
          border-radius: 20px;
          background: rgba(2, 132, 199, 0.1);
          color: #38bdf8;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 0.5rem;
          transition: transform 0.3s ease;
        }

        .drop-zone:hover .upload-icon-wrapper {
          transform: translateY(-4px);
        }

        .drop-zone h3 {
          font-size: 1.5rem;
          font-weight: 800;
          margin: 0;
          color: white;
        }

        .drop-desc {
          font-size: 1.05rem;
          color: #cbd5e1;
          margin: 0;
        }

        .file-limit {
          font-size: 0.85rem;
          color: #64748b;
        }

        /* Selected File Card */
        .selected-file-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
          width: 100%;
        }

        .file-info-header {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          padding: 1.25rem 2rem;
          border-radius: 20px;
          width: 100%;
          max-width: 500px;
          box-sizing: border-box;
        }

        .file-icon-pdf {
          color: #f87171;
        }

        .file-details {
          text-align: left;
          flex: 1;
          min-width: 0;
        }

        .file-name {
          font-size: 1.1rem;
          font-weight: 700;
          color: white;
          margin: 0 0 0.25rem 0;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .file-size {
          font-size: 0.95rem;
          color: #9494a0;
        }

        .btn-cancel {
          background: transparent;
          border: 1px solid rgba(255, 255, 255, 0.15);
          color: #9494a0;
          padding: 0.6rem 1.5rem;
          border-radius: 12px;
          font-size: 0.9rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .btn-cancel:hover {
          border-color: #f87171;
          color: #f87171;
          background: rgba(239, 68, 68, 0.05);
        }

        /* Settings Card */
        .settings-card {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 28px;
          padding: 2.5rem;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }

        .settings-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: #38bdf8;
          margin-bottom: 2rem;
        }

        .settings-header h3 {
          font-size: 1.25rem;
          font-weight: 800;
          margin: 0;
          color: white;
        }

        .compression-options {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          margin-bottom: 2.5rem;
        }

        .option-label {
          display: flex;
          align-items: flex-start;
          gap: 1.25rem;
          padding: 1.25rem 1.5rem;
          border-radius: 20px;
          background: rgba(255, 255, 255, 0.01);
          border: 1px solid rgba(255, 255, 255, 0.05);
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .option-label:hover {
          border-color: rgba(56, 189, 248, 0.3);
          background: rgba(2, 132, 199, 0.02);
        }

        .option-label.selected {
          border-color: #38bdf8;
          background: rgba(2, 132, 199, 0.04);
        }

        .option-label input[type="radio"] {
          margin-top: 0.35rem;
          accent-color: #38bdf8;
          transform: scale(1.2);
        }

        .option-info {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
          text-align: left;
        }

        .option-title {
          font-size: 1.1rem;
          font-weight: 700;
          color: white;
        }

        .option-desc {
          font-size: 0.925rem;
          color: #9494a0;
          line-height: 1.5;
        }

        /* Error/Alert Alert */
        .error-alert {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          background: rgba(239, 68, 68, 0.08);
          border: 1px solid rgba(239, 68, 68, 0.15);
          color: #f87171;
          padding: 1rem 1.5rem;
          border-radius: 16px;
          font-size: 0.95rem;
          text-align: left;
        }

        /* Action Buttons */
        .btn-primary-action {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          background: #0284c7;
          border: none;
          color: white;
          border-radius: 18px;
          padding: 1.1rem 2.5rem;
          font-weight: 700;
          font-size: 1.05rem;
          cursor: pointer;
          box-shadow: 0 10px 25px rgba(2, 132, 199, 0.25);
          transition: all 0.3s ease;
          text-decoration: none;
          width: 100%;
        }

        .btn-primary-action:hover {
          background: #0369a1;
          transform: translateY(-2px);
          box-shadow: 0 15px 30px rgba(2, 132, 199, 0.4);
        }

        /* Processing Card */
        .processing-card {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 28px;
          padding: 4rem 2rem;
          text-align: center;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
        }

        .progress-spinner {
          margin-bottom: 0.5rem;
        }

        .processing-card h2 {
          font-size: 1.75rem;
          font-weight: 800;
          margin: 0;
        }

        .status-text {
          font-size: 1.05rem;
          color: #cbd5e1;
          margin: 0;
        }

        .progress-container {
          width: 100%;
          max-width: 500px;
          margin-top: 1rem;
        }

        .progress-bar-wrapper {
          width: 100%;
          height: 8px;
          background: rgba(255, 255, 255, 0.06);
          border-radius: 100px;
          overflow: hidden;
          margin-bottom: 0.75rem;
        }

        .progress-bar-fill {
          height: 100%;
          background: linear-gradient(to right, #0284c7, #38bdf8);
          border-radius: 100px;
          transition: width 0.3s ease;
        }

        .progress-stats {
          display: flex;
          justify-content: space-between;
          font-size: 0.9rem;
          color: #9494a0;
          font-weight: 600;
        }

        /* Success Card */
        .success-card {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 28px;
          padding: 3.5rem 2.5rem;
          text-align: center;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
        }

        .success-icon-wrapper {
          width: 80px;
          height: 80px;
          border-radius: 100px;
          background: rgba(16, 185, 129, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #10b981;
          margin-bottom: 0.5rem;
        }

        .success-card h2 {
          font-size: 2rem;
          font-weight: 900;
          margin: 0;
        }

        .success-desc {
          font-size: 1.1rem;
          color: #cbd5e1;
          max-width: 600px;
          line-height: 1.6;
          margin: 0;
        }

        .results-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          width: 100%;
          max-width: 600px;
          margin: 1.5rem 0;
        }

        .metric-box {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 20px;
          padding: 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          align-items: center;
          justify-content: center;
        }

        .metric-box.highlighted {
          border-color: rgba(56, 189, 248, 0.2);
          background: rgba(2, 132, 199, 0.02);
        }

        .metric-box.reduction-box {
          border-color: rgba(16, 185, 129, 0.2);
          background: rgba(16, 185, 129, 0.02);
        }

        .metric-label {
          font-size: 0.85rem;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: #64748b;
        }

        .metric-value {
          font-size: 1.35rem;
          font-weight: 800;
          color: white;
        }

        .action-buttons {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          width: 100%;
          max-width: 400px;
          margin-top: 1rem;
        }

        .btn-secondary {
          background: transparent;
          border: 1px solid rgba(255, 255, 255, 0.15);
          color: white;
          padding: 1rem 2rem;
          border-radius: 18px;
          font-size: 1rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .btn-secondary:hover {
          background: rgba(255, 255, 255, 0.05);
          border-color: rgba(255, 255, 255, 0.3);
        }

        /* Features / Privacy Grid */
        .features-info-section {
          margin-top: 2rem;
          margin-bottom: 4rem;
        }

        .section-title-wrapper {
          text-align: center;
          margin-bottom: 3.5rem;
        }

        .section-title-wrapper h2 {
          font-size: 2.25rem;
          font-weight: 800;
          margin: 0 0 1rem;
        }

        .section-title-wrapper p {
          color: #9494a0;
          font-size: 1.1rem;
          margin: 0;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
        }

        .feature-item-card {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 24px;
          padding: 2.5rem;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          transition: all 0.3s ease;
          text-align: left;
        }

        .feature-item-card:hover {
          border-color: rgba(56, 189, 248, 0.2);
          background: rgba(2, 132, 199, 0.02);
          transform: translateY(-5px);
        }

        .feature-icon-wrapper {
          width: 50px;
          height: 50px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .red-theme {
          background: rgba(239, 68, 68, 0.1);
          color: #f87171;
        }

        .blue-theme {
          background: rgba(2, 132, 199, 0.1);
          color: #38bdf8;
        }

        .green-theme {
          background: rgba(16, 185, 129, 0.1);
          color: #34d399;
        }

        .feature-item-card h3 {
          font-size: 1.25rem;
          font-weight: 700;
          margin: 0;
          color: white;
        }

        .feature-item-card p {
          font-size: 0.95rem;
          color: #9494a0;
          line-height: 1.6;
          margin: 0;
        }

        /* Detail Footer */
        .detail-footer {
          margin-top: 4rem;
          padding-top: 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          text-align: center;
          color: #475569;
          font-size: 0.85rem;
        }

        @media (max-width: 768px) {
          .content-wrapper {
            padding: 1.5rem 1rem 4rem;
          }

          .app-hero {
            margin-bottom: 2.5rem;
          }

          .app-title {
            font-size: 2.25rem;
          }

          .drop-zone {
            padding: 2.5rem 1rem;
            border-radius: 20px;
          }

          .drop-zone h3 {
            font-size: 1.25rem;
          }

          .drop-desc {
            font-size: 0.95rem;
          }

          .settings-card {
            padding: 1.5rem;
            border-radius: 20px;
          }

          .compression-options {
            gap: 1rem;
          }

          .option-label {
            padding: 1rem;
            border-radius: 16px;
            gap: 0.75rem;
          }

          .option-title {
            font-size: 1rem;
          }

          .option-desc {
            font-size: 0.85rem;
          }

          .results-grid {
            grid-template-columns: 1fr;
            gap: 0.75rem;
          }

          .metric-box {
            padding: 1rem;
            border-radius: 16px;
            flex-direction: row;
            justify-content: space-between;
            width: 100%;
            box-sizing: border-box;
          }

          .metric-value {
            font-size: 1.15rem;
          }

          .success-card {
            padding: 2rem 1.5rem;
            border-radius: 20px;
          }

          .success-card h2 {
            font-size: 1.5rem;
          }

          .success-desc {
            font-size: 0.95rem;
          }

          .btn-primary-action {
            padding: 1rem 1.5rem;
            font-size: 0.95rem;
            border-radius: 14px;
          }
        }
      `}})]})}])}]);