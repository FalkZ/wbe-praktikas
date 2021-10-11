import{S as j,i as L,s as C,e as g,a as y,b as v,c as _,n as w,d as k,f as K,g as I,h as O,j as b,m as A,u as N,k as S,l as B,t as $,o as E,p as D,q as Y,r as W,v as Z,w as G,x as J,y as R,z as q,A as Q,B as X}from"./vendor.6b7f9045.js";const x=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function e(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerpolicy&&(s.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?s.credentials="include":n.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(n){if(n.ep)return;n.ep=!0;const s=e(n);fetch(n.href,s)}};x();const ee="modulepreload",V={},te="./",P=function(t,e){return!e||e.length===0?t():Promise.all(e.map(o=>{if(o=`${te}${o}`,o in V)return;V[o]=!0;const n=o.endsWith(".css"),s=n?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${s}`))return;const a=document.createElement("link");if(a.rel=n?"stylesheet":ee,n||(a.as="script",a.crossOrigin=""),a.href=o,document.head.appendChild(a),n)return new Promise((c,i)=>{a.addEventListener("load",c),a.addEventListener("error",i)})})).then(()=>t())};function ne(l){let t,e,o,n,s,a='<code class="language-js">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"hello world"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code>',c,i,p,m;return{c(){t=g("h1"),t.textContent="Praktikas f\xFCr WBE von Moritz and Falk",e=y(),o=g("p"),o.textContent="Der Code kann ausgef\xFChrt werden indem man darauf klickt:",n=y(),s=g("pre"),c=y(),i=g("p"),i.textContent="\u{1F810} Hier ist die Navigation zu den Praktikas",p=y(),m=g("p"),m.innerHTML='<a href="https://github.com/FalkZ/wbe-praktikas" rel="nofollow">source code</a>',v(s,"class","language-js")},m(f,u){_(f,t,u),_(f,e,u),_(f,o,u),_(f,n,u),_(f,s,u),s.innerHTML=a,_(f,c,u),_(f,i,u),_(f,p,u),_(f,m,u)},p:w,i:w,o:w,d(f){f&&k(t),f&&k(e),f&&k(o),f&&k(n),f&&k(s),f&&k(c),f&&k(i),f&&k(p),f&&k(m)}}}class z extends j{constructor(t){super();L(this,t,null,ne,C,{})}}var se=`<!DOCTYPE html>
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
`;function oe(l){let t;return{c(){t=g("iframe"),v(t,"class","Output"),v(t,"title","Rendered REPL"),v(t,"srcdoc",se)},m(e,o){_(e,t,o),l[2](t)},p:w,i:w,o:w,d(e){e&&k(t),l[2](null)}}}function le(l,t,e){let{compiled:o}=t,n;function s(c){c=c.replace(/__base__/g,window.location.origin+window.location.pathname),n.contentWindow.postMessage(c,"*")}function a(c){K[c?"unshift":"push"](()=>{n=c,e(0,n)})}return l.$$set=c=>{"compiled"in c&&e(1,o=c.compiled)},l.$$.update=()=>{l.$$.dirty&3&&n&&o&&s(o)},[n,o,a]}class re extends j{constructor(t){super();L(this,t,le,oe,C,{compiled:1})}}const ie=l=>({}),H=l=>({});function ae(l){let t,e,o,n,s,a,c,i;const p=l[2].nav,m=I(p,l,l[1],H);n=new re({props:{compiled:l[0]}});const f=l[2].default,u=I(f,l,l[1],null);return{c(){t=g("div"),e=g("aside"),m&&m.c(),o=y(),O(n.$$.fragment),s=y(),a=g("main"),c=g("div"),u&&u.c(),v(e,"class","svelte-1y4y5yw"),v(c,"class","content svelte-1y4y5yw"),v(a,"class","svelte-1y4y5yw"),v(t,"class","grid svelte-1y4y5yw")},m(r,h){_(r,t,h),b(t,e),m&&m.m(e,null),b(e,o),A(n,e,null),b(t,s),b(t,a),b(a,c),u&&u.m(c,null),i=!0},p(r,[h]){m&&m.p&&(!i||h&2)&&N(m,p,r,r[1],i?B(p,r[1],h,ie):S(r[1]),H);const d={};h&1&&(d.compiled=r[0]),n.$set(d),u&&u.p&&(!i||h&2)&&N(u,f,r,r[1],i?B(f,r[1],h,null):S(r[1]),null)},i(r){i||($(m,r),$(n.$$.fragment,r),$(u,r),i=!0)},o(r){E(m,r),E(n.$$.fragment,r),E(u,r),i=!1},d(r){r&&k(t),m&&m.d(r),D(n),u&&u.d(r)}}}function ce(l,t,e){let{$$slots:o={},$$scope:n}=t,s="";return Y(()=>{console.log("updatedClick"),[...document.querySelectorAll("pre.language-js")].forEach(c=>{c.addEventListener("click",({target:i})=>{e(0,s=""),setTimeout(()=>{e(0,s=c.textContent)})},!0)})}),l.$$set=c=>{"$$scope"in c&&e(1,n=c.$$scope)},[s,n,o]}class ue extends j{constructor(t){super();L(this,t,ce,ae,C,{})}}function M(l,t,e){const o=l.slice();return o[10]=t[e],o}function F(l){let t;return{c(){t=W("loading...")},m(e,o){_(e,t,o)},d(e){e&&k(t)}}}function fe(l){let t,e,o,n,s=l[2]&&F();var a=l[3];function c(i){return{}}return a&&(e=new a(c()),e.$on("mount",l[7])),{c(){s&&s.c(),t=y(),e&&O(e.$$.fragment),o=Z()},m(i,p){s&&s.m(i,p),_(i,t,p),e&&A(e,i,p),_(i,o,p),n=!0},p(i,p){if(i[2]?s||(s=F(),s.c(),s.m(t.parentNode,t)):s&&(s.d(1),s=null),a!==(a=i[3])){if(e){G();const m=e;E(m.$$.fragment,1,0,()=>{D(m,1)}),J()}a?(e=new a(c()),e.$on("mount",i[7]),O(e.$$.fragment),$(e.$$.fragment,1),A(e,o.parentNode,o)):e=null}},i(i){n||(e&&$(e.$$.fragment,i),n=!0)},o(i){e&&E(e.$$.fragment,i),n=!1},d(i){s&&s.d(i),i&&k(t),i&&k(o),e&&D(e,i)}}}function U(l){let t,e=l[4](l[10])+"",o,n,s,a;function c(){return l[6](l[10])}return{c(){t=g("p"),o=W(e),n=y(),v(t,"class","svelte-65f8ne"),R(t,"active",l[1]===l[10])},m(i,p){_(i,t,p),b(t,o),b(t,n),s||(a=q(t,"click",c),s=!0)},p(i,p){l=i,p&1&&e!==(e=l[4](l[10])+"")&&Q(o,e),p&3&&R(t,"active",l[1]===l[10])},d(i){i&&k(t),s=!1,a()}}}function pe(l){let t,e,o,n,s,a,c,i,p,m,f=Object.keys(l[0]),u=[];for(let r=0;r<f.length;r+=1)u[r]=U(M(l,f,r));return{c(){t=g("div"),e=g("h1"),e.textContent="WBE Labs",o=y(),n=g("nav"),s=g("p"),s.textContent="Home",a=y();for(let r=0;r<u.length;r+=1)u[r].c();c=y(),i=g("strong"),i.textContent="Output:",v(e,"class","svelte-65f8ne"),v(s,"class","svelte-65f8ne"),R(s,"active",!l[1]),v(t,"slot","nav")},m(r,h){_(r,t,h),b(t,e),b(t,o),b(t,n),b(n,s),b(n,a);for(let d=0;d<u.length;d+=1)u[d].m(n,null);b(t,c),b(t,i),p||(m=q(s,"click",l[5]),p=!0)},p(r,h){if(h&2&&R(s,"active",!r[1]),h&19){f=Object.keys(r[0]);let d;for(d=0;d<f.length;d+=1){const T=M(r,f,d);u[d]?u[d].p(T,h):(u[d]=U(T),u[d].c(),u[d].m(n,null))}for(;d<u.length;d+=1)u[d].d(1);u.length=f.length}},d(r){r&&k(t),X(u,r),p=!1,m()}}}function me(l){let t,e,o;return e=new ue({props:{$$slots:{nav:[pe],default:[fe]},$$scope:{ctx:l}}}),{c(){t=y(),O(e.$$.fragment)},m(n,s){_(n,t,s),A(e,n,s),o=!0},p(n,[s]){const a={};s&8207&&(a.$$scope={dirty:s,ctx:n}),e.$set(a)},i(n){o||($(e.$$.fragment,n),o=!0)},o(n){E(e.$$.fragment,n),o=!1},d(n){n&&k(t),D(e,n)}}}function de(l,t,e){let o={"./labs/Empty Arrays Demo.svx":()=>P(()=>import("./Empty Arrays Demo.6180ae65.js"),["assets/Empty Arrays Demo.6180ae65.js","assets/vendor.6b7f9045.js"]),"./labs/Praktikum 2.svx":()=>P(()=>import("./Praktikum 2.b0decd59.js"),["assets/Praktikum 2.b0decd59.js","assets/vendor.6b7f9045.js"]),"./labs/Praktikum 3.svx":()=>P(()=>import("./Praktikum 3.ff675b8e.js"),["assets/Praktikum 3.ff675b8e.js","assets/vendor.6b7f9045.js"]),"./labs/Praktikum 4.svx":()=>P(()=>import("./Praktikum 4.9f8874cf.js"),["assets/Praktikum 4.9f8874cf.js","assets/vendor.6b7f9045.js"]),"./labs/Praktikum 5.svx":()=>P(()=>import("./Praktikum 5.626ab977.js"),["assets/Praktikum 5.626ab977.js","assets/vendor.6b7f9045.js"])};const n=r=>r.replace("./labs/","").replace(".svx","").replace(/ /g,"_");o=Object.fromEntries(Object.entries(o).map(([r,h])=>[n(r),h]));let s,a=!0,c=z;const i=window.location.hash.replace("#",""),p=o[i];console.log(i,p),p&&(p().then(r=>{e(3,c=r.default),e(1,s=i),e(2,a=!1)}),a=!1);const m=()=>{e(1,s=null),window.location.hash=""},f=r=>{e(1,s=r),window.location.hash=r},u=()=>console.log("mount");return l.$$.update=()=>{l.$$.dirty&3&&(o[s]?(e(2,a=!0),o[s]().then(r=>{e(2,a=!1),e(3,c=r.default)})):(e(2,a=!1),e(3,c=z)))},[o,s,a,c,n,m,f,u]}class _e extends j{constructor(t){super();L(this,t,de,me,C,{})}}new _e({target:document.getElementById("app")});
