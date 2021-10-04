import{S as L,i as P,s as C,e as y,a as h,b,c as _,n as $,d as g,f as K,g as S,h as j,j as v,m as O,u as T,k as I,l as W,t as w,o as E,p as A,q as Y,r as q,v as Z,w as G,x as J,y as D,z as B,A as Q}from"./vendor.667bd5d5.js";const X=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function e(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerpolicy&&(s.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?s.credentials="include":n.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(n){if(n.ep)return;n.ep=!0;const s=e(n);fetch(n.href,s)}};X();const x="modulepreload",z={},ee="./",R=function(t,e){return!e||e.length===0?t():Promise.all(e.map(o=>{if(o=`${ee}${o}`,o in z)return;z[o]=!0;const n=o.endsWith(".css"),s=n?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${s}`))return;const r=document.createElement("link");if(r.rel=n?"stylesheet":x,n||(r.as="script",r.crossOrigin=""),r.href=o,document.head.appendChild(r),n)return new Promise((f,i)=>{r.addEventListener("load",f),r.addEventListener("error",i)})})).then(()=>t())};function te(l){let t,e,o,n,s,r='<code class="language-js">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"hello world"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code>',f,i,m,p;return{c(){t=y("h1"),t.textContent="Praktikas f\xFCr WBE von Moritz and Falk",e=h(),o=y("p"),o.textContent="Der Code kann ausgef\xFChrt werden indem man darauf klickt:",n=h(),s=y("pre"),f=h(),i=y("p"),i.textContent="\u{1F810} Hier ist die Navigation zu den Praktikas",m=h(),p=y("p"),p.innerHTML='<a href="https://github.com/FalkZ/wbe-praktikas" rel="nofollow">source code</a>',b(s,"class","language-js")},m(c,u){_(c,t,u),_(c,e,u),_(c,o,u),_(c,n,u),_(c,s,u),s.innerHTML=r,_(c,f,u),_(c,i,u),_(c,m,u),_(c,p,u)},p:$,i:$,o:$,d(c){c&&g(t),c&&g(e),c&&g(o),c&&g(n),c&&g(s),c&&g(f),c&&g(i),c&&g(m),c&&g(p)}}}class H extends L{constructor(t){super();P(this,t,null,te,C,{})}}var ne=`<!DOCTYPE html>
<html>
  <head>
    <script src="./console.js"><\/script>
    <script type="module">
        if (!mobileConsole.status.initialized) {
          mobileConsole.init();
        }
  
      //   document.getElementById("openDebug").onclick = () =>
      //     mobileConsole.toggle();
  
        function update(source) {
          const blob = new Blob([source], { type: "text/javascript" });
          const url = URL.createObjectURL(blob);
          import(url).then(({ default: App }) => {});
        }
        window.addEventListener(
          "message",
          (event) => {
            update(event.data);
          },
          false
        );
      <\/script>
    </body>

    <style>
        button[title="Close (destroy) console"]{
            display: none!important;
        }
      /* #openDebug {
        position: fixed;
        bottom: 0;
        right: 0;
      } */
    </style>
  </head>
  <body>
    <!-- <button id="openDebug">\u{1F41E}</button> -->

  
</html>
`;function se(l){let t;return{c(){t=y("iframe"),b(t,"class","Output"),b(t,"title","Rendered REPL"),b(t,"srcdoc",ne)},m(e,o){_(e,t,o),l[2](t)},p:$,i:$,o:$,d(e){e&&g(t),l[2](null)}}}function oe(l,t,e){let{compiled:o}=t,n;function s(f){n.contentWindow.postMessage(f,"*")}function r(f){K[f?"unshift":"push"](()=>{n=f,e(0,n)})}return l.$$set=f=>{"compiled"in f&&e(1,o=f.compiled)},l.$$.update=()=>{l.$$.dirty&3&&n&&o&&s(o)},[n,o,r]}class le extends L{constructor(t){super();P(this,t,oe,se,C,{compiled:1})}}const re=l=>({}),M=l=>({});function ie(l){let t,e,o,n,s,r,f,i;const m=l[2].nav,p=S(m,l,l[1],M);n=new le({props:{compiled:l[0]}});const c=l[2].default,u=S(c,l,l[1],null);return{c(){t=y("div"),e=y("aside"),p&&p.c(),o=h(),j(n.$$.fragment),s=h(),r=y("main"),f=y("div"),u&&u.c(),b(e,"class","svelte-1y4y5yw"),b(f,"class","content svelte-1y4y5yw"),b(r,"class","svelte-1y4y5yw"),b(t,"class","grid svelte-1y4y5yw")},m(a,k){_(a,t,k),v(t,e),p&&p.m(e,null),v(e,o),O(n,e,null),v(t,s),v(t,r),v(r,f),u&&u.m(f,null),i=!0},p(a,[k]){p&&p.p&&(!i||k&2)&&T(p,m,a,a[1],i?W(m,a[1],k,re):I(a[1]),M);const d={};k&1&&(d.compiled=a[0]),n.$set(d),u&&u.p&&(!i||k&2)&&T(u,c,a,a[1],i?W(c,a[1],k,null):I(a[1]),null)},i(a){i||(w(p,a),w(n.$$.fragment,a),w(u,a),i=!0)},o(a){E(p,a),E(n.$$.fragment,a),E(u,a),i=!1},d(a){a&&g(t),p&&p.d(a),A(n),u&&u.d(a)}}}function ae(l,t,e){let{$$slots:o={},$$scope:n}=t,s="";return Y(()=>{[...document.querySelectorAll("pre.language-js")].forEach(r=>{r.addEventListener("click",({target:f})=>{e(0,s=""),setTimeout(()=>{e(0,s=r.textContent)})},!0)})}),l.$$set=r=>{"$$scope"in r&&e(1,n=r.$$scope)},[s,n,o]}class ce extends L{constructor(t){super();P(this,t,ae,ie,C,{})}}function F(l,t,e){const o=l.slice();return o[8]=t[e],o}function U(l){let t;return{c(){t=q("loading...")},m(e,o){_(e,t,o)},d(e){e&&g(t)}}}function ue(l){let t,e,o,n,s=l[1]&&U();var r=l[2];function f(i){return{}}return r&&(e=new r(f()),e.$on("mount",l[7])),{c(){s&&s.c(),t=h(),e&&j(e.$$.fragment),o=Z()},m(i,m){s&&s.m(i,m),_(i,t,m),e&&O(e,i,m),_(i,o,m),n=!0},p(i,m){if(i[1]?s||(s=U(),s.c(),s.m(t.parentNode,t)):s&&(s.d(1),s=null),r!==(r=i[2])){if(e){G();const p=e;E(p.$$.fragment,1,0,()=>{A(p,1)}),J()}r?(e=new r(f()),e.$on("mount",i[7]),j(e.$$.fragment),w(e.$$.fragment,1),O(e,o.parentNode,o)):e=null}},i(i){n||(e&&w(e.$$.fragment,i),n=!0)},o(i){e&&E(e.$$.fragment,i),n=!1},d(i){s&&s.d(i),i&&g(t),i&&g(o),e&&A(e,i)}}}function V(l){let t,e=l[4](l[8])+"",o,n,s,r;function f(){return l[6](l[8])}return{c(){t=y("p"),o=q(e),n=h(),b(t,"class","svelte-65f8ne"),D(t,"active",l[0]===l[8])},m(i,m){_(i,t,m),v(t,o),v(t,n),s||(r=B(t,"click",f),s=!0)},p(i,m){l=i,m&9&&D(t,"active",l[0]===l[8])},d(i){i&&g(t),s=!1,r()}}}function fe(l){let t,e,o,n,s,r,f,i,m,p,c=Object.keys(l[3]),u=[];for(let a=0;a<c.length;a+=1)u[a]=V(F(l,c,a));return{c(){t=y("div"),e=y("h1"),e.textContent="WBE Labs",o=h(),n=y("nav"),s=y("p"),s.textContent="Home",r=h();for(let a=0;a<u.length;a+=1)u[a].c();f=h(),i=y("strong"),i.textContent="Output:",b(e,"class","svelte-65f8ne"),b(s,"class","svelte-65f8ne"),D(s,"active",!l[0]),b(t,"slot","nav")},m(a,k){_(a,t,k),v(t,e),v(t,o),v(t,n),v(n,s),v(n,r);for(let d=0;d<u.length;d+=1)u[d].m(n,null);v(t,f),v(t,i),m||(p=B(s,"click",l[5]),m=!0)},p(a,k){if(k&1&&D(s,"active",!a[0]),k&25){c=Object.keys(a[3]);let d;for(d=0;d<c.length;d+=1){const N=F(a,c,d);u[d]?u[d].p(N,k):(u[d]=V(N),u[d].c(),u[d].m(n,null))}for(;d<u.length;d+=1)u[d].d(1);u.length=c.length}},d(a){a&&g(t),Q(u,a),m=!1,p()}}}function pe(l){let t,e,o;return e=new ce({props:{$$slots:{nav:[fe],default:[ue]},$$scope:{ctx:l}}}),{c(){t=h(),j(e.$$.fragment)},m(n,s){_(n,t,s),O(e,n,s),o=!0},p(n,[s]){const r={};s&2055&&(r.$$scope={dirty:s,ctx:n}),e.$set(r)},i(n){o||(w(e.$$.fragment,n),o=!0)},o(n){E(e.$$.fragment,n),o=!1},d(n){n&&g(t),A(e,n)}}}function me(l,t,e){const o={"./labs/Empty Arrays Demo.svx":()=>R(()=>import("./Empty Arrays Demo.14cdb9df.js"),["assets/Empty Arrays Demo.14cdb9df.js","assets/vendor.667bd5d5.js"]),"./labs/Praktikum 2.svx":()=>R(()=>import("./Praktikum 2.4439340a.js"),["assets/Praktikum 2.4439340a.js","assets/vendor.667bd5d5.js"]),"./labs/Praktikum 3.svx":()=>R(()=>import("./Praktikum 3.ffd3591e.js"),["assets/Praktikum 3.ffd3591e.js","assets/vendor.667bd5d5.js"])},n=c=>c.replace("./labs/","").replace(".svx","");let s,r,f=H;const i=()=>{e(0,s=null)},m=c=>{e(0,s=c)},p=()=>console.log("mount");return l.$$.update=()=>{l.$$.dirty&1&&(o[s]?(e(1,r=!0),o[s]().then(c=>{e(1,r=!1),e(2,f=c.default)})):(e(1,r=!1),e(2,f=H)))},[s,r,f,o,n,i,m,p]}class de extends L{constructor(t){super();P(this,t,me,pe,C,{})}}new de({target:document.getElementById("app")});
