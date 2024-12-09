(function(){"use strict";var e={7361:function(e,t,n){var r=n(7203),o=n.n(r),i=n(6848),u=function(){var e=this,t=e._self._c;return t("div",[t("div",{attrs:{id:"app-container"}},[t("keep-alive",[t("router-view")],1)],1)])},a=[];const c=()=>{const e={width:"1",height:"1"},t=1920,n=1080;let r=null;const o=parseFloat(t/n),i=document.getElementById("app-container"),u=()=>{const r=parseFloat(window.innerWidth/window.innerHeight);r>o?(e.width=window.innerHeight*o/t,e.height=window.innerHeight/n,i.style.transform="scale("+e.width+", "+e.height+") translate(-50%, -50%)"):(e.height=window.innerWidth/o/n,e.width=window.innerWidth/t,i.style.transform="scale("+e.width+", "+e.height+") translate(-50%, -50%)")},a=function(){clearTimeout(r),r=setTimeout((function(){u()}),200)},c=function(){window.addEventListener("resize",a)};c(),u()};var f={name:"App",mounted(){c()},methods:{}},s=f,d=n(845),l=(0,d.A)(s,u,a,!1,null,"1bfe2e32",null),p=l.exports,h=n(3518);i["default"].use(h.Ay);var m=new h.Ay.Store({state:{type:1,districtCode:"",iframeUrl:""},getters:{getType(e){return e.type},getDistrictCode(e){return e.districtCode}},mutations:{SET_TYPE:(e,t)=>{e.type=t},SET_DISTRICT_CODE:(e,t)=>{e.districtCode=t},SET_IFRAME_URL:(e,t)=>{e.iframeUrl=t}},actions:{setType:({commit:e},t)=>{e("SET_TYPE",t)},setDistrictCode:({commit:e},t)=>{e("SET_DISTRICT_CODE",t)},setIframeUrl:({commit:e},t)=>{e("SET_IFRAME_URL",t)}},modules:{}}),v=n(6178);i["default"].use(v.Ay);const g=v.Ay.prototype.push;v.Ay.prototype.push=function(e){return g.call(this,e).catch((e=>e))};const y=[{path:"/",name:"Index",component:()=>n.e(864).then(n.bind(n,6704)),meta:{title:"党建大屏"}}],b=new v.Ay({routes:y});var w=b,E=n(3852);n(6171);n(2663),i["default"].config.productionTip=!1,i["default"].prototype.$echarts=E,i["default"].use(o()),new i["default"]({store:m,router:w,render:e=>e(p)}).$mount("#app")}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r].call(i.exports,i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,i){if(!r){var u=1/0;for(s=0;s<e.length;s++){r=e[s][0],o=e[s][1],i=e[s][2];for(var a=!0,c=0;c<r.length;c++)(!1&i||u>=i)&&Object.keys(n.O).every((function(e){return n.O[e](r[c])}))?r.splice(c--,1):(a=!1,i<u&&(u=i));if(a){e.splice(s--,1);var f=o();void 0!==f&&(t=f)}}return t}i=i||0;for(var s=e.length;s>0&&e[s-1][2]>i;s--)e[s]=e[s-1];e[s]=[r,o,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+".883cae84.js"}}(),function(){n.miniCssF=function(e){return"css/"+e+".3ecec60a.css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="gcy_big_screen:";n.l=function(r,o,i,u){if(e[r])e[r].push(o);else{var a,c;if(void 0!==i)for(var f=document.getElementsByTagName("script"),s=0;s<f.length;s++){var d=f[s];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+i){a=d;break}}a||(c=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,n.nc&&a.setAttribute("nonce",n.nc),a.setAttribute("data-webpack",t+i),a.src=r),e[r]=[o];var l=function(t,n){a.onerror=a.onload=null,clearTimeout(p);var o=e[r];if(delete e[r],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(l.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=l.bind(null,a.onerror),a.onload=l.bind(null,a.onload),c&&document.head.appendChild(a)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p=""}(),function(){if("undefined"!==typeof document){var e=function(e,t,r,o,i){var u=document.createElement("link");u.rel="stylesheet",u.type="text/css",n.nc&&(u.nonce=n.nc);var a=function(n){if(u.onerror=u.onload=null,"load"===n.type)o();else{var r=n&&n.type,a=n&&n.target&&n.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+": "+a+")");c.name="ChunkLoadError",c.code="CSS_CHUNK_LOAD_FAILED",c.type=r,c.request=a,u.parentNode&&u.parentNode.removeChild(u),i(c)}};return u.onerror=u.onload=a,u.href=t,r?r.parentNode.insertBefore(u,r.nextSibling):document.head.appendChild(u),u},t=function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===e||i===t))return o}var u=document.getElementsByTagName("style");for(r=0;r<u.length;r++){o=u[r],i=o.getAttribute("data-href");if(i===e||i===t)return o}},r=function(r){return new Promise((function(o,i){var u=n.miniCssF(r),a=n.p+u;if(t(u,a))return o();e(r,a,null,o,i)}))},o={524:0};n.f.miniCss=function(e,t){var n={864:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=r(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))}}}(),function(){var e={524:0};n.f.j=function(t,r){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(n,r){o=e[t]=[n,r]}));r.push(o[2]=i);var u=n.p+n.u(t),a=new Error,c=function(r){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),u=r&&r.target&&r.target.src;a.message="Loading chunk "+t+" failed.\n("+i+": "+u+")",a.name="ChunkLoadError",a.type=i,a.request=u,o[1](a)}};n.l(u,c,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,i,u=r[0],a=r[1],c=r[2],f=0;if(u.some((function(t){return 0!==e[t]}))){for(o in a)n.o(a,o)&&(n.m[o]=a[o]);if(c)var s=c(n)}for(t&&t(r);f<u.length;f++)i=u[f],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(s)},r=self["webpackChunkgcy_big_screen"]=self["webpackChunkgcy_big_screen"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[504],(function(){return n(7361)}));r=n.O(r)})();
//# sourceMappingURL=app.c3f08d16.js.map