function t(){}function n(t){return t()}function e(){return Object.create(null)}function o(t){t.forEach(n)}function r(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function i(t,n,e,o){if(t){const r=u(t,n,e,o);return t[0](r)}}function u(t,n,e,o){return t[1]&&o?function(t,n){for(const e in n)t[e]=n[e];return t}(e.ctx.slice(),t[1](o(n))):e.ctx}function s(t,n,e,o){if(t[2]&&o){const r=t[2](o(e));if(void 0===n.dirty)return r;if("object"==typeof r){const t=[],e=Math.max(n.dirty.length,r.length);for(let o=0;o<e;o+=1)t[o]=n.dirty[o]|r[o];return t}return n.dirty|r}return n.dirty}function a(t,n,e,o,r,c){if(r){const i=u(n,e,o,c);t.p(i,r)}}function f(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let t=0;t<e;t++)n[t]=-1;return n}return-1}function l(t,n){t.appendChild(n)}function d(t,n,e){t.insertBefore(n,e||null)}function p(t){t.parentNode.removeChild(t)}function h(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function $(t){return document.createElement(t)}function g(t){return document.createTextNode(t)}function m(){return g(" ")}function y(){return g("")}function b(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function x(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function _(t,n,e){t.classList[e?"add":"remove"](n)}let v;function k(t){v=t}function E(t){(function(){if(!v)throw new Error("Function called outside component initialization");return v})().$$.after_update.push(t)}const w=[],j=[],A=[],L=[],N=Promise.resolve();let O=!1;function S(t){A.push(t)}let q=!1;const z=new Set;function C(){if(!q){q=!0;do{for(let t=0;t<w.length;t+=1){const n=w[t];k(n),M(n.$$)}for(k(null),w.length=0;j.length;)j.pop()();for(let t=0;t<A.length;t+=1){const n=A[t];z.has(n)||(z.add(n),n())}A.length=0}while(w.length);for(;L.length;)L.pop()();O=!1,q=!1,z.clear()}}function M(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(S)}}const B=new Set;let F;function P(){F={r:0,c:[],p:F}}function T(){F.r||o(F.c),F=F.p}function D(t,n){t&&t.i&&(B.delete(t),t.i(n))}function G(t,n,e,o){if(t&&t.o){if(B.has(t))return;B.add(t),F.c.push((()=>{B.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}}function H(t){t&&t.c()}function I(t,e,c,i){const{fragment:u,on_mount:s,on_destroy:a,after_update:f}=t.$$;u&&u.m(e,c),i||S((()=>{const e=s.map(n).filter(r);a?a.push(...e):o(e),t.$$.on_mount=[]})),f.forEach(S)}function J(t,n){const e=t.$$;null!==e.fragment&&(o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function K(t,n){-1===t.$$.dirty[0]&&(w.push(t),O||(O=!0,N.then(C)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function Q(n,r,c,i,u,s,a,f=[-1]){const l=v;k(n);const d=n.$$={fragment:null,ctx:null,props:s,update:t,not_equal:u,bound:e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(r.context||(l?l.$$.context:[])),callbacks:e(),dirty:f,skip_bound:!1,root:r.target||l.$$.root};a&&a(d.root);let h=!1;if(d.ctx=c?c(n,r.props||{},((t,e,...o)=>{const r=o.length?o[0]:e;return d.ctx&&u(d.ctx[t],d.ctx[t]=r)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](r),h&&K(n,t)),e})):[],d.update(),h=!0,o(d.before_update),d.fragment=!!i&&i(d.ctx),r.target){if(r.hydrate){const t=($=r.target,Array.from($.childNodes));d.fragment&&d.fragment.l(t),t.forEach(p)}else d.fragment&&d.fragment.c();r.intro&&D(n.$$.fragment),I(n,r.target,r.anchor,r.customElement),C()}var $;k(l)}class R{$destroy(){J(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}export{h as A,R as S,d as a,x as b,j as c,p as d,$ as e,i as f,m as g,H as h,Q as i,l as j,f as k,s as l,I as m,t as n,G as o,J as p,E as q,g as r,c as s,D as t,a as u,y as v,P as w,T as x,_ as y,b as z};
